import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { existsSync, readdirSync, statSync, watch, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif']);

const publicUrl = (filePath) => {
  const rel = filePath.slice(resolve('public').length).replace(/\\/g, '/');
  return rel;
};

function assetsManifestPlugin() {
  const assetsDir = join(resolve('public'), 'assets');
  const manifestPath = join(assetsDir, 'manifest.json');

  const generate = () => {
    const manifest = { resume: null, profile: [], projects: {} };

    const resumeDir = join(assetsDir, 'resume');
    if (existsSync(resumeDir)) {
      const files = readdirSync(resumeDir).filter(
        (f) => f.toLowerCase().endsWith('.pdf') && !f.startsWith('.')
      );
      if (files.length > 0) {
        const file = files.sort((a, b) => b.localeCompare(a))[0];
        manifest.resume = {
          url: publicUrl(join(resumeDir, file)),
          downloadName: file,
        };
      }
    }

    const profileDir = join(assetsDir, 'profile');
    if (existsSync(profileDir)) {
      manifest.profile = readdirSync(profileDir)
        .filter((f) => {
          const ext = f.slice(f.lastIndexOf('.')).toLowerCase();
          return IMAGE_EXTENSIONS.has(ext) && !f.startsWith('.');
        })
        .sort((a) => (a.toLowerCase() === 'photo.jpg' || a.toLowerCase() === 'photo.png' ? -1 : 1))
        .map((f) => publicUrl(join(profileDir, f)));
    }

    const projectsDir = join(assetsDir, 'projects');
    if (existsSync(projectsDir)) {
      for (const f of readdirSync(projectsDir)) {
        if (f.startsWith('.') || !statSync(join(projectsDir, f)).isFile()) continue;
        const id = f.slice(0, f.lastIndexOf('.'));
        const url = publicUrl(join(projectsDir, f));
        if (manifest.projects[id]) {
          manifest.projects[id] = [].concat(manifest.projects[id], url);
        } else {
          manifest.projects[id] = url;
        }
      }
    }

    writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  };

  return {
    name: 'assets-manifest',
    configResolved(config) {
      if (config.command !== 'serve') return;
      generate();
      try {
        watch(assetsDir, { recursive: true }, (event, filename) => {
          if (!filename || String(filename).includes('manifest.json')) return;
          generate();
        });
      } catch (err) {
        console.warn('[assets-manifest] file watching unavailable:', err.message);
      }
    },
    buildStart() {
      generate();
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), assetsManifestPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

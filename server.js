import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import express from 'express';

const app = express();
const DIST = resolve('dist');
const port = process.env.PORT || 5000;

app.use(express.static(DIST));

// Health check used by uptime/keep-alive pingers (same idea as Sprintly's /health)
app.get('/health', (_req, res) => res.status(200).json({ status: 'ok' }));

// SPA fallback: unknown extension-less routes render index.html.
// Paths that look like files (or missing /api routes) fall through to a clean 404.
app.get('*', (req, res, next) => {
  const pathname = decodeURI(req.path);
  const hasFileExt = pathname.includes('.') && !pathname.endsWith('/');
  if (hasFileExt || pathname.startsWith('/api') || existsSync(join(DIST, req.path.slice(1)))) {
    next();
    return;
  }
  res.sendFile(join(DIST, 'index.html'));
});

app.listen(port, () => {
  console.log(`Portfolio server running on port ${port}`);
});
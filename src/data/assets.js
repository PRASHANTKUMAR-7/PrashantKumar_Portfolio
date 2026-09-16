import { useEffect, useState } from 'react';

const DEFAULT_RESUME = { url: '/assets/resume/PrashantKumar.pdf', downloadName: 'Resume.pdf' };
const DEFAULT_PROFILE = ['/assets/profile/photo.jpg', '/assets/profile/photo.png'];

let cached = null;
let inflight = null;

export const fetchAssetsManifest = () => {
  if (cached) return Promise.resolve(cached);
  if (!inflight) {
    inflight = fetch('/assets/manifest.json', { cache: 'no-store' })
      .then((res) => (res.ok ? res.json() : {}))
      .catch(() => ({}))
      .then((manifest) => {
        cached = manifest;
        return manifest;
      });
  }
  return inflight;
};

export const getResume = (assets) => assets?.resume || DEFAULT_RESUME;

export const getProfileSources = (assets) =>
  assets?.profile?.length ? assets.profile : DEFAULT_PROFILE;

export const getProjectSources = (assets, id) => {
  const entry = assets?.projects?.[id];
  const fallback = [`/assets/projects/${id}.png`, `/assets/projects/${id}.jpg`];
  if (!entry) return fallback;
  return [].concat(entry, fallback);
};

export const useAssets = () => {
  const [assets, setAssets] = useState(cached);
  useEffect(() => {
    let active = true;
    fetchAssetsManifest().then((manifest) => {
      if (active) setAssets(manifest);
    });
    return () => {
      active = false;
    };
  }, []);
  return assets;
};

const assets = { getResume, getProfileSources, getProjectSources, useAssets };

export default assets;
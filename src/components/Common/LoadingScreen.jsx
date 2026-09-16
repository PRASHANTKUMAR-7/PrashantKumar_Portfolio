import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';

const MIN_DISPLAY_MS = 1400;
const RAMP_MS = 2200;

/**
 * Full-screen loading overlay shown while the page (assets, fonts) is loading.
 * Tracks real `window.load` progress and displays them through a progress bar.
 */
const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const start = performance.now();
    let loadFired = document.readyState === 'complete';
    let finished = false;
    let raf;

    const finish = () => {
      if (finished) return;
      finished = true;
      setProgress(100);
      setExiting(true);
      setTimeout(onComplete, 600);
    };

    const step = (now) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / RAMP_MS);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(Math.min(100, eased * 100)));
      if (loadFired && elapsed >= MIN_DISPLAY_MS) {
        finish();
        return;
      }
      if (!finished) raf = requestAnimationFrame(step);
    };

    const onLoad = () => {
      loadFired = true;
    };

    if (!loadFired) window.addEventListener('load', onLoad);
    raf = requestAnimationFrame(step);
    const fallback = setTimeout(finish, 6000);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('load', onLoad);
      clearTimeout(fallback);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-50 dark:bg-slate-950"
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          <div className="flex flex-col items-center px-6">
            {/* Monogram */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-xl font-bold text-white shadow-lg"
            >
              PK
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mt-5 text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              {personalInfo.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-1 text-sm text-slate-500 dark:text-slate-400"
            >
              {personalInfo.title}
            </motion.p>

            {/* Progress bar */}
            <div className="mt-8 w-64">
              <div className="mb-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Loading portfolio</span>
                <span className="font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                  {progress}%
                </span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <motion.div
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-600"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
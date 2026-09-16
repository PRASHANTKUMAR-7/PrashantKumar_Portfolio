import { useEffect, useRef } from 'react';

/**
 * Returns a ref attached to an element whose `transform: scaleX` drives
 * a fixed top scroll-progress bar (see `.scroll-progress` in index.css).
 */
export const useScrollProgress = () => {
  const barRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return barRef;
};
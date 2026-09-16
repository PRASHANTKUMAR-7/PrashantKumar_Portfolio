import { useEffect, useRef, useState } from 'react';

/**
 * Tracks which page section is currently in view.
 * Returns the id (from `ids`) whose section is closest to the viewport center.
 */
export const useActiveSection = (ids) => {
  const [active, setActive] = useState(ids[0] || '');
  const ticking = useRef(false);

  useEffect(() => {
    const compute = () => {
      ticking.current = false;

      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      let current = ids[0] || '';

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          current = id;
        }
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(compute);
      }
    };

    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids]);

  return active;
};
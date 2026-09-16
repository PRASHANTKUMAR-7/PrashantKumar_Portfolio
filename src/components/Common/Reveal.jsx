import { useEffect, useRef, useState } from 'react';

/**
 * Reveals its children with a subtle fade/slide once they enter the viewport.
 * Honors `prefers-reduced-motion` via CSS (see index.css).
 */
const Reveal = ({ children, className = '', delay = 0, as: Tag = 'div' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass =
    delay === 1
      ? 'reveal-delay-1'
      : delay === 2
      ? 'reveal-delay-2'
      : delay === 3
      ? 'reveal-delay-3'
      : delay === 4
      ? 'reveal-delay-4'
      : '';

  return (
    <Tag
      ref={ref}
      className={`reveal ${delayClass} ${visible ? 'is-visible' : ''} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
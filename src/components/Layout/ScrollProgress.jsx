import { useScrollProgress } from '../../hooks/useScrollProgress';

const ScrollProgress = () => {
  const barRef = useScrollProgress();
  return <div ref={barRef} aria-hidden="true" className="scroll-progress" />;
};

export default ScrollProgress;
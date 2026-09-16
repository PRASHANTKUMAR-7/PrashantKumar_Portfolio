import Reveal from './Reveal';

const SectionHeading = ({ eyebrow, title, description, align = 'center' }) => {
  const alignment =
    align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <Reveal className={`mb-14 flex flex-col gap-4 ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
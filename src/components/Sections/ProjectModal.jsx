import { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, ExternalLink, FileText, Github, X } from 'lucide-react';
import { getProjectSources, useAssets } from '../../data/assets';

export const ProjectPreview = ({ id, title, stack, image }) => {
  const assets = useAssets();
  const candidates = useMemo(() => getProjectSources(assets, id, image), [assets, id, image]);
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setIndex(0);
    setFailed(false);
  }, [candidates]);

  const src = candidates[index];

  if (failed || !src) {
    return (
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-600 p-6 text-center text-white">
        <span aria-hidden="true" className="text-6xl font-bold tracking-tight">
          {title[0]}
        </span>
        <p className="font-mono text-xs uppercase tracking-widest text-indigo-100/90">{stack}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`${title} preview`}
      loading="lazy"
      decoding="async"
      onError={() => (index < candidates.length - 1 ? setIndex(index + 1) : setFailed(true))}
      className="h-full w-full object-cover"
    />
  );
};

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-slate-200 bg-white shadow-2xl sm:rounded-2xl dark:border-slate-700 dark:bg-slate-900">
        <div className="relative h-44 flex-none">
          <ProjectPreview id={project.id} title={project.title} stack={project.stack} image={project.image} />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/50 text-white backdrop-blur transition-colors hover:bg-slate-950/80"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-none border-b border-slate-100 p-6 sm:p-8 dark:border-slate-800">
          <p className="font-mono text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            {project.period} · {project.stack}
          </p>
          <div className="mt-1.5 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
              <p className="mt-0.5 text-sm font-medium text-slate-500 dark:text-slate-400">
                {project.tagline}
              </p>
            </div>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="btn-secondary flex-none !px-4 !py-2"
              >
                <ExternalLink className="h-4 w-4" />
                Live
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source code on GitHub`}
                className="btn-secondary flex-none !px-4 !py-2"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          <p className="leading-relaxed text-slate-600 dark:text-slate-400">
            {project.description}
          </p>

          <h4 className="mt-7 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <FileText className="h-4 w-4" /> Highlights
          </h4>
          <ul className="mt-4 space-y-2.5">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
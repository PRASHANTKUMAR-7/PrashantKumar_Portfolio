import { useState } from 'react';
import { ArrowUpRight, ExternalLink, Github, Sparkles } from 'lucide-react';
import { projects } from '../../data/portfolio';
import Reveal from '../Common/Reveal';
import SectionHeading from '../Common/SectionHeading';
import ProjectModal, { ProjectPreview } from './ProjectModal';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'ai', label: 'AI & Automation' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'mobile', label: 'Mobile' },
];

const ProjectCard = ({ project, index, onSelect }) => (
  <Reveal delay={(index % 2) + 1} className="h-full">
    <article className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
        <ProjectPreview id={project.id} title={project.title} stack={project.stack} image={project.image} />
        {project.featured && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-slate-950/60 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
            <Sparkles className="h-3 w-3 text-amber-300" />
            Featured
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          {project.period} · {project.stack}
        </p>
        <h3 className="mt-1.5 text-lg font-bold tracking-tight">{project.title}</h3>
        <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{project.tagline}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-xs text-slate-500">+{project.technologies.length - 5}</span>
          )}
        </div>
        <div className="mt-auto flex items-center gap-4 pt-5">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            View details
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300"
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
              className="flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  </Reveal>
);

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const [category, setCategory] = useState('all');

  const filtered = projects.filter((project) =>
    category === 'all' ? true : project.categories.includes(category)
  );

  return (
    <section id="projects" className="section">
      <div className="contained">
        <SectionHeading
          eyebrow="Projects"
          title="Work I've built"
          description="Real projects with real outcomes — from production platforms to AI-powered tools and personal experiments."
        />

        {/* Category filter */}
        <Reveal className="mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategory(cat.id)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                  category === cat.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 sm:gap-8">
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={setSelected}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            No projects in this category yet.
          </p>
        )}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default Projects;
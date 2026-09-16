import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/portfolio';
import Reveal from '../Common/Reveal';
import SectionHeading from '../Common/SectionHeading';
import ProjectModal, { ProjectPreview } from './ProjectModal';

const ProjectCard = ({ project, index, onSelect }) => (
  <Reveal delay={index + 1} className="h-full">
    <article className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-800">
        <ProjectPreview id={project.id} title={project.title} stack={project.stack} />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          {project.date} · {project.stack}
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
        <div className="mt-auto pt-5">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            View details
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </article>
  </Reveal>
);

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="contained">
        <SectionHeading
          eyebrow="Projects"
          title="Work I've built"
          description="Real projects with real outcomes — built during my professional experience and independent work."
        />

        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={setSelected}
            />
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default Projects;
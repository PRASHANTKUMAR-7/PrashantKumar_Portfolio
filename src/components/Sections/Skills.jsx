import { Archive, Brain, Braces, Cloud, LayoutTemplate, ServerCog, Users } from 'lucide-react';
import { skillGroups } from '../../data/portfolio';
import Reveal from '../Common/Reveal';
import SectionHeading from '../Common/SectionHeading';

const groupIcons = {
  languages: Braces,
  frontend: LayoutTemplate,
  backend: ServerCog,
  'ai-ml': Brain,
  devops: Cloud,
  testing: Archive,
  soft: Users,
};

const Skills = () => (
  <section id="skills" className="section bg-slate-100/70 dark:bg-slate-900/40">
    <div className="contained">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Skills & technologies"
        description="The languages, frameworks, and tools I use to design, build, and ship software."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = groupIcons[group.id] ?? Braces;
          return (
            <Reveal key={group.id} delay={(index % 3) + 1} className="h-full">
              <div className="card flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{group.label}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{group.description}</p>
                  </div>
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
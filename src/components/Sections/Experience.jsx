import { Briefcase, MapPin } from 'lucide-react';
import { experiences } from '../../data/portfolio';
import Reveal from '../Common/Reveal';
import SectionHeading from '../Common/SectionHeading';

const Experience = () => (
  <section id="experience" className="section">
    <div className="contained">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've built and shipped"
        description="Professional experience building production software and automation."
      />

      <div className="mx-auto max-w-3xl">
        <ol className="relative space-y-10 border-l border-slate-200 pl-6 dark:border-slate-700 sm:pl-8">
          {experiences.map((exp, index) => (
            <li key={exp.id} className="relative">
              {/* Timeline node */}
              <span
                aria-hidden="true"
                className="absolute -left-[31px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-indigo-200 bg-white dark:border-indigo-500/40 dark:bg-slate-950 sm:-left-[39px]"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              </span>

              <Reveal delay={(index % 2) + 1}>
                <article className="card p-6 sm:p-7">
                  <header className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      <p className="mt-0.5 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        {exp.company}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                        {exp.org}
                      </p>
                    </div>
                    <div className="text-right text-xs text-slate-500 dark:text-slate-400">
                      <p className="flex items-center gap-1.5 font-medium">
                        <Briefcase className="h-3.5 w-3.5 text-indigo-500" />
                        {exp.period}
                      </p>
                      <p className="mt-1 flex items-center justify-end gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-indigo-500" />
                        {exp.location}
                      </p>
                    </div>
                  </header>

                  <ul className="mt-5 space-y-2.5">
                    {exp.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default Experience;
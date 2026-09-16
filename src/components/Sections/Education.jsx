import { Award, GraduationCap } from 'lucide-react';
import { education, certifications } from '../../data/portfolio';
import Reveal from '../Common/Reveal';
import SectionHeading from '../Common/SectionHeading';

const Education = () => {
  const item = education[0];

  return (
    <section id="education" className="section bg-slate-100/70 dark:bg-slate-900/40">
      <div className="contained">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          description="Where I earned my computer science foundations."
        />

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Degree */}
          <Reveal>
            <div className="card flex h-full flex-col p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                    B.Tech · {item.period}
                  </p>
                  <h3 className="mt-1 text-xl font-bold tracking-tight">{item.degree}</h3>
                  <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
                    {item.institution}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-500">
                    Affiliated to {item.university}
                  </p>
                </div>
              </div>
              <div className="mt-auto pt-5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/70 bg-emerald-50 px-3.5 py-1.5 text-sm font-semibold text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
                  {item.cgpa}
                </span>
              </div>
            </div>
          </Reveal>

          {/* Certifications */}
          <Reveal delay={1}>
            <div className="card h-full p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                  <Award className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold tracking-tight">Certifications</h3>
              </div>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                Certifications and courses completed across UI, AI, React, Node, and cloud.
              </p>
              <ul className="mt-5 space-y-2.5">
                {certifications.map((cert) => (
                  <li
                    key={`${cert.issuer}-${cert.name}`}
                    className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500"
                    />
                    <span>
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {cert.issuer}
                      </span>{' '}
                      — {cert.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Education;
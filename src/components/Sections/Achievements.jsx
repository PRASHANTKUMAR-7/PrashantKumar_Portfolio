import { CalendarClock, Code2, Medal, Ticket, Trophy } from 'lucide-react';
import { achievements, competitiveStats } from '../../data/portfolio';
import Reveal from '../Common/Reveal';
import SectionHeading from '../Common/SectionHeading';

const icons = [Trophy, Ticket, CalendarClock, Medal];

const Achievements = () => (
  <section id="achievements" className="section">
    <div className="contained">
      <SectionHeading
        eyebrow="Achievements"
        title="Beyond the code"
        description="Competitions, events, and activities I've participated in."
      />

      <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
        {achievements.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <Reveal key={item.title} delay={(index % 2) + 1} className="h-full">
              <article className="card flex h-full items-center gap-4 p-5">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-semibold leading-tight">{item.title}</h3>
                  <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                    {item.context}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* Competitive programming */}
      <Reveal delay={1}>
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="card p-6">
            <h3 className="flex items-center gap-2.5 text-base font-semibold">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <Code2 className="h-5 w-5" />
              </span>
              Competitive programming
            </h3>
            <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
              {competitiveStats.map((stat) => (
                <div key={`${stat.label}-${stat.value}`}>
                  <dd className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                    {stat.value}
                  </dd>
                  <dt className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Achievements;
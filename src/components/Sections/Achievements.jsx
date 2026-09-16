import { CalendarClock, Medal, Ticket, Trophy } from 'lucide-react';
import { achievements } from '../../data/portfolio';
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
    </div>
  </section>
);

export default Achievements;
import { stats } from '../../data/portfolio';
import Reveal from '../Common/Reveal';
import SectionHeading from '../Common/SectionHeading';

const focusAreas = [
  'Production REST APIs',
  'Full-Stack Web Apps',
  'Backend Automation',
  'AI / LLM Tooling',
];

const About = () => (
  <section id="about" className="section">
    <div className="contained">
      <SectionHeading
        eyebrow="About"
        title="Software Developer building production systems"
        description="A concise look at who I am and what I focus on."
      />

      <div className="grid items-start gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="space-y-4 leading-relaxed text-slate-600 dark:text-slate-400">
            <p>
              I'm a Software Developer with hands-on experience shipping production systems — REST
              APIs, backend automation, and full-stack web applications. My work spans founding
              engineering at a start-up and an automation-focused internship at IIT (BHU),
              Varanasi, where I built systems that run in the real world.
            </p>
            <p>
              On the frontend I work with React, TypeScript, Tailwind CSS, and Material UI; on the
              backend with Node.js, Express, and databases like MongoDB and PostgreSQL. I also
              integrate AI and LLM tooling — Gemini, Playwright-driven automation, and speech-to-text
              models — to remove manual effort and improve product experience.
            </p>
            <p>
              I care about clean engineering: structured APIs, tested endpoints, documented
              workflows, and regular design reviews. My focus areas are:
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="space-y-5">
            <div className="flex flex-wrap gap-2.5">
              {focusAreas.map((area) => (
                <span key={area} className="chip">
                  {area}
                </span>
              ))}
            </div>

            <div className="card p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Track record
              </h3>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="order-2 mt-1 block text-xs leading-snug text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </dt>
                    <dd className="order-1 text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
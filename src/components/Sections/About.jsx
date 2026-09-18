import { stats } from '../../data/portfolio';
import Reveal from '../Common/Reveal';
import SectionHeading from '../Common/SectionHeading';

const focusAreas = [
  'Production REST APIs',
  'Full-Stack Web Apps',
  'AI / LLM Automation',
  'Containers & Cloud (ongoing)',
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
              I'm a Computer Science Engineering student (B.Tech, 2026) and software developer
              focused on building meaningful, scalable technology. I've worked as a Founding
              Engineer at Zestro and interned at the Jay Chaudhry Software Innovation Centre, IIT
              (BHU) Varanasi, building AI-powered tools and LLM automation pipelines.
            </p>
            <p>
              I work with React, TypeScript, Node.js, Express, MongoDB, PostgreSQL, Socket.IO, and
              WebRTC, with hands-on experience in payment integration using Stripe. Currently, I'm
              expanding my expertise in Docker, AWS, Kubernetes, OpenShift, and applied AI with
              LangChain.
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
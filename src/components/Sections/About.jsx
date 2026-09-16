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
              I'm a Computer Science Engineering student (B.Tech, graduating 2026) and a passionate
              software developer driven by curiosity and the desire to build meaningful technology.
              I've worked as a Founding Engineer at Zestro and completed an internship at the Jay
              Chaudhry Software Innovation Centre, IIT (BHU) Varanasi, where I built LLM automation
              pipelines and AI-powered tooling.
            </p>
            <p>
              Along the way I've picked up payment integrations (Stripe), real-time systems
              (Socket.IO, WebRTC), and cloud deployment (Render, AWS). On the frontend I work with
              React, TypeScript, Material UI, and Tailwind CSS; on the backend with Node.js,
              Express, MongoDB, and PostgreSQL.
            </p>
            <p>
              Right now I'm deepening my skills in containers and orchestration (Docker,
              Kubernetes, OpenShift) and applied AI (LangChain, Hugging Face, Gemini AI, prompt
              engineering) — building systems where AI can reason, call tools, and act
              autonomously. My focus areas are:
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
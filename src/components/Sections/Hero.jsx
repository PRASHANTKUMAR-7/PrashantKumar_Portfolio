import { useState } from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, heroRoles } from '../../data/portfolio';
import Reveal from '../Common/Reveal';

const Avatar = ({ name, src }) => {
  const [error, setError] = useState(false);
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('');

  return (
    <div className="relative">
      <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-indigo-500/20 via-transparent to-violet-500/20 blur-xl" />
      <div className="relative h-64 w-64 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900 sm:h-72 sm:w-72">
        {src && !error ? (
          <img
            src={src}
            alt={`Portrait of ${name}`}
            onError={() => setError(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
            <span className="text-6xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
              {initials}
            </span>
          </div>
        )}
      </div>

      {/* Floating stat chips (from updateddata.txt) */}
      <div className="absolute -left-6 top-8 hidden rounded-xl border border-slate-200 bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur sm:block dark:border-slate-700 dark:bg-slate-900/95">
        <p className="text-sm font-bold text-slate-900 dark:text-white">20+ APIs</p>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">shipped in production</p>
      </div>
      <div className="absolute -right-6 bottom-10 hidden rounded-xl border border-slate-200 bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur sm:block dark:border-slate-700 dark:bg-slate-900/95">
        <p className="text-sm font-bold text-slate-900 dark:text-white">35%</p>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">latency reduced</p>
      </div>
    </div>
  );
};

const Hero = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36">
      {/* Background décor */}
      <div
        aria-hidden="true"
        className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 right-0 -z-10 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl dark:bg-indigo-500/15"
      />
      <div
        aria-hidden="true"
        className="absolute -left-24 top-1/2 -z-10 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl dark:bg-violet-500/10"
      />

      <div className="contained">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Open to work
              </span>
            </Reveal>

            <Reveal delay={1}>
              <p className="mt-6 text-sm font-medium uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                {heroRoles[0]}
              </p>
            </Reveal>

            <Reveal delay={2}>
              <h1 className="mt-2 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                {personalInfo.firstName}
                <span className="block bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-violet-400">
                  {personalInfo.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={3}>
              <p className="mt-4 font-mono text-sm text-slate-500 dark:text-slate-400">
                {heroRoles.slice(1).join(' · ')}
              </p>
            </Reveal>

            <Reveal delay={3}>
              <p className="mt-6 max-w-xl leading-relaxed text-slate-600 dark:text-slate-400">
                {personalInfo.summary}
              </p>
            </Reveal>

            <Reveal delay={4}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <a
                  href={personalInfo.resumeUrl}
                  download="Prashant_Kumar_Resume.pdf"
                  className="btn-primary"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
                <button type="button" onClick={() => scrollTo('contact')} className="btn-secondary">
                  <Mail className="h-4 w-4" />
                  Get in touch
                </button>
              </div>
            </Reveal>

            <Reveal delay={4}>
              <div className="mt-8 flex items-center gap-3">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="icon-btn"
                >
                  <Github className="h-[18px] w-[18px]" />
                </a>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="icon-btn"
                >
                  <Linkedin className="h-[18px] w-[18px]" />
                </a>
                <a href={`mailto:${personalInfo.email}`} aria-label="Email" className="icon-btn">
                  <Mail className="h-[18px] w-[18px]" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={2} className="flex justify-center lg:justify-end">
            <Avatar name={personalInfo.name} src={personalInfo.profileImage} />
          </Reveal>
        </div>

        <div className="mt-20 flex justify-center">
          <button
            type="button"
            onClick={() => scrollTo('about')}
            aria-label="Scroll to About section"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-500 transition-colors hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
          >
            <ArrowDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
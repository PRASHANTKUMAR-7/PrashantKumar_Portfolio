import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

const Footer = () => {
  const year = new Date().getFullYear();

  const quickLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="contained flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        {/* Brand + tagline */}
        <div className="max-w-sm space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-sm font-bold text-white">
              PK
            </span>
            <span className="font-semibold tracking-tight">{personalInfo.name}</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Software Developer focused on building production systems with React, Node.js, and
            AI-assisted automation.
          </p>
          <div className="flex gap-2">
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
        </div>

        {/* Quick links */}
        <nav className="space-y-3" aria-label="Footer">
          <h3 className="text-sm font-semibold">Quick Links</h3>
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(link.id)}
                  className="text-sm text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold">Get in touch</h3>
          <a
            href={`mailto:${personalInfo.email}`}
            className="block text-sm text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            {personalInfo.email}
          </a>
          <a
            href={personalInfo.phoneHref}
            className="block text-sm text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            {personalInfo.phoneDisplay}
          </a>
          <span className="block text-sm text-slate-500 dark:text-slate-400">
            {personalInfo.location} · Open to opportunities
          </span>
        </div>
      </div>

      <div className="border-t border-slate-200 py-6 dark:border-slate-800">
        <p className="contained text-center text-xs text-slate-400 dark:text-slate-500">
          © {year} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import {
  DatabaseZap,
  KeyRound,
  Sparkles,
  Waypoints,
  Workflow,
} from 'lucide-react';
import {
  SiAmazonwebservices,
  SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLangchain,
  SiMongodb,
  SiN8N,
  SiNodedotjs,
  SiNpm,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRender,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiWebrtc,
} from 'react-icons/si';
import { skills, skillCategories } from '../../data/portfolio';
import Reveal from '../Common/Reveal';
import SectionHeading from '../Common/SectionHeading';

/* ---------- Custom brand / product logos (official or widely recognised marks) ---------- */

const JavaIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.988.602-5.679 1.661-12.753.271-7.943-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0 0-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.525-.114.825-.093.825-.093-.949-.669-6.133 1.313-2.633 1.879 9.537 1.58 17.406-.711 14.97-1.812M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.621-10.522-.566 2.046-.984 3.776-.894 3.776-.894M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.356.074-.516.138-.516.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0 0 .069-.062.091-.118M13.107 0s2.493 2.494-2.365 6.33c-3.897 3.071-3.058 4.814-.024 6.815-3.113-1.757-5.402-4.33-3.659-6.335C10.421 4.384 14.708 3.525 13.107.001M19.204 13.04c4.52 2.982.071 5.554 0 5.554.127.178-2.185.95-3.412 1.059-.796.065-1.034.47-1.034.47.872-.543 6.437-3.179 5.733-6.847-.367-1.922-2.473-3.004-4.992-3.37.012 0 2.134.362 3.705 1.134" />
  </svg>
);

const VSCodeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M23.15 2.587 18.21.21a1.49 1.49 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a1 1 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a1 1 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.49 1.49 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352m-5.146 14.861L10.826 12l7.178-5.448z" />
  </svg>
);

const PlaywrightIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M23.996 7.462c-.056.837-.257 2.135-.716 3.85-.995 3.715-4.27 10.874-10.42 9.227-6.15-1.65-5.407-9.487-4.412-13.201.46-1.716.934-2.94 1.305-3.694.42-.853.846-.289 1.815.523.684.573 2.41 1.791 5.011 2.488s4.706.506 5.583.352c1.245-.219 1.897-.494 1.834.455m-9.807 3.863s-.127-1.819-1.773-2.286c-1.644-.467-2.613 1.04-2.613 1.04Zm4.058 4.539-7.769-2.172s.446 2.306 3.338 3.153c2.862.836 4.43-.98 4.43-.981Zm2.701-2.51s-.13-1.818-1.773-2.286c-1.644-.469-2.612 1.038-2.612 1.038ZM8.57 18.23c-4.749 1.279-7.261-4.224-8.021-7.08C.197 9.831.044 8.832.003 8.188c-.047-.73.455-.52 1.415-.354.677.118 2.3.261 4.308-.28a11.3 11.3 0 0 0 2.41-.956q-.087.295-.17.61c-.433 1.618-.827 4.055-.632 6.426-1.976.732-2.267 2.423-2.267 2.423l2.524-.715c.227 1.002.6 1.987 1.15 2.838zm-4.188-6.298c1.265-.333 1.363-1.631 1.363-1.631l-3.374.888s.745 1.076 2.01.743Z" />
  </svg>
);

/* ---------- Icon registry: brand logos (<Icon>) + concept glyphs (lucide) ---------- */

const ICONS = {
  javascript: SiJavascript,
  python: SiPython,
  typescript: SiTypescript,
  java: JavaIcon,
  html5: SiHtml5,
  css3: SiCss3,
  react: SiReact,
  tailwind: SiTailwindcss,
  node: SiNodedotjs,
  express: SiExpress,
  restapi: Waypoints,
  jwt: KeyRound,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  genai: Sparkles,
  rag: DatabaseZap,
  langchain: SiLangchain,
  aiapi: Workflow,
  socketio: SiSocketdotio,
  webrtc: SiWebrtc,
  playwright: PlaywrightIcon,
  docker: SiDocker,
  aws: SiAmazonwebservices,
  render: SiRender,
  git: SiGit,
  github: SiGithub,
  vscode: VSCodeIcon,
  npm: SiNpm,
  postman: SiPostman,
  n8n: SiN8N,
};

/* Pick a readable glyph colour to sit on top of a solid brand-tinted tile */
const isLight = (hex = '#6366f1') => {
  const n = hex.replace('#', '');
  const r = parseInt(n.slice(0, 2), 16) / 255;
  const g = parseInt(n.slice(2, 4), 16) / 255;
  const b = parseInt(n.slice(4, 6), 16) / 255;
  const lin = (c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b) > 0.38;
};

const SkillCard = ({ skill, category }) => {
  const ref = useRef(null);
  const glowRef = useRef(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 140, damping: 14 });
  const sry = useSpring(ry, { stiffness: 140, damping: 14 });

  const Icon = ICONS[skill.icon] ?? Sparkles;
  const fg = isLight(skill.color) ? '#0f172a' : '#ffffff';

  const handleMove = useCallback(
    (event) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      if (glowRef.current) {
        glowRef.current.style.setProperty('--sx', `${px * 100}%`);
        glowRef.current.style.setProperty('--sy', `${py * 100}%`);
      }
      if (!reducedMotion.current) {
        ry.set((px - 0.5) * 9);
        rx.set((0.5 - py) * 9);
      }
    },
    [rx, ry]
  );

  const handleLeave = useCallback(() => {
    rx.set(0);
    ry.set(0);
  }, [rx, ry]);

  return (
    <motion.div
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 900, willChange: 'transform' }}
      className="h-full"
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ '--sc': skill.color, '--fg': fg }}
        className="skill-card card group relative flex h-full min-h-[5rem] flex-col overflow-hidden"
      >
        <span aria-hidden="true" className="skill-glow" ref={glowRef} />
        <span aria-hidden="true" className="skill-glare" />
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-0.5 opacity-30 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: skill.color }}
        />

        <div className="relative flex flex-1 items-center gap-2.5 p-3 sm:gap-3 sm:p-3">
          <span className={`skill-tile ${skill.darkSafe ? 'dark-auto' : ''}`}>
            <Icon className="h-5 w-5" />
          </span>

          <span className="min-w-0 flex-1">
            <span className="block text-sm font-semibold leading-snug text-slate-800 dark:text-slate-100">
              {skill.name}
            </span>
            <span className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: category.color }}
              />
              {category.label}
            </span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const FilterPill = ({ active, label, count, color, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={active}
    className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-950 ${
      active
        ? 'text-white shadow-sm'
        : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-white'
    }`}
    style={active ? { backgroundColor: color, borderColor: color } : undefined}
  >
    <span
      aria-hidden="true"
      className="h-2 w-2 rounded-full"
      style={{ background: active ? 'rgba(255,255,255,0.9)' : color }}
    />
    {label}
    <span
      className={`rounded-full px-1.5 py-0.5 text-[11px] font-semibold leading-none ${
        active
          ? 'bg-white/20 text-white'
          : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
      }`}
    >
      {count}
    </span>
  </button>
);

const Skills = () => {
  const [active, setActive] = useState('all');
  const activeCategory = skillCategories.find((cat) => cat.id === active) || null;
  const shown = active === 'all' ? skills : skills.filter((skill) => skill.category === active);

  return (
    <section id="skills" className="section bg-slate-100/70 dark:bg-slate-900/40">
      <div className="contained">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Skills & technologies"
          description="The languages, frameworks, and tools I use to design, build, and ship software — every one with its own identity."
        />

        {/* Category filter */}
        <Reveal className="mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <FilterPill
              active={active === 'all'}
              label="All"
              count={skills.length}
              color="#6366f1"
              onClick={() => setActive('all')}
            />
            {skillCategories.map((cat) => (
              <FilterPill
                key={cat.id}
                active={active === cat.id}
                label={cat.label}
                count={skills.filter((skill) => skill.category === cat.id).length}
                color={cat.color}
                onClick={() => setActive(cat.id)}
              />
            ))}
          </div>
        </Reveal>

        {activeCategory && (
          <Reveal className="mb-10 flex items-center justify-center gap-2 text-center text-sm text-slate-600 dark:text-slate-300">
            <span
              aria-hidden="true"
              className="h-2 w-2 flex-shrink-0 rounded-full"
              style={{ background: activeCategory.color }}
            />
            {activeCategory.blurb}
          </Reveal>
        )}

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mx-auto grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4"
        >
          {shown.map((skill, index) => {
            const category = skillCategories.find((cat) => cat.id === skill.category);
            return (
              <Reveal key={skill.id} delay={(index % 4) + 1} className="h-full">
                <SkillCard skill={skill} category={category} />
              </Reveal>
            );
          })}
        </motion.div>

        <p className="mt-10 text-center text-xs text-slate-400 dark:text-slate-500">
          {shown.length} of {skills.length} technologies displayed · hover a card to bring it to life
        </p>
      </div>
    </section>
  );
};

export default Skills;
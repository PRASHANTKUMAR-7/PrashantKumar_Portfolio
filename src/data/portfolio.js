export const personalInfo = {
  name: 'Prashant Kumar',
  firstName: 'Prashant',
  title: 'Software Developer',
  summary:
    'Software Developer with hands-on experience building and shipping production systems – REST APIs, backend automation, and full-stack web applications. Proven ability to design scalable architectures, ship 20+ APIs, cut latency by 35%, and reduce manual effort by 30% through clean engineering and AI-assisted tooling.',
  email: 'prashantk.stu@gmail.com',
  phoneDisplay: '+91 79057 45130',
  phoneHref: 'tel:+917905745130',
  location: 'India',
  profileImage: '/assets/profile/photo.jpg',
  resumeUrl: '/assets/resume/PrashantKumar.pdf',
  githubUrl: 'https://github.com/PRASHANTKUMAR-7',
  linkedinUrl: 'https://www.linkedin.com/in/prashant-kumar-tech',
};

export const heroRoles = [
  'Software Developer',
  'Full-Stack · MERN & PERN',
  'AI-Powered Automation',
];

export const motto = 'Think As a Winner, You Will Always Be a Winner';

export const stats = [
  { value: '20+', label: 'Production APIs shipped' },
  { value: '35%', label: 'Message latency reduced' },
  { value: '30%', label: 'Manual effort cut via automation' },
  { value: '1,000+', label: 'Concurrent users supported' },
];

export const skillGroups = [
  {
    id: 'languages',
    label: 'Languages',
    description: 'Core programming languages across web and mobile.',
    skills: ['JavaScript (ES6)', 'TypeScript', 'Python', 'Java', 'Dart'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    description: 'Building responsive, accessible interfaces.',
    skills: ['React.js', 'Material UI (MUI)', 'Tailwind CSS', 'TanStack Query', 'HTML', 'CSS', 'Flutter'],
  },
  {
    id: 'backend',
    label: 'Backend',
    description: 'APIs, databases, real-time systems, and payments.',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'PostgreSQL', 'SQL', 'Socket.IO', 'WebRTC', 'Stripe', 'JWT & OAuth'],
  },
  {
    id: 'ai-ml',
    label: 'AI / ML & Automation',
    description: 'Shipping AI-assisted features and agentic pipelines.',
    skills: ['Gemini AI Integration', 'LangChain', 'Hugging Face', 'Prompt Engineering', 'LLM-Powered Automation', 'n8n', 'MCP', 'Cursor', 'GitHub Copilot'],
  },
  {
    id: 'devops',
    label: 'DevOps & Cloud',
    description: 'Deployment, containers, and cloud (ongoing).',
    skills: ['Docker', 'Kubernetes', 'OpenShift', 'AWS', 'Render', 'Git'],
  },
  {
    id: 'testing',
    label: 'Testing',
    description: 'Validating reliability before release.',
    skills: ['Postman', 'Playwright', 'Hoppscotch'],
  },
  {
    id: 'soft',
    label: 'Soft Skills',
    description: 'Communication and collaboration.',
    skills: ['Public Speaking', 'Event Coordination', 'Collaboration'],
  },
];

export const experiences = [
  {
    id: 'zestro',
    role: 'Founding Engineer',
    company: 'Zestro',
    org: 'F&B CRM / POS management platform · Start-up',
    location: 'Remote',
    period: '2025 — Present',
    highlights: [
      'Building Zestro, an F&B CRM/POS management app using React, TypeScript, MUI, and MongoDB.',
      'Shipped a solution to a problem raised by the customer, helping a pilot customer manage 400+ orders on the platform.',
      'Fixed a route-transition bug causing redundant API calls, cutting backend server load.',
      'Built the loyalty points feature by integrating Order, Customer, and Loyalty Point schemas in MongoDB, driving a 30% increase in repeat customers at Tattva Cafe.',
      'Collaborated across frontend, backend, and business teams to resolve cross-functional issues.',
      'Raised PRs daily, with 2 PRs/week reviewed by the reporting manager.',
    ],
    technologies: ['React', 'TypeScript', 'Material UI', 'MongoDB'],
  },
  {
    id: 'iit-bhu',
    role: 'Software Engineering Intern',
    company: 'IIT (BHU) Varanasi',
    org: 'Jay Chaudhry Software Innovation Centre · Research internship',
    location: 'Varanasi, India',
    period: 'Jul 2025 — Sep 2025',
    highlights: [
      'Engineered LLM-driven automation with Playwright, streamlining 5+ processes and cutting manual effort by 30%.',
      'Scaled backend automation to 1,000+ data interactions/day, resolving key performance bottlenecks.',
      'Structured APIs and workflows through regular design reviews with senior engineers.',
      'Documented automation workflows and API design decisions to support long-term maintainability.',
      'Optimized data preprocessing workflows to improve pipeline throughput and consistency.',
      'Integrated Hugging Face speech-to-text models to convert user voice input into text for automation workflows.',
    ],
    technologies: ['Python', 'Playwright', 'LLM Automation', 'Hugging Face'],
  },
];

export const projects = [
  {
    id: 'intelliwear',
    title: 'IntelliWear',
    image: '/assets/projects/IntelliWear.png',
    tagline: 'Full-Stack AI E-Commerce Platform',
    period: 'January 2026',
    stack: 'MERN · Stripe · Gemini AI',
    description:
      'An AI-powered e-commerce platform with 20+ REST APIs, secure Stripe checkout, and Gemini AI-driven product recommendations that improved discoverability by ~40%.',
    features: [
      'Engineered 20+ production REST APIs (auth, products, orders, admin), powering the platform\u2019s entire backend operations.',
      'Delivered secure end-to-end payment integration with Stripe, enabling reliable checkout.',
      'Implemented JWT/OAuth authentication with password recovery, securing account access.',
      'Boosted product discoverability by 40% through Gemini AI-powered recommendations and AI-powered search.',
      'Hardened platform reliability by validating all 20+ endpoints through rigorous Postman testing before deployment.',
    ],
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Stripe', 'Gemini AI'],
    categories: ['fullstack', 'ai'],
    github: 'https://github.com/PRASHANTKUMAR-7/IntelliWear',
    featured: true,
  },
  {
    id: 'pulsetalk',
    title: 'PulseTalk',
    image: '/assets/projects/PulseTalk.png',
    tagline: 'Real-Time Chat & Video Application',
    period: 'July 2025',
    stack: 'MERN · Socket.IO · WebRTC',
    description:
      'A real-time chat and video platform enabling live messaging and calls, built on the MERN stack with Socket.IO and WebRTC. Deployed to production on Render.',
    features: [
      'Architected a MERN chat/video platform using Socket.IO and WebRTC for live messaging and calls.',
      'Cut message latency by 35% while scaling to 1,000+ concurrent users.',
      'Built secure Gmail domain-validated authentication and Google OAuth 2.0 (Passport.js) with MongoDB data models.',
      'Deployed the application to production on Render, enabling a live, publicly accessible demo.',
      'Fixed a WebRTC connection-drop bug during video calls, improving call reliability.',
      'Built real-time cross-language message translation, letting users message across languages (e.g., Japanese to French) with support for major international and select regional Indian languages.',
    ],
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.IO', 'WebRTC', 'Passport.js'],
    categories: ['fullstack'],
    github: 'https://github.com/PRASHANTKUMAR-7/PulseTalk',
    liveUrl: 'https://pulsetalk-bkly.onrender.com/',
    featured: true,
  },
  {
    id: 'testweaver',
    title: 'TestWeaver',
    image: '/assets/projects/testweaver.png',
    tagline: 'AI-Powered Testing Platform',
    period: 'Internship · 2025',
    stack: 'MERN · Playwright · Hugging Face · LangChain',
    description:
      'An AI-powered web application testing platform built during my internship at IIT (BHU) — automates browser testing from natural language prompts.',
    features: [
      'Automates browser testing from natural language prompts.',
      'Built with the MERN stack, Playwright, Hugging Face, and LangChain.',
      'JWT-secured REST APIs with Docker-based deployment.',
    ],
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Playwright', 'Hugging Face', 'LangChain', 'Docker'],
    categories: ['fullstack', 'ai'],
  },
  {
    id: 'sprintly',
    title: 'Sprintly',
    image: '/assets/projects/Sprintly_Logo_1.png',
    tagline: 'Kanban-Style Project Board',
    period: 'Personal project',
    stack: 'MERN · OAuth 2.0',
    description:
      'A MERN kanban-style ticket/board app with workspaces, team members, and email notifications — supporting both email/password login and Google OAuth 2.0.',
    features: [
      'Kanban-style ticket board with workspaces and team members.',
      'Email notifications for ticket activity.',
      'Implemented Google OAuth 2.0 login (Passport.js) alongside existing JWT auth without touching the existing email/password flow.',
    ],
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Passport.js', 'JWT'],
    categories: ['fullstack'],
    github: 'https://github.com/PRASHANTKUMAR-7/Sprintly',
    liveUrl: 'https://sprintly-7.onrender.com',
  },
  {
    id: 'globetreker',
    title: 'GlobeTreker',
    image: '/assets/projects/GlobeTreker.png',
    tagline: 'Travel Campground Platform',
    period: 'Personal project',
    stack: 'Node.js · Express · EJS · MongoDB',
    description:
      'A full-stack travel campground platform with user reviews and dynamic EJS rendering.',
    features: [
      'Campground listings with full CRUD operations.',
      'User reviews and ratings.',
      'Dynamic server-side rendering with EJS.',
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'EJS'],
    categories: ['fullstack'],
    github: 'https://github.com/PRASHANTKUMAR-7/GlobeTreker',
    liveUrl: 'https://globetreker.onrender.com',
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    image: '/assets/projects/Weather_App.png',
    tagline: 'React Weather Application',
    period: 'Personal project',
    stack: 'React · REST API',
    description:
      'A modern React weather application with live API data.',
    features: [
      'Live weather data from a public API.',
      'Clean, modern React interface.',
    ],
    technologies: ['React.js', 'REST API'],
    categories: ['frontend'],
    github: 'https://github.com/PRASHANTKUMAR-7/weather-app-react',
    liveUrl: 'https://weather-app-react-jade-beta.vercel.app',
  },
  {
    id: 'golf-site',
    title: 'Golf Site',
    image: '/assets/projects/GolfSite.png',
    tagline: 'Static Golf-Learning Website',
    period: 'Personal project',
    stack: 'HTML · CSS · JavaScript',
    description:
      'A simple and elegant static golf-learning website.',
    features: [
      'Clean, elegant layouts focused on content.',
      'Vanilla HTML, CSS, and JavaScript.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    categories: ['frontend'],
    github: 'https://github.com/PRASHANTKUMAR-7/golf_site',
  },
  {
    id: 'qr-scanner',
    title: 'QR Code Scanner & Generator',
    image: '/assets/projects/Qr_Code.png',
    tagline: 'Flutter Utility App',
    period: 'Personal project',
    stack: 'Dart · Flutter',
    description:
      'A Dart & Flutter app to quickly scan and generate QR codes with a simple, user-friendly interface.',
    features: [
      'Scan QR codes quickly from the camera.',
      'Generate QR codes on demand.',
      'Simple, user-friendly Flutter interface.',
    ],
    technologies: ['Dart', 'Flutter'],
    categories: ['mobile'],
    github: 'https://github.com/PRASHANTKUMAR-7/Flutter_Projects.git',
  },
];

export const education = [
  {
    id: 'utk',
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'Roorkee Institute of Technology',
    university: 'Uttarakhand Technical University',
    cgpa: '7.6 CGPA',
    period: 'Graduating July 2026',
  },
];

export const certifications = [
  { name: 'Build Dynamic User Interfaces (UI) for Websites', issuer: 'Google' },
  { name: 'Introduction to AI', issuer: 'Google' },
  { name: 'Maximize Productivity With AI Tools', issuer: 'Google' },
  { name: 'React Basics', issuer: 'Meta' },
  { name: 'Advanced React', issuer: 'Meta' },
  { name: 'Developing Back-End Apps with Node.js and Express', issuer: 'IBM' },
  { name: 'Flutter and Dart: Developing iOS, Android, and Mobile Apps', issuer: 'IBM' },
  { name: 'Introduction to Containers with Docker, Kubernetes & OpenShift', issuer: 'IBM' },
  { name: 'AWS Cloud Technical Essentials', issuer: 'AWS' },
  { name: 'International Model United Nations', issuer: 'IMUN' },
];

export const achievements = [
  { title: 'TiE Dehradun', context: '3rd place' },
  { title: 'Technomax', context: 'Winner' },
  { title: 'Climate Clock Assembly', context: 'Contributed to an international digital weather record' },
  { title: 'JNNSMEE', context: 'National-level participant' },
  { title: 'IMUN', context: 'Delegate' },
  { title: 'Volleyball Champion', context: 'Sports' },
];

export const competitiveStats = [
  { label: 'HackerRank', value: '3★' },
  { label: 'CodeChef', value: '1★' },
  { label: 'LeetCode', value: '365-day streak' },
  { label: 'CodeChef', value: '100-day streak' },
];
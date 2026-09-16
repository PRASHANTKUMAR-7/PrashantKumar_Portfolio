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
  'Full-Stack Engineer',
  'AI-Assisted Automation',
];

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
    description: 'Core programming languages used daily.',
    skills: ['JavaScript (ES6)', 'TypeScript', 'Python', 'Java', 'Dart'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    description: 'Building responsive, accessible interfaces.',
    skills: ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'Material UI (MUI)', 'TanStack Query'],
  },
  {
    id: 'backend',
    label: 'Backend',
    description: 'APIs, databases, and secure authentication.',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'PostgreSQL', 'SQL', 'JWT & OAuth'],
  },
  {
    id: 'ai-ml',
    label: 'AI / ML Tools',
    description: 'Shipping AI-assisted features and automation.',
    skills: ['Gemini AI Integration', 'Prompt Engineering', 'LLM-Powered Automation', 'Cursor', 'GitHub Copilot'],
  },
  {
    id: 'testing',
    label: 'Testing',
    description: 'Validating reliability before release.',
    skills: ['Postman', 'Playwright'],
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
    company: 'Indian Institute of Technology (BHU), Varanasi',
    org: 'Research internship',
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
    id: 'pulsetalk',
    title: 'PulseTalk',
    tagline: 'Real-Time Chat & Video Application',
    date: 'July 2025',
    stack: 'MERN · Socket.IO · WebRTC',
    description:
      'A real-time chat and video platform enabling live messaging and calls, built on the MERN stack with Socket.IO and WebRTC. Deployed to production on Render for a live, publicly accessible demo.',
    features: [
      'Architected a MERN chat/video platform using Socket.IO and WebRTC for live messaging and calls.',
      'Cut message latency by 35% while scaling to 1,000+ concurrent users.',
      'Built secure Gmail domain-validated authentication and Google OAuth 2.0 (Passport.js) with MongoDB data models.',
      'Deployed the application to production on Render, enabling a live, publicly accessible demo.',
      'Fixed a WebRTC connection-drop bug during video calls, improving call reliability.',
      'Built real-time cross-language message translation, letting users message across languages (e.g., Japanese to French) with support for major international and select regional Indian languages.',
    ],
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.IO', 'WebRTC', 'Passport.js'],
  },
  {
    id: 'intelliwear',
    title: 'IntelliWear',
    tagline: 'Full-Stack E-Commerce Platform',
    date: 'January 2026',
    stack: 'MERN · Stripe · Gemini AI',
    description:
      'A production-grade e-commerce platform with a full REST API suite, secure Stripe checkout, and Gemini AI-powered discovery.',
    features: [
      'Engineered 20+ production REST APIs (auth, products, orders, admin), powering the platform\u2019s entire backend operations.',
      'Delivered secure end-to-end payment integration with Stripe, enabling reliable checkout.',
      'Implemented JWT/OAuth authentication with password recovery, securing account access.',
      'Boosted product discoverability by 40% through Gemini AI-powered recommendations and AI-powered search.',
      'Hardened platform reliability by validating all 20+ endpoints through rigorous Postman testing before deployment.',
    ],
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Stripe', 'Gemini AI'],
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
  'Google UI',
  'Intro to AI',
  'Meta React (Basic & Advanced)',
  'IBM Node + Express',
  'AWS',
  'IMUN Speaking',
];

export const achievements = [
  { title: 'Technomax Winner', context: 'Technical competition' },
  { title: 'TIE Dehradun', context: 'Entrepreneurship event' },
  { title: 'Climate Clock Assembly Event', context: 'Participation' },
  { title: 'Volleyball Champion', context: 'Sports' },
];
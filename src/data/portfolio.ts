import { PersonalInfo, Project, Experience, Education, Skill, BlogPost } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Prashant Kumar",
  title: "Full Stack Developer",
  bio: "Passionate full-stack developer with expertise in modern web technologies. I love creating innovative solutions and bringing ideas to life through clean, efficient code.",
  email: "prashant@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  profileImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
  resumeUrl: "/PrashantKumar.pdf",
  social: {
    github: "https://github.com/prashant",
    linkedin: "https://linkedin.com/in/prashant",
    twitter: "https://twitter.com/prashant",
    instagram: "https://instagram.com/prashant"
  }
};

export const skills: Skill[] = [
  { name: "React", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Next.js", level: 88, category: "frontend" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Python", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 82, category: "backend" },
  { name: "MongoDB", level: 78, category: "backend" },
  { name: "AWS", level: 75, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Git", level: 92, category: "tools" },
  { name: "Figma", level: 65, category: "other" },
  { name: "GraphQL", level: 72, category: "backend" }
];

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    startDate: "2022-01",
    endDate: "Present",
    description: [
      "Led development of microservices architecture serving 1M+ users",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with product team to define technical requirements"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"]
  },
  {
    id: "2",
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    startDate: "2020-06",
    endDate: "2021-12",
    description: [
      "Built responsive web applications using React and Node.js",
      "Designed and implemented RESTful APIs",
      "Optimized database queries improving performance by 40%",
      "Integrated third-party services and payment gateways"
    ],
    technologies: ["React", "Express.js", "MongoDB", "Stripe API"]
  },
  {
    id: "3",
    title: "Frontend Developer",
    company: "WebSolutions Ltd.",
    location: "New York, NY",
    startDate: "2019-01",
    endDate: "2020-05",
    description: [
      "Developed pixel-perfect responsive websites",
      "Collaborated with designers to implement UI/UX designs",
      "Optimized web performance and accessibility",
      "Maintained and updated legacy codebases"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"]
  }
];

export const education: Education[] = [
  {
    id: "1",
    degree: "Bachelor of Science in Computer Science",
    institution: "University of California, Berkeley",
    location: "Berkeley, CA",
    startDate: "2015-08",
    endDate: "2019-05",
    gpa: "3.8/4.0",
    description: "Focused on software engineering, algorithms, and data structures"
  },
  {
    id: "2",
    degree: "Full Stack Web Development Bootcamp",
    institution: "General Assembly",
    location: "San Francisco, CA",
    startDate: "2018-06",
    endDate: "2018-12",
    description: "Intensive 6-month program covering modern web development technologies"
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/prashant/ecommerce-platform",
    featured: true
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team collaboration, and project tracking.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
    liveUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/prashant/task-manager",
    featured: true
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with location-based forecasts, interactive maps, and weather alerts.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    liveUrl: "https://weather-dashboard-demo.com",
    githubUrl: "https://github.com/prashant/weather-dashboard",
    featured: false
  },
  {
    id: "4",
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media metrics with data visualization and reporting features.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["Next.js", "D3.js", "MongoDB", "Express.js"],
    liveUrl: "https://analytics-demo.com",
    githubUrl: "https://github.com/prashant/social-analytics",
    featured: false
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable React Applications",
    excerpt: "Learn best practices for building large-scale React applications that are maintainable and performant.",
    content: "# Building Scalable React Applications\n\nBuilding scalable React applications requires careful planning and adherence to best practices...",
    publishedAt: "2024-01-15",
    tags: ["React", "JavaScript", "Architecture"],
    readTime: 8,
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "2",
    title: "Modern CSS Techniques",
    excerpt: "Explore modern CSS features like Grid, Flexbox, and custom properties to create stunning layouts.",
    content: "# Modern CSS Techniques\n\nCSS has evolved significantly over the years...",
    publishedAt: "2024-01-10",
    tags: ["CSS", "Web Design", "Frontend"],
    readTime: 6,
    image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "3",
    title: "Node.js Performance Optimization",
    excerpt: "Tips and techniques for optimizing Node.js applications for better performance and scalability.",
    content: "# Node.js Performance Optimization\n\nPerformance is crucial for any web application...",
    publishedAt: "2024-01-05",
    tags: ["Node.js", "Performance", "Backend"],
    readTime: 10,
    image: "https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];
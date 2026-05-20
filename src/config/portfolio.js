
export const personal = {
  name: "Griffins",
  fullName: "Griffins Ondeyo",
  title: "Frontend & Full-Stack Developer",
  email: "griffinsshem254@gmail.com",
  location: "Nairobi, Kenya",
  available: true,
  bio: [
    "I'm a frontend-focused developer specialising in React, Next.js, and Tailwind CSS. I build clean, scalable interfaces with strong attention to performance, accessibility, and user experience.",
    "I collaborate well across the stack using Node.js and Python (Flask), delivering production-ready features that feel polished and reliable.",
  ],
  roles: [
    "Frontend Developer",
    "Full-Stack Developer",
    "React Specialist",
    "Next.js Engineer",
    "UI/UX Craftsman",
  ],
  yearsOfExperience: 1,
  projectsCompleted: 20,
  clientsSatisfied: 15,
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/griffins", icon: "Github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/griffins", icon: "Linkedin" },
  { label: "Twitter", href: "https://twitter.com/griffins", icon: "Twitter" },
  { label: "Email", href: "mailto:griffinsshem254@gmail.com", icon: "Mail" },
];

export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React", level: 92, icon: "⚛️" },
      { name: "Next.js", level: 90, icon: "▲" },
      { name: "TypeScript", level: 78, icon: "🔷" },
      { name: "Tailwind CSS", level: 95, icon: "🎨" },
      { name: "Framer Motion", level: 80, icon: "🎞️" },
      { name: "HTML/CSS", level: 97, icon: "🌐" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", level: 75, icon: "🟢" },
      { name: "Python", level: 70, icon: "🐍" },
      { name: "Flask", level: 68, icon: "🔥" },
      { name: "REST APIs", level: 85, icon: "🔗" },
      { name: "PostgreSQL", level: 65, icon: "🐘" },
      // { name: "MongoDB", level: 62, icon: "🍃" },
    ],
  },
  {
    id: "tools",
    label: "Tools & DevOps",
    skills: [
      { name: "Git", level: 88, icon: "🌿" },
      // { name: "Docker", level: 60, icon: "🐳" },
      { name: "Vercel", level: 90, icon: "▲" },
      { name: "Figma", level: 72, icon: "✏️" },
      // { name: "Jest", level: 65, icon: "🧪" },
      { name: "VS Code", level: 95, icon: "💻" },
    ],
  },
];

export const techMarquee = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js",
  "Python", "Flask", "PostgreSQL", "MongoDB", /*"Docker",*/
  "Vercel", "Git", "Figma", "Framer Motion", /*"REST APIs",*/
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory, Stripe payments, and an admin dashboard. Achieved sub-2s load times on 3G.",
    longDescription:
      "Built with Next.js App Router, Prisma ORM, and PostgreSQL. Implements optimistic UI updates, server actions, and edge caching via Vercel.",
    image: "/projects/ecommerce.png",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/griffins/ecommerce",
    featured: true,
    metrics: { performance: "98", users: "2K+", uptime: "99.9%" },
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description:
      "Analytics dashboard with real-time charts, role-based access control, and a white-label theming system for enterprise clients.",
    longDescription:
      "React + Recharts for data visualisation. JWT auth with refresh tokens. Multi-tenant architecture with schema-per-tenant PostgreSQL.",
    image: "/projects/dashboard.png",
    tags: ["React", "Node.js", "JWT", "Recharts", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/griffins/saas-dashboard",
    featured: true,
    metrics: { performance: "95", users: "500+", uptime: "99.7%" },
  },
  {
    id: 3,
    title: "Portfolio CMS",
    description:
      "Headless CMS-powered portfolio with MDX blog, dark mode, and automated OG image generation via Vercel Edge Functions.",
    longDescription:
      "Next.js + Contentlayer for type-safe MDX. Automated social card generation. 100 Lighthouse score across all categories.",
    image: "/projects/portfolio.png",
    tags: ["Next.js", "MDX", "Contentlayer", "Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/griffins/portfolio-cms",
    featured: false,
    metrics: { performance: "100", users: "Personal", uptime: "100%" },
  },
  {
    id: 4,
    title: "Task Management App",
    description:
      "Kanban-style project management tool with drag-and-drop, real-time collaboration via WebSockets, and offline support.",
    longDescription:
      "React DnD Kit for drag-and-drop. Socket.io for presence and live updates. IndexedDB for offline-first capability.",
    image: "/projects/taskapp.png",
    tags: ["React", "Socket.io", "DnD Kit", "IndexedDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/griffins/task-app",
    featured: false,
    metrics: { performance: "93", users: "300+", uptime: "99.5%" },
  },
];


export const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "TechCorp Africa",
    period: "2023 – Present",
    type: "Full-time",
    description:
      "Lead frontend development for a B2B SaaS platform serving 10K+ users. Reduced bundle size by 40 % and improved LCP from 4.2 s to 1.8 s.",
    achievements: [
      "Architected micro-frontend module federation setup",
      "Reduced bundle size by 40 % via code splitting & tree shaking",
      "Improved Lighthouse score from 62 to 97",
      "Mentored 3 junior developers",
    ],
    stack: ["React", "Next.js", "TypeScript", "Tailwind", "AWS"],
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2022 – 2023",
    type: "Contract",
    description:
      "Delivered 12+ client projects spanning e-commerce stores, landing pages, and internal tools. Maintained 5-star client satisfaction.",
    achievements: [
      "Delivered 12 projects on time and under budget",
      "Built a custom headless CMS for a media company",
      "Integrated M-Pesa & Stripe payment gateways",
      "5-star rating across all platforms",
    ],
    stack: ["React", "Node.js", "Python", "Flask", "PostgreSQL"],
  },
  {
    id: 3,
    role: "Junior Frontend Developer",
    company: "StartupKE",
    period: "2021 – 2022",
    type: "Full-time",
    description:
      "Joined as the first frontend hire. Built the company's customer-facing web app from scratch using React and Firebase.",
    achievements: [
      "Built customer portal from zero to production in 3 months",
      "Implemented real-time notifications with Firebase",
      "Established the component library used company-wide",
      "Reduced page load time by 35 %",
    ],
    stack: ["React", "Firebase", "Tailwind", "JavaScript"],
  },
];

export const stats = [
  { label: "Years Experience", value: "1+", suffix: "" },
  { label: "Projects Shipped", value: "5+", suffix: "" },
  { label: "Happy Clients", value: "1+", suffix: "" },
  { label: "Lighthouse Score", value: "97", suffix: "%" },
];

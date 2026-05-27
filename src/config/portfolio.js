
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
  { label: "GitHub", href: "https://github.com/Griffinsshem", icon: "Github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shem-griffins-9111b1389/", icon: "Linkedin" },
  { label: "Twitter", href: "https://x.com/GriffinsShem", icon: "Twitter" },
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
  "Vercel", "Git", "Figma", "Framer Motion", "REST APIs",
];

export const projects = [
  {
  id: 1,
  title: "Carbify - Car Rental Platform",
  description:
    "Modern car rental web application with authentication, vehicle browsing, booking management, and responsive UI built using Next.js 16 and Firebase.",
    
  longDescription:
    "Developed a full-stack inspired car rental platform using Next.js App Router, Firebase Authentication, and Tailwind CSS. Features include secure user authentication, protected booking flow, dynamic car detail pages, persistent booking management with local storage, responsive modern UI, and optimized deployment on Vercel. Implemented dynamic routing, query parameter handling, reusable components, and production-ready deployment workflows.",

  image: "/carbify.png",

  tags: [
    "Next.js 16",
    "React 19",
    "Firebase Auth",
    "Tailwind CSS",
    "Vercel",
    "JavaScript",
    "Responsive Design",
  ],

  liveUrl:
    "https://carbify-lemon.vercel.app/",

  githubUrl:
    "https://github.com/Griffinsshem/Carbify",

  featured: true,

  metrics: {
    performance: "95+",
    pages: "9+",
    uptime: "99.9%",
  },
},
  {
  id: 2,
  title: "UrStyleKE E-Commerce Platform",
  description:
    "Full-stack e-commerce platform with JWT authentication, cart system, order management, and role-based admin product control deployed on Render and Vercel.",

  longDescription:
    "Built using Next.js (App Router) for the frontend and Flask (Python) backend with SQLAlchemy ORM. Implements secure JWT authentication with refresh tokens, protected checkout flow, and persistent cart management using localStorage. Features include order creation, payment simulation flow, product CRUD endpoints, and admin-only controls using is_admin flag migration. Backend deployed on Render with CORS configured for Vercel frontend.",

  image: "/urstyleke.png",

  tags: [
    "Next.js",
    "Flask",
    "JWT",
    "SQLAlchemy",
    "PostgreSQL/SQLite",
    "Flask-CORS",
    "Render",
    "Vercel"
  ],

  liveUrl: "https://urstyleke2.vercel.app/",
  githubUrl: "https://github.com/Griffinsshem/urstyleke2",

  featured: true,

  metrics: {
    performance: "Optimized API responses (<200ms average)",
    users: "Authentication + checkout flow active users",
    uptime: "99%+ Render deployment availability"
  }
},
  {
  "id": 3,
  "title": "SokoMtaani",
  "description": "Architected and led development of a full-stack peer-to-peer marketplace enabling direct buyer–seller transactions, reducing costs and eliminating intermediaries.",
  "longDescription": "Designed and implemented SokoMtaani, a scalable peer-to-peer marketplace platform connecting buyers and sellers directly. Spearheaded full-stack development as Tech Lead, leveraging Next.js for the frontend and Flask for backend services. Integrated secure JWT-based authentication, RESTful API endpoints, and a relational database (SQLite) to ensure robust data management. Deployed frontend on Vercel and backend on Render, achieving 100% uptime and seamless cross-platform performance. Delivered a secure, cost-efficient solution that streamlined transactions and enhanced user trust.",
  "image": "/sokoMtaani.png",
  "tags": ["Next.js", "Flask", "Vercel", "SQLite", "JWT Authentication", "Render"],
  "liveUrl": "https://sokomtaani.vercel.app/",
  "githubUrl": "https://github.com/Griffinsshem/Sokomtaani",
  "featured": true,
  "metrics": {
    "performance": "100",
    "users": "Pilot Deployment",
    "uptime": "100%"
  }
},
  // {
  //   id: 4,
  //   title: "Task Management App",
  //   description:
  //     "Kanban-style project management tool with drag-and-drop, real-time collaboration via WebSockets, and offline support.",
  //   longDescription:
  //     "React DnD Kit for drag-and-drop. Socket.io for presence and live updates. IndexedDB for offline-first capability.",
  //   image: "/projects/taskapp.png",
  //   tags: ["React", "Socket.io", "DnD Kit", "IndexedDB"],
  //   liveUrl: "https://example.com",
  //   githubUrl: "https://github.com/griffins/task-app",
  //   featured: false,
  //   metrics: { performance: "93", users: "300+", uptime: "99.5%" },
  // },
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

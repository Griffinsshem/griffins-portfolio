export const personal = {
  name: "Griffins",
  fullName: "Griffins Ondeyo",
  role: "Frontend / Full-stack Developer",
  location: "Nairobi, Kenya",
  email: "griffinsshem254@gmail.com",
  resume: "/Griffins_Shem_Ondeyo_Resume.pdf",
  portrait: "/griffins.jpg",
  available: true,
  availabilityLabel: "Available for work",
};

export const hero = {
  headline: [
    "Interfaces that feel",
    "as good as they work.",
  ],
  lead:
    "I am a frontend-focused developer in Nairobi building products with React, Next.js and Tailwind CSS, backed by Python and Flask services.",

  cta: { label: "Selected work", href: "#projects" },
};

export const about = {
  statement: "I care about the space between engineering and design.",

  paragraphs: [
    "Most of the decisions that make an interface feel good are not visible in a screenshot. They are the state you forgot to design, the focus ring you kept, the 200ms you took off a transition, the layout that holds at 320px. I build frontend first, then work backwards to the data the screen actually needs.",
    "That means I am usually across the whole stack. I write the React and the Next.js routing, then the Flask endpoints and the schema underneath, because the shape of an API decides how much complexity leaks into the UI.",
  ],

  note:
    "I started out installing networks in Kisumu and studied civil engineering before software. Both were jobs where the thing you built had to survive contact with the real world. I have not shaken the habit.",
};

export const index = [
  { id: "01", label: "Focus", value: "Frontend" },
  { id: "02", label: "Also", value: "Full-stack" },
  { id: "03", label: "Primary stack", value: "React / Next.js" },
  { id: "04", label: "Based in", value: "Nairobi, KE" },
];

export const stack = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "React", primary: true },
      { name: "Next.js", primary: true },
      { name: "TypeScript" },
      { name: "JavaScript", primary: true },
      { name: "Tailwind CSS", primary: true },
      { name: "Framer Motion" },
      { name: "HTML5 / CSS3", primary: true },
      { name: "Responsive design", primary: true },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { name: "Python", primary: true },
      { name: "Flask", primary: true },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs", primary: true },
      { name: "JWT authentication", primary: true },
      { name: "GraphQL" },
      { name: "CORS" },
    ],
  },
  {
    id: "data",
    label: "Data",
    items: [
      { name: "PostgreSQL", primary: true },
      { name: "SQLite", primary: true },
      { name: "MySQL" },
      { name: "SQLAlchemy ORM", primary: true },
      { name: "Firebase Auth" },
    ],
  },
  {
    id: "tools",
    label: "Tooling",
    items: [
      { name: "Git / GitHub", primary: true },
      { name: "Vercel", primary: true },
      { name: "Render", primary: true },
      { name: "Docker" },
      { name: "Linux / WSL", primary: true },
      { name: "CI/CD" },
      { name: "Figma" },
    ],
  },
];

export const projects = [
  {
    id: "sokomtaani",
    index: "01",
    title: "SokoMtaani",
    tagline: "A peer-to-peer marketplace that puts buyers and sellers in direct contact.",
    year: "2025",
    role: "Tech lead, full-stack",
    context: "Moringa School capstone",

    problem:
      "Neighbourhood trade in Kenya runs through informal groups and resellers, so buyers pay a margin to someone who never touches the product. The brief was to remove that layer without asking either side to trust a stranger blindly.",

    build:
      "Next.js frontend against a Flask API, with JWT authentication and refresh tokens guarding every write. Listings, sellers and orders sit in a relational schema through SQLAlchemy, so a seller's inventory and a buyer's order history stay consistent. I led the split between the two codebases and owned the auth flow, the REST contract and the deployment pipeline.",

    outcome:
      "Shipped and running: the frontend on Vercel, the API on Render, with CORS and environment configuration handled per environment. The product decisions I would revisit are the SQLite choice, which is right for a pilot and wrong for concurrent sellers, and the lack of an escrow step.",

    tech: ["Next.js", "Flask", "SQLAlchemy", "SQLite", "JWT", "Vercel", "Render"],
    image: "/sokoMtaani.png",
    width: 1600,
    height: 740,
    live: "https://sokomtaani.vercel.app/",
    source: "https://github.com/Griffinsshem/Sokomtaani",
    layout: "full",
  },

  {
    id: "urstyleke",
    index: "02",
    title: "UrStyleKE",
    tagline: "A fashion storefront with a real checkout path and an admin behind it.",
    year: "2025",
    role: "Solo, full-stack",
    context: "Personal project",

    problem:
      "Most portfolio e-commerce demos stop at a product grid. I wanted the parts that are actually hard: an authenticated cart that survives a refresh, an order that exists server-side, and a way to manage the catalogue without touching the database by hand.",

    build:
      "Next.js App Router frontend, Flask and SQLAlchemy backend. JWT with refresh tokens, a cart persisted to localStorage and reconciled on sign-in, order creation, a simulated payment step, and product CRUD gated behind an is_admin flag added by migration.",

    outcome:
      "Frontend on Vercel, API on Render with CORS scoped to the frontend origin. The payment step is deliberately a simulation rather than a live gateway, and is labelled as such in the UI.",

    tech: ["Next.js", "Flask", "SQLAlchemy", "PostgreSQL", "JWT", "Render", "Vercel"],
    image: "/urstyleke.png",
    width: 1901,
    height: 886,
    live: "https://urstyleke2.vercel.app/",
    source: "https://github.com/Griffinsshem/urstyleke2",
    layout: "split",
  },

  {
    id: "carbify",
    index: "03",
    title: "Carbify",
    tagline: "Car rental booking, from browse to confirmed reservation.",
    year: "2025",
    role: "Solo, frontend-led",
    context: "Personal project",

    problem:
      "Booking flows break at the seams: the route that loses your filters, the protected page that flashes before it redirects, the reservation that vanishes on refresh. This one was an exercise in getting those seams right.",

    build:
      "Next.js 16 App Router with dynamic vehicle routes and query-parameter filtering, Firebase Authentication guarding the booking path, and reservations persisted locally so a refresh mid-flow does not cost the user their selection. Components are shared across the browse, detail and booking screens rather than duplicated.",

    outcome:
      "Deployed on Vercel. Firebase handles identity, which kept the surface small and let the work stay where it mattered, in the routing and the interface.",

    tech: ["Next.js 16", "React 19", "Firebase Auth", "Tailwind CSS", "Vercel"],
    image: "/carbify.png",
    width: 1901,
    height: 877,
    live: "https://carbify-lemon.vercel.app/",
    source: "https://github.com/Griffinsshem/Carbify",
    layout: "offset",
  },
];

export const timeline = [
  {
    id: "devops-course",
    period: "2026 - In progress",
    year: "2026",
    role: "Master DevOps with AWS, Docker, Kubernetes, GCP, GitHub Actions, ArgoCD, GitOps, Terraform, Monitoring & AI (in progress)",
    org: "Udemy",
    place: "Self-paced",
    description:
      "Working through a 64-hour DevOps course covering containers, CI/CD with Jenkins and GitHub Actions, Terraform, and deployment on AWS and GCP. Listed here because it is current, not because it is finished.",
    tags: ["Docker", "Kubernetes", "Terraform", "AWS", "CI/CD"],
  },
  {
    id: "independent",
    period: "2025 - Present",
    year: "2025",
    role: "Frontend / Full-stack development",
    org: "Independent projects",
    place: "Nairobi, Kenya",
    description:
      "Designing and shipping full-stack web applications end to end: interface, API, schema and deployment. Carbify and UrStyleKE came out of this period.",
    tags: ["Next.js", "React", "Flask", "PostgreSQL"],
  },
  {
    id: "moringa",
    period: "May 2025 - Oct 2025",
    year: "2025",
    role: "Certificate in Software Engineering",
    org: "Moringa School",
    place: "Nairobi, Kenya",
    description:
      "Full-time software engineering programme. Built SokoMtaani as the capstone, working as tech lead across the frontend and the Flask API. Certified November 2025.",
    tags: ["JavaScript", "Python", "React", "Flask"],
  },
  {
    id: "navid",
    period: "Feb 2022 - May 2023",
    year: "2022",
    role: "Junior Site Monitor",
    org: "Navid Construction Limited",
    place: "Nairobi, Kenya",
    description:
      "Ran daily site operations: quality inspections, crew scheduling, equipment reporting and the documentation trail behind all of it. Safety compliance was not a checkbox, it was the job.",
    tags: ["Quality control", "Coordination", "Reporting"],
  },
  {
    id: "bambanet",
    period: "Jan 2018 - Dec 2019",
    year: "2018",
    role: "Junior Network Technician",
    org: "Bambanet",
    place: "Kisumu, Kenya",
    description:
      "Network installation, configuration and maintenance, plus the customer support that comes with it. First job where I had to explain a technical fault to someone who only cared that it worked again.",
    tags: ["Networking", "Support", "Troubleshooting"],
  },
  {
    id: "tuk",
    period: null,
    year: null,
    role: "Diploma in Civil Engineering",
    org: "Technical University of Kenya",
    place: "Nairobi, Kenya",
    description:
      "Structural thinking, tolerances, and the habit of designing for the load you will actually get rather than the one you hope for.",
    tags: [],
  },
];

export const contact = {
  statement: "Have something worth building?",
  lead:
    "Open to frontend and full-stack roles, remote or in Nairobi, and to freelance work with a clear brief.",
  cta: "Let's talk",
};

export const social = [
  {
    id: "github",
    label: "GitHub",
    handle: "Griffinsshem",
    href: "https://github.com/Griffinsshem",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "shem-griffins",
    href: "https://www.linkedin.com/in/shem-griffins-9111b1389/",
  },
  {
    id: "x",
    label: "X",
    handle: "@GriffinsShem",
    href: "https://x.com/GriffinsShem",
  },
  {
    id: "email",
    label: "Email",
    handle: personal.email,
    href: `mailto:${personal.email}`,
  },
];

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const site = {
  url: "https://griffins-portfolio.vercel.app",
  title: `${personal.fullName} - ${personal.role}`,
  description:
    "Griffins Ondeyo is a frontend-focused developer in Nairobi, Kenya, building interfaces with React, Next.js and Tailwind CSS, backed by Python and Flask services.",
  footerLine: "Built in Nairobi by Griffins Shem Ondeyo.",
};

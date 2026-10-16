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
      { name: "TypeScript", primary: true },
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
      { name: "Neon" },
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

/* --------------------------------------------------------------------------
   WORK COPY
   Headings for the homepage rail and the /work index. They live here rather
   than in the components because a hardcoded one already went stale: the
   section read "Three things I built" for a while after ClinicFlow was
   added. Neither counts, so adding a fifth project needs no edit here.
   -------------------------------------------------------------------------- */

export const work = {
  heading: "What I built, and what I would change.",
  indexHeading: "The work, in detail.",
  indexLead:
    "Each one is a full case study: the problem, the decisions, and the parts I would do differently.",
};

export const projects = [
  {
    id: "kitengela-marines",
    index: "01",
    title: "Kitengela Marines FC",
    tagline: "The club's website, and the admin that keeps it true.",
    year: "2026",
    role: "Solo, full-stack",
    context: "Built for Kitengela Marines FC, Kajiado County",

    problem:
      "Most small-club sites die the week after launch, when whoever built them stops updating them. The hard part was never the pages. It was making every fixture, squad, result and photograph something the club could change itself on a Sunday evening — without a developer, without a terminal, and without being able to break anything that matters.",

    build: [
      "Permissions are capabilities scoped per team, not roles checked in routes. A coach of the women's side cannot touch the men's squad, and the check lives in one place rather than being re-decided at every endpoint. That cost a layer of indirection before anything could be built on top of it.",
      "The audit log is written by a database session listener rather than by the routes, so no endpoint can forget to record a change. It means the log cannot be bypassed, and it means the writes are harder to reason about when something unexpected appears in it.",
      "Uploads are re-encoded rather than stored as sent, which strips the GPS coordinates phones embed in match-day photographs. Slower uploads, and a dependency on image tooling in production.",
      "The front end distinguishes “nothing announced yet” from “the server is not answering”. Telling supporters the club has no fixtures because the API is down would be a lie, so every fetch returns a reason and every page has two empty states instead of one. Twice the states to write, and the only reason the site reads honestly on a free tier that sleeps.",
      "Every kick-off is sent with an explicit +03:00 offset and displayed in Nairobi time. A form that sends a bare time tells every supporter the wrong hour.",
      "Deleting is refused rather than cascaded. A photograph in use, a category with articles, a player with match records — the API says what is in the way instead of quietly taking related data with it. More friction for the club, and nothing disappears by accident.",
    ],

    outcome: [
      "Live, with the club publishing its own news, squads, fixtures, results and photography. Twenty-three tables, 232 backend tests. The club has needed me for nothing since the content went in.",
      "What I'd change: the API sleeps on a free tier, so the first visitor after a quiet spell waits. Loading skeletons and a patient retry make that survivable rather than solved — the real fix costs money, not code. And I'd configure database constraint naming from the first migration rather than hand-correcting three of them later.",
    ],

    tech: ["Next.js 16", "React 19", "TypeScript", "Flask 3", "PostgreSQL", "Cloudinary"],
    image: "/kitengela-marines.png",
    width: 3200,
    height: 1480,
    live: "https://kitengela-marines.vercel.app/",
    source: "https://github.com/Griffinsshem/kitengela-marines",
  },
  {
    id: "clinicflow",
    index: "02",
    title: "ClinicFlow",
    tagline: "Appointment and follow-up management for small clinics still tracking return visits on paper.",
    year: "2026",
    role: "Solo, full-stack",
    context: "Personal project, AI-paired build",

    problem:
      "Small clinics lose patients between visits, not through negligence: someone is told to come back in six weeks, it goes in a diary, and nobody reopens that page. Storing appointments is easy; making a commitment resurface on its own, on the right day, without anyone remembering to look, is the actual problem. The second was multi-tenancy. Several clinics share one deployment, and a bug that leaks one clinic's patients into another's dashboard is a data breach, not a display glitch.",

    build:
      "Tenant isolation lives in the schema rather than the query layer. Each patient carries a UNIQUE (id, clinic_id) constraint, and appointments and follow-ups reference that pair through composite foreign keys, so Postgres rejects any row whose clinic_id disagrees with its patient's even if the application code is wrong. Query scoping is the second layer, and cross-clinic access returns 404 rather than 403 so the ID space cannot be probed. Auth uses httpOnly cookies behind a server-side proxy: the JWT is set by a Next.js route handler and never reaches client JavaScript, which costs a proxy layer and CSRF handling but means an XSS bug anywhere in the dependency tree cannot exfiltrate a session. Overdue state is derived per request from the follow-up date in the clinic's timezone, never stored, because a stored flag goes stale at midnight and needs a cron job to stay honest.",

    outcome:
      "Shipped and deployed: Next.js on Vercel, Flask on Render, Postgres on Neon, with 99 backend tests covering authentication, validation and tenant isolation. The full workflow runs end to end in production, from registering a clinic to booking the visit after a completed follow-up. What I would change: the frontend has no automated tests, and two responsive layout bugs reached production before I caught them by resizing a browser, which is exactly what a component test would have caught first.",

    tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "Flask", "SQLAlchemy", "PostgreSQL", "Vercel", "Render", "Neon"],
    image: "/clinicflow.png",
    width: 2379,
    height: 1101,
    live: "https://clinicflow-mu-nine.vercel.app",
    source: "https://github.com/Griffinsshem/clinicflow",
  },
  {
    id: "propflow",
    index: "03",
    title: "PropFlow",
    tagline: "A maintenance tracker that takes a repair from a tenant's report to a closed work order.",
    year: "2026",
    role: "Solo, full-stack",
    context: "Personal project",

    problem:
      "Four kinds of people share every request, and each may see only their part: a tenant their own repairs, a contractor only their jobs, a manager only their buildings. The hard part was making that true on every request rather than in the interface, keeping one honest history when two people change the same record at once, and opening a public demo to strangers without letting them email anyone, see each other, or leave anything behind.",

    build:
      "Roles are enforced by the API from a single permission matrix, so the frontend can never be the only guard; the cost was writing every query to scope by organization, property and role. The browser talks only to a Next.js proxy holding a shared secret, which closes the API to everyone else; that extra hop later broke rate limiting, because counting proxy hops recorded Cloudflare's address instead of the visitor's, and the fix was a signed header of our own. Concurrent edits carry a version and are shown to the second editor instead of being overwritten, which meant a conflict screen for every form. Photos go straight to Cloudflare R2 through short-lived signed links, keeping files out of the API at the price of CORS and CSP rules that had to match exactly. The demo builds each visitor a private sandbox through the real services; because the audit log is append-only, demos must never write to it, or they could never be deleted.",

    outcome:
      "Shipped at no cost on Vercel, Render and Neon, with hourly clean-up on GitHub Actions, 368 API tests, 76 unit tests and 43 browser journeys on every change, and 21 decision records. Free hosting shaped more than expected: no background worker, an API that sleeps, and blocked email ports. I'd buy a domain from the start, since emails still arrive from a relay address and sometimes land in Promotions; design for phones from the first screen instead of retrofitting a menu; and add the formatting check to CI on day one rather than after a 51-file cleanup.",

    tech: ["Next.js 16", "TypeScript", "Flask", "PostgreSQL", "Redis", "Cloudflare R2", "Playwright"],
    image: "/propflow.png",
    width: 3200,
    height: 1480,
    live: "https://propflow-omega-tawny.vercel.app/",
    source: "https://github.com/Griffinsshem/propflow",
  },
  {
    id: "sokomtaani",
    index: "04",
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
  },

  {
    id: "urstyleke",
    index: "05",
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
  },

  {
    id: "carbify",
    index: "06",
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

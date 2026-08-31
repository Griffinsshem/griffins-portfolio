"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { projects } from "@/config/portfolio";
import { revealUp, revealImage, stagger, viewportOnce, reveal } from "@/lib/motion";

function CaseBlock({ label, children }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="meta text-faint">{label}</p>
      <p className="text-[15px] leading-relaxed text-muted">{children}</p>
    </div>
  );
}

function ProjectMedia({ project, priority }) {
  return (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.title}, open the live site`}
      className="group relative block overflow-hidden bg-surface-raised"
    >
      <Image
        src={project.image}
        alt={`${project.title} interface`}
        width={project.width}
        height={project.height}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
        className="w-full transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.02]"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-4 bg-ink px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-invert opacity-0 transition-opacity duration-200 ease-[var(--ease-out)] group-hover:opacity-100"
      >
        View
      </span>
    </a>
  );
}

function ProjectHeader({ project }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span className="meta text-faint">{project.index}</span>
        <h3 className="font-display text-title text-ink">{project.title}</h3>
      </div>

      <p className="max-w-[42ch] text-lead text-ink">{project.tagline}</p>

      <dl className="flex flex-wrap gap-x-8 gap-y-2">
        <div className="flex gap-2">
          <dt className="meta text-faint">Role</dt>
          <dd className="meta text-muted">{project.role}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="meta text-faint">Year</dt>
          <dd className="meta text-muted">{project.year}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="meta text-faint">Context</dt>
          <dd className="meta text-muted">{project.context}</dd>
        </div>
      </dl>
    </div>
  );
}

function ProjectFooter({ project }) {
  return (
    <div className="flex flex-col gap-5 border-t border-line pt-5">
      <ul className="flex flex-wrap gap-x-4 gap-y-2">
        {project.tech.map((t) => (
          <li key={t} className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
            {t}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-x-8 gap-y-3">
        <a href={project.live} target="_blank" rel="noopener noreferrer"
           className="link inline-flex items-center gap-1.5 text-[14px] text-ink hover:text-accent">
          Live site <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
        </a>
        <a href={project.source} target="_blank" rel="noopener noreferrer"
           className="link inline-flex items-center gap-1.5 text-[14px] text-muted hover:text-accent">
          Source <GithubLogo size={14} weight="regular" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

function ProjectFull({ project, priority }) {
  const reduce = useReducedMotion();
  return (
    <article className="grid-12 gap-y-8">
      <motion.div className="col-span-12 lg:col-span-7" {...reveal(reduce, revealImage)}>
        <ProjectHeader project={project} />
      </motion.div>
      <motion.div className="col-span-12 mt-2" {...reveal(reduce, revealImage)}>
        <ProjectMedia project={project} priority={priority} />
      </motion.div>
      <motion.div
        className="col-span-12 grid gap-x-8 gap-y-8 md:grid-cols-3"
        variants={stagger(0.08)} initial={reduce ? false : "hidden"}
        whileInView="visible" viewport={viewportOnce}
      >
        <motion.div variants={revealUp}><CaseBlock label="Problem">{project.problem}</CaseBlock></motion.div>
        <motion.div variants={revealUp}><CaseBlock label="What I built">{project.build}</CaseBlock></motion.div>
        <motion.div variants={revealUp}><CaseBlock label="Outcome">{project.outcome}</CaseBlock></motion.div>
      </motion.div>
      <div className="col-span-12"><ProjectFooter project={project} /></div>
    </article>
  );
}

function ProjectSplit({ project }) {
  const reduce = useReducedMotion();
  return (
    <article className="grid-12 items-start gap-y-10">
      <motion.div className="col-span-12 lg:col-span-7" {...reveal(reduce, revealImage)}>
        <ProjectMedia project={project} />
      </motion.div>
      <motion.div
        className="col-span-12 flex flex-col gap-8 lg:col-span-5 lg:pl-4"
        variants={stagger(0.08)} initial={reduce ? false : "hidden"}
        whileInView="visible" viewport={viewportOnce}
      >
        <motion.div variants={revealUp}><ProjectHeader project={project} /></motion.div>
        <motion.div variants={revealUp}><CaseBlock label="Problem">{project.problem}</CaseBlock></motion.div>
        <motion.div variants={revealUp}><CaseBlock label="What I built">{project.build}</CaseBlock></motion.div>
        <motion.div variants={revealUp}><CaseBlock label="Outcome">{project.outcome}</CaseBlock></motion.div>
        <motion.div variants={revealUp}><ProjectFooter project={project} /></motion.div>
      </motion.div>
    </article>
  );
}

function ProjectOffset({ project }) {
  const reduce = useReducedMotion();
  return (
    <article className="grid-12 items-start gap-y-10">
      <motion.div className="col-span-12 flex flex-col gap-8 lg:col-span-4" {...reveal(reduce, revealUp)}>
        <ProjectHeader project={project} />
        <CaseBlock label="Problem">{project.problem}</CaseBlock>
      </motion.div>
      <motion.div className="col-span-12 lg:col-span-7 lg:col-start-6" {...reveal(reduce, revealImage)}>
        <ProjectMedia project={project} />
      </motion.div>
      <motion.div
        className="col-span-12 grid gap-x-8 gap-y-8 md:grid-cols-2 lg:col-span-7 lg:col-start-6"
        variants={stagger(0.08)} initial={reduce ? false : "hidden"}
        whileInView="visible" viewport={viewportOnce}
      >
        <motion.div variants={revealUp}><CaseBlock label="What I built">{project.build}</CaseBlock></motion.div>
        <motion.div variants={revealUp}><CaseBlock label="Outcome">{project.outcome}</CaseBlock></motion.div>
      </motion.div>
      <div className="col-span-12 lg:col-span-7 lg:col-start-6"><ProjectFooter project={project} /></div>
    </article>
  );
}

const LAYOUTS = { full: ProjectFull, split: ProjectSplit, offset: ProjectOffset };

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="shell section">
      <div className="grid-12 gap-y-10">
        <div className="col-span-12 md:col-span-3">
          <p className="meta md:sticky md:top-28"><span className="text-faint">03</span> Work</p>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 id="projects-heading" className="font-display text-title max-w-[18ch] text-ink">
            Three things I built, and what I would change.
          </h2>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-24 md:mt-24 md:gap-36">
        {projects.map((project, i) => {
          const Layout = LAYOUTS[project.layout] ?? ProjectFull;
          return <Layout key={project.id} project={project} priority={i === 0} />;
        })}
      </div>
    </section>
  );
}

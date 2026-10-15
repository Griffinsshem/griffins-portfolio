"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { revealUp, revealImage, stagger, viewportOnce, reveal } from "@/lib/motion";

/* ==========================================================================
   CASE STUDY

   One project, given the room the homepage cannot spare: the screenshot at
   full width, metadata as a definition list, then problem, build and
   outcome in three columns. Entrance motion runs on mount rather than on
   scroll, because the header is above the fold on arrival.
   ========================================================================== */

function Block({ label, children }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="meta text-faint">{label}</p>
      <p className="prose-measure text-[15px] leading-relaxed text-muted">{children}</p>
    </div>
  );
}

export default function CaseStudy({ project, prev, next }) {
  const reduce = useReducedMotion();

  return (
    <article className="shell pb-24 pt-32 md:pb-32 md:pt-40">
      <Link href="/work" className="link meta inline-flex items-center gap-2 text-muted hover:text-accent">
        <ArrowLeft size={13} weight="bold" aria-hidden="true" />
        All work
      </Link>

      <motion.header
        className="mt-10 md:mt-14"
        variants={stagger(0.08)}
        initial={reduce ? false : "hidden"}
        animate="visible"
      >
        <motion.div variants={revealUp} className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
          <span className="meta text-faint">{project.index}</span>
          <h1 className="font-display text-display text-ink">{project.title}</h1>
        </motion.div>

        <motion.p variants={revealUp} className="mt-6 max-w-[42ch] text-lead text-ink">
          {project.tagline}
        </motion.p>

        <motion.dl variants={revealUp} className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 border-t border-line pt-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col gap-1.5">
            <dt className="meta text-faint">Role</dt>
            <dd className="text-[15px] text-ink">{project.role}</dd>
          </div>
          <div className="flex flex-col gap-1.5">
            <dt className="meta text-faint">Year</dt>
            <dd className="text-[15px] text-ink">{project.year}</dd>
          </div>
          <div className="flex flex-col gap-1.5">
            <dt className="meta text-faint">Context</dt>
            <dd className="text-[15px] text-ink">{project.context}</dd>
          </div>
          <div className="flex flex-col gap-1.5">
            <dt className="meta text-faint">Links</dt>
            <dd className="flex flex-col gap-1.5">
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                 className="link inline-flex items-center gap-1.5 text-[15px] text-ink hover:text-accent">
                Live site <ArrowUpRight size={13} weight="bold" aria-hidden="true" />
              </a>
              <a href={project.source} target="_blank" rel="noopener noreferrer"
                 className="link inline-flex items-center gap-1.5 text-[15px] text-muted hover:text-accent">
                Source <GithubLogo size={13} weight="regular" aria-hidden="true" />
              </a>
            </dd>
          </div>
        </motion.dl>
      </motion.header>

      <motion.div className="mt-14 md:mt-20" {...reveal(reduce, revealImage)}>
        <a href={project.live} target="_blank" rel="noopener noreferrer"
           aria-label={`${project.title}, open the live site`}
           className="block overflow-hidden bg-surface-raised">
          {/* priority: on this route the screenshot is the largest element
              above the fold, so it is the LCP candidate. */}
          <Image
            src={project.image}
            alt={`${project.title} interface`}
            width={project.width}
            height={project.height}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
            className="aspect-[5/3] w-full object-cover object-top sm:aspect-auto sm:object-contain"
          />
        </a>
      </motion.div>

      <motion.div
        className="mt-16 grid gap-x-10 gap-y-12 md:mt-24 md:grid-cols-3"
        variants={stagger(0.08)}
        initial={reduce ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div variants={revealUp}><Block label="Problem">{project.problem}</Block></motion.div>
        <motion.div variants={revealUp}><Block label="What I built">{project.build}</Block></motion.div>
        <motion.div variants={revealUp}><Block label="Outcome">{project.outcome}</Block></motion.div>
      </motion.div>

      <div className="mt-16 border-t border-line pt-6 md:mt-20">
        <p className="meta mb-4">Stack</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {project.tech.map((t) => (
            <li key={t} className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">{t}</li>
          ))}
        </ul>
      </div>

      {/* Sequential rather than a grid of every other project: a reader who
          finishes one case study is most likely to want the next one. */}
      <nav aria-label="Other projects" className="mt-20 grid gap-6 border-t border-line pt-8 sm:grid-cols-2 md:mt-28">
        {prev ? (
          <Link href={`/work/${prev.id}`} className="group flex flex-col gap-2">
            <span className="meta text-faint">Previous</span>
            <span className="font-display text-heading text-ink transition-colors duration-200 ease-[var(--ease-out)] group-hover:text-accent">
              {prev.title}
            </span>
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/work/${next.id}`} className="group flex flex-col gap-2 sm:text-right">
            <span className="meta text-faint">Next</span>
            <span className="inline-flex items-center gap-2 font-display text-heading text-ink transition-colors duration-200 ease-[var(--ease-out)] group-hover:text-accent sm:justify-end">
              {next.title}
              <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </span>
          </Link>
        ) : null}
      </nav>
    </article>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, Zap, Users, Activity } from "lucide-react";
import { projects } from "@/config/portfolio";
import { fadeUp, staggerContainerSlow, cardHover, buttonTap, viewport } from "@/lib/motion";

const METRIC_META = {
  performance: { icon: Zap, label: "Perf", color: "text-emerald-400" },
  users: { icon: Users, label: "Users", color: "text-blue-400" },
  uptime: { icon: Activity, label: "Uptime", color: "text-violet-400" },
};

function ProjectImage({ src, alt, priority = false }) {
  return (
    <div className="relative h-52 w-full overflow-hidden bg-gradient-to-br from-indigo-900/30 to-violet-900/20">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
      ) : (
        /* Placeholder when no screenshot is available */
        <div className="flex h-full items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
              <Zap size={24} className="text-indigo-400" aria-hidden="true" />
            </div>
            <p className="text-xs text-gray-600">Preview coming soon</p>
          </div>
        </div>
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}

function MetricChip({ metricKey, value }) {
  const meta = METRIC_META[metricKey];
  if (!meta) return null;
  const Icon = meta.icon;

  return (
    <div className="flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.03] px-2.5 py-1">
      <Icon size={11} className={meta.color} aria-hidden="true" />
      <span className="text-[10px] font-semibold text-gray-400">
        {meta.label}: <span className="text-white">{value}</span>
      </span>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group glass-card overflow-hidden flex flex-col"
      aria-labelledby={`project-${project.id}-title`}
    >
      {/* Image */}
      <ProjectImage src={project.image} alt={`${project.title} screenshot`} />

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        {/* Title */}
        <h3
          id={`project-${project.id}-title`}
          className="text-base font-bold text-white"
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-2">
          {Object.entries(project.metrics).map(([k, v]) => (
            <MetricChip key={k} metricKey={k} value={v} />
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>

        {/* Links — pushed to bottom */}
        <div className="mt-auto flex gap-3 pt-2">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={buttonTap}
            className="btn-ghost flex-1 justify-center py-2 text-xs"
            aria-label={`View ${project.title} source on GitHub`}
          >
            <Github size={14} aria-hidden="true" /> GitHub
          </motion.a>
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={buttonTap}
            className="btn-primary flex-1 justify-center py-2 text-xs"
            aria-label={`View ${project.title} live demo`}
          >
            <ExternalLink size={14} aria-hidden="true" /> Live Demo
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

function FeaturedCard({ project, reverse = false }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="group glass-card overflow-hidden"
      aria-labelledby={`featured-${project.id}-title`}
    >
      <div className={`grid grid-cols-1 md:grid-cols-2 ${reverse ? "md:grid-flow-dense" : ""}`}>
        {/* Image column */}
        <div className={`relative h-64 md:h-auto overflow-hidden ${reverse ? "md:col-start-2" : ""}`}>
          <ProjectImage
            src={project.image}
            alt={`${project.title} screenshot`}
            priority
          />
          {/* Featured label */}
          <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-indigo-500/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" aria-hidden="true" />
            Featured
          </div>
        </div>

        {/* Content column */}
        <div className="flex flex-col justify-between gap-5 p-7">
          <div className="flex flex-col gap-4">
            <h3
              id={`featured-${project.id}-title`}
              className="text-xl font-bold text-white"
            >
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              {project.longDescription}
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap gap-2">
              {Object.entries(project.metrics).map(([k, v]) => (
                <MetricChip key={k} metricKey={k} value={v} />
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={buttonTap}
              className="btn-ghost py-2.5 text-xs"
              aria-label={`View ${project.title} source on GitHub`}
            >
              <Github size={14} aria-hidden="true" /> GitHub
            </motion.a>
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={buttonTap}
              className="btn-primary py-2.5 text-xs"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink size={14} aria-hidden="true" /> Live Demo
            </motion.a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0a0a0f] section-padding"
      aria-labelledby="projects-heading"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-max relative z-10">

        {/* ── Section header ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">
            What I've built
          </p>
          <h2 id="projects-heading" className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 mx-auto max-w-lg text-sm text-gray-500">
            A selection of projects that showcase my approach to engineering
            quality, performance, and design.
          </p>
        </motion.div>

        <div className="mb-12 flex flex-col gap-8">
          {featured.map((project, i) => (
            <FeaturedCard key={project.id} project={project} reverse={i % 2 !== 0} />
          ))}
        </div>

        {/* ── Remaining project grid ── */}
        {rest.length > 0 && (
          <>
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="mb-8 text-sm font-semibold uppercase tracking-widest text-gray-500"
            >
              Other projects
            </motion.h3>

            <motion.div
              variants={staggerContainerSlow}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2"
            >
              {rest.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}

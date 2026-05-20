"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { experiences } from "@/config/portfolio";
import { fadeUp, slideInLeft, slideInRight, viewport } from "@/lib/motion";


function TimelineItem({ exp, index, isLeft }) {
  const isFirst = index === 0;

  return (
    <div className="relative grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto_1fr]">

      <div className={`${isLeft ? "md:text-right" : "md:contents"}`}>
        {isLeft ? (
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <ExperienceCard exp={exp} isFirst={isFirst} />
          </motion.div>
        ) : (
          <div className="hidden md:block" aria-hidden="true" />
        )}
      </div>

      <div className="hidden flex-col items-center md:flex" aria-hidden="true">
        {/* Dot */}
        <div
          className={`
            relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2
            ${isFirst
              ? "border-indigo-500 bg-indigo-500/20 shadow-lg shadow-indigo-500/30"
              : "border-white/15 bg-[#0a0a0f]"
            }
          `}
        >
          <Briefcase
            size={16}
            className={isFirst ? "text-indigo-400" : "text-gray-600"}
          />
        </div>
        {index < experiences.length - 1 && (
          <div className="mt-2 w-px flex-1 bg-white/[0.06]" />
        )}
      </div>


      <div>
        {!isLeft ? (
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <ExperienceCard exp={exp} isFirst={isFirst} />
          </motion.div>
        ) : (
          <div className="hidden md:block" aria-hidden="true" />
        )}
      </div>


      <motion.div
        className="md:hidden"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >

        <div className="relative pl-8">
          <span
            className={`
              absolute left-0 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2
              ${isFirst ? "border-indigo-500 bg-indigo-500/20" : "border-white/15 bg-[#0a0a0f]"}
            `}
            aria-hidden="true"
          >
            <Briefcase size={10} className={isFirst ? "text-indigo-400" : "text-gray-600"} />
          </span>
          {/* Vertical line */}
          {index < experiences.length - 1 && (
            <span
              className="absolute left-[9px] top-6 h-full w-px bg-white/[0.06]"
              aria-hidden="true"
            />
          )}
          <ExperienceCard exp={exp} isFirst={isFirst} />
        </div>
      </motion.div>
    </div>
  );
}

function ExperienceCard({ exp, isFirst }) {
  return (
    <article
      className={`
        glass-card p-6 transition-all duration-300
        ${isFirst ? "border-indigo-500/20" : ""}
        hover:border-indigo-500/20
      `}
      aria-labelledby={`exp-${exp.id}-role`}
    >
      {/* Header */}
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3
            id={`exp-${exp.id}-role`}
            className="text-base font-bold text-white"
          >
            {exp.role}
          </h3>
          <p className="mt-0.5 text-sm text-indigo-400">
            {exp.company}
            <span className="mx-2 text-gray-700" aria-hidden="true">·</span>
            {exp.period}
          </p>
        </div>
        <span className="tag-pill shrink-0">{exp.type}</span>
      </div>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-gray-400">
        {exp.description}
      </p>

      {/* Achievements */}
      <ul className="mb-5 flex flex-col gap-2" role="list" aria-label="Key achievements">
        {exp.achievements.map((achievement, i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
            <CheckCircle2
              size={13}
              className="mt-0.5 shrink-0 text-indigo-400"
              aria-hidden="true"
            />
            {achievement}
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
        {exp.stack.map((tech) => (
          <span key={tech} className="tag-pill text-[10px]">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#0d0d14] section-padding"
      aria-labelledby="experience-heading"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/8 blur-[120px]"
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
            Where I've worked
          </p>
          <h2 id="experience-heading" className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          {/* <p className="mt-4 mx-auto max-w-lg text-sm text-gray-500">
            {experiences.length} roles spanning {experiences[experiences.length - 1].period.split("–")[0].trim()}
            {" "}to present — from startup to scale-up.
          </p> */}
        </motion.div>

        {/* ── Timeline ── */}
        {/* <div
          className="flex flex-col gap-0 md:gap-12"
          role="list"
          aria-label="Work experience timeline"
        >
          {experiences.map((exp, index) => (
            <div key={exp.id} role="listitem">
              <TimelineItem
                exp={exp}
                index={index}
                isLeft={index % 2 === 0}
              />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

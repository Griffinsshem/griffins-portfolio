"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories, techMarquee } from "@/config/portfolio";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

function SkillBar({ skill, index }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group"
    >
      {/* Label row */}
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-base leading-none" aria-hidden="true">
            {skill.icon}
          </span>
          <span className="text-sm font-medium text-gray-300">{skill.name}</span>
        </div>
        <span className="text-xs font-semibold text-indigo-400">{skill.level}%</span>
      </div>

      {/* Track */}
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-white/[0.06]"
        role="progressbar"
        aria-valuenow={skill.level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${skill.name} proficiency ${skill.level}%`}
      >
        {/* Fill — animated via Framer Motion width */}
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.07,
          }}
        />
      </div>
    </motion.div>
  );
}

function TechMarquee() {
  const doubled = [...techMarquee, ...techMarquee];

  return (
    <div
      className="relative overflow-hidden py-4"
      aria-label="Tech stack marquee"
      aria-hidden="true"
    >
      {/* Left + right fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0a0a0f] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0a0a0f] to-transparent" />

      {/* Scrolling track */}
      <div
        className="flex w-max gap-4"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {doubled.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-xs font-medium text-gray-400 backdrop-blur-sm whitespace-nowrap"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function TabButton({ category, isActive, onClick }) {
  return (
    <button
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${category.id}`}
      id={`tab-${category.id}`}
      onClick={() => onClick(category.id)}
      className={`
        relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500
        ${isActive
          ? "text-white"
          : "text-gray-500 hover:text-gray-300"
        }
      `}
    >
      {/* Animated pill background for active tab */}
      {isActive && (
        <motion.span
          layoutId="tab-bg"
          className="absolute inset-0 rounded-full bg-indigo-500/15 border border-indigo-500/30"
          transition={{ type: "spring", stiffness: 400, damping: 32 }}
          aria-hidden="true"
        />
      )}
      <span className="relative">{category.label}</span>
    </button>
  );
}

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  const activeCategory = skillCategories.find((c) => c.id === activeTab);

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0d0d14] section-padding"
      aria-labelledby="skills-heading"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="container-max relative z-10">

        {/* ── Section header ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">
            What I work with
          </p>
          <h2 id="skills-heading" className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="mt-4 mx-auto max-w-lg text-sm text-gray-500 font-bold">
            A curated overview of my core stack and how deeply I've invested
            in each area.
          </p>
        </motion.div>

        {/* ── Tab switcher ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-10 flex justify-center"
        >
          <div
            role="tablist"
            aria-label="Skill categories"
            className="inline-flex gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-1.5"
          >
            {skillCategories.map((cat) => (
              <TabButton
                key={cat.id}
                category={cat}
                isActive={activeTab === cat.id}
                onClick={setActiveTab}
              />
            ))}
          </div>
        </motion.div>

        {/* ── Skill bars panel ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            id={`panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-x-12 gap-y-5 sm:grid-cols-2"
            >
              {activeCategory?.skills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} index={i} />
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* ── Marquee strip ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-20"
        >
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-gray-600">
            Full tech stack
          </p>
          <TechMarquee />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { MapPin, Coffee, Zap, Users, Code2, Award } from "lucide-react";
import { personal, stats, experiences } from "@/config/portfolio";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

function AnimatedCounter({ to, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsub = rounded.on("change", setDisplay);
    return unsub;
  }, [rounded]);

  useEffect(() => {
    if (isInView) {
      animate(motionVal, parseInt(to), { duration: 1.8, ease: "easeOut" });
    }
  }, [isInView, to, motionVal]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const STAT_ICONS = [Zap, Code2, Users, Award];

function StatCard({ stat, index }) {
  const Icon = STAT_ICONS[index % STAT_ICONS.length];
  return (
    <motion.div
      variants={fadeUp}
      className="glass-card flex flex-col items-center gap-2 p-6 text-center"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10">
        <Icon size={18} className="text-indigo-400" aria-hidden="true" />
      </div>
      <p className="text-3xl font-extrabold text-white">
        <AnimatedCounter to={stat.value} suffix={stat.suffix} />
      </p>
      <p className="text-xs text-gray-500">{stat.label}</p>
    </motion.div>
  );
}

function CodeBlock() {
  return (
    <div className="glass-card overflow-hidden font-mono text-sm">
      {/* Terminal title bar */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-xs text-gray-600">griffins.js</span>
      </div>

      {/* Code content */}
      <div className="p-5 leading-relaxed">
        <p>
          <span className="text-violet-400">const</span>{" "}
          <span className="text-cyan-300">developer</span>{" "}
          <span className="text-white">= {"{"}</span>
        </p>
        <div className="ml-4">
          <p>
            <span className="text-blue-300">name</span>
            <span className="text-white">: </span>
            <span className="text-emerald-300">"{personal.fullName}"</span>,
          </p>
          <p>
            <span className="text-blue-300">location</span>
            <span className="text-white">: </span>
            <span className="text-emerald-300">"{personal.location}"</span>,
          </p>
          <p>
            <span className="text-blue-300">focus</span>
            <span className="text-white">: </span>
            <span className="text-emerald-300">"Frontend &amp; Full-Stack"</span>,
          </p>
          <p>
            <span className="text-blue-300">available</span>
            <span className="text-white">: </span>
            <span className="text-orange-300">{personal.available ? "true" : "false"}</span>,
          </p>
          <p>
            <span className="text-blue-300">passion</span>
            <span className="text-white">: </span>
            <span className="text-emerald-300">"Great UX + Clean code"</span>,
          </p>
        </div>
        <p>
          <span className="text-white">{"}"}</span>
          <span className="ml-1 animate-pulse text-indigo-400">|</span>
        </p>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0a0a0f] section-padding"
      aria-labelledby="about-heading"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">
            Get to know me
          </p>
          <h2 id="about-heading" className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-6"
          >
            {personal.bio.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-gray-400">
                {para}
              </p>
            ))}

            <ul className="mt-4 flex flex-col gap-3" role="list">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin size={16} className="shrink-0 text-indigo-400" aria-hidden="true" />
                Based in {personal.location}
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Coffee size={16} className="shrink-0 text-indigo-400" aria-hidden="true" />
                {personal.yearsOfExperience}+ years of professional experience
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Zap size={16} className="shrink-0 text-indigo-400" aria-hidden="true" />
                Open to remote &amp; on-site opportunities
              </li>
            </ul>
            <div className="mt-4">
              <CodeBlock />
            </div>
          </motion.div>

          <div className="flex flex-col gap-8">

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="grid grid-cols-2 gap-4"
              aria-label="Key statistics"
            >
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} />
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-gray-500">
                Career highlights
              </h3>

              <ol className="relative border-l border-white/[0.08]" role="list">
                {experiences.map((exp, i) => (
                  <li key={exp.id} className="mb-8 ml-6 last:mb-0">
                    <span
                      className={`
                        absolute -left-[9px] flex h-[18px] w-[18px] items-center justify-center
                        rounded-full border-2 border-[#0a0a0f]
                        ${i === 0 ? "bg-indigo-500" : "bg-white/20"}
                      `}
                      aria-hidden="true"
                    />

                    {/* Content */}
                    {/* <div className="glass-card p-4">
                      <div className="mb-1 flex items-center justify-between gap-2">
                        <h4 className="text-sm font-semibold text-white">{exp.role}</h4>
                        <span className="tag-pill shrink-0">{exp.type}</span>
                      </div>
                      <p className="text-xs text-indigo-400">
                        {exp.company} · {exp.period}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-gray-500">
                        {exp.description}
                      </p>
                    </div> */}
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

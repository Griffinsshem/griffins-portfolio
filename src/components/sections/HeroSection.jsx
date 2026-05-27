"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
  Download,
  Sparkles,
} from "lucide-react";
import { personal, socialLinks as SOCIAL_LINKS_CONFIG } from "@/config/portfolio";

const ROLES = [
  "Frontend Developer",
  "Full-Stack Developer",
  "React Specialist",
  "Next.js Engineer",
  "UI/UX Craftsman",
];

const iconMap = {
  Github: Github,
  Linkedin: Linkedin,
  Twitter: Twitter,
  Mail: Mail,
};

// Convert socialLinks config to include actual icon components
const SOCIAL_LINKS = SOCIAL_LINKS_CONFIG.map((link) => ({
  ...link,
  icon: iconMap[link.icon],
}));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
};

function useTypewriter(
  words,
  typeSpeed = 90,
  deleteSpeed = 50,
  pauseMs = 1800
) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      const id = setInterval(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 3000);
      return () => clearInterval(id);
    }

    const current = words[wordIndex];
    const speed = isDeleting ? deleteSpeed : typeSpeed;

    const id = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseMs);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(current.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(id);
  }, [displayText, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseMs, prefersReduced]);
  return prefersReduced ? words[wordIndex] : displayText;
}

function AuroraBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[600px] rounded-full bg-violet-600/15 blur-[100px]" />

      <div className="absolute bottom-20 left-0 h-[300px] w-[500px] rounded-full bg-blue-600/10 blur-[90px]" />

      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff22 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0f]" />
    </div>
  );
}

function AvailabilityBadge() {
  return (
    <motion.div
      variants={itemVariants}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
    >
      {/* Pulsing green availability dot */}
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <span className="text-xs font-medium text-gray-300">
        Available for new projects
      </span>
      <Sparkles size={12} className="text-indigo-400" />
    </motion.div>
  );
}


function ProfileCard() {
  return (
    <motion.div
      variants={cardVariants}
      className="relative flex justify-center lg:justify-end"
    >
      {/* Outer glow halo behind the card */}
      <div
        className="absolute inset-0 rounded-3xl bg-indigo-600/20 blur-3xl"
        aria-hidden="true"
      />

      {/* Animated rotating border wrapper */}
      <div className="relative">
        <div
          className="absolute -inset-[2px] rounded-3xl opacity-70 animate-spin-slow"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0%, #6366f1 25%, #8b5cf6 50%, transparent 75%)",
          }}
          aria-hidden="true"
        />

        {/* Glass card surface */}
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.02] p-2 backdrop-blur-xl">
          {/* Portrait image */}
          <div className="relative h-72 w-72 overflow-hidden rounded-2xl md:h-80 md:w-80 lg:h-[360px] lg:w-[360px]">
            <Image
              src="/griffins.jpg"
              alt="Griffins — Frontend & Full-Stack Developer"
              fill
              sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 360px"
              className="object-cover"
              priority
            />

            {/* Subtle inner overlay so the image blends with the dark theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Floating tech badge — sits on top of the image bottom edge */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-[#0f0f14]/90 px-4 py-2 text-xs font-medium text-gray-300 backdrop-blur-xl shadow-xl">
            ⚡ Next.js · React · TypeScript
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const displayText = useTypewriter(ROLES);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0a0f] px-6 pt-24 pb-16 text-white"
      aria-label="Hero — Introduction"
    >
      {/* ── Decorative backgrounds ── */}
      <AuroraBackground />

      {/* ── Main content grid ── */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">


        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {/* ── Availability pill ── */}
          <AvailabilityBadge />

          {/* ── Greeting + name ── */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-sm font-medium uppercase tracking-widest text-indigo-400"
          >
            👋 Hello, I'm
          </motion.p>

          {/* ── Main headline ── */}
          <motion.h1
            variants={itemVariants}
            className="mt-2 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl"
          >
            <span className="block text-white">Griffins</span>
            <span className="block bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Building high-performance
            </span>
            <span className="block text-white">web experiences</span>
          </motion.h1>

          {/* ── Typewriter role indicator ── */}
          <motion.div
            variants={itemVariants}
            className="mt-5 flex items-center gap-2 text-xl font-medium md:text-2xl"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="text-gray-200">{displayText}</span>
            <span
              className="inline-block h-6 w-[2px] animate-pulse bg-indigo-400 motion-reduce:hidden"
              aria-hidden="true"
            />
          </motion.div>

          {/* ── Bio paragraphs ── */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg text-base leading-relaxed text-gray-400"
          >
            Specialising in{" "}
            <span className="font-semibold text-white">
              React, Next.js, and Tailwind CSS
            </span>
            . I craft clean, scalable interfaces with relentless attention to
            performance, accessibility, and user experience.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-3 max-w-lg text-base leading-relaxed text-gray-400"
          >
            I collaborate across the stack using{" "}
            <span className="font-semibold text-white">Node.js and Python</span>
            , delivering production-ready features that feel polished and
            reliable.
          </motion.p>

          {/* ── CTA buttons ── */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:gap-3 hover:shadow-indigo-500/40 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              aria-label="View my projects"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>

            {/* Secondary CTA — Download CV */}
            <a
              href="/Griffins_Shem_Ondeyo_Resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-gray-200 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] hover:border-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
              aria-label="Download my CV"
            >
              <Download size={15} aria-hidden="true" />
              Download CV
            </a>
          </motion.div>

          {/* ── Social links ── */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center gap-1"
            role="list"
            aria-label="Social links"
          >
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 backdrop-blur-sm transition-all duration-200 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-400 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500"
              >
                <Icon size={18} />
              </a>
            ))}

            <span className="ml-3 text-xs text-gray-600" aria-hidden="true">
              /
            </span>
            <span className="ml-3 text-xs text-gray-500">
              1+ years building for the web
            </span>
          </motion.div>
        </motion.div>

        <ProfileCard />
      </div>

      {/* ── Scroll-down cue ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[10px] uppercase tracking-widest text-gray-600">
            scroll
          </span>
          {/* Animated bouncing chevron */}
          <div className="h-8 w-[1px] animate-bounce bg-gradient-to-b from-indigo-500 to-transparent" />
        </div>
      </motion.div>

    </section>
  );
}

"use client";
import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiMui,
  SiFirebase,
} from "react-icons/si";

const skills = [
  {
    name: "HTML & CSS",
    desc: "Semantic markup, responsive layouts, accessibility-first styling",
    icon: <SiHtml5 className="text-orange-500 w-6 h-6" />,
  },
  {
    name: "JavaScript (ES6+)",
    desc: "Modern syntax, async flows, clean state logic",
    icon: <SiJavascript className="text-yellow-400 w-6 h-6" />,
  },
  {
    name: "React & Next.js",
    desc: "Reusable components, App Router, performance optimization",
    icon: <SiReact className="text-cyan-400 w-6 h-6" />,
  },
  {
    name: "Tailwind CSS",
    desc: "Design systems, rapid prototyping, polished UI",
    icon: <SiTailwindcss className="text-teal-400 w-6 h-6" />,
  },
  {
    name: "Node.js & Express",
    desc: "REST APIs, authentication flows, integrations",
    icon: <SiNodedotjs className="text-green-400 w-6 h-6" />,
  },
  {
    name: "Python & Flask",
    desc: "Backend logic, APIs, structured data handling",
    icon: <SiPython className="text-blue-400 w-6 h-6" />,
  },
  {
    name: "Material UI",
    desc: "Component-driven UI development",
    icon: <SiMui className="text-sky-400 w-6 h-6" />,
  },
  {
    name: "Firebase",
    desc: "Authentication, real-time data, deployment",
    icon: <SiFirebase className="text-orange-400 w-6 h-6" />,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-black px-6 py-28 text-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2 items-center">
        {/* Narrative */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-300">
            I’m{" "}
            <span className="font-semibold text-white">Griffins Shem</span>, a
            frontend-focused software developer passionate about building
            modern, intuitive, and high-performance web applications.
            I care deeply about how users experience a product — from layout
            clarity to the smallest interaction detail.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            My primary stack is{" "}
            <span className="text-white font-medium">
              React, Next.js, and Tailwind CSS
            </span>
            . I specialize in crafting clean component architectures,
            responsive interfaces, and performance-conscious UIs that scale
            gracefully across devices.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            While frontend is my strength, I’m comfortable working across the
            stack using Node.js and Python (Flask). This allows me to collaborate
            effectively with backend teams and deliver complete, production-ready
            features.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            I thrive in teams that value clean code, thoughtful design, and
            continuous learning. My goal is simple: build digital products that
            feel reliable, polished, and genuinely enjoyable to use.
          </p>
        </div>

        {/* Skills Card */}
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-xl p-8 shadow-xl">
          <h3 className="mb-8 text-2xl font-semibold tracking-tight">
            Technical Focus
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="group rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  {skill.icon}
                  <span className="font-medium text-white">
                    {skill.name}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-400 group-hover:text-gray-300">
                  {skill.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

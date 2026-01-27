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
    desc: "Semantic markup, responsive layouts, modern CSS",
    icon: <SiHtml5 className="text-orange-500 w-6 h-6" />,
  },
  {
    name: "JavaScript (ES6+)",
    desc: "Clean logic, async flows, maintainable code",
    icon: <SiJavascript className="text-yellow-400 w-6 h-6" />,
  },
  {
    name: "React & Next.js",
    desc: "Reusable components, App Router, performance",
    icon: <SiReact className="text-cyan-400 w-6 h-6" />,
  },
  {
    name: "Tailwind CSS",
    desc: "Design systems, responsive UI, rapid prototyping",
    icon: <SiTailwindcss className="text-teal-400 w-6 h-6" />,
  },
  {
    name: "Node.js & Express",
    desc: "REST APIs, auth flows, integrations",
    icon: <SiNodedotjs className="text-green-400 w-6 h-6" />,
  },
  {
    name: "Python & Flask",
    desc: "Backend logic, APIs, data handling",
    icon: <SiPython className="text-blue-400 w-6 h-6" />,
  },
  {
    name: "Material UI",
    desc: "Component-driven UI development",
    icon: <SiMui className="text-sky-400 w-6 h-6" />,
  },
  {
    name: "Firebase",
    desc: "Auth, real-time data, hosting",
    icon: <SiFirebase className="text-orange-400 w-6 h-6" />,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-black text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Left – Narrative */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I’m <span className="text-white font-semibold">Griffins</span>, a
            frontend-focused software developer who specializes in building
            fast, accessible, and visually polished web applications.
            I care deeply about how users experience a product — from the
            first interaction to the smallest micro-detail.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            My core stack is <span className="text-white">React and Next.js</span>,
            where I build reusable component systems, responsive layouts, and
            performance-minded interfaces. I also work comfortably with backend
            technologies like Node.js and Python (Flask), allowing me to
            collaborate effectively across the full stack.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            I enjoy working in teams that value clean code, thoughtful design,
            and continuous improvement. Whether refining UI details or shipping
            complete features, my goal is always the same: build products that
            feel reliable, intuitive, and enjoyable to use.
          </p>
        </div>

        {/* Right – Skills */}
        <div className="bg-gray-900/70 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-semibold mb-6">
            Technical Focus
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="group flex flex-col gap-2 bg-gray-800/70 border border-gray-700 rounded-xl p-4 transition-all duration-300 hover:border-blue-500 hover:scale-[1.03]"
              >
                <div className="flex items-center gap-3">
                  {skill.icon}
                  <span className="font-semibold text-white">
                    {skill.name}
                  </span>
                </div>
                <span className="text-sm text-gray-400 group-hover:text-gray-300">
                  {skill.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

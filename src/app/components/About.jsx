"use client";
import React from "react";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiPython, SiTailwindcss, SiMui, SiFirebase } from "react-icons/si";

const skills = [
  { name: "HTML / CSS", icon: <SiHtml5 className="text-orange-500 w-6 h-6" /> },
  { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400 w-6 h-6" /> },
  { name: "React / Next.js", icon: <SiReact className="text-cyan-400 w-6 h-6" /> },
  { name: "Node.js / Express", icon: <SiNodedotjs className="text-green-400 w-6 h-6" /> },
  { name: "Python / Flask", icon: <SiPython className="text-blue-400 w-6 h-6" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 w-6 h-6" /> },
  { name: "Material UI", icon: <SiMui className="text-teal-300 w-6 h-6" /> },
  { name: "Firebase", icon: <SiFirebase className="text-orange-400 w-6 h-6" /> },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-black text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
            I&apos;m <span className="font-semibold text-white">Griffins</span>, a
            dedicated full-stack developer with a strong focus on building smooth, high-performance web applications. My journey into software development began with a curiosity for how digital systems work and quickly grew into a passion for creating solutions that are both functional and user-friendly.

            I work primarily with React, JavaScript, Python, and Flask, allowing me to develop applications end-to-end—from clean, responsive interfaces to reliable backend APIs. I enjoy solving real problems, writing maintainable code, and continuously learning new technologies that elevate the quality of my work.
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Beyond the code, I value good teamwork, clear communication, and the process of transforming ideas into products that bring real value to users. I’m always excited to collaborate on meaningful projects and contribute to engineering teams that prioritize growth, creativity, and impact.
          </p>
        </div>

        {/* Right Side - Skills / Highlights */}
        <div className="bg-gray-900/60 backdrop-blur-lg border border-gray-800 rounded-xl shadow-lg p-8">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
            Skills & Expertise
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="flex items-center gap-3 bg-gray-800 text-gray-200 rounded-lg p-4 font-medium transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:scale-105 cursor-pointer shadow-sm"
              >
                <span className="w-6 h-6">{skill.icon}</span>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

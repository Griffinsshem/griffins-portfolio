"use client";
import React from "react";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import ReactIcon from "@mui/icons-material/IntegrationInstructions";
import NodeIcon from "@mui/icons-material/Memory";
import PythonIcon from "@mui/icons-material/Python";
import TailwindIcon from "@mui/icons-material/DesignServices";
import FirebaseIcon from "@mui/icons-material/Whatshot";

const skills = [
  { name: "HTML / CSS", icon: <HtmlIcon className="text-blue-500" /> },
  { name: "JavaScript (ES6+)", icon: <JavascriptIcon className="text-yellow-400" /> },
  { name: "React / Next.js", icon: <ReactIcon className="text-cyan-400" /> },
  { name: "Node.js / Express", icon: <NodeIcon className="text-green-400" /> },
  { name: "Python / Flask", icon: <PythonIcon className="text-blue-300" /> },
  { name: "Tailwind CSS", icon: <TailwindIcon className="text-teal-400" /> },
  { name: "Material UI", icon: <CssIcon className="text-teal-400" /> },
  { name: "Firebase", icon: <FirebaseIcon className="text-orange-400" /> },
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
            fullstack web developer passionate about building modern, scalable,
            and user-friendly digital products. I love transforming ideas into
            beautiful, functional applications that make a meaningful impact.
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            With a strong focus on clean code, responsive design, and seamless
            user experiences, I aim to deliver solutions that not only look
            great but also perform at the highest standards.
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

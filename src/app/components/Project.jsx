"use client";
import React from "react";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "SokoMtaani",
      description:
        "A modern agricultural marketplace built with Next.js and Tailwind CSS.",
      image: "/sokoMtaani.png",
      demoLink: "https://sokomtaani.vercel.app/",
      codeLink: "https://github.com/Griffinsshem/Sokomtaani",
    },
    {
      title: "DevConnect",
      description:
        "Carbify is a modern e-commerce web application designed to deliver a seamless, all-in-one online shopping experience. Inspired by large-scale marketplaces like Amazon, Cartify connects buyers and sellers on a single platform.",
      image: "/cartify.png",
      demoLink: "https://caritfy.web.app/",
      codeLink: "",
    },
    {
      title: "FlowState",
      description:
        "A productivity app to manage tasks, set reminders, and track progress.",
      image: "/flowstate.png",
      demoLink: "https://cfg-i068.onrender.com/",
      codeLink: "",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-black text-white py-20 px-6 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          My <span className="text-blue-500">Projects</span>
        </h2>
        <p className="text-gray-300 text-base md:text-lg mb-12">
          Here are some of the projects I&apos;ve worked on. Each one helped me
          grow as a developer and sharpen my skills.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-lg p-6 flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-600"
            >
              {/* Project Image */}
              <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
                />
              </div>

              {/* Project Info */}
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="mt-6 flex justify-between gap-3">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-transform duration-300 hover:scale-105"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-transform duration-300 hover:scale-105"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

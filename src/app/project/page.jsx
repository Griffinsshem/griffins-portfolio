"use client";
import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SokoMtaani",
    description:
      "A modern agricultural marketplace focused on usability, responsive UI, and scalable frontend architecture.",
    image: "/sokoMtaani.png",
    demoLink: "https://sokomtaani.vercel.app/",
    codeLink: "https://github.com/Griffinsshem/Sokomtaani",
    stack: ["Next.js", "Tailwind CSS", "REST APIs"],
  },
  {
    title: "Cartify",
    description:
      "A full-featured e-commerce platform delivering a smooth shopping experience with clean UI and intuitive flows.",
    image: "/cartify.png",
    demoLink: "https://caritfy.web.app/",
    codeLink: "https://github.com/Griffinsshem/Cartify",
    stack: ["React", "Firebase", "Material UI"],
  },
  {
    title: "FlowState",
    description:
      "A productivity app designed to help users manage tasks, track progress, and stay focused.",
    image: "/flowstate.png",
    demoLink: "https://cfg-i068.onrender.com/",
    codeLink: "https://github.com/kaioken-glitch/CFG",
    stack: ["React", "Flask", "PostgreSQL"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black text-white py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Selected <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A curated selection of projects that showcase my approach to
            frontend development, UI engineering, and real-world problem solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black overflow-hidden transition-all duration-300 hover:border-blue-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs text-gray-300 bg-gray-800 border border-gray-700 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

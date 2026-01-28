"use client";
import React from "react";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "SokoMtaani",
      description:
        "A modern agricultural marketplace focused on usability, performance, and clean UI architecture using Next.js and Tailwind CSS.",
      image: "/sokoMtaani.png",
      demoLink: "https://sokomtaani.vercel.app/",
      codeLink: "https://github.com/Griffinsshem/Sokomtaani",
    },
    {
      title: "Cartify",
      description:
        "A full-featured e-commerce platform delivering a seamless shopping experience with authentication, cart flow, and responsive design.",
      image: "/cartify.png",
      demoLink: "https://caritfy.web.app/",
      codeLink: "https://github.com/Griffinsshem/Cartify",
    },
    {
      title: "FlowState",
      description:
        "A productivity-focused task management app designed to help users track goals, stay organized, and maintain focus.",
      image: "/flowstate.png",
      demoLink: "https://cfg-i068.onrender.com/",
      codeLink: "https://github.com/kaioken-glitch/CFG",
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Selected <span className="text-blue-500">Projects</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            A curated selection of projects showcasing my frontend expertise,
            attention to detail, and passion for building refined user
            experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Actions */}
                <div className="mt-6 flex items-center gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-gray-200 transition-all hover:bg-white/10 hover:scale-105"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

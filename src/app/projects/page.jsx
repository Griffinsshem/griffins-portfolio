"use client";
import React from "react";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "SokoMtaani",
      description:
        "An agricultural marketplace focused on performance, accessibility, and scalable UI architecture. Built with Next.js App Router and Tailwind CSS.",
      image: "/sokoMtaani.png",
      demoLink: "https://sokomtaani.vercel.app/",
      codeLink: "https://github.com/Griffinsshem/Sokomtaani",
    },
    {
      title: "Cartify",
      description:
        "A production-ready e-commerce platform featuring authentication, cart workflows, and a mobile-first shopping experience.",
      image: "/cartify.png",
      demoLink: "https://caritfy.web.app/",
      codeLink: "https://github.com/Griffinsshem/Cartify",
    },
    {
      title: "FlowState",
      description:
        "A productivity-focused task management app designed to help users plan goals, track progress, and maintain focus.",
      image: "/flowstate.png",
      demoLink: "https://cfg-i068.onrender.com/",
      codeLink: "https://github.com/kaioken-glitch/CFG",
    },
  ];

  return (
    <section className="relative bg-black text-white py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Selected <span className="text-blue-500">Projects</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
            A selection of real-world projects showcasing my frontend
            engineering skills, attention to detail, and passion for building
            high-quality user experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col p-7">
                <h3 className="text-xl font-semibold tracking-tight mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Actions */}
                <div className="mt-7 flex items-center gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>

                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-gray-200 transition-all hover:bg-white/10 hover:scale-105"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern personal portfolio built with Next.js and Tailwind CSS.",
      image: "/project1.png",
      demoLink: "https://your-demo-link.com",
      codeLink: "https://github.com/your-repo",
    },
    {
      title: "E-commerce Store",
      description: "Fullstack store with cart, payments, and product management.",
      image: "/project2.png",
      demoLink: "https://your-demo-link.com",
      codeLink: "https://github.com/your-repo",
    },
    {
      title: "Blog Platform",
      description: "A clean blog platform with authentication and CMS integration.",
      image: "/project3.png",
      demoLink: "https://your-demo-link.com",
      codeLink: "https://github.com/your-repo",
    },
    {
      title: "Chat Application",
      description: "Real-time chat app using WebSockets and Node.js backend.",
      image: "/project4.png",
      demoLink: "https://your-demo-link.com",
      codeLink: "https://github.com/your-repo",
    },
    {
      title: "Task Manager",
      description: "Productivity tool for managing daily tasks and deadlines.",
      image: "/project5.png",
      demoLink: "https://your-demo-link.com",
      codeLink: "https://github.com/your-repo",
    },
    {
      title: "Weather App",
      description: "Simple weather app with API integration and modern UI.",
      image: "/project6.png",
      demoLink: "https://your-demo-link.com",
      codeLink: "https://github.com/your-repo",
    },
  ];

  return (
    <section id="projects" className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          My <span className="text-blue-600">Projects</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-12">
          Here are some of the projects I&apos;ve worked on. Each one helped me
          grow as a developer and sharpen my skills.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md p-4 flex flex-col transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
                />
              </div>

              {/* Project Info */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm flex-grow">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="mt-4 flex justify-between">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition"
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

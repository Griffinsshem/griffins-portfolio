"use client";
import React, { useState, useEffect } from "react";

export default function HomeSection() {
  const roles = ["Frontend Developer", "Full-Stack Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const speed = isDeleting ? 50 : 90;

    const handleTyping = () => {
      if (!isDeleting && displayText.length < currentRole.length) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      } else if (!isDeleting && displayText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-black px-6 pt-28 text-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        {/* Left Content */}
        <div>
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-gray-300 backdrop-blur">
            👋 Hello, I’m Griffins
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Building modern, <br />
            <span className="text-blue-500">high-performance</span> web
            experiences
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl font-medium text-gray-300">
            <span className="text-white">{displayText}</span>
            <span className="ml-1 animate-pulse text-blue-500">|</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
            I’m a frontend-focused developer specializing in{" "}
            <span className="text-white font-medium">
              React, Next.js, and Tailwind CSS
            </span>
            . I build clean, scalable interfaces with strong attention to
            performance, accessibility, and user experience.
          </p>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-300">
            I collaborate well across the stack using Node.js and Python (Flask),
            delivering production-ready features that feel polished and reliable.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/projects"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-gray-200 transition-all hover:bg-white/10 hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative flex justify-center">
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-2 backdrop-blur-xl">
            <div className="h-72 w-72 overflow-hidden rounded-2xl md:h-80 md:w-80 lg:h-96 lg:w-96">
              <img
                src="/griffins.jpg"
                alt="Griffins portrait"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

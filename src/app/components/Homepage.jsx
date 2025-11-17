"use client";
import React, { useState, useEffect } from "react";

export default function HomeSection() {
  const roles = ["Frontend Developer", "Fullstack Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let typingSpeed = isDeleting ? 50 : 100;

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

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roles, currentRoleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-black text-white pt-20 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">


        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-lg md:text-xl font-medium text-gray-300 mb-2">
            Hello <span className="wave">👋</span>
          </h3>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            I&apos;m <span className="text-blue-500">Griffins</span>
            <br /> a{" "}
            <span className="text-blue-400 pr-1 typing-cursor">
              {displayText}
            </span>
          </h1>

          <p className="mt-4 text-white text-base md:text-lg max-w-2xl">
            I&apos;m a full-stack developer who loves crafting smooth, high-performance applications from end to end. Whether building responsive interfaces with React or designing robust APIs with Flask, I focus on writing clean code and delivering solutions that add value. I’m excited to collaborate with innovative teams and contribute to meaningful software projects.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Contact Me
            </a>

            <a
              href="#projects"
              className="px-6 py-3 border border-gray-500 text-gray-300 rounded-lg hover:bg-gray-800 hover:border-blue-500 hover:text-blue-400 transition"
            >
              View Projects
            </a>
          </div>
        </div>


        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg">
            <img
              src="/griffins.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>


      </div>
    </section>
  );
}

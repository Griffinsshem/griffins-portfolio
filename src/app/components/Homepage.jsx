"use client";
import React from "react";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-50 pt-20"
    >
      <div className="max-w-5xl mx-auto text-center px-6">

        <h3 className="text-lg md:text-xl font-medium text-gray-600 mb-2">
          Hello Mate <span className="wave">👋</span>
        </h3>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          I&apos;m <span className="text-blue-600">Griffins</span>
          <br /> a Web Developer
        </h1>

        <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          I&apos;m a fullstack web developer who loves creating modern,
          user-friendly applications. I help brands and individuals turn their
          ideas into high-quality digital products.
        </p>


        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-gray-400 text-gray-700 rounded-lg hover:bg-gray-100 transition"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}

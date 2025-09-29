"use client";
import React from "react";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white">Griffins Portfolio</h2>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Building modern, user-friendly digital experiences.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Griffinsshem"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right text-gray-400 text-sm md:text-base">
          <p>© 2025 Griffins. All rights reserved.</p>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="mt-8 flex flex-col items-center">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white text-sm md:text-base rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          <ArrowUp className="w-5 h-5" />
          <span>Back to top</span>
        </button>
        <p className="text-xs md:text-sm text-gray-400 mt-2">
          Click to return to the top of the page.
        </p>
      </div>
    </footer>
  );
}

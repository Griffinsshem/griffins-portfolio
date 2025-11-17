"use client";
import React from "react";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-gray-300 py-12 px-6 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Griffins Portfolio
          </h2>
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
            className="hover:text-blue-500 transition-transform duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/shem-griffins-9111b1389/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-transform duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/GriffinShem1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-transform duration-300 hover:scale-110"
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
      <div className="mt-10 flex flex-col items-center">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm md:text-base rounded-lg shadow-md hover:bg-blue-700 hover:shadow-blue-600/30 transition-all duration-300"
        >
          <ArrowUp className="w-5 h-5" />
          <span>Back to top</span>
        </button>
        <p className="text-xs md:text-sm text-gray-500 mt-3">
          Click to return to the top of the page.
        </p>
      </div>
    </footer>
  );
}

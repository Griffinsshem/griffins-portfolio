"use client";
import React from "react";
import { Github, Linkedin, Twitter, ArrowUp, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-black/80 backdrop-blur-xl px-6 py-16 text-gray-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
        {/* Brand / Identity */}
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-white">
            Griffins Shem
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-400">
            Frontend Developer specializing in modern React & Next.js
            applications. Focused on performance, clean UI architecture, and
            building products users love.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Open to frontend & junior software roles.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            Explore
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href="/about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            Connect
          </h3>

          <div className="mt-4 flex items-center gap-4">
            <a
              href="https://github.com/Griffinsshem"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 bg-white/5 p-2 transition hover:bg-white/10 hover:text-white"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/shem-griffins-9111b1389/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 bg-white/5 p-2 transition hover:bg-white/10 hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/GriffinShem1"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 bg-white/5 p-2 transition hover:bg-white/10 hover:text-white"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="mailto:griffinsshem@gmail.com"
              className="rounded-lg border border-white/10 bg-white/5 p-2 transition hover:bg-white/10 hover:text-white"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            Prefer email? Reach out directly.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Griffins Shem. Built with Next.js & Tailwind CSS.
        </p>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-200 transition hover:bg-white/10 hover:text-white"
        >
          <ArrowUp className="h-4 w-4" />
          Back to top
        </button>
      </div>
    </footer>
  );
}

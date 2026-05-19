"use client";

import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { personal, socialLinks } from "@/config/portfolio";

const ICON_MAP = { Github, Linkedin, Twitter, Mail };

const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#0a0a0f] pt-16 pb-8"
      role="contentinfo"
    >
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">

          {/* Logo */}
          <div className="flex flex-col items-center gap-1 md:items-start">
            <span className="text-lg font-bold text-white">
              griffins<span className="text-indigo-400">.dev</span>
            </span>
            <span className="text-xs text-gray-500">
              Building the web, one component at a time.
            </span>
          </div>

          {/* Quick nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2" role="list">
              {FOOTER_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-gray-500 transition-colors hover:text-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 rounded"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <ul className="flex items-center gap-2" role="list" aria-label="Social links">
            {socialLinks.map(({ label, href, icon }) => {
              const Icon = ICON_MAP[icon];
              return (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all duration-200 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500"
                  >
                    {Icon && <Icon size={16} aria-hidden="true" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="my-8 h-px bg-white/[0.05]" aria-hidden="true" />

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-gray-600">
            © {year} {personal.fullName}. Crafted with ☕ in Nairobi.
          </p>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-colors hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} aria-hidden="true" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

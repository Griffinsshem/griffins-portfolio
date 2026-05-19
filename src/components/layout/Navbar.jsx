"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const drawerVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.25, ease: "easeOut" },
  }),
};


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");


  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setMobileOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);


  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1)); // strip "#"
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? "border-b border-white/[0.08] bg-[#0a0a0f]/80 backdrop-blur-xl shadow-lg shadow-black/20"
          : "bg-transparent"
        }
      `}
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* ── Logo ── */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center gap-2 focus-visible:outline-none"
          aria-label="Griffins — back to top"
        >
          {/* Animated logo icon */}
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/30 transition-transform duration-300 group-hover:scale-110">
            <Code2 size={16} className="text-white" aria-hidden="true" />
          </div>
          <span className="font-bold tracking-tight text-white">
            griffins<span className="text-indigo-400">.dev</span>
          </span>
        </a>

        {/* ── Desktop links ── */}
        <ul
          className="hidden items-center gap-1 md:flex"
          role="list"
          aria-label="Site sections"
        >
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeSection === href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`
                    relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500
                    ${isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full bg-indigo-400"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      aria-hidden="true"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="hidden md:inline-flex btn-primary text-sm px-5 py-2"
          aria-label="Hire me"
        >
          Hire Me
        </a>

        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-300 transition-colors hover:bg-white/10 md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-drawer"
        >
          {mobileOpen
            ? <X size={20} aria-hidden="true" />
            : <Menu size={20} aria-hidden="true" />
          }
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="border-t border-white/[0.08] bg-[#0a0a0f]/95 backdrop-blur-xl md:hidden"
          >
            <ul
              className="flex flex-col gap-1 px-6 py-4"
              role="list"
            >
              {NAV_LINKS.map(({ label, href }, i) => {
                const isActive = activeSection === href.slice(1);
                return (
                  <motion.li
                    key={href}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <a
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      className={`
                        flex items-center rounded-xl px-4 py-3 text-sm font-medium
                        transition-colors duration-200
                        ${isActive
                          ? "bg-indigo-500/15 text-indigo-300"
                          : "text-gray-400 hover:bg-white/5 hover:text-white"
                        }
                      `}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {label}
                    </a>
                  </motion.li>
                );
              })}

              <motion.li
                custom={NAV_LINKS.length}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                className="mt-2"
              >
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="btn-primary w-full justify-center"
                >
                  Hire Me
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

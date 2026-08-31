"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { personal, navigation } from "@/config/portfolio";
import { EASE, DUR } from "@/lib/motion";
import ThemeToggle from "@/components/ui/ThemeToggle";

const SCROLL_THRESHOLD = 24;

const SECTION_IDS = navigation.map((item) => item.href.replace("#", ""));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const reduce = useReducedMotion();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const next = latest > SCROLL_THRESHOLD;
    setScrolled((prev) => (prev === next ? prev : next));
  });

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      menuButtonRef.current?.focus();
    };
  }, [menuOpen]);

  return (
    <>
      <header

        className={`
          fixed inset-x-0 top-0 z-40
          transition-[background-color,border-color,backdrop-filter]
          duration-[var(--dur-ui)] ease-[var(--ease-out)]
          ${scrolled
            ? "border-b border-line bg-scrim backdrop-blur-[10px]"
            : "border-b border-transparent bg-transparent"}
        `}
      >
        <nav
          aria-label="Primary"
          className={`
            shell flex items-center justify-between
            transition-[height] duration-[var(--dur-ui)] ease-[var(--ease-out)]
            ${scrolled ? "h-[60px]" : "h-[72px]"}
          `}
        >
          <a
            href="#home"
            className="
              font-mono text-[13px] uppercase tracking-[0.18em] text-ink
              transition-colors duration-200 ease-[var(--ease-out)] hover:text-accent
            "
          >
            {personal.name}
            <span className="sr-only"> {personal.fullName}, home</span>
          </a>

          {/* --- Links (desktop) ----------------------------------------- */}
          <ul className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;

              return (
                <li key={item.href} className="relative">
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`
                      relative block py-1 text-[13.5px]
                      transition-colors duration-200 ease-[var(--ease-out)]
                      ${isActive ? "text-ink" : "text-muted hover:text-ink"}
                    `}
                  >
                    {item.label}
                  </a>

                  {isActive && (
                    <motion.span
                      layoutId={reduce ? undefined : "nav-active"}
                      className="absolute -bottom-0.5 left-0 h-px w-full bg-accent"
                      transition={{ duration: DUR.ui, ease: EASE.out }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1 md:gap-4">
            {personal.available && (
              <span className="status hidden lg:inline-flex">
                <span className="status-dot" aria-hidden="true" />
                {personal.availabilityLabel}
              </span>
            )}

            <ThemeToggle />

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="
                grid h-11 w-11 place-items-center text-ink md:hidden
                active:translate-y-px
              "
            >
              <List size={20} weight="regular" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-50 bg-surface md:hidden"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: DUR.ui, ease: EASE.out }}
          >
            <div className="shell flex h-[72px] items-center justify-between">
              <span className="font-mono text-[13px] uppercase tracking-[0.18em] text-ink">
                {personal.name}
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                autoFocus
                className="grid h-11 w-11 place-items-center text-ink active:translate-y-px"
              >
                <X size={20} weight="regular" />
              </button>
            </div>

            <nav aria-label="Mobile" className="shell mt-8">
              <ul className="flex flex-col">
                {navigation.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.32,
                      delay: reduce ? 0 : 0.04 + i * 0.045,
                      ease: EASE.out,
                    }}
                    className="border-b border-line"
                  >
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="
                        block py-5 font-display text-[2rem] leading-none tracking-[-0.03em]
                        text-ink transition-colors duration-200 ease-[var(--ease-out)]
                        active:text-accent
                      "
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-4">
                {personal.available && (
                  <span className="status self-start">
                    <span className="status-dot" aria-hidden="true" />
                    {personal.availabilityLabel}
                  </span>
                )}
                <a href={`mailto:${personal.email}`} className="link text-[15px] text-muted">
                  {personal.email}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

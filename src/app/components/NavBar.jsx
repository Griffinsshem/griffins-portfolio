"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Mail, Folder, Menu, X, Code2 } from "lucide-react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const navLinks = [
    {
      label: "Home",
      icon: <Home className="w-4 h-4" />,
      href: "/",
      section: "home",
    },
    {
      label: "About",
      icon: <User className="w-4 h-4" />,
      href: "/about",
    },
    {
      label: "Projects",
      icon: <Folder className="w-4 h-4" />,
      href: "/projects",
    },
    {
      label: "Contact",
      icon: <Mail className="w-4 h-4" />,
      href: "/contact",
      section: "contact",
    },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight 
             text-white transition hover:text-blue-400"
        >
          <Code2 className="h-5 w-5 text-blue-500" />
          <span>
            dev<span className="text-blue-500">Griffins</span>
          </span>
        </Link>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (pathname === "/" && activeSection === link.section);

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`group relative flex items-center gap-2 text-sm font-bold transition-colors
                  ${isActive
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-white"
                  }
                `}
              >
                {link.icon}
                {link.label}

                {/* Active indicator */}
                <span
                  className={`pointer-events-none absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-blue-500 transition-all duration-300
                    ${isActive ? "opacity-100" : "opacity-0"}
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden rounded-lg border border-white/10 bg-white/5 p-2 text-gray-300 transition hover:bg-white/10 hover:text-white"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-xl">
          <ul className="flex flex-col gap-6 px-6 py-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 text-base font-medium transition
                    ${pathname === link.href
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                    }
                  `}
                >
                  {link.icon}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

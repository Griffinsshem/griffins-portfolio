"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Mail, Folder, Menu, X } from "lucide-react";

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
      icon: <Home className="w-5 h-5" />,
      href: "/",
      section: "home",
    },
    {
      label: "About",
      icon: <User className="w-5 h-5" />,
      href: "/about",
    },
    {
      label: "Projects",
      icon: <Folder className="w-5 h-5" />,
      href: "/projects",
    },
    {
      label: "Contact",
      icon: <Mail className="w-5 h-5" />,
      href: "/#contact",
      section: "contact",
    },
  ];


  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-white hover:text-blue-400 transition"
        >
          dev<span className="text-blue-500">Griffins</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (pathname === "/" && activeSection === link.section);

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative flex items-center gap-2 text-sm font-medium transition-all
                  ${isActive
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                  }
                `}
              >
                {link.icon}
                {link.label}
                <span
                  className={`absolute -bottom-2 left-0 h-[2px] bg-blue-500 rounded-full transition-all duration-300
                    ${isActive ? "w-full" : "w-0"}
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-blue-400 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-black border-t border-gray-800">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 text-lg font-medium transition
                    ${pathname === link.href
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-blue-400"
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

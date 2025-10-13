"use client";
import React, { useState, useEffect } from "react";
import { Home, User, Mail, Folder, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
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
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { id: "home", label: "Home", icon: <Home className="w-5 h-5" /> },
    { id: "about", label: "About", icon: <User className="w-5 h-5" /> },
    { id: "projects", label: "Projects", icon: <Folder className="w-5 h-5" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-black/90 backdrop-blur-md shadow-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/devGriff.svg"
            alt="Logo"
            className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 relative">
            {navLinks.map((link) => (
              <li key={link.id} className="relative">
                <a
                  href={`#${link.id}`}
                  className={`flex items-center gap-2 text-base font-medium transition-all duration-300 ${activeSection === link.id
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-blue-400"
                    }`}
                >
                  {link.icon}
                  {link.label}
                </a>
                {/* Animated underline */}
                <span
                  className={`absolute bottom-[-4px] left-0 h-[2px] bg-blue-500 rounded-full transition-all duration-500 ease-out ${activeSection === link.id ? "w-full" : "w-0"
                    }`}
                ></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-blue-400 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-black border-t border-gray-800">
          <ul className="flex flex-col items-start gap-4 p-4">
            {navLinks.map((link) => (
              <li key={link.id} className="w-full">
                <a
                  href={`#${link.id}`}
                  className={`flex items-center gap-2 text-lg font-medium transition-all duration-300 ${activeSection === link.id
                      ? "text-blue-400 border-b-2 border-blue-500 pb-1"
                      : "text-gray-300 hover:text-blue-400"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

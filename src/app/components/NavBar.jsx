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
    <header className="fixed top-0 left-0 w-full z-30 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
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
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`flex items-center gap-2 text-base transition-all duration-200 hover:scale-110 ${activeSection === link.id
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700 hover:text-blue-600"
                    }`}
                >
                  {link.icon}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-start gap-4 p-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`flex items-center gap-2 text-lg transition-all duration-200 hover:scale-110 ${activeSection === link.id
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700 hover:text-blue-600"
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

"use client";
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-white py-16 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            I&apos;m <span className="font-semibold">Griffins</span>, a
            fullstack web developer passionate about building modern, scalable,
            and user-friendly digital products. I love transforming ideas into
            beautiful, functional applications that create meaningful impact.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            With a strong focus on clean code, responsive design, and seamless
            user experiences, I aim to deliver solutions that not only look
            great but also perform at the highest standards.
          </p>
        </div>

        {/* Right Side - Skills / Highlights */}
        <div className="bg-gray-50 rounded-xl shadow-md p-8">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
            Skills & Expertise
          </h3>
          <ul className="grid grid-cols-2 gap-4 text-gray-700">
            {[
              "HTML / CSS",
              "JavaScript (ES6+)",
              "React / Next.js",
              "Node.js / Express",
              "Python / Flask",
              "Tailwind CSS",
            ].map((skill, index) => (
              <li
                key={index}
                className="bg-white rounded-lg p-4 shadow text-center font-medium transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:scale-105 cursor-pointer"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

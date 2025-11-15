"use client";
import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-black text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Heading */}
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Let’s <span className="text-blue-500">Connect</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Whether you have a project, want to collaborate, or just want to say hello —
            feel free to reach out anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Email Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur bg-zinc-900/60 border border-zinc-800 hover:border-blue-600 
                       hover:shadow-blue-500/20 rounded-2xl p-10 shadow-xl transition-all duration-300
                       flex flex-col items-center"
          >
            <Mail className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-400 mt-1">griffinsshem254@gmail.com</p>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur bg-zinc-900/60 border border-zinc-800 hover:border-blue-600 
                       hover:shadow-blue-500/20 rounded-2xl p-10 shadow-xl transition-all duration-300
                       flex flex-col items-center"
          >
            <Phone className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-gray-400 mt-1">+254 794 858 804</p>
          </motion.div>

          {/* Location Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur bg-zinc-900/60 border border-zinc-800 hover:border-blue-600 
                       hover:shadow-blue-500/20 rounded-2xl p-10 shadow-xl transition-all duration-300
                       flex flex-col items-center"
          >
            <MapPin className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-gray-400 mt-1">Nairobi, Kenya</p>
          </motion.div>

        </div>

        {/* CTA Button
        <div className="text-center mt-20">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=griffinsshem254@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 
             px-8 py-4 text-lg rounded-xl font-medium shadow-md hover:shadow-blue-500/20 
             transition-all duration-300"
          >
            <Send className="w-5 h-5" />
            Send me an email
          </a>

        </div> */}
      </div>
    </section>
  );
}

"use client";
import React from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white py-28 px-6 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Heading */}
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Ready to <span className="text-blue-500">Work Together?</span>
          </h2>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            I’m currently open to frontend and full-stack roles, freelance work,
            and meaningful collaborations. If you’re building something impactful
            and need a developer who cares about quality, performance, and user
            experience — let’s talk.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Email */}
          <motion.div
            whileHover={{ y: -6 }}
            className="group backdrop-blur bg-zinc-900/60 border border-zinc-800 
                       hover:border-blue-500 rounded-2xl p-10 shadow-xl 
                       transition-all duration-300"
          >
            <Mail className="w-10 h-10 text-blue-500 mb-6" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-400 mb-4">
              Best for opportunities, interviews, and collaborations
            </p>
            <span className="text-blue-400 font-medium break-all">
              griffinsshem254@gmail.com
            </span>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ y: -6 }}
            className="group backdrop-blur bg-zinc-900/60 border border-zinc-800 
                       hover:border-blue-500 rounded-2xl p-10 shadow-xl 
                       transition-all duration-300"
          >
            <Phone className="w-10 h-10 text-blue-500 mb-6" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-400 mb-4">
              Quick discussions or follow-ups
            </p>
            <span className="text-blue-400 font-medium">
              +254&nbsp;794&nbsp;858&nbsp;804
            </span>
          </motion.div>

          {/* Location */}
          <motion.div
            whileHover={{ y: -6 }}
            className="group backdrop-blur bg-zinc-900/60 border border-zinc-800 
                       hover:border-blue-500 rounded-2xl p-10 shadow-xl 
                       transition-all duration-300"
          >
            <MapPin className="w-10 h-10 text-blue-500 mb-6" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-400 mb-4">
              Open to remote & hybrid opportunities
            </p>
            <span className="text-blue-400 font-medium">
              Nairobi, Kenya
            </span>
          </motion.div>

        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <a
            href="mailto:griffinsshem254@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl 
                       bg-blue-600 hover:bg-blue-700 text-lg font-semibold
                       shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}

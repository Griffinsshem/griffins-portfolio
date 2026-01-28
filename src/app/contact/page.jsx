"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [open, setOpen] = useState(false);

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">

          {/* Email */}
          <motion.div whileHover={{ y: -6 }} className="card">
            <Mail className="icon" />
            <h3>Email</h3>
            <p>Best for interviews & opportunities</p>
            <span className="highlight">griffinsshem254@gmail.com</span>
          </motion.div>

          {/* Phone */}
          <motion.div whileHover={{ y: -6 }} className="card">
            <Phone className="icon" />
            <h3>Phone</h3>
            <p>Quick discussions</p>
            <span className="highlight">+254 794 858 804</span>
          </motion.div>

          {/* Location */}
          <motion.div whileHover={{ y: -6 }} className="card">
            <MapPin className="icon" />
            <h3>Location</h3>
            <p>Open to remote & hybrid</p>
            <span className="highlight">Nairobi, Kenya</span>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl 
              bg-blue-600 hover:bg-blue-700 text-lg font-semibold
              shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-center justify-center px-6"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 max-w-md w-full relative"
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X />
              </button>

              <h3 className="text-2xl font-bold mb-6 text-center">
                Let’s talk 👋
              </h3>

              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/254794858804?text=Hi%20Griffins,%20I%20came%20across%20your%20portfolio."
                  target="_blank"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl
                    bg-green-600 hover:bg-green-700 font-semibold transition"
                >
                  <MessageCircle />
                  WhatsApp
                </a>

                {/* Email */}
                <a
                  href="mailto:griffinsshem254@gmail.com"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl
                    border border-zinc-700 hover:border-blue-500 transition"
                >
                  <Mail />
                  Email
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Small utility styles */}
      <style jsx>{`
        .card {
          backdrop-filter: blur(10px);
          background: rgba(24,24,27,0.6);
          border: 1px solid #27272a;
          border-radius: 1rem;
          padding: 2.5rem;
          transition: all .3s;
        }
        .icon {
          width: 40px;
          height: 40px;
          color: #3b82f6;
          margin-bottom: 1.5rem;
        }
        .highlight {
          color: #60a5fa;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}

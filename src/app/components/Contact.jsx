"use client";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-black text-white py-20 px-6 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto text-center space-y-16">
        {/* Heading */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Let’s <span className="text-blue-500">Connect</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to say hello?
            Feel free to reach out — I’d love to hear from you!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Email */}
          <div className="flex flex-col items-center bg-zinc-900 border border-zinc-800 rounded-2xl p-10 shadow-lg hover:shadow-blue-600/30 hover:border-blue-600 transition-all duration-300">
            <Mail className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-400">griffinsshem254@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center bg-zinc-900 border border-zinc-800 rounded-2xl p-10 shadow-lg hover:shadow-blue-600/30 hover:border-blue-600 transition-all duration-300">
            <Phone className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-400">+254 794858804</p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center bg-zinc-900 border border-zinc-800 rounded-2xl p-10 shadow-lg hover:shadow-blue-600/30 hover:border-blue-600 transition-all duration-300">
            <MapPin className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-400">Nairobi, Kenya</p>
          </div>
        </div>
      </div>
    </section>
  );
}

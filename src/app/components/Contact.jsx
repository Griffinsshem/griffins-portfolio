"use client";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 py-20 px-6"
    >
      <div className="max-w-5xl mx-auto text-center space-y-12">
        {/* Heading */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let’s <span className="text-blue-600">Connect</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Have a project in mind or just want to say hello?
            Feel free to reach out. I’d love to hear from you!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition">
            <Mail className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">griffins@example.com</p>
          </div>

          <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition">
            <Phone className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600">+254 700 000 000</p>
          </div>

          <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition">
            <MapPin className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Location</h3>
            <p className="text-gray-600">Nairobi, Kenya</p>
          </div>
        </div>
      </div>
    </section>
  );
}

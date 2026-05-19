"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail, MapPin, Send, CheckCircle2, AlertCircle,
  Github, Linkedin, Twitter, Loader2
} from "lucide-react";
import { personal, socialLinks } from "@/config/portfolio";
import { fadeUp, slideInLeft, slideInRight, staggerContainer, viewport } from "@/lib/motion";


const ICON_MAP = { Github, Linkedin, Twitter, Mail };

function FormField({
  id, label, type = "text", value, onChange, error,
  rows,
  required = true,
}) {
  const isTextarea = rows !== undefined;
  const inputClass = `
    w-full rounded-xl border bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder-transparent
    outline-none transition-all duration-200
    ${error
      ? "border-red-500/60 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]"
      : "border-white/[0.08] focus:border-indigo-500/60 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)]"
    }
  `;

  return (
    <div className="group relative">
      {/* Floating label */}
      <label
        htmlFor={id}
        className={`
          pointer-events-none absolute left-4 text-sm transition-all duration-200
          ${value
            ? "-top-2.5 text-xs text-indigo-400 bg-[#0a0a0f] px-1"
            : "top-3.5 text-gray-500 group-focus-within:-top-2.5 group-focus-within:text-xs group-focus-within:text-indigo-400 group-focus-within:bg-[#0a0a0f] group-focus-within:px-1"
          }
        `}
      >
        {label} {required && <span className="text-indigo-400" aria-hidden="true">*</span>}
      </label>

      {/* Input or Textarea */}
      {isTextarea ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          value={value}
          onChange={onChange}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          placeholder={label}
          className={`${inputClass} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          placeholder={label}
          className={inputClass}
        />
      )}

      {/* Inline error message */}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1 flex items-center gap-1 text-xs text-red-400">
          <AlertCircle size={11} aria-hidden="true" /> {error}
        </p>
      )}
    </div>
  );
}

function validate({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = "Name is required.";
  if (!email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Enter a valid email address.";
  if (!message.trim()) errors.message = "Message is required.";
  else if (message.trim().length < 20)
    errors.message = "Message must be at least 20 characters.";
  return errors;
}

function ContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");

    try {

      await new Promise((res) => setTimeout(res, 1500));
      setStatus("success");
      setFields({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.div
      variants={slideInRight}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="glass-card p-8"
    >
      <h3 className="mb-6 text-lg font-bold text-white">Send a message</h3>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          /* ── Success state ── */
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 py-12 text-center"
            role="alert"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15">
              <CheckCircle2 size={28} className="text-emerald-400" />
            </div>
            <div>
              <p className="font-semibold text-white">Message sent!</p>
              <p className="mt-1 text-sm text-gray-500">
                Thanks for reaching out. I'll get back to you within 24 hours.
              </p>
            </div>
            <button
              onClick={() => setStatus("idle")}
              className="btn-ghost py-2 text-sm"
            >
              Send another
            </button>
          </motion.div>
        ) : (
          /* ── Form ── */
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            noValidate
            aria-label="Contact form"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormField
                id="name"
                label="Your Name"
                value={fields.name}
                onChange={handleChange}
                error={errors.name}
              />
              <FormField
                id="email"
                label="Email Address"
                type="email"
                value={fields.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>

            <FormField
              id="message"
              label="Your Message"
              value={fields.message}
              onChange={handleChange}
              error={errors.message}
              rows={5}
            />

            {/* API error banner */}
            {status === "error" && (
              <p role="alert" className="flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-400">
                <AlertCircle size={15} aria-hidden="true" />
                Something went wrong. Please try again or email me directly.
              </p>
            )}

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileTap={{ scale: 0.97 }}
              className="btn-primary w-full justify-center py-3.5 disabled:cursor-not-allowed disabled:opacity-60"
              aria-busy={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                <>
                  <Send size={15} aria-hidden="true" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ContactInfo() {
  return (
    <motion.div
      variants={slideInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="flex flex-col gap-6"
    >
      {/* Availability banner */}
      <div className="glass-card p-6">
        <div className="mb-4 flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
          </span>
          <span className="text-sm font-semibold text-emerald-400">
            Available for new projects
          </span>
        </div>
        <p className="text-sm leading-relaxed text-gray-400">
          I'm currently open to freelance contracts and full-time remote
          opportunities. Let's build something great together.
        </p>
      </div>

      {/* Contact details */}
      <div className="glass-card p-6">
        <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-gray-500">
          Contact details
        </h3>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col gap-4"
          role="list"
        >
          <motion.li variants={fadeUp} className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10">
              <Mail size={16} className="text-indigo-400" aria-hidden="true" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-600">Email</p>
              <a
                href={`mailto:${personal.email}`}
                className="text-sm text-gray-300 transition-colors hover:text-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 rounded"
              >
                {personal.email}
              </a>
            </div>
          </motion.li>

          <motion.li variants={fadeUp} className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10">
              <MapPin size={16} className="text-indigo-400" aria-hidden="true" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-600">Location</p>
              <p className="text-sm text-gray-300">{personal.location}</p>
            </div>
          </motion.li>
        </motion.ul>
      </div>

      {/* Social links */}
      <div className="glass-card p-6">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
          Find me online
        </h3>
        <ul className="flex gap-3" role="list" aria-label="Social media links">
          {socialLinks.map(({ label, href, icon }) => {
            const Icon = ICON_MAP[icon];
            return (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-200 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500"
                >
                  {Icon && <Icon size={17} aria-hidden="true" />}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0a0a0f] section-padding"
      aria-labelledby="contact-heading"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-max relative z-10">

        {/* ── Section header ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">
            Let's work together
          </p>
          <h2 id="contact-heading" className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-4 mx-auto max-w-lg text-sm text-gray-500">
            Have a project in mind or just want to chat? I'd love to hear from
            you. I typically respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.4fr]">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

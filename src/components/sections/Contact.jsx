"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  GithubLogo,
  LinkedinLogo,
  XLogo,
  FilePdf,
} from "@phosphor-icons/react/dist/ssr";

const LINK_ICONS = { github: GithubLogo, linkedin: LinkedinLogo, x: XLogo };
import { personal, contact, social } from "@/config/portfolio";
import { revealUp, stagger, viewportOnce } from "@/lib/motion";

export default function Contact() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" aria-labelledby="contact-heading" className="shell section">
      <motion.div
        variants={stagger(0.09)}
        initial={reduce ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="grid-12 gap-y-8">
          <div className="col-span-12 md:col-span-3">
            <motion.p variants={revealUp} className="meta md:sticky md:top-28">
              <span className="text-faint">05</span> Contact
            </motion.p>
          </div>

          <div className="col-span-12 md:col-span-9">
            <motion.h2
              id="contact-heading"
              variants={revealUp}
              className="font-display text-display max-w-[14ch] text-ink"
            >
              {contact.statement}
            </motion.h2>

            <motion.p variants={revealUp} className="prose-measure mt-8 text-lead text-muted">
              {contact.lead}
            </motion.p>

            <motion.div variants={revealUp} className="mt-12 md:mt-16">
              <p className="meta mb-3">{contact.cta}</p>
              <a
                href={`mailto:${personal.email}`}
                className="link font-display text-title break-all text-ink hover:text-accent"
              >
                {personal.email}
              </a>
            </motion.div>

            <motion.ul variants={revealUp} className="mt-14 md:mt-20">
              {social
                .filter((link) => link.id !== "email")
                .map((link) => {
                  const Icon = LINK_ICONS[link.id];
                  return (
                  <li key={link.id} className="border-t border-line">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-baseline justify-between gap-6 py-5 transition-colors duration-200 ease-[var(--ease-out)] hover:text-accent"
                    >
                      <span className="flex items-center gap-3 font-display text-heading text-ink transition-colors duration-200 ease-[var(--ease-out)] group-hover:text-accent">
                        {Icon ? <Icon size={18} weight="regular" aria-hidden="true" className="text-faint transition-colors duration-200 ease-[var(--ease-out)] group-hover:text-accent" /> : null}
                        {link.label}
                      </span>
                      <span className="flex items-center gap-3">
                        <span className="meta">{link.handle}</span>
                        <ArrowUpRight
                          size={14}
                          weight="bold"
                          aria-hidden="true"
                          className="text-faint transition-transform duration-200 ease-[var(--ease-out)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                    </a>
                  </li>
                  );
                })}

              <li className="border-t border-line">
                <a
                  href={personal.resume}
                  download
                  className="group flex items-baseline justify-between gap-6 py-5 hover:text-accent"
                >
                  <span className="flex items-center gap-3 font-display text-heading text-ink transition-colors duration-200 ease-[var(--ease-out)] group-hover:text-accent">
                    <FilePdf size={18} weight="regular" aria-hidden="true" className="text-faint transition-colors duration-200 ease-[var(--ease-out)] group-hover:text-accent" />
                    Resume
                  </span>
                  <span className="meta">PDF</span>
                </a>
              </li>
              <li className="border-t border-line" aria-hidden="true" />
            </motion.ul>

            {personal.available && (
              <motion.div variants={revealUp} className="mt-10">
                <span className="status">
                  <span className="status-dot" aria-hidden="true" />
                  {personal.availabilityLabel}
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

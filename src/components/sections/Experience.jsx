"use client";

import { motion, useReducedMotion } from "framer-motion";
import { timeline } from "@/config/portfolio";
import { revealUp, stagger, viewportOnce } from "@/lib/motion";


export default function Experience() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" aria-labelledby="experience-heading" className="shell section">
      <div className="grid-12 gap-y-10">
        <div className="col-span-12 md:col-span-3">
          <p className="meta md:sticky md:top-28">
            <span className="text-faint">04</span> Experience
          </p>
        </div>

        <div className="col-span-12 md:col-span-9">
          <h2 id="experience-heading" className="font-display text-title max-w-[20ch] text-ink">
            Networks, then structures, then software.
          </h2>
          <p className="prose-measure mt-6 text-muted">
            Not a straight line into this field. Each step taught me something the
            next one needed.
          </p>

          <motion.ol
            className="mt-12 md:mt-16"
            variants={stagger(0.07)}
            initial={reduce ? false : "hidden"}
            whileInView="visible"
            viewport={viewportOnce}
          >
            {timeline.map((entry) => (
              <motion.li
                key={entry.id}
                variants={revealUp}
                className="grid-12 gap-y-3 border-t border-line py-8 md:py-10"
              >
                <div className="col-span-12 md:col-span-3">
                  {entry.period ? (
                    <p className="meta text-muted">{entry.period}</p>
                  ) : (
                    <p className="meta text-faint"> - </p>
                  )}
                </div>

                <div className="col-span-12 flex flex-col gap-3 md:col-span-9">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display text-heading text-ink">{entry.role}</h3>
                    <p className="text-[15px] text-muted">
                      {entry.org}
                      <span className="text-faint"> — {entry.place}</span>
                    </p>
                  </div>

                  <p className="prose-measure text-[15px] leading-relaxed text-muted">
                    {entry.description}
                  </p>

                  {entry.tags.length > 0 && (
                    <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-2">
                      {entry.tags.map((tag) => (
                        <li key={tag} className="font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.li>
            ))}

            <li className="border-t border-line" aria-hidden="true" />
          </motion.ol>
        </div>
      </div>
    </section>
  );
}

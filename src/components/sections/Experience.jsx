"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { timeline } from "@/config/portfolio";
import { revealUp, stagger, viewportOnce } from "@/lib/motion";
import RevealText from "@/components/ui/RevealText";


/* ==========================================================================
   Scroll-linked timeline line. A hairline runs down the left of the list
   and fills with the accent colour as the reader moves through it, so the
   list reads as a path travelled rather than four separate rows.

   The fill is scaleY on a full-height element with its origin at the top,
   not an animated height, so it costs a transform and no layout. The
   offsets start the fill when the list's top reaches 70% down the screen
   and finish it when the list's bottom reaches 60%, which keeps the line
   ahead of the reader's eye rather than trailing it.

   Under prefers-reduced-motion the fill is held at zero; the track stays,
   so the layout is identical and nothing moves.
   ========================================================================== */

export default function Experience() {
  const reduce = useReducedMotion();
  const trackRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 70%", "end 60%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.3 });

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
            <RevealText>Networks, then structures, then software.</RevealText>
          </h2>
          <p className="prose-measure mt-6 text-muted">
            Not a straight line into this field. Each step taught me something the
            next one needed.
          </p>

          <div ref={trackRef} className="relative mt-12 pl-6 md:mt-16 md:pl-10">
          <span aria-hidden="true" className="absolute bottom-0 left-0 top-0 w-px bg-line" />
          {/* Always rendered, so the server markup and the first client
              render are the same element tree; reduced motion only pins
              the fill at zero rather than removing it. */}
          <motion.span
            aria-hidden="true"
            className="absolute bottom-0 left-0 top-0 w-px origin-top bg-accent"
            style={{ scaleY: reduce ? 0 : fill }}
          />

          <motion.ol
            variants={stagger(0.07)}
            initial={reduce ? false : "hidden"}
            whileInView="visible"
            viewport={viewportOnce}
          >
            {timeline.map((entry) => (
              <motion.li
                key={entry.id}
                variants={revealUp}
                className="grid-12 relative gap-y-3 border-t border-line py-8 md:py-10"
              >
                {/* Node on the line, level with this entry's top rule. */}
                <span
                  aria-hidden="true"
                  className="absolute -left-6 top-0 h-[7px] w-[7px] -translate-x-[3px] -translate-y-1/2 border border-line-strong bg-surface md:-left-10"
                />
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
      </div>
    </section>
  );
}

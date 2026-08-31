"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { personal, about } from "@/config/portfolio";
import { reveal, revealUp, revealImage, stagger, viewportOnce } from "@/lib/motion";

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" aria-labelledby="about-heading" className="shell section">
      <div className="grid-12 gap-y-10">
        <div className="col-span-12 md:col-span-3">
          <p className="meta md:sticky md:top-28">
            <span className="text-faint">01</span> About
          </p>
        </div>

        <motion.div
          className="col-span-12 md:col-span-9 lg:col-span-8"
          variants={stagger(0.08)}
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2
            id="about-heading"
            variants={revealUp}
            className="font-display text-title max-w-[20ch] text-ink"
          >
            {about.statement}
          </motion.h2>

          <div className="prose-measure mt-8 flex flex-col gap-5 md:mt-10">
            {about.paragraphs.map((paragraph) => (
              <motion.p key={paragraph.slice(0, 24)} variants={revealUp} className="text-muted">
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid-12 mt-20 items-start gap-y-12 md:mt-28">
        <motion.figure
          className="col-span-8 sm:col-span-5 md:col-span-4"
          {...reveal(reduce, revealImage)}
        >
          {/* Rendered at its intrinsic 600x600 with width and height
              attributes rather than with fill. fill needs a positioned
              parent whose height resolves, which is one more thing that can
              silently collapse; this cannot. */}
          <Image
            src={personal.portrait}
            alt={`${personal.fullName}, ${personal.role}`}
            width={600}
            height={600}
            sizes="(max-width: 640px) 66vw, (max-width: 1024px) 40vw, 340px"
            className="w-full bg-surface-raised object-cover"
          />
          <figcaption className="meta mt-3">{personal.location}</figcaption>
        </motion.figure>

        <motion.div
          className="col-span-12 border-t border-line pt-6 md:col-span-7 md:col-start-6"
          {...reveal(reduce, revealUp, 0.1)}
        >
          <p className="meta mb-4">Before software</p>
          <p className="max-w-[46ch] text-lead text-ink">{about.note}</p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { projects, work } from "@/config/portfolio";
import { revealUp, settleImage, stagger, viewportOnce } from "@/lib/motion";
import RevealText from "@/components/ui/RevealText";
import { useSpotlight } from "@/hooks/useSpotlight";

/* ==========================================================================
   WORK INDEX

   The homepage rail shows four screenshots and nothing else; this is where
   a reader who wants more goes. It is a list rather than a grid, so each
   project gets a full row of horizontal space for its tagline instead of
   being cropped into a card.
   ========================================================================== */

export default function WorkIndex() {
  const reduce = useReducedMotion();
  const spotlight = useSpotlight();

  return (
    <div className="shell pb-24 pt-32 md:pb-32 md:pt-40">
      <header>
        <p className="meta">Work</p>
        <h1 className="mt-6 max-w-[16ch] font-display text-display text-ink">
          <RevealText delay={0.1} step={0.07}>{work.indexHeading}</RevealText>
        </h1>
        <p className="prose-measure mt-8 text-lead text-muted">
          {work.indexLead}
        </p>
      </header>

      <motion.ul
        className="mt-16 flex flex-col md:mt-24"
        variants={stagger(0.08)}
        initial={reduce ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
      >
        {projects.map((project) => (
          <motion.li
            key={project.id}
            variants={revealUp}
            /* The glow bleeds 1rem past the row on each side so the text at
               the column edge is not flush against the edge of the light.
               1rem is under the smallest gutter, so it cannot cause
               horizontal scroll. */
            className="spotlight border-t border-line [--spot-bleed:1rem] last:border-b"
            onPointerMove={spotlight.onPointerMove}
          >
            <Link href={`/work/${project.id}`} className="group grid-12 items-center gap-y-6 py-8 md:py-10">
              <div className="col-span-12 sm:col-span-5 md:col-span-4">
                <div className="overflow-hidden bg-surface-raised">
                  <motion.div variants={settleImage}>
                    {/* alt is empty: the heading beside it already names the
                        project, so describing the image repeats it. */}
                    <Image
                      src={project.image}
                      alt=""
                      width={project.width}
                      height={project.height}
                      sizes="(max-width: 640px) 100vw, 380px"
                      className="aspect-[5/3] w-full object-cover object-top transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.03]"
                    />
                  </motion.div>
                </div>
              </div>

              <div className="col-span-12 flex flex-col gap-3 sm:col-span-7 md:col-span-8 md:col-start-5">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="meta text-faint">{project.index}</span>
                  <h2 className="flex items-center gap-3 font-display text-title text-ink transition-colors duration-200 ease-[var(--ease-out)] group-hover:text-accent">
                    {project.title}
                    <ArrowRight size={18} weight="bold" aria-hidden="true"
                      className="text-faint transition-[transform,color] duration-200 ease-[var(--ease-out)] group-hover:translate-x-1 group-hover:text-accent" />
                  </h2>
                </div>
                <p className="max-w-[46ch] text-[15px] leading-relaxed text-muted">{project.tagline}</p>
                <p className="meta text-faint">{project.role} · {project.year}</p>
              </div>

            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

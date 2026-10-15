"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { projects } from "@/config/portfolio";
import { viewportOnce } from "@/lib/motion";

/* ==========================================================================
   WORK (homepage)

   Was four full case studies inline, which made the homepage long and gave
   every project the same weight as the hero. The studies now live on their
   own routes, and this is the gallery: four screenshots a reader can scan
   in one gesture, with a route out to the full set.

   The section breaks out of .shell so the rail can bleed past the gutter.
   A card cut off at the right edge is what tells the reader there is more,
   which is why the scrollbar is hidden rather than styled.

   Titles sit below each screenshot rather than overlaid on it: a label on
   top of a screenshot is a contrast gamble against an image whose colours
   are not ours to control.
   ========================================================================== */

export default function Projects() {
  const reduce = useReducedMotion();

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section">
      <div className="shell">
        <div className="grid-12 gap-y-10">
          <div className="col-span-12 md:col-span-3">
            <p className="meta md:sticky md:top-28"><span className="text-faint">03</span> Work</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 id="projects-heading" className="font-display text-title max-w-[18ch] text-ink">
              Four things I built, and what I would change.
            </h2>
          </div>
        </div>
      </div>

      <div className="shell mt-12 md:mt-16">
        <ul className="rail -mx-[var(--gutter)] gap-5 px-[var(--gutter)] pb-2">
          {projects.map((project, i) => (
            <motion.li
              key={project.id}
              /* Deliberately under a full viewport so the next card is always
                 partly visible, at every breakpoint. */
              className="w-[78vw] max-w-[460px] sm:w-[54vw] lg:w-[34vw]"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, delay: reduce ? 0 : i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/work/${project.id}`} className="group flex flex-col gap-4">
                <div className="overflow-hidden bg-surface-raised">
                  {/* alt is empty: the title directly below names the project,
                      so describing the image would repeat it. */}
                  <Image
                    src={project.image}
                    alt=""
                    width={project.width}
                    height={project.height}
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 54vw, 460px"
                    className="aspect-[5/3] w-full object-cover object-top transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-baseline gap-3">
                    <span className="meta text-faint">{project.index}</span>
                    <h3 className="font-display text-heading text-ink transition-colors duration-200 ease-[var(--ease-out)] group-hover:text-accent">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-[14px] leading-snug text-muted">{project.tagline}</p>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="shell mt-12 md:mt-16">
        <Link href="/work" className="btn btn-ghost">
          View all work
          <ArrowRight size={15} weight="bold" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

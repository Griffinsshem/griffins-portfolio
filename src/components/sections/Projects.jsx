"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { projects, work } from "@/config/portfolio";
import { revealCard, settleImage, stagger } from "@/lib/motion";
import RevealText from "@/components/ui/RevealText";
import Magnetic from "@/components/ui/Magnetic";
import ProjectLinks from "@/components/work/ProjectLinks";
import { useSpotlight } from "@/hooks/useSpotlight";

/* One cascade for the whole rail. Defined once at module scope so the
   variants object is stable across renders. */
const railStagger = stagger(0.14, 0.05);

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
  const spotlight = useSpotlight();

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section">
      <div className="shell">
        <div className="grid-12 gap-y-10">
          <div className="col-span-12 md:col-span-3">
            <p className="meta md:sticky md:top-28"><span className="text-faint">03</span> Work</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 id="projects-heading" className="font-display text-title max-w-[18ch] text-ink">
              <RevealText>{work.heading}</RevealText>
            </h2>
          </div>
        </div>
      </div>

      <div className="shell mt-12 md:mt-16">
        {/* The cascade is driven from the rail, not from each card.

            Each card used to wait for its own 25% to enter the viewport.
            On a rail, the card cut off at the right edge is the cue that
            there is more to scroll, and a card that is only a sliver
            visible never reached 25%, so it stayed invisible and the cue
            was missing. Triggering once from the container reveals every
            card in order, left to right, including the one at the edge. */}
        <motion.ul
          className="rail -mx-[var(--gutter)] gap-5 px-[var(--gutter)] pb-2"
          variants={railStagger}
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          /* Fire when the rail is properly on screen, not when its top
              edge first peeks in. At amount 0.2 the cascade began while the
              cards were still at the bottom of the viewport and had
              finished before the reader scrolled them into view, so it
              looked like the cards were simply there. The negative bottom
              margin holds it back until the rail is well inside the
              screen. */
          viewport={{ once: true, amount: 0.4, margin: "0px 0px -15% 0px" }}
        >
          {projects.map((project) => (
            <motion.li
              key={project.id}
              variants={revealCard}
              /* Deliberately under a full viewport so the next card is always
                 partly visible, at every breakpoint. */
              className="w-[78vw] max-w-[460px] sm:w-[54vw] lg:w-[34vw]"
            >
              <Link href={`/work/${project.id}`} className="group flex flex-col gap-4">
                <div
                  className="spotlight spotlight-over overflow-hidden bg-surface-raised"
                  onPointerMove={spotlight.onPointerMove}
                >
                  {/* The settle lives on this wrapper, inside the clip, so it
                      composes with the hover zoom on the image rather than
                      fighting it for the same transform. */}
                  <motion.div variants={settleImage}>
                    {/* alt is empty: the title directly below names the
                        project, so describing the image would repeat it. */}
                    <Image
                      src={project.image}
                      alt=""
                      width={project.width}
                      height={project.height}
                      sizes="(max-width: 640px) 78vw, (max-width: 1024px) 54vw, 460px"
                      className="aspect-[5/3] w-full object-cover object-top transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.03]"
                    />
                  </motion.div>
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
              {/* Outside the Link: nested anchors are invalid. */}
              <ProjectLinks project={project} from="home-rail" className="mt-4" />
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div className="shell mt-12 md:mt-16">
        <Magnetic>
          <Link href="/work" className="btn btn-ghost">
            View all work
            <ArrowRight size={15} weight="bold" aria-hidden="true" />
          </Link>
        </Magnetic>
      </div>
    </section>
  );
}

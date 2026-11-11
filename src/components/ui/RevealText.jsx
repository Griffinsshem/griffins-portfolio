"use client";

import { Fragment, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { revealLine, stagger, viewportOnce } from "@/lib/motion";

/* ==========================================================================
   REVEAL TEXT

   Word-by-word mask reveal for headings. Each word rises out of its own
   clip, the same move the hero headline makes per line, so the page speaks
   one motion language from the first screen to the last section.

   It renders the inside of a heading, not the heading: the h2 keeps its id,
   its classes and its place in the outline, and this component only changes
   how the words arrive.

   Accessibility: the words stay real text nodes separated by real spaces, so
   a screen reader reads the heading as a normal sentence. Nothing is
   duplicated into aria-label and nothing is hidden from the tree.

   Under prefers-reduced-motion the initial state is never applied, which
   leaves the text exactly as it would be with no animation at all.

   Only strings are split. Anything else is returned untouched, so passing
   markup is safe rather than broken.

   The vertical padding and matching negative margin on each word widen the
   clip so descenders (g, y, p) are not cut off, without changing the line
   height of the heading around them.
   ========================================================================== */

export default function RevealText({ children, delay = 0, step = 0.05 }) {
  const reduce = useReducedMotion();

  /* Memoised so the variants object keeps its identity between renders;
     a fresh object every render would be re-evaluated by the animation
     system for no reason. */
  const container = useMemo(() => stagger(step, delay), [step, delay]);

  if (typeof children !== "string" || children.length === 0) return children;

  const words = children.split(" ");

  return (
    <motion.span
      className="block"
      variants={container}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={viewportOnce}
    >
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className="-my-[0.1em] inline-block overflow-hidden py-[0.1em] align-bottom">
            <motion.span variants={revealLine} className="inline-block">
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </motion.span>
  );
}

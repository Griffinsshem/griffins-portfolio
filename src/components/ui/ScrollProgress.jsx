"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/* ==========================================================================
   SCROLL PROGRESS

   A hairline that fills across the bottom edge of the navigation as the
   page scrolls. It sits on the nav's existing border line, uses the accent
   already in the palette, and is 1px tall, so it adds position information
   without adding a new visual element to the page.

   Driven by scrollYProgress through a spring rather than bound directly:
   raw scroll position tracks the wheel exactly, including its jitter, and
   the spring smooths that into something that reads as deliberate. The
   values are stiff and heavily damped, so it still feels attached to the
   scroll rather than lagging behind it.

   Removed entirely under prefers-reduced-motion. It is an ambient indicator,
   not information the page depends on, so there is nothing to degrade to.
   ========================================================================== */

export default function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      /* origin-left so it grows from the start of the line rather than
         expanding from its centre. */
      className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-accent"
    />
  );
}

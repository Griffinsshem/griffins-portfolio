"use client";

import { useCallback } from "react";
import { useReducedMotion } from "framer-motion";

/* ==========================================================================
   USE SPOTLIGHT

   Feeds the cursor position to the .spotlight class in globals.css. The
   glow itself is a CSS pseudo-element that reads --mx and --my; this hook
   only writes those two variables.

   They are written straight to the element's style rather than held in
   React state. Pointer-move fires dozens of times a second, and a re-render
   per event would cost far more than the glow is worth. Setting a custom
   property touches no React state and triggers no render at all.

   Mouse only, and not at all under prefers-reduced-motion. A glow that
   follows the cursor is motion, so it is treated as motion. (The CSS also
   hides the glow on touch devices and in reduced motion, so a skipped
   update can never leave it stuck in the wrong place.)

   Usage:
     const spotlight = useSpotlight();
     <li className="spotlight" onPointerMove={spotlight.onPointerMove}>
   ========================================================================== */

export function useSpotlight() {
  const reduce = useReducedMotion();

  const onPointerMove = useCallback(
    (event) => {
      if (reduce || event.pointerType !== "mouse") return;

      const element = event.currentTarget;
      const rect = element.getBoundingClientRect();
      element.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      element.style.setProperty("--my", `${event.clientY - rect.top}px`);
    },
    [reduce]
  );

  return { onPointerMove };
}

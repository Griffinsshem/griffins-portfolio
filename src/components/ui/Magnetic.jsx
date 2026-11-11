"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/* ==========================================================================
   MAGNETIC

   Pulls its child a few pixels toward the cursor while the cursor is over
   it, and lets it settle back on a spring when the cursor leaves. Meant for
   the one or two buttons per screen that are the point of the page.

   Two elements, deliberately. The outer span never moves, so it is a stable
   hit area that the pointer is measured against. If the measured element
   were the one being moved, the target would slide away from the cursor as
   it chased it and the motion would oscillate at the edges.

   The offset is a fraction of the distance from the centre, capped at `max`
   pixels. The cap is what stops a wide button from lurching: at 0.28 a
   200px button would otherwise travel 28px at its edge.

   Only mouse input drives it. Touch has no hover, so a finger tap would
   fling the button toward the tap point for no reason, and under
   prefers-reduced-motion it does nothing at all.

   The wrapper renders in every case, including reduced motion, so the
   server markup and the first client render match and there is nothing to
   hydrate differently. Only the behaviour is switched off.

   Position goes through motion values rather than state, so tracking the
   pointer never re-renders React, and it animates transform only.
   ========================================================================== */

const SPRING = { stiffness: 260, damping: 20, mass: 0.35 };

export default function Magnetic({ children, strength = 0.28, max = 10, className = "" }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING);
  const springY = useSpring(y, SPRING);

  const clamp = (value) => Math.max(-max, Math.min(max, value));

  const handleMove = (event) => {
    if (reduce || event.pointerType !== "mouse" || !ref.current) return;

    /* Measured on every move rather than cached: the outer span does not
       transform, so this is stable, and it stays correct if the page
       scrolls while the pointer is held over the button. */
    const rect = ref.current.getBoundingClientRect();
    x.set(clamp((event.clientX - (rect.left + rect.width / 2)) * strength));
    y.set(clamp((event.clientY - (rect.top + rect.height / 2)) * strength));
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <span
      ref={ref}
      className={`inline-flex ${className}`}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      <motion.span style={{ x: springX, y: springY }} className="inline-flex">
        {children}
      </motion.span>
    </span>
  );
}

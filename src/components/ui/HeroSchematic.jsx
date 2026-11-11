"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

/* ==========================================================================
   PARALLAX DRIFT

   As the page scrolls away from the hero, the schematic travels a little
   slower than everything around it, so the hero reads as layered depth
   rather than one flat sheet.

   Three guards, each for a reason:
   - Only at the lg breakpoint and up. There the schematic sits in its own
     column beside the headline with clear space below it. On narrow screens
     it is stacked above the lead paragraph, and any downward drift would
     slide it over that text.
   - The drift is capped at DRIFT_PX. The gap to the next row is 5rem, and
     the travel has to stay well inside it so nothing ever touches.
   - Not at all under prefers-reduced-motion. Scroll-linked movement is the
     kind of motion that setting exists to remove.

   Scroll position goes through motion values and a spring, so the movement
   is smoothed and never re-renders React. It animates transform only.
   ========================================================================== */

const DRIFT_PX = 36;
const DRIFT_RANGE = [0, 700];
const DRIFT_SPRING = { stiffness: 120, damping: 24, mass: 0.4 };

const LAYERS = [
  {
    id: "client",
    label: "Client",
    tech: "React · Next.js · Tailwind",
    detail: "Routing, state, and the rendering path. Where most of the work is.",
  },
  {
    id: "edge",
    label: "Edge",
    tech: "Vercel · Render",
    detail: "Static output, environment config, and the deploy pipeline.",
  },
  {
    id: "api",
    label: "API",
    tech: "Flask · Python · JWT",
    detail: "REST contract, authentication, and the shape the client consumes.",
  },
  {
    id: "data",
    label: "Data",
    tech: "PostgreSQL · SQLAlchemy",
    detail: "Schema and relations. Decided first, changed reluctantly.",
  },
];

export default function HeroSchematic() {
  const [active, setActive] = useState(null);

  const reduce = useReducedMotion();
  const [wide, setWide] = useState(false);

  /* Read after mount so the server and first client render agree (both
     un-drifted); the breakpoint is then tracked live, including rotation
     and window resizes. */
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const sync = () => setWide(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  const { scrollY } = useScroll();
  const drift = useTransform(scrollY, DRIFT_RANGE, [0, DRIFT_PX]);
  const y = useSpring(drift, DRIFT_SPRING);

  const activeLayer = LAYERS.find((layer) => layer.id === active);

  return (
    <motion.div
      className="w-full"
      style={wide && !reduce ? { y } : undefined}
      onMouseLeave={() => setActive(null)}
    >
      <p className="meta mb-5">Request path</p>

      <ol className="relative">
        <span
          aria-hidden="true"
          className="absolute left-[4px] top-3 bottom-3 w-px bg-line"
        />

        {LAYERS.map((layer) => {
          const isActive = active === layer.id;
          const isDimmed = active !== null && !isActive;

          return (
            <li key={layer.id}>
              <button
                type="button"
                onMouseEnter={() => setActive(layer.id)}
                onFocus={() => setActive(layer.id)}
                onBlur={() => setActive(null)}
                onClick={() => setActive((prev) => (prev === layer.id ? null : layer.id))}
                aria-describedby="schematic-readout"
                className={`
                  group flex w-full items-baseline gap-4 py-3 text-left
                  transition-opacity duration-200 ease-[var(--ease-out)]
                  ${isDimmed ? "opacity-40" : "opacity-100"}
                `}
              >
                <span
                  aria-hidden="true"
                  className={`
                    relative mt-1 h-[9px] w-[9px] shrink-0 border
                    transition-colors duration-200 ease-[var(--ease-out)]
                    ${isActive
                      ? "border-accent bg-accent"
                      : "border-line-strong bg-surface"}
                  `}
                />

                <span className="flex flex-1 flex-col gap-0.5">
                  <span
                    className={`
                      font-mono text-[11px] uppercase tracking-[0.14em]
                      transition-colors duration-200 ease-[var(--ease-out)]
                      ${isActive ? "text-accent" : "text-muted"}
                    `}
                  >
                    {layer.label}
                  </span>
                  <span className="text-[14px] leading-snug text-ink">
                    {layer.tech}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="mt-5 border-t border-line pt-4">
        <p
          id="schematic-readout"
          className="min-h-[3rem] max-w-[34ch] text-[13.5px] leading-relaxed text-muted"
        >
          {activeLayer
            ? activeLayer.detail
            : "The path a request takes through what I build."}
        </p>
      </div>
    </motion.div>
  );
}

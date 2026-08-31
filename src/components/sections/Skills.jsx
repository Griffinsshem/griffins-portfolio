"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Layout,
  Terminal,
  Database,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";
import { stack } from "@/config/portfolio";
import { revealUp, stagger, viewportOnce } from "@/lib/motion";

/* One icon per group rather than one per tool. Twenty-eight brand marks
   would need a dependency for the SVG paths and would put colour back into a
   palette that deliberately has one accent. These are Phosphor line icons at
   the same weight as the rest of the interface, so they read as part of the
   system rather than as pasted-in logos.

   Keyed by group id, so a fifth group renders without an icon rather than
   breaking. */
const GROUP_ICONS = {
  frontend: Layout,
  backend: Terminal,
  data: Database,
  tools: Wrench,
};

export default function Skills() {
  const reduce = useReducedMotion();

  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" aria-labelledby="skills-heading" className="shell section">
      <div className="grid-12 gap-y-10">
        <div className="col-span-12 md:col-span-3">
          <p className="meta md:sticky md:top-28">
            <span className="text-faint">02</span> Stack
          </p>
        </div>

        <div className="col-span-12 md:col-span-9">
          <h2 id="skills-heading" className="font-display text-title max-w-[16ch] text-ink">
            Tools I reach for, grouped by what they do.
          </h2>

          <motion.div
            className="mt-12 md:mt-16"
            variants={stagger(0.07)}
            initial={reduce ? false : "hidden"}
            whileInView="visible"
            viewport={viewportOnce}
          >
            {stack.map((group) => {
              const GroupIcon = GROUP_ICONS[group.id];

              return (
              <motion.div
                key={group.id}
                variants={revealUp}
                className="grid-12 border-t border-line py-7 md:py-8"
              >
                <p className="meta col-span-12 mb-4 flex items-center gap-2.5 md:col-span-3 md:mb-0">
                  {/* aria-hidden: the label beside it already names the group,
                      so announcing the icon would just repeat it. */}
                  {GroupIcon ? (
                    <GroupIcon size={15} weight="regular" aria-hidden="true" className="text-faint" />
                  ) : null}
                  {group.label}
                </p>

                <ul className="col-span-12 flex flex-wrap gap-x-6 gap-y-3 md:col-span-9">
                  {group.items.map((item) => {
                    const isDimmed = hovered !== null && hovered !== item.name;

                    return (
                      <li key={item.name}>
                        <span
                          onMouseEnter={() => setHovered(item.name)}
                          onMouseLeave={() => setHovered(null)}
                          className={`
                            cursor-default text-[15px] leading-none
                            transition-[color,opacity] duration-200 ease-[var(--ease-out)]
                            ${item.primary ? "text-ink" : "text-muted"}
                            ${isDimmed ? "opacity-45" : "opacity-100"}
                            hover:text-accent
                          `}
                        >
                          {item.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
              );
            })}

            <div className="border-t border-line" />
          </motion.div>

          {/* <p className="meta mt-6 text-faint">
            Weighted by use, not by score. No percentages.
          </p> */}
        </div>
      </div>
    </section>
  );
}

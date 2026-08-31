"use client";

import { useState } from "react";

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

  const activeLayer = LAYERS.find((layer) => layer.id === active);

  return (
    <div
      className="w-full"
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
    </div>
  );
}

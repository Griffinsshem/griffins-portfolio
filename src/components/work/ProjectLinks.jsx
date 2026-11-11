"use client";

import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { trackEvent } from "@/lib/analytics";

/* ==========================================================================
   PROJECT LINKS

   The live site and the source for one project, shown where a project is
   first seen (the homepage rail and the work index) rather than only on its
   case-study page. A recruiter skimming the list can open the real thing in
   one click instead of two.

   These are siblings of the card link, never children of it: an anchor
   inside an anchor is invalid HTML and browsers resolve it unpredictably.

   `from` records where the click happened, so the analytics can tell which
   placement earns the clicks.
   ========================================================================== */

export default function ProjectLinks({ project, from, className = "" }) {
  const track = (kind) => () =>
    trackEvent("project_link", { project: project.id, kind, from });

  return (
    <div className={`flex flex-wrap items-center gap-x-5 gap-y-2 ${className}`}>
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        onClick={track("live")}
        className="link inline-flex items-center gap-1.5 text-[13px] font-medium text-ink hover:text-accent"
      >
        Live site
        <ArrowUpRight size={12} weight="bold" aria-hidden="true" />
        <span className="sr-only"> for {project.title}, opens in a new tab</span>
      </a>
      <a
        href={project.source}
        target="_blank"
        rel="noopener noreferrer"
        onClick={track("source")}
        className="link inline-flex items-center gap-1.5 text-[13px] text-muted hover:text-accent"
      >
        Source
        <GithubLogo size={12} weight="regular" aria-hidden="true" />
        <span className="sr-only"> for {project.title}, opens in a new tab</span>
      </a>
    </div>
  );
}

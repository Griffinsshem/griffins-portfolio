"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowClockwise } from "@phosphor-icons/react/dist/ssr";

/* Boundary for an error thrown while rendering a route. It replaces only
   the page, so the navigation and footer stay put. reset() retries the
   render, which is the right first move for a transient failure. */
export default function Error({ error, reset }) {
  useEffect(() => {
    /* Left in the console for debugging; nothing sensitive is rendered. */
    console.error(error);
  }, [error]);

  return (
    <section className="field shell flex min-h-[80svh] flex-col justify-center pb-24 pt-32 md:pt-40">
      <p className="meta">
        <span className="text-faint">500</span> Something broke
      </p>
      <h1 className="mt-6 max-w-[14ch] font-display text-display text-ink">
        That did not load.
      </h1>
      <p className="prose-measure mt-8 text-lead text-muted">
        The page hit an error on my side. Trying again usually fixes it.
      </p>
      <div className="mt-12 flex flex-wrap items-center gap-3">
        <button type="button" onClick={reset} className="btn">
          <ArrowClockwise size={15} weight="bold" aria-hidden="true" />
          Try again
        </button>
        <Link href="/" className="btn btn-ghost">
          Back home
        </Link>
      </div>
    </section>
  );
}

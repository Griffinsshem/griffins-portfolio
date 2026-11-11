import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Page not found",
  robots: { index: false },
};

/* Shown for any URL that matches no route, and when a /work/[slug] page
   calls notFound(). Same shell and type scale as the rest of the site, so a
   mistyped address still feels like it is on the same site, and both exits
   are real destinations rather than a dead end. */
export default function NotFound() {
  return (
    <section className="field shell flex min-h-[80svh] flex-col justify-center pb-24 pt-32 md:pt-40">
      <p className="meta">
        <span className="text-faint">404</span> Not found
      </p>
      <h1 className="mt-6 max-w-[14ch] font-display text-display text-ink">
        This page is not here.
      </h1>
      <p className="prose-measure mt-8 text-lead text-muted">
        The link may be old, or the address mistyped. The work and the way to
        reach me are one click away.
      </p>
      <div className="mt-12 flex flex-wrap items-center gap-3">
        <Link href="/" className="btn">
          <ArrowLeft size={15} weight="bold" aria-hidden="true" />
          Back home
        </Link>
        <Link href="/work" className="btn btn-ghost">
          See the work
          <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

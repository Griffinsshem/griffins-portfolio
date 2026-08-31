"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { personal, hero, index as heroIndex } from "@/config/portfolio";
import { EASE, DUR, HERO_BEAT } from "@/lib/motion";
import HeroSchematic from "@/components/ui/HeroSchematic";

export default function HeroSection() {
  const reduce = useReducedMotion();

  const beat = (delay, y = 16) => ({
    initial: reduce ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: DUR.reveal, delay: reduce ? 0 : delay, ease: EASE.reveal },
  });

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="shell flex min-h-[100svh] flex-col justify-center pb-16 pt-28 md:pb-24 md:pt-32"
    >
      {personal.available && (
        <motion.div {...beat(HERO_BEAT.status, 8)} className="mb-10 md:mb-14">
          <span className="status">
            <span className="status-dot" aria-hidden="true" />
            {personal.availabilityLabel}
          </span>
        </motion.div>
      )}

      <div className="grid-12 items-end gap-y-14">
        <div className="col-span-12 lg:col-span-8">
          <h1 id="hero-heading" className="font-display text-display font-medium text-ink">
            {hero.headline.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "108%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: DUR.slow,
                    delay: reduce ? 0 : HERO_BEAT.headline + i * 0.09,
                    ease: EASE.reveal,
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        <motion.div
          {...beat(HERO_BEAT.visual, 20)}
          className="col-span-12 sm:col-span-8 lg:col-span-4 lg:pl-4"
        >
          <HeroSchematic />
        </motion.div>
      </div>

      <div className="grid-12 mt-14 gap-y-8 md:mt-20">
        <motion.p
          {...beat(HERO_BEAT.lead)}
          className="col-span-12 max-w-[46ch] text-lead text-muted md:col-span-7"
        >
          {hero.lead}
        </motion.p>

        <motion.div
          {...beat(HERO_BEAT.cta)}
          className="col-span-12 flex flex-wrap items-center gap-3 md:col-span-5 md:justify-end"
        >
          <a href={hero.cta.href} className="btn">
            {hero.cta.label}
            <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
          </a>

          <a href={personal.resume} download className="btn btn-ghost">
            Resume
            <ArrowDown size={15} weight="bold" aria-hidden="true" />
          </a>
        </motion.div>
      </div>

      <motion.dl
        {...beat(HERO_BEAT.cta + 0.1)}
        className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 md:mt-24 md:grid-cols-4"
      >
        {heroIndex.map((item) => (
          <div key={item.id} className="flex flex-col gap-1.5">
            <dt className="meta flex items-center gap-2">
              <span className="text-faint">{item.id}</span>
              {item.label}
            </dt>
            <dd className="text-[15px] text-ink">{item.value}</dd>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}

export const EASE = {
  out: [0.23, 1, 0.32, 1],
  reveal: [0.16, 1, 0.3, 1],
  inOut: [0.77, 0, 0.175, 1],
};

export const DUR = {
  press: 0.12,
  hover: 0.2,
  ui: 0.26,
  reveal: 0.7,
  slow: 0.9,
};

export const viewportOnce = { once: true, amount: 0.25 };

export const fade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DUR.reveal, ease: EASE.out },
  },
};

export const revealUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.reveal, ease: EASE.reveal },
  },
};

export const revealLine = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: DUR.slow, ease: EASE.reveal },
  },
};

export const revealImage = {
  hidden: { opacity: 0, scale: 1.02 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DUR.slow, ease: EASE.reveal },
  },
};

/* Screenshot settling into its frame as the card reveals. Scale only, so it
   composites on the GPU, and it lives on a wrapper inside the overflow
   clip so it never fights the CSS hover zoom on the image itself. */
export const settleImage = {
  hidden: { scale: 1.08 },
  visible: {
    scale: 1,
    transition: { duration: DUR.slow, ease: EASE.reveal },
  },
};

/* A single tool name in the stack list: small and quick, because there are
   up to a dozen per row and the cascade should read as a ripple rather than
   a queue. */
export const revealChip = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.ui + 0.2, ease: EASE.out },
  },
};

export const stagger = (staggerChildren = 0.06, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

export const HERO_BEAT = {
  nav: 0,
  status: 0.15,
  headline: 0.25,
  lead: 0.7,
  cta: 0.85,
  visual: 0.4,
};

export function reveal(reduce, variants = revealUp, delay = 0) {
  if (reduce) return { initial: false };
  return {
    variants,
    initial: "hidden",
    whileInView: "visible",
    viewport: viewportOnce,
    transition: { delay },
  };
}

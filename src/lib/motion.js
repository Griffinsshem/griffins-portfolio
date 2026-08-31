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
  hidden: { clipPath: "inset(0 0 100% 0)", opacity: 0.6 },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    transition: { duration: DUR.slow, ease: EASE.reveal },
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

export const fadeUp = revealUp;
export const fadeIn = fade;
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: DUR.ui, ease: EASE.out } },
};
export const slideInLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: DUR.reveal, ease: EASE.reveal } },
};
export const slideInRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: DUR.reveal, ease: EASE.reveal } },
};
export const staggerContainer = stagger(0.08, 0.05);
export const staggerContainerSlow = stagger(0.12, 0.1);
export const cardHover = {
  rest: { y: 0 },
  hover: { y: -4, transition: { duration: DUR.hover, ease: EASE.out } },
};
export const buttonTap = { scale: 0.98 };
export const viewport = viewportOnce;

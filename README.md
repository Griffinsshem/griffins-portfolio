# Griffins Ondeyo — Portfolio

Personal portfolio and case-study site for a frontend-focused developer based in Nairobi, Kenya.

**Live:** https://griffins-portfolio.vercel.app

Built with Next.js App Router, React 19 and Tailwind CSS v4, on a design system of semantic tokens rather than ad-hoc utility classes. Every claim on the site is verifiable against the resume in `public/` or a live deployment.

---

## Contents

- [Overview](#overview)
- [Stack](#stack)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Design system](#design-system)
- [Content model](#content-model)
- [Motion](#motion)
- [Accessibility](#accessibility)
- [Performance](#performance)
- [Theming](#theming)
- [Conventions](#conventions)
- [Deployment](#deployment)
- [Known follow-ups](#known-follow-ups)

---

## Overview

The site is a single static route composed of six sections: hero, about, stack, work, experience and contact. It exists to do three things for a reader who has roughly ninety seconds:

1. State what Griffins builds and how he thinks about building it.
2. Show three shipped projects as case studies with problem, approach and outcome.
3. Make it obvious how to get in touch.

Design direction is editorial and technical: one accent colour, a hairline-and-grid structure, generous vertical rhythm, and typography carrying the hierarchy rather than cards or gradients. Motion is used where it aids comprehension and nowhere else.

### Content policy

The site displays no unverified metrics. There are no invented employers, no user counts, no uptime percentages, and no skill proficiency scores. Where a fact is genuinely unknown — for example, dates missing from the resume — the interface says so rather than filling the gap. This is a deliberate constraint, and new content should hold to it.

---

## Stack

| Concern | Choice | Notes |
| --- | --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) | Static rendering; one route |
| UI | React 19 | JavaScript, not TypeScript |
| Styling | Tailwind CSS v4 | Configured entirely in CSS via `@theme`; no `tailwind.config.js` |
| Motion | Framer Motion 12 | Scroll reveals and the hero sequence only |
| Icons | `@phosphor-icons/react` | Imported from `/dist/ssr` to avoid the client barrel |
| Images | `next/image` + `sharp` | Explicit dimensions on every image |
| Fonts | `next/font/google` | Bricolage Grotesque, Geist, Geist Mono |
| Hosting | Vercel | Deploys from `main` |

Seven runtime dependencies. New ones should be justified against what they replace.

---

## Getting started

Requires Node 18.18 or newer.

```bash
git clone git@github.com:Griffinsshem/griffins-portfolio.git
cd griffins-portfolio
npm install
npm run dev
```

The dev server runs at http://localhost:3000, or the next free port if 3000 is taken.

### Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build |
| `npm start` | Serve the production build locally |
| `npm run lint` | ESLint via `eslint-config-next` |

Measure performance against `npm run build && npm start`, never against the dev server; dev ships unminified bundles and unoptimised images.

---

## Project structure

```
src/
├── app/
│   ├── globals.css        Design system: tokens, base styles, primitives
│   ├── layout.js          Fonts, metadata, theme bootstrap, nav and footer
│   └── page.js            Section composition and code splitting
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx     Fixed nav, scroll state, active section, mobile menu
│   │   └── Footer.jsx     Server component, no client JavaScript
│   ├── sections/
│   │   ├── HeroSection.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx     The technical index
│   │   ├── Projects.jsx   Three case studies, three compositions
│   │   ├── Experience.jsx Timeline
│   │   └── Contact.jsx
│   └── ui/
│       ├── HeroSchematic.jsx  Interactive request-path diagram
│       └── ThemeToggle.jsx    Light/dark switch
├── config/
│   └── portfolio.js       Single source of truth for all copy and data
└── lib/
    ├── motion.js          Easing, duration and variant tokens
    └── utils.js           Class-name helper
```

Assets live in `public/`: three project screenshots, a portrait, and the resume PDF.

### Rendering strategy

`page.js` imports the hero statically because it is above the fold and must not wait on a chunk. The five sections below it are loaded through `next/dynamic` with a skeleton that reserves height, so the page does not jump as each arrives.

---

## Design system

Everything visual is defined in `src/app/globals.css`. Components consume tokens; they do not invent values. If a component needs a colour, a size or a duration that does not exist as a token, the token is what should change.

### Colour

Two modes built from the same semantic roles. Light ("bone") is the default; dark ("ink") follows the system preference unless the visitor chooses otherwise.

| Token | Light | Dark | Role |
| --- | --- | --- | --- |
| `--surface` | `#f3f2ee` | `#121210` | Page background |
| `--surface-raised` | `#eae8e1` | `#1b1a17` | Image wells, inset panels |
| `--ink` | `#171613` | `#edebe4` | Primary text |
| `--muted` | `#6c6960` | `#9a978d` | Secondary text |
| `--faint` | `#97948a` | `#706d65` | Tertiary text, labels |
| `--line` | 14% ink | 14% paper | Hairlines |
| `--accent` | `#c0361d` | `#ff5c3c` | The single accent |
| `--scrim` | 85% surface | 85% surface | Scrolled nav background |

One accent, tuned per mode so both pass WCAG AA against their surface. It appears on links, hover states, the availability indicator and the active navigation item. Nowhere else. Colour creates hierarchy; it does not decorate.

### Typography

Three families, six sizes. Bricolage Grotesque carries the display voice; Geist carries reading text; Geist Mono carries metadata, labels and indices.

| Token | Size | Used for |
| --- | --- | --- |
| `--text-display` | `clamp(2.6rem, 6.4vw, 5.5rem)` | Hero headline, contact statement |
| `--text-title` | `clamp(1.9rem, 3.6vw, 3rem)` | Section headings, project titles |
| `--text-heading` | `clamp(1.15rem, 1.6vw, 1.5rem)` | Sub-headings, timeline roles |
| `--text-lead` | `clamp(1.0625rem, 1.2vw, 1.25rem)` | Introductory paragraphs |
| `--text-body` | `1rem` | Body copy |
| `--text-meta` | `0.75rem` | Mono labels, uppercase, tracked |

Every size is fluid. Line height and letter spacing are bound to each step, so a size change carries its own metrics.

### Space and shape

- `--section-y: clamp(5rem, 11vw, 11rem)` — 80px on mobile, 176px on desktop
- `--gutter: clamp(1.25rem, 5vw, 4.5rem)` — one horizontal scale sitewide
- `--page: 82rem` — one container width, applied via `.shell`
- `--measure: 62ch` — reading width for body copy, applied via `.prose-measure`

The page is square. Radius is `0` for images and blocks, `2px` for buttons and inputs, and pill radius is reserved for exactly one element: the availability status.

### Layout primitives

| Class | Purpose |
| --- | --- |
| `.shell` | Max width plus gutters. Every section uses it |
| `.section` | Vertical rhythm |
| `.grid-12` | Twelve-column grid; sections opt in |
| `.rule` | Hairline divider |
| `.meta` | Mono, uppercase, tracked metadata |
| `.prose-measure` | Constrains body copy to a readable measure |
| `.link` | Underline that wipes in from the left |
| `.btn`, `.btn-ghost` | The only two button styles |
| `.status`, `.status-dot` | Availability indicator |

Hover styles are gated behind `@media (hover: hover) and (pointer: fine)`, so touch devices never inherit a stuck hover state.

---

## Content model

`src/config/portfolio.js` is the single source of truth. No component hard-codes copy.

| Export | Contents |
| --- | --- |
| `personal` | Name, role, location, email, resume path, availability flag |
| `hero` | Headline lines, lead, primary call to action |
| `about` | Statement, paragraphs, personal note |
| `index` | Four positioning facts shown under the hero |
| `stack` | Tools grouped by domain, with a `primary` flag for daily use |
| `projects` | Case studies with problem, build, outcome, links, layout key |
| `timeline` | Experience and education |
| `contact` | Closing statement and lead |
| `social` | Links with handles |
| `navigation` | Nav labels and anchors |
| `site` | Canonical URL, description, footer line |

### Editing rules

- **Availability.** Set `personal.available` to `false` and every availability affordance across the nav, hero and contact updates together.
- **Adding a project.** Append to `projects` with a `layout` of `full`, `split` or `offset`. Layout selection is data, not a component change. Include real `width` and `height` so the browser can reserve the box.
- **Adding a tool.** Only add to `stack` if it appears in a shipped project or on the resume. A tool from a course in progress belongs in `timeline`, not here.
- **Unknown dates.** Set `period` to `null`. The timeline renders "Dates not recorded" rather than a guess.
- **Anchors.** Section ids are stable (`#about`, `#skills`, `#projects`, `#experience`, `#contact`). Labels can change; anchors should not, so existing links and search results keep resolving.

---

## Motion

`src/lib/motion.js` mirrors the easing and duration values in `globals.css`, so CSS transitions and Framer Motion cannot drift apart.

| Token | Value | Applies to |
| --- | --- | --- |
| `DUR.press` | 120ms | Active states |
| `DUR.hover` | 200ms | Hover transitions |
| `DUR.ui` | 260ms | Nav height, theme change, menu |
| `DUR.reveal` | 700ms | Scroll reveals |
| `DUR.slow` | 900ms | Headline and image entrances |

Rules the file encodes:

- `ease-out` for anything entering. Never `ease-in`.
- Anything the user triggers resolves in under 300ms.
- Nothing loops. Entrance animations run once and stop.
- **An initial state must be recoverable if the transition never runs.** This one is load-bearing: an earlier version of `revealImage` started at `clipPath: inset(0 0 100% 0)`, and when the reveal did not fire the images kept their layout box and painted nothing. Prefer opacity and small transforms, which fail to "faint", not to "absent".

The hero sequence is choreographed from a single `HERO_BEAT` map so the timing is legible in one place: status, headline, schematic, lead, actions, resolving in roughly 1.2 seconds.

Motion intensity is allocated per section: strong in the hero and on project images, subtle in about and experience, minimal in stack.

---

## Accessibility

- Semantic landmarks throughout: `header`, `nav`, `main`, `section`, `footer`, with `aria-labelledby` on every section.
- Skip link to `#main-content` as the first focusable element.
- Visible focus rings via `:focus-visible`, using the accent at a 3px offset.
- The mobile menu is a labelled dialog: Escape closes it, background scroll is locked, and focus returns to the trigger.
- Touch targets are at least 44px.
- The hero schematic responds to hover, keyboard focus and tap, so all three input modes reach the same state.
- Decorative icons are `aria-hidden`; adjacent text names the destination.
- `prefers-reduced-motion` removes transforms and entrance animations while keeping opacity and colour transitions.
- Colour is never the only signal. The availability dot is paired with a text label.

---

## Performance

- **Images.** Every `next/image` declares `width`, `height` and `sizes`, so layout shift stays at zero and phones are not sent desktop-sized files. The first project screenshot is marked `priority` as the likely largest-contentful-paint element.
- **Code splitting.** The hero is static; the rest of the page is dynamically imported behind height-reserving skeletons.
- **Scroll handling.** No raw `scroll` listeners. Navigation state reads Framer Motion's batched `useMotionValueEvent`, and the active section uses an `IntersectionObserver`.
- **Server components.** The footer ships as HTML with no client JavaScript attached.
- **Icons.** Imported from `@phosphor-icons/react/dist/ssr` to avoid pulling the client barrel.
- **No background videos, no canvas loops, no blur filters** beyond the 10px scrim on the scrolled nav.

---

## Theming

An inline script in `layout.js` sets `data-theme` on `<html>` before first paint, reading `localStorage` and falling back to the system preference, so the page never flashes the wrong surface. `ThemeToggle` owns every change after that and persists the choice.

The contract is: the script owns the initial value, the toggle owns changes, CSS owns the values themselves.

---

## Conventions

**Tokens over values.** If you find yourself writing `text-[17px]` or a hex code in a component, add or use a token instead.

**Comments explain decisions, not syntax.** Each component opens with a note on what it replaced and why. Keep that up; it is why the codebase is navigable.

**Sections compose on the grid.** `.shell` plus `.grid-12`. Avoid wrapping content in cards; the hairline and the whitespace do that work.

**One primary action per view.** The hero has one call to action. Contact has one address.

**Commits are conventional and explain the reasoning**, not just the change. See `git log` for the redesign history, which documents what was removed and why.

---

## Deployment

Vercel builds from `main` on push. No environment variables are required; the site has no backend, no forms and no analytics.

```bash
npm run build     # verify locally before pushing
git push
```

The canonical URL lives in `site.url` in the content model and in `metadataBase` in `layout.js`. If the domain changes, update both.

---

## Known follow-ups

- `src/lib/utils.js` exports a `cn` helper that nothing imports. Removing it also frees `clsx` and `tailwind-merge`.
- `@types/node` and `@types/react` are in `devDependencies` but the project is JavaScript and has no `tsconfig.json`.
- `carbify.png` and `urstyleke.png` are roughly 1MB and 770KB. Next serves optimised variants, but converting the sources to WebP would shrink the repository and the build.
- The Open Graph image is the 600x600 portrait; social cards want 1200x630. `next/og` could generate one at build time.
- The Technical University of Kenya entry has no dates and renders as "Dates not recorded".

---

## Licence

Code is available for reference. Content, copy, imagery and the resume are not licensed for reuse.

© Griffins Ondeyo

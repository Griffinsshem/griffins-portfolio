import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import { personal, social, site } from "@/config/portfolio";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const SITE_URL = "https://griffins-portfolio.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: {
    default: "Griffins Ondeyo - Frontend & Full-Stack Developer",
    template: "%s | Griffins Ondeyo",
  },
  description:
    "Griffins Ondeyo is a frontend-focused developer in Nairobi, Kenya, building interfaces with React, Next.js, and Tailwind CSS, backed by Python and Flask services.",
  keywords: [
    "Griffins Ondeyo", "Frontend Developer", "React", "Next.js",
    "Tailwind CSS", "Full-Stack Developer", "Nairobi", "Kenya",
  ],
  authors: [{ name: "Griffins Ondeyo", url: SITE_URL }],
  creator: "Griffins Ondeyo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Griffins Ondeyo",
    title: "Griffins Ondeyo - Frontend & Full-Stack Developer",
    description:
      "Frontend-focused developer in Nairobi building interfaces with React, Next.js, and Tailwind CSS.",
    /* No images field: the opengraph-image.js file in this folder supplies
       the 1200x630 card, and an explicit field here would override it. */
  },
  twitter: {
    card: "summary_large_image",
    title: "Griffins Ondeyo - Frontend & Full-Stack Developer",
    description:
      "Frontend-focused developer in Nairobi building interfaces with React, Next.js, and Tailwind CSS.",
    creator: "@GriffinsShem",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f2ee" },
    { media: "(prefers-color-scheme: dark)", color: "#121210" },
  ],
};

/* Structured data: tells search engines who the site is about, in the
   vocabulary they read for the knowledge panel and rich results. Built from
   the same config as the page so the two cannot disagree. sameAs lists the
   profiles that are verifiably this person. The email is left out on
   purpose; it is on the page for people, not for scrapers. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.fullName,
  jobTitle: personal.role,
  url: site.url,
  image: `${site.url}${personal.portrait}`,
  address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
  knowsAbout: ["React", "Next.js", "Tailwind CSS", "Python", "Flask", "PostgreSQL"],
  sameAs: social.filter((link) => link.id !== "email").map((link) => link.href),
};

/* "<" is escaped so no value in the config can close the script tag. */
const personJsonLdString = JSON.stringify(personJsonLd).replace(/</g, "\\u003c");

const themeBootstrap = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", stored === "light" || stored === "dark" ? stored : system);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-ink-invert"
        >
          Skip to main content
        </a>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: personJsonLdString }}
        />

        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />

        {/* Vercel Web Analytics: cookieless, so no consent banner is needed.
            Reports nothing until Web Analytics is switched on for the
            project in the Vercel dashboard. */}
        <Analytics />
      </body>
    </html>
  );
}

import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
    images: [{ url: "/griffins.jpg", width: 600, height: 600, alt: "Griffins Ondeyo" }],
  },
  twitter: {
    card: "summary",
    title: "Griffins Ondeyo - Frontend & Full-Stack Developer",
    description:
      "Frontend-focused developer in Nairobi building interfaces with React, Next.js, and Tailwind CSS.",
    images: ["/griffins.jpg"],
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

        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

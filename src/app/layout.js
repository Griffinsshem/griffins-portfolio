
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://griffins.dev"),
  title: {
    default: "Griffins — Frontend & Full-Stack Developer",
    template: "%s | Griffins",
  },
  description:
    "Portfolio of Griffins Ondeyo — a frontend-focused developer specialising in React, Next.js, and Tailwind CSS, building high-performance web experiences.",
  keywords: [
    "Frontend Developer", "React", "Next.js", "Tailwind CSS",
    "Full-Stack Developer", "Nairobi", "Kenya",
  ],
  authors: [{ name: "Griffins Ondeyo" }],
  creator: "Griffins Ondeyo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://griffins.dev",
    title: "Griffins — Frontend & Full-Stack Developer",
    description:
      "Building high-performance, accessible web experiences with React and Next.js.",
    siteName: "Griffins Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Griffins — Frontend & Full-Stack Developer",
    description: "Building high-performance web experiences.",
    images: ["/og-image.png"],
    creator: "@griffins",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="dark scroll-smooth"
    >
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          min-h-screen bg-[#0a0a0f] font-sans text-white antialiased
        `}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none"
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

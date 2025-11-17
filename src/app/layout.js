import { Source_Code_Pro, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";


const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "devGriffins Portfolio",
  description: "Web Developer Portfolio",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sourceCodePro.variable} ${inter.variable}`}>
      <body
        className={"antialiased"}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

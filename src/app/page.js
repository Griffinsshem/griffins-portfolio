import Image from "next/image";
import HomeSection from "./components/Homepage";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

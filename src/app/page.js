import Image from "next/image";
import HomeSection from "./components/Homepage";
import Projects from "./components/Project";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <Projects />
      <Contact />
    </div>
  );
}

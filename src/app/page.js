import Image from "next/image";
import HomeSection from "./components/Homepage";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <Contact />
    </div>
  );
}

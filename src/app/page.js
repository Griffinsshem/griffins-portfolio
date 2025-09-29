import Image from "next/image";
import HomeSection from "./components/Homepage";
import About from "./components/About";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <About />
    </div>
  );
}

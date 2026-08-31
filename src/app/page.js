import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";

/* The hero is imported statically: it is above the fold and must not wait on
   a chunk. Everything below is split, with a skeleton that reserves height
   so the page does not jump as each section arrives. */
function SectionSkeleton() {
  return (
    <div className="section flex items-center justify-center" aria-hidden="true">
      <div className="h-px w-24 bg-line" />
    </div>
  );
}

const AboutSection = dynamic(() => import("@/components/sections/About"), { loading: () => <SectionSkeleton /> });
const SkillsSection = dynamic(() => import("@/components/sections/Skills"), { loading: () => <SectionSkeleton /> });
const ProjectsSection = dynamic(() => import("@/components/sections/Projects"), { loading: () => <SectionSkeleton /> });
const ExperienceSection = dynamic(() => import("@/components/sections/Experience"), { loading: () => <SectionSkeleton /> });
const ContactSection = dynamic(() => import("@/components/sections/Contact"), { loading: () => <SectionSkeleton /> });

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}


import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";

function SectionSkeleton() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="h-1 w-24 animate-pulse rounded-full bg-white/10" />
    </div>
  );
}

const AboutSection = dynamic(
  () => import("@/components/sections/About"),
  { loading: () => <SectionSkeleton /> }
);

const SkillsSection = dynamic(
  () => import("@/components/sections/Skills"),
  { loading: () => <SectionSkeleton /> }
);

const ProjectsSection = dynamic(
  () => import("@/components/sections/Projects"),
  { loading: () => <SectionSkeleton /> }
);

const ExperienceSection = dynamic(
  () => import("@/components/sections/Experience"),
  { loading: () => <SectionSkeleton /> }
);

const ContactSection = dynamic(
  () => import("@/components/sections/Contact"),
  { loading: () => <SectionSkeleton /> }
);

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

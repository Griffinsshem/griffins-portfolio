import { notFound } from "next/navigation";
import CaseStudy from "@/components/work/CaseStudy";
import { projects, site } from "@/config/portfolio";

/* Every project is known at build time, so all four pages are prerendered
   as static HTML rather than rendered per request. */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

/* Per-project metadata, so a shared link previews that project rather than
   the site default. params is a promise in Next 15 and later. */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: `/work/${project.id}` },
    openGraph: {
      title: `${project.title} | ${site.title}`,
      description: project.tagline,
      url: `${site.url}/work/${project.id}`,
      images: [{ url: project.image, width: project.width, height: project.height }],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const i = projects.findIndex((p) => p.id === slug);
  if (i === -1) notFound();
  return (
    <CaseStudy
      project={projects[i]}
      prev={projects[i - 1] ?? null}
      next={projects[i + 1] ?? null}
    />
  );
}

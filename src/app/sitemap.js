import { projects, site } from "@/config/portfolio";

/* Generated from the same config the pages render from, so adding a project
   adds its URL here with no second list to keep in step. Served at
   /sitemap.xml. */
export default function sitemap() {
  const now = new Date();

  return [
    { url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...projects.map((project) => ({
      url: `${site.url}/work/${project.id}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    })),
  ];
}

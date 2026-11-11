import { site } from "@/config/portfolio";

/* Everything is public, so everything is allowed. The sitemap line is the
   useful part: it is how crawlers find the case-study pages without having
   to discover them through links. Served at /robots.txt. */
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}

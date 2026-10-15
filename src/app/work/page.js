import WorkIndex from "@/components/work/WorkIndex";
import { site } from "@/config/portfolio";

/* Server component so the route can export metadata; the list itself is a
   client component because it carries scroll reveals. */
export const metadata = {
  title: "Work",
  description: "Case studies: ClinicFlow, SokoMtaani, UrStyleKE and Carbify.",
  alternates: { canonical: "/work" },
  openGraph: { title: `Work | ${site.title}`, url: `${site.url}/work` },
};

export default function WorkPage() {
  return <WorkIndex />;
}

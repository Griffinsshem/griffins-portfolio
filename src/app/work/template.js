import PageTransition from "@/components/ui/PageTransition";

/* The root template does not re-mount when going from /work to
   /work/[slug] or back, because both sit under the same first segment.
   This one is keyed one level deeper and covers that case. */
export default function Template({ children }) {
  return <PageTransition>{children}</PageTransition>;
}

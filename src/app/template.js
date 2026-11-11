import PageTransition from "@/components/ui/PageTransition";

/* Re-mounted when the first path segment changes, which covers moving
   between the homepage and anything under /work. */
export default function Template({ children }) {
  return <PageTransition>{children}</PageTransition>;
}

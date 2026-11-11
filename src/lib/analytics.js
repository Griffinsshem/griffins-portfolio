import { track } from "@vercel/analytics";

/* One place that sends custom events, so every call site stays a single
   line and none of them can break the page.

   Failure is swallowed on purpose. Analytics is a convenience; an ad
   blocker, a network error or a disabled project setting must never turn
   into an unhandled exception inside a click handler.

   Event names in use:
     resume_download   { from }       hero, contact
     project_link      { project, kind: "live" | "source", from }
     contact_submit    { result: "sent" | "fallback" | "invalid" }
*/
export function trackEvent(name, props) {
  try {
    track(name, props);
  } catch {
    /* intentionally ignored */
  }
}

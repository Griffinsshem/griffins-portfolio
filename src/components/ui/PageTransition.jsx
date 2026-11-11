/* ==========================================================================
   PAGE TRANSITION

   Fades and lifts a page into place when the route changes. Used by the
   template files, which Next.js re-mounts on every navigation (unlike
   layouts, which persist), so the animation replays each time a new page
   arrives.

   This is CSS rather than Framer Motion on purpose. It is a server
   component, ships no client JavaScript, and runs before hydration, so the
   first paint of a hard load is never stuck at opacity 0 waiting for
   scripts. The keyframes live in globals.css under .page-enter.

   Enter only. Next.js unmounts the old page the moment the new route
   resolves, so there is no reliable moment to play an exit without
   freezing the router internals, which is a fragile hack to depend on.
   ========================================================================== */

export default function PageTransition({ children }) {
  return <div className="page-enter">{children}</div>;
}

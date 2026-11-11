import { ImageResponse } from "next/og";
import { personal } from "@/config/portfolio";

/* ==========================================================================
   SHARE CARD

   The 1200x630 image shown when the site is shared on LinkedIn, X, Slack or
   WhatsApp. Drawn here rather than exported from a design tool so it is
   generated from the config at build time and cannot drift from the site:
   change the name or role in portfolio.js and the card changes with it.

   Same blueprint language as the page: dark field, ruled grid, one accent.
   Uses the font next/og bundles, so the build needs no network access.
   ========================================================================== */

export const OG_SIZE = { width: 1200, height: 630 };

export function renderOg() {
  const grid = "rgba(243, 242, 238, 0.06)";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#121210",
          backgroundImage: `linear-gradient(to right, ${grid} 1px, transparent 1px), linear-gradient(to bottom, ${grid} 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
          color: "#f3f2ee",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, letterSpacing: 4, color: "#a8a69e", textTransform: "uppercase" }}>
          <div style={{ width: 14, height: 14, background: "#ff5c3c" }} />
          Available for work
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 120, fontWeight: 600, lineHeight: 1.02, letterSpacing: -4 }}>
            {personal.fullName}
          </div>
          <div style={{ marginTop: 28, fontSize: 40, color: "#ff5c3c" }}>
            {personal.role}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#a8a69e" }}>
          <div>{personal.location}</div>
          <div>griffins-portfolio.vercel.app</div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}

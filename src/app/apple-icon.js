import { ImageResponse } from "next/og";

/* The home-screen icon iOS uses when the site is added to it. Same mark as
   icon.svg, drawn with divs because next/og does not render SVG files. */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#121210" }}>
        <div style={{ width: 118, height: 118, display: "flex", alignItems: "center", justifyContent: "center", border: "8px solid #f3f2ee" }}>
          <div style={{ width: 56, height: 56, background: "#ff5c3c" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}

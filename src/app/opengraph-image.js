import { renderOg, OG_SIZE } from "@/lib/og";

export const alt = "Griffins Ondeyo, Frontend and Full-stack Developer in Nairobi";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOg();
}

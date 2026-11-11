import { NextResponse } from "next/server";
import { personal } from "@/config/portfolio";

/* ==========================================================================
   CONTACT ENDPOINT

   Receives the contact form and emails it to the site owner through
   Resend's HTTP API (no SDK, so no dependency).

   It needs two environment variables, set in the Vercel project:
     RESEND_API_KEY   an API key from resend.com
     CONTACT_FROM     a sender Resend has verified, e.g.
                      "Portfolio <contact@yourdomain.com>". Resend's shared
                      "onboarding@resend.dev" works for testing, but only
                      delivers to the address that owns the Resend account.
   The recipient is personal.email from the config.

   If the key is missing the endpoint answers 503 and the form falls back to
   a prefilled email link, so a visitor is never left with a dead button.

   Defences, in order of cost: a hidden honeypot field that only bots fill,
   length limits, and a small per-IP rate limit. The rate limit lives in
   memory, so on serverless it is per-instance and best-effort. It slows a
   casual flood; it is not a substitute for Resend's own limits.
   ========================================================================== */

const LIMITS = { name: 100, email: 200, message: 4000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 3;
const hits = new Map();

function limited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  /* Keep the map from growing without bound on a long-lived instance. */
  if (hits.size > 500) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

const escapeHtml = (text) =>
  text.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  /* Honeypot: a real visitor never sees this field. Answer as if it worked
     so a bot learns nothing. */
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (
    !name || !message || !EMAIL_RE.test(email) ||
    name.length > LIMITS.name || email.length > LIMITS.email || message.length > LIMITS.message
  ) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;
  if (!apiKey || !from) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [personal.email],
        reply_to: email,
        subject: `Portfolio message from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
        html: `<p><strong>${escapeHtml(name)}</strong> &lt;${escapeHtml(email)}&gt;</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}

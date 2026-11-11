"use client";

import { useId, useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { personal } from "@/config/portfolio";
import { trackEvent } from "@/lib/analytics";

/* ==========================================================================
   CONTACT FORM

   For visitors who would rather not leave the page for a mail app, which is
   most people on webmail or a phone without one configured.

   Three outcomes, each with its own honest message:
   - sent      the endpoint accepted it and emailed it on.
   - fallback  the endpoint is not configured or the send failed. The
               visitor's text is kept and offered as a prefilled email, so
               nothing they wrote is lost and the button is never a dead end.
   - invalid   a field failed validation; shown inline, nothing is cleared.

   Labels are visible and tied to their inputs, errors are announced through
   a live region, and the honeypot input is hidden from sight and from
   assistive tech so only a script fills it.

   The hint under the heading says what a useful first message contains,
   which is the part that saves a round of back-and-forth.
   ========================================================================== */

const EMPTY = { name: "", email: "", message: "", company: "" };

export default function ContactForm() {
  const id = useId();
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | fallback | invalid

  const set = (key) => (event) => setValues((v) => ({ ...v, [key]: event.target.value }));

  const mailto = () => {
    const subject = encodeURIComponent(`Message from ${values.name || "your portfolio"}`);
    const body = encodeURIComponent(`${values.message}\n\n${values.name}\n${values.email}`);
    return `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  async function onSubmit(event) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setStatus("sent");
        setValues(EMPTY);
        trackEvent("contact_submit", { result: "sent" });
      } else if (response.status === 400) {
        setStatus("invalid");
        trackEvent("contact_submit", { result: "invalid" });
      } else {
        setStatus("fallback");
        trackEvent("contact_submit", { result: "fallback" });
      }
    } catch {
      setStatus("fallback");
      trackEvent("contact_submit", { result: "fallback" });
    }
  }

  const fieldClass =
    "w-full border border-line-strong bg-transparent px-4 py-3 text-[15px] text-ink placeholder:text-faint focus:border-accent focus:outline-none";

  if (status === "sent") {
    return (
      <div role="status" className="border border-line p-6 md:p-8">
        <p className="font-display text-heading text-ink">Message sent.</p>
        <p className="mt-2 text-[15px] text-muted">
          Thank you. I usually reply within a couple of days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate={false} className="flex flex-col gap-5" aria-describedby={`${id}-hint`}>
      <div>
        <p className="meta">Or write here</p>
        <p id={`${id}-hint`} className="mt-3 max-w-[52ch] text-[14px] leading-relaxed text-muted">
          A good first message says what you are building, roughly when, and
          whether it is a role or a project. A link to a brief helps.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="meta">Name</span>
          <input
            type="text"
            name="name"
            required
            maxLength={100}
            autoComplete="name"
            value={values.name}
            onChange={set("name")}
            className={fieldClass}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="meta">Email</span>
          <input
            type="email"
            name="email"
            required
            maxLength={200}
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
            className={fieldClass}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="meta">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          maxLength={4000}
          value={values.message}
          onChange={set("message")}
          className={`${fieldClass} resize-y`}
        />
      </label>

      {/* Honeypot. Off-screen rather than display:none, because some bots
          skip hidden fields; aria-hidden and tabIndex keep people out. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" value={values.company} onChange={set("company")} />
        </label>
      </div>

      <div aria-live="polite" className="min-h-[1.25rem] text-[14px]">
        {status === "invalid" && (
          <p className="text-accent">Check your name, email and message, then try again.</p>
        )}
        {status === "fallback" && (
          <p className="text-muted">
            That did not send from here. Nothing is lost:{" "}
            <a href={mailto()} className="link text-ink hover:text-accent">
              open it as an email instead
            </a>
            .
          </p>
        )}
      </div>

      <div>
        <button type="submit" disabled={status === "sending"} className="btn disabled:cursor-wait disabled:opacity-60">
          {status === "sending" ? "Sending" : "Send message"}
          <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}

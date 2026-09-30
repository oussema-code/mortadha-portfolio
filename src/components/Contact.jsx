import { useState } from "react";
import { student } from "../data.js";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkjgekek";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const formData = new FormData(e.currentTarget);
      const params = new URLSearchParams(formData);
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: params,
        headers: { Accept: "application/json" },
      });
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      // silent
    }
  }

  const inputClass =
    "w-full rounded-xl border border-cream/10 bg-cream/[0.04] px-4 py-3 text-sm text-cream placeholder-cream/30 outline-none transition-all focus:border-mint/50 focus:bg-cream/[0.08] focus:ring-1 focus:ring-mint/30";
  const labelClass = "mb-1.5 block font-mono text-[11px] tracking-widest text-mint/90 uppercase";

  return (
    <section id="contact" className="relative overflow-hidden bg-forest py-28 text-cream">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-mint/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-water/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="reveal mb-16 text-center">
          <span className="inline-block rounded-full border border-mint/20 bg-mint/10 px-4 py-1 font-mono text-xs tracking-widest text-mint uppercase">
            Get in touch
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
            Let's build something<br className="hidden md:block" /> meaningful together
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-cream/70">
            Open to internships, research collaborations and engineering roles
            in renewable energy, supply chain optimization and industrial performance.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="reveal grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Left: contact info */}
          <div className="flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <a
                href={`mailto:${student.email}`}
                className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-cream/[0.08] bg-cream/[0.03] p-5 transition-all hover:-translate-y-1 hover:border-mint/40 hover:bg-cream/[0.08] hover:shadow-[0_4px_20px_rgba(76,154,106,0.15)]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mint/15 text-mint transition-colors group-hover:bg-mint/25">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div className="flex-1">
                  <p className="font-mono text-[11px] tracking-widest text-mint/80 uppercase">Email</p>
                  <p className="mt-0.5 text-sm leading-snug">{student.email}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 -translate-x-2 text-mint/0 transition-all group-hover:translate-x-0 group-hover:text-mint"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>

              <a
                href={student.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-cream/[0.08] bg-cream/[0.03] p-5 transition-all hover:-translate-y-1 hover:border-mint/40 hover:bg-cream/[0.08] hover:shadow-[0_4px_20px_rgba(76,154,106,0.15)]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mint/15 text-mint transition-colors group-hover:bg-mint/25">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <div className="flex-1">
                  <p className="font-mono text-[11px] tracking-widest text-mint/80 uppercase">LinkedIn</p>
                  <p className="mt-0.5 text-sm leading-snug">mortadha-ben-younes-enit</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 -translate-x-2 text-mint/0 transition-all group-hover:translate-x-0 group-hover:text-mint"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-cream/[0.08] bg-cream/[0.03] p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mint/15 text-mint">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p className="font-mono text-[11px] tracking-widest text-mint/80 uppercase">Location</p>
                  <p className="mt-0.5 text-sm leading-snug">{student.location}</p>
                  <p className="text-sm text-cream/50">+216 {student.phone}</p>
                </div>
              </div>
            </div>

            <p className="rounded-xl border border-cream/[0.06] bg-cream/[0.02] p-4 text-xs leading-relaxed text-cream/50">
              Typically respond within 24–48 hours. For urgent matters, reach out via email directly.
            </p>
          </div>

          {/* Right: form */}
          <div className="rounded-3xl border border-cream/[0.08] bg-cream/[0.03] p-8 backdrop-blur-sm">
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-mint/20 text-mint">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <p className="mt-5 font-display text-2xl font-bold text-mint">Message sent!</p>
                <p className="mt-2 max-w-xs text-sm text-cream/70">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-full border border-mint/40 px-6 py-2 text-sm font-semibold text-mint transition-all hover:bg-mint/10"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className={labelClass}>Name</span>
                    <input required name="name" type="text" placeholder="Your name" className={inputClass} />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Email</span>
                    <input required name="email" type="email" placeholder="you@example.com" className={inputClass} />
                  </label>
                </div>
                <label className="block">
                  <span className={labelClass}>Subject</span>
                  <input required name="subject" type="text" placeholder="Internship, collaboration…" className={inputClass} />
                </label>
                <label className="block">
                  <span className={labelClass}>Message</span>
                  <textarea required name="message" rows={5} placeholder="Tell me about your project or opportunity…" className={`${inputClass} resize-y`} />
                </label>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-mint px-8 py-3.5 text-sm font-bold tracking-wide text-forest uppercase shadow-[0_0_20px_rgba(76,154,106,0.3)] transition-all hover:-translate-y-0.5 hover:bg-cream hover:shadow-[0_0_30px_rgba(76,154,106,0.4)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
                >
                  {status === "submitting" ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
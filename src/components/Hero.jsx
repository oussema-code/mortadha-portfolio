import { student } from "../data.js";

export default function Hero() {
 return (
 <section id="top" className="blueprint-grid relative overflow-hidden bg-cream">
 {/* organic blobs */}
 <div className="float-slow pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-mint/40 blur-3xl" />
 <div className="float-slow pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-sky/20 blur-3xl" />

 <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pt-32 pb-20 md:grid-cols-2 md:pt-40">
 <div>
 <p className="font-mono text-sm tracking-widest text-leaf uppercase">
 Industrial Engineering · ENIT
 </p>
 <h1 className="mt-4 font-display text-5xl leading-tight font-bold text-forest md:text-6xl">
 {student.name}
 </h1>
 <div className="flow-line mt-6 h-1 w-40 rounded-full" />
 <p className="mt-6 max-w-lg text-lg text-charcoal/80">{student.tagline}</p>
 <p className="mt-3 font-mono text-sm text-charcoal/50">
 {student.location} · Energy systems · Optimization
 </p>
 <div className="mt-8 flex flex-wrap gap-4">
 <a
 href="#projects"
 className="rounded-full bg-forest px-7 py-3 font-medium text-cream shadow-lg shadow-forest/20 transition-all hover:-translate-y-0.5 hover:bg-pine"
 >
 Explore My Work
 </a>
 </div>
 </div>

 <div className="relative mx-auto max-w-sm">
 <div className="absolute -inset-4 rounded-[2rem] border border-forest/10" />
 <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-mint/60 blur-xl" />
 <img
 src="/profile.jpg"
 alt={student.name}
 className="relative w-full rounded-[1.75rem] object-cover shadow-2xl shadow-forest/20"
 width="720"
 height="725"
 />
 <div className="absolute -bottom-5 -left-5 rounded-xl bg-white/90 px-4 py-2 font-mono text-xs text-forest shadow-lg backdrop-blur">
 ◆ Renewable Energy × Supply Chain
 </div>
 </div>
 </div>
 </section>
 );
}
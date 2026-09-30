import { projects } from "../data.js";

export default function Projects() {
	return (
 <section id="projects" className="bg-sand py-24">
 <div className="mx-auto max-w-6xl px-6">
 <div className="reveal">
 <p className="font-mono text-sm tracking-widest text-leaf uppercase">Projects</p>
 <h2 className="mt-2 font-display text-3xl font-bold text-forest md:text-4xl">
 Selected engineering &amp; research work
 </h2>
 </div>

 <div className="mt-10 grid gap-6 md:grid-cols-2">
 {projects.map((p) => (
 <article
 key={p.title}
 className="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-forest/10 bg-cream p-7 transition-all hover:-translate-y-1.5 hover:border-leaf/50 hover:shadow-xl hover:shadow-forest/10"
 >
 <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-mint/30 blur-2xl transition-all group-hover:bg-mint/60" />
 <div className="relative">
 <div className="flex items-center justify-between">
 <span className="rounded-full border border-leaf/30 bg-sage px-3 py-1 font-mono text-xs text-forest">
 {p.type}
 </span>
 <span className="font-mono text-sm text-water">{p.year}</span>
 </div>
 <h3 className="mt-4 font-display text-xl font-semibold text-forest">
 {p.title}
 </h3>
 <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{p.description}</p>
 {p.points && (
 <ul className="mt-3 space-y-1.5 text-sm text-charcoal/70">
 {p.points.map((pt) => (
 <li key={pt} className="flex gap-2">
 <span className="text-leaf">▸</span>
 <span>{pt}</span>
 </li>
 ))}
 </ul>
 )}
 <div className="mt-4 flex flex-wrap gap-2">
 {p.tags.map((t) => (
 <span
 key={t}
 className="rounded-full bg-forest/5 px-3 py-1 font-mono text-xs text-forest/80"
 >
 {t}
 </span>
 ))}
 </div>
 </div>
 </article>
 ))}
 </div>
 </div>
 </section>
	);
}
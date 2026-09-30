import { education, experience } from "../data.js";

function TimelineList({ title, items, accent }) {
 return (
 <div>
 <h3 className="font-display text-2xl font-semibold text-forest">{title}</h3>
 <ol className="relative mt-6 space-y-8 border-l-2 border-leaf/30 pl-6">
 {items.map((e) => (
 <li key={e.title} className="reveal relative">
 <span className="absolute -left-[1.9rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-cream bg-leaf" />
 <p className="font-mono text-xs text-water">{e.period}</p>
 <h4 className="mt-1 font-semibold text-forest">{e.title}</h4>
 {e.place && <p className="text-sm text-charcoal/60">{e.place}</p>}
 {e.detail && <p className="mt-1 text-sm text-charcoal/70">{e.detail}</p>}
 {e.points && (
 <ul className="mt-2 space-y-1.5 text-sm text-charcoal/70">
 {e.points.map((pt) => (
 <li key={pt} className="flex gap-2">
 <span className="text-leaf">▸</span>
 <span>{pt}</span>
 </li>
 ))}
 </ul>
 )}
 </li>
 ))}
 </ol>
 </div>
 );
}

export default function Timeline() {
 return (
 <section id="timeline" className="bg-cream py-24">
 <div className="mx-auto max-w-6xl px-6">
 <div className="reveal">
 <p className="font-mono text-sm tracking-widest text-leaf uppercase">Journey</p>
 <h2 className="mt-2 font-display text-3xl font-bold text-forest md:text-4xl">
 Education & experience
 </h2>
 </div>
 <div className="mt-10 grid gap-14 md:grid-cols-2">
 <TimelineList title="Education" items={education} />
 <TimelineList title="Experience & Involvement" items={experience} />
 </div>
 </div>
 </section>
 );
}
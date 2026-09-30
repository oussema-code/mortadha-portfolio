import { student, languages } from "../data.js";

export default function About() {
	return (
		<section id="about" className="bg-sand py-24">
			<div className="mx-auto max-w-6xl px-6">
				<div className="reveal">
					<p className="font-mono text-sm tracking-widest text-leaf uppercase">About</p>
					<h2 className="mt-2 font-display text-3xl font-bold text-forest md:text-4xl">
						Engineering with purpose, driven by curiosity
					</h2>
				</div>

				<div className="mt-10 grid gap-10 md:grid-cols-3">
					<div className="reveal md:col-span-2">
						<p className="text-lg leading-relaxed text-charcoal/80">{student.summary}</p>
						<p className="mt-4 leading-relaxed text-charcoal/70">
							What drives me is the intersection where rigorous engineering meets
							sustainability: modeling energy systems, simulating production lines,
							and turning data into decisions that make industry cleaner and more
							efficient.
						</p>

						<div className="mt-8 grid gap-4 sm:grid-cols-2">
							<div className="rounded-2xl border border-forest/10 bg-cream p-5">
								<p className="font-mono text-xs text-leaf uppercase">Current</p>
								<p className="mt-1 font-medium text-forest">
									Engineer Intern @ STEG — Green H² & PV integration
								</p>
							</div>
							<div className="rounded-2xl border border-forest/10 bg-cream p-5">
								<p className="font-mono text-xs text-leaf uppercase">Focus</p>
								<p className="mt-1 font-medium text-forest">
									Renewable energy systems · Optimization · Simulation
								</p>
							</div>
						</div>
					</div>

					<div className="reveal">
						<div className="rounded-2xl bg-forest p-6 text-cream">
							<p className="font-mono text-xs tracking-widest text-mint uppercase">
								Languages
							</p>
							<ul className="mt-4 space-y-3">
								{languages.map((l) => (
									<li key={l.name} className="flex items-center justify-between text-sm">
										<span>{l.name}</span>
										<span className="font-mono text-xs text-mint">{l.level}</span>
									</li>
								))}
							</ul>
						</div>
						<div className="mt-4 rounded-2xl border border-forest/10 bg-cream p-6">
							<p className="font-mono text-xs tracking-widest text-leaf uppercase">
								Certifications
							</p>
							<ul className="mt-3 space-y-2 text-sm text-charcoal/80">
								<li>◆ Renewable Power-to-X — International PtX Hub</li>
								<li>◆ Lean Management</li>
								<li>◆ Injaz Company Program</li>
								<li>◆ Negotiation Techniques</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
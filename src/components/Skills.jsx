import { skills } from "../data.js";

const icons = ["⚙", "◎", "⌁", "▤"];

export default function Skills() {
	return (
		<section id="skills" className="bg-cream py-24">
			<div className="mx-auto max-w-6xl px-6">
				<div className="reveal">
					<p className="font-mono text-sm tracking-widest text-leaf uppercase">Skills</p>
					<h2 className="mt-2 font-display text-3xl font-bold text-forest md:text-4xl">
						A toolkit built for systems thinking
					</h2>
				</div>

				<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{skills.map((group, i) => (
						<div
							key={group.category}
							className="reveal rounded-2xl border border-forest/10 bg-sand p-6 transition-all hover:-translate-y-1 hover:border-leaf/40 hover:shadow-lg hover:shadow-forest/10"
						>
							<span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest font-mono text-lg text-mint">
								{icons[i % icons.length]}
							</span>
							<h3 className="mt-4 font-semibold text-forest">{group.category}</h3>
							<ul className="mt-3 space-y-2 text-sm text-charcoal/75">
								{group.items.map((item) => (
									<li key={item} className="flex items-start gap-2">
										<span className="mt-0.5 text-leaf">▸</span>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
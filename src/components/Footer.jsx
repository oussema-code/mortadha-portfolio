import { student } from "../data.js";

export default function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-cream py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-charcoal/60 md:flex-row">
        <p>
          <span className="font-display font-semibold text-forest">{student.name}</span> —
          Industrial Engineering Student, ENIT
        </p>
        <p className="font-mono text-xs">
          Where precision meets sustainability <span className="text-leaf">◆</span>
        </p>
      </div>
    </footer>
  );
}
import { useEffect, useState } from "react";
import { student } from "../data.js";

const links = [
 { href: "#about", label: "About" },
 { href: "#skills", label: "Skills" },
 { href: "#projects", label: "Projects" },
 { href: "#timeline", label: "Journey" },
 { href: "#contact", label: "Contact" },
];

export default function Navbar() {
 const [scrolled, setScrolled] = useState(false);
 const [open, setOpen] = useState(false);

 useEffect(() => {
 const onScroll = () => setScrolled(window.scrollY > 24);
 window.addEventListener("scroll", onScroll, { passive: true });
 return () => window.removeEventListener("scroll", onScroll);
 }, []);

 return (
 <header
 className={`fixed inset-x-0 top-0 z-50 transition-all ${
 scrolled ? "bg-cream/90 shadow-md shadow-forest/5 backdrop-blur" : "bg-transparent"
 }`}
 >
 <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
 <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold text-forest">
 <span className="inline-block h-2.5 w-2.5 rounded-full bg-leaf" />
 {student.name}
 </a>

 <button
 className="rounded-md p-2 text-forest md:hidden"
 aria-label="Toggle menu"
 onClick={() => setOpen(!open)}
 >
 <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
 {open ? (
 <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
 ) : (
 <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
 )}
 </svg>
 </button>

 <ul className="hidden items-center gap-7 md:flex">
 {links.map((l) => (
 <li key={l.href}>
 <a
 href={l.href}
 className="text-sm font-medium text-charcoal/70 transition-colors hover:text-leaf"
 >
 {l.label}
 </a>
 </li>
 ))}
 </ul>
 </nav>

 {open && (
 <ul className="border-t border-forest/10 bg-cream px-6 py-4 md:hidden">
 {links.map((l) => (
 <li key={l.href} className="py-2">
 <a
 href={l.href}
 onClick={() => setOpen(false)}
 className="block text-sm font-medium text-charcoal/80 hover:text-leaf"
 >
 {l.label}
 </a>
 </li>
 ))}
 </ul>
 )}
 </header>
 );
}
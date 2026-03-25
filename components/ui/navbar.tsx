'use client';

import { useEffect, useState } from 'react';

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="text-sm font-semibold text-white tracking-tight">
          Shahaddin Gafarov
        </a>
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-white/50 hover:text-white transition"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:shahaddingafarov@gmail.com"
          className="text-xs px-4 py-1.5 rounded-full border border-white/20 text-white/70 hover:border-white/50 hover:text-white transition"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}

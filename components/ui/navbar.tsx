'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/hooks/use-theme';
import { Sun, Moon } from 'lucide-react';

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggle, mounted } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/10 dark:border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="text-sm font-semibold text-gray-900 dark:text-white tracking-tight">
          Shahaddin Gafarov
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {mounted && (
          <button
            onClick={toggle}
            className="p-2 rounded-full border border-black/10 dark:border-white/20 text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:border-black/30 dark:hover:border-white/40 transition"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        )}
      </nav>
    </header>
  );
}

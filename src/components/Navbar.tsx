"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Terminal } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container flex h-14 max-w-4xl items-center">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Terminal className="h-5 w-5 text-primary" />
          <span className="font-bold text-primary">TGP</span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center gap-0.5 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="p-2 hover:text-primary transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end md:flex-none">
          <Button asChild variant="ghost" size="sm" className="px-3 button-glow">
            <a href="https://github.com/phuctran362003" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Terminal, Menu } from 'lucide-react';

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'ABOUT' },
    { href: '#skills', label: 'SKILLS' },
    { href: '#education', label: 'EDUCATION' },
    { href: '#experience', label: 'EXPERIENCE' },
    { href: '#projects', label: 'PROJECTS' },
    { href: '#contact', label: 'CONTACT' },
  ];

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="px-3 py-2 text-xs tracking-wider hover:text-yellow-400 transition-colors relative group"
        >
          {item.label}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
        </Link>
      ))}
    </>
  );

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm transition-shadow duration-200 ${hasScrolled ? 'shadow-md shadow-black/10' : ''}`}>
      <div className="container flex h-16 max-w-5xl items-center">
        <Link href="/" className="flex items-center gap-2 mr-8">
          <Terminal className="h-5 w-5 text-yellow-400" />
          <span className="font-bold text-yellow-400">TGP</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center gap-1 text-sm">
          <NavLinks />
        </nav>
        
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button asChild variant="ghost" size="sm" className="hidden md:flex px-4 text-xs tracking-wider hover:text-yellow-400">
            <a href="https://github.com/phuctran362003" target="_blank" rel="noopener noreferrer">
              GITHUB
            </a>
          </Button>
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-background/95 backdrop-blur-lg">
              <SheetHeader>
                <SheetTitle className="text-left">Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                <NavLinks />
                <Button asChild variant="ghost" size="sm" className="justify-start px-3 text-xs tracking-wider hover:text-yellow-400">
                  <a href="https://github.com/phuctran362003" target="_blank" rel="noopener noreferrer">
                    GITHUB
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 
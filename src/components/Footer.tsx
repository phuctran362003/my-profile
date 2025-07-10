"use client";

import { Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/40 py-8 bg-black/40 backdrop-blur-sm">
      <div className="container max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-sm text-muted-foreground">
        <div className="flex items-center gap-4 mb-4">
          <a
            href="https://github.com/phuctran362003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-yellow-400 transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
        <p className="mb-2 text-center">
          <span className="text-yellow-400 font-medium">phucdev</span> © {currentYear} • All Rights Reserved
        </p>
        <div className="inline-flex items-center justify-center text-xs tracking-wide">
          <span className="flex gap-2 items-center opacity-80">
            Built with
            <span className="text-yellow-400">♦</span>
            Next.js & TailwindCSS
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
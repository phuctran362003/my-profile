"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50 py-4">
      <div className="container max-w-4xl mx-auto flex items-center justify-between px-4">
        <a href="#" className="font-bold text-lg tracking-tight text-primary">
          Tran Gia Phuc
        </a>
        
        <div className="hidden md:flex items-center space-x-4">
          {sections.map((section) => (
            <a 
              key={section.id}
              href={`#${section.id}`}
              className="text-foreground hover:text-primary transition-colors"
            >
              {section.label}
            </a>
          ))}
        </div>
        
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="border-primary text-primary">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-background">
            <div className="flex flex-col space-y-4 mt-8">
              {sections.map((section) => (
                <a 
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {section.label}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
} 
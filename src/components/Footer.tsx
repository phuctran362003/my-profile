"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border py-6 bg-background/80 backdrop-blur-sm">
      <div className="container max-w-4xl mx-auto px-4 flex flex-col items-center justify-center text-sm text-muted-foreground">
        <p className="mb-1 text-center">
          <span className="text-primary">Tran Gia Phuc</span> © {currentYear} • All Rights Reserved
        </p>
        <div className="inline-flex items-center justify-center">
          <span className="flex gap-1 items-center">
            <span>Built with</span>
            <span className="text-primary">♦</span>
            <span>Next.js & TailwindCSS</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
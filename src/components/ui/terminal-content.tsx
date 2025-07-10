import React from 'react';
import { cn } from '@/lib/utils';

interface TerminalContentProps {
  children: React.ReactNode;
  className?: string;
}

export function TerminalContent({ children, className }: TerminalContentProps) {
  return (
    <div className={cn(
      "p-4 font-mono text-sm space-y-6 terminal-scrollbar",
      "overflow-y-auto max-h-[calc(100vh-200px)]",
      className
    )}>
      {children}
    </div>
  );
}

interface TerminalSectionProps {
  title: string;
  children: React.ReactNode;
  isExpanded?: boolean;
}

export function TerminalSection({ title, children, isExpanded = true }: TerminalSectionProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2 text-gray-400">
        <span>{isExpanded ? "▼" : "▶"}</span>
        <span className="text-green-400">--</span>
        <span>{title}</span>
        <span className="flex-1 border-b border-dashed border-gray-800"></span>
      </div>
      {isExpanded && (
        <div className="pl-6 pt-2">
          {children}
        </div>
      )}
    </div>
  );
}

interface TerminalCodeBlockProps {
  language: string;
  children: React.ReactNode;
}

export function TerminalCodeBlock({ language, children }: TerminalCodeBlockProps) {
  return (
    <div className="bg-black/50 rounded p-4 border border-gray-800">
      <div className="text-gray-500 text-xs mb-2"># {language}</div>
      <div className="text-gray-300">
        {children}
      </div>
    </div>
  );
} 
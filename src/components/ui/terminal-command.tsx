import React from 'react';
import { cn } from '@/lib/utils';

interface TerminalCommandProps {
  command: string;
  output?: React.ReactNode;
  className?: string;
  showCursor?: boolean;
}

export function TerminalCommand({ command, output, className, showCursor = false }: TerminalCommandProps) {
  return (
    <div className={cn("mb-4", className)}>
      <div className="flex items-center text-green-400">
        <span className="mr-2">❯</span>
        <span>{command}</span>
        {showCursor && (
          <span className="ml-1 w-2 h-5 bg-green-400 animate-pulse">▍</span>
        )}
      </div>
      {output && (
        <div className="mt-2 pl-4 text-gray-300 whitespace-pre-wrap">
          {output}
        </div>
      )}
    </div>
  );
} 
import React from 'react';

interface TerminalWindowProps {
  children: React.ReactNode;
}

export function TerminalWindow({ children }: TerminalWindowProps) {
  return (
    <div className="w-full max-w-4xl mx-auto bg-black/95 text-gray-300 rounded-lg shadow-2xl border border-gray-800">
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-2 bg-gray-900/50 border-b border-gray-800 rounded-t-lg">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center text-sm text-gray-500">terminal</div>
      </div>
      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm md:text-base overflow-x-auto">
        {children}
      </div>
    </div>
  );
} 
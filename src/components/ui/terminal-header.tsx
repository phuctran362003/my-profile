import React from 'react';

interface TerminalHeaderProps {
  name: string;
  location: string;
  handle: string;
  editor: string;
}

export function TerminalHeader({ name, location, handle, editor }: TerminalHeaderProps) {
  return (
    <div className="border-b border-gray-800 p-4 font-mono text-sm">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="text-gray-500">Name</span>
            <span className="text-gray-300">{name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Location</span>
            <span className="text-gray-300">{location}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Handle</span>
            <span className="text-gray-300">{handle}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Editor</span>
            <span className="text-gray-300">{editor}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-end space-x-4">
          <a 
            href="/how-i-build" 
            className="text-gray-400 hover:text-gray-200 transition-colors"
          >
            How I build this site
          </a>
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-gray-200 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
} 
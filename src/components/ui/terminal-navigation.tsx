import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { id: 1, label: 'Articles', path: '/articles' },
  { id: 2, label: 'My Projects', path: '/projects' },
  { id: 3, label: 'About', path: '/about' },
  { id: 4, label: 'Skills', path: '/skills' },
  { id: 5, label: 'Talks', path: '/talks' },
];

export function TerminalNavigation() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-gray-800 p-4 font-mono">
      <div className="flex space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.path}
            className={cn(
              "text-sm transition-colors",
              pathname === item.path
                ? "text-green-400 bg-green-400/10 px-2 py-1 rounded"
                : "text-gray-400 hover:text-gray-200"
            )}
          >
            ({item.id}) {item.label}
          </Link>
        ))}
      </div>
      
      <div className="mt-4 flex items-center text-sm text-gray-500">
        <span className="mr-2">Filter:</span>
        <button className="text-gray-400 hover:text-gray-200 transition-colors">
          Date ▼
        </button>
      </div>
    </nav>
  );
} 
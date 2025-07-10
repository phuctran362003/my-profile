'use client';

import { TerminalWindow } from '@/components/ui/terminal-window';
import { TerminalHeader } from '@/components/ui/terminal-header';
import { TerminalNavigation } from '@/components/ui/terminal-navigation';
import { TerminalContent, TerminalSection } from '@/components/ui/terminal-content';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';

const USER_INFO = {
  name: 'Tran Gia Phuc',
  location: 'Ho Chi Minh City, Vietnam',
  handle: '@phuctran362003',
  editor: 'VS Code + Vim',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="max-w-6xl mx-auto p-4">
        <TerminalWindow>
          <TerminalHeader {...USER_INFO} />
          <TerminalNavigation />
          <TerminalContent>
            <div className="space-y-12">
              <TerminalSection title="About">
                <About />
              </TerminalSection>
              
              <TerminalSection title="Skills">
                <Skills />
              </TerminalSection>
              
              <TerminalSection title="Projects">
                <Projects />
              </TerminalSection>
              
              <TerminalSection title="Contact">
                <Contact />
              </TerminalSection>
            </div>
          </TerminalContent>
        </TerminalWindow>
      </div>
    </main>
  );
}

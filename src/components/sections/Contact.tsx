"use client"

import { TerminalCommand } from '@/components/ui/terminal-command';

const CONTACT_INFO = {
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  location: 'Ho Chi Minh City, Vietnam'
};

export function Contact() {
  return (
    <div className="space-y-6">
      <TerminalCommand 
        command="contact --info"
        output={`Contact information loaded successfully.`}
      />

      <TerminalCommand 
        command="contact --show email"
        output={`📧 ${CONTACT_INFO.email}`}
      />

      <TerminalCommand 
        command="contact --show social"
        output={`GitHub: ${CONTACT_INFO.github}
LinkedIn: ${CONTACT_INFO.linkedin}`}
      />

      <TerminalCommand 
        command="contact --show location"
        output={`📍 ${CONTACT_INFO.location}`}
      />

      <TerminalCommand 
        command="echo 'Thank you for visiting!'"
        output="Feel free to reach out through any of the channels above."
        showCursor={true}
      />
    </div>
  );
} 
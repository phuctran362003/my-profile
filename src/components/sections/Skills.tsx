import { TerminalCommand } from '@/components/ui/terminal-command';

const SKILLS = {
  languages: [
    'C#',
    'JavaScript/TypeScript',
    'Python',
    'SQL',
  ],
  frameworks: [
    'ASP.NET Core',
    'React/Next.js',
    'Node.js/Express',
    'Entity Framework Core',
  ],
  tools: [
    'Git',
    'Docker',
    'Azure DevOps',
    'GitHub Actions',
    'Visual Studio',
    'VS Code',
  ],
  databases: [
    'SQL Server',
    'PostgreSQL',
    'MongoDB',
    'Redis',
  ],
};

export function Skills() {
  return (
    <div className="space-y-6">
      <TerminalCommand 
        command="skills --list-all"
        output={`Skills loaded successfully. Use --category to filter.`}
      />

      <TerminalCommand 
        command="skills --category languages"
        output={SKILLS.languages.map(skill => `• ${skill}`).join('\n')}
      />

      <TerminalCommand 
        command="skills --category frameworks"
        output={SKILLS.frameworks.map(skill => `• ${skill}`).join('\n')}
      />

      <TerminalCommand 
        command="skills --category tools"
        output={SKILLS.tools.map(skill => `• ${skill}`).join('\n')}
      />

      <TerminalCommand 
        command="skills --category databases"
        output={SKILLS.databases.map(skill => `• ${skill}`).join('\n')}
      />
    </div>
  );
} 
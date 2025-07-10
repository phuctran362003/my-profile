import { TerminalCommand } from '@/components/ui/terminal-command';

const PROJECTS = [
  {
    name: 'E-Commerce Platform',
    description: 'Built a full-stack e-commerce platform using ASP.NET Core and React',
    tech: ['C#', 'ASP.NET Core', 'React', 'SQL Server', 'Redis'],
    github: 'https://github.com/username/ecommerce'
  },
  {
    name: 'Task Management System',
    description: 'Developed a task management system with real-time updates',
    tech: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'WebSocket'],
    github: 'https://github.com/username/task-manager'
  },
  {
    name: 'DevOps Pipeline',
    description: 'Implemented CI/CD pipeline for microservices architecture',
    tech: ['Docker', 'Azure DevOps', 'Kubernetes', 'GitHub Actions'],
    github: 'https://github.com/username/devops-pipeline'
  }
];

export function Projects() {
  return (
    <div className="space-y-6">
      <TerminalCommand 
        command="projects --list"
        output={`Found ${PROJECTS.length} projects. Use --show <project-name> for details.`}
      />

      {PROJECTS.map((project, index) => (
        <TerminalCommand
          key={index}
          command={`projects --show "${project.name}"`}
          output={`Name: ${project.name}
Description: ${project.description}
Tech Stack: ${project.tech.join(', ')}
GitHub: ${project.github}
`}
        />
      ))}

      <TerminalCommand 
        command="projects --count"
        output={`Total projects: ${PROJECTS.length}`}
      />
    </div>
  );
} 
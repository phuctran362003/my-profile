import { Section } from "@/components/ui/section"
import { Code, Database, Globe, Server, Terminal } from "lucide-react"

const skills = {
  programming: [
    { name: "C# (Intermediate)", icon: <Code className="h-4 w-4" /> },
    { name: "Java (Intermediate)", icon: <Code className="h-4 w-4" /> },
    { name: "ReactJS (Beginner)", icon: <Globe className="h-4 w-4" /> },
    { name: "ASP.NET Core", icon: <Server className="h-4 w-4" /> },
  ],
  technologies: [
    { name: "Docker", icon: <Database className="h-4 w-4" /> },
    { name: "Git", icon: <Code className="h-4 w-4" /> },
    { name: "SQL Server", icon: <Database className="h-4 w-4" /> },
    { name: "Azure DevOps", icon: <Server className="h-4 w-4" /> },
  ],
  tools: [
    { name: "Visual Studio", icon: <Terminal className="h-4 w-4" /> },
    { name: "VS Code", icon: <Terminal className="h-4 w-4" /> },
    { name: "Postman", icon: <Globe className="h-4 w-4" /> },
    { name: "Azure Portal", icon: <Server className="h-4 w-4" /> },
  ],
}

export function Skills() {
  return (
    <Section id="skills" icon={<Terminal className="h-5 w-5" />} title="Technical Skills">
      <div className="grid gap-8 md:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="space-y-4">
            <h3 className="text-lg font-semibold capitalize text-slate-200">
              {category}
            </h3>
            
            <div className="grid gap-2">
              {items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/30 px-3 py-2 text-sm text-slate-300"
                >
                  {skill.icon}
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
} 
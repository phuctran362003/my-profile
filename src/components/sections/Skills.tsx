import { Section } from "@/components/ui/section"
import { Code, Database, Globe, Server, Terminal, Wrench, Brain, Languages } from "lucide-react"

const skills = {
  "Programming Languages": [
    { name: "C# (Intermediate - 20 months)", icon: <Code className="h-4 w-4" /> },
    { name: "Java (Intermediate - 5 months)", icon: <Code className="h-4 w-4" /> },
    { name: "C++ (Beginner - 4 months)", icon: <Code className="h-4 w-4" /> },
  ],
  "Frameworks & Libraries": [
    { name: "ASP.NET Core (Intermediate - 12 months)", icon: <Server className="h-4 w-4" /> },
    { name: ".NET Entity Framework (Intermediate - 20 months)", icon: <Database className="h-4 w-4" /> },
    { name: "ReactJS (Beginner - 1 month)", icon: <Globe className="h-4 w-4" /> },
  ],
  "Databases": [
    { name: "SQL Server (Intermediate - 6 months)", icon: <Database className="h-4 w-4" /> },
    { name: "PostgreSQL (Intermediate - 4 months)", icon: <Database className="h-4 w-4" /> },
    { name: "Redis (Intermediate - 4 months)", icon: <Database className="h-4 w-4" /> },
  ],
  "Design & Architecture": [
    { name: "RESTful API (Intermediate - 12 months)", icon: <Server className="h-4 w-4" /> },
    { name: "GraphQL (Beginner - 4 months)", icon: <Server className="h-4 w-4" /> },
    { name: "Clean Architecture C# (2 months)", icon: <Wrench className="h-4 w-4" /> },
    { name: "Repository Pattern C# (3 months)", icon: <Wrench className="h-4 w-4" /> },
  ],
  "DevOps & Tools": [
    { name: "Git (Intermediate - 12 months)", icon: <Code className="h-4 w-4" /> },
    { name: "Docker", icon: <Server className="h-4 w-4" /> },
    { name: "Nginx", icon: <Server className="h-4 w-4" /> },
    { name: "MinIO", icon: <Server className="h-4 w-4" /> },
  ],
  "Soft Skills": [
    { name: "Leadership", icon: <Brain className="h-4 w-4" /> },
    { name: "Problem-Solving", icon: <Brain className="h-4 w-4" /> },
    { name: "Critical Thinking", icon: <Brain className="h-4 w-4" /> },
    { name: "English (Upper-intermediate)", icon: <Languages className="h-4 w-4" /> },
  ],
}

export function Skills() {
  return (
    <Section id="skills" icon={<Terminal className="h-5 w-5" />} title="Skills & Expertise">
      <div className="grid gap-8 md:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-200">
              {category}
            </h3>
            
            <div className="grid gap-2">
              {items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/30 px-3 py-2 text-sm text-slate-300 hover:bg-slate-900/50 transition-colors"
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
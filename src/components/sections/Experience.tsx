import { Section } from "@/components/ui/section"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    company: "FPT Software Ho Chi Minh",
    position: ".NET Developer Intern",
    period: "May 2024 - Aug 2024",
    description: [
      "Working on enterprise-level .NET Core applications",
      "Implementing RESTful APIs and microservices",
      "Collaborating with team using Azure DevOps",
      "Learning modern development practices and tools"
    ]
  }
]

export function Experience() {
  return (
    <Section id="experience" icon={<Briefcase className="h-5 w-5" />} title="Work Experience">
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-[2px] before:bg-slate-800"
          >
            <div className="absolute left-0 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-yellow-400 bg-slate-900" />
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-200">
                  {exp.company}
                </h3>
                
                <span className="font-mono text-sm text-slate-400">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-yellow-400 font-medium">
                {exp.position}
              </p>
              
              <ul className="list-inside list-disc space-y-2 text-sm text-slate-300">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
} 
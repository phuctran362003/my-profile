import { Section } from "@/components/ui/section"
import { FileText } from "lucide-react"

export function About() {
  return (
    <Section id="about" icon={<FileText className="h-5 w-5" />} title="About Me">
      <div className="prose prose-invert max-w-none">
        <p className="text-lg leading-relaxed text-slate-300">
          <span className="font-mono text-yellow-400 font-medium">Short-term goal:</span>
          <br />
          Become a .NET Developer and DevOps Engineer with solid backend skills and CI/CD expertise.
        </p>
        
        <p className="text-lg leading-relaxed text-slate-300 mt-6">
          <span className="font-mono text-yellow-400 font-medium">Long-term goal:</span>
          <br />
          Become a Solution Architect designing large-scale secure systems with .NET & DevOps.
        </p>
      </div>
    </Section>
  )
} 
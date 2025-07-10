import { Section } from "@/components/ui/section"
import { GraduationCap } from "lucide-react"

export function Education() {
  return (
    <Section id="education" icon={<GraduationCap className="h-5 w-5" />} title="Education">
      <div className="space-y-8">
        <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-[2px] before:bg-slate-800">
          <div className="absolute left-0 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-yellow-400 bg-slate-900" />
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-200">
                FPT University, Ho Chi Minh
              </h3>
              
              <span className="font-mono text-sm text-slate-400">
                2021 - 2025
              </span>
            </div>
            
            <div>
              <p className="text-slate-300">Bachelor of Software Engineering</p>
              <p className="mt-1 text-sm text-slate-400">GPA: 7.0</p>
            </div>
            
            <div className="text-sm text-slate-400">
              <p>Key courses:</p>
              <ul className="mt-1 list-inside list-disc space-y-1">
                <li>Object-Oriented Programming</li>
                <li>Data Structures and Algorithms</li>
                <li>Web Development</li>
                <li>Database Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
} 
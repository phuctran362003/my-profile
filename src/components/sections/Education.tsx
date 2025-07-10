import { Section } from "@/components/ui/section"
import { GraduationCap } from "lucide-react"

export function Education() {
  return (
    <Section id="education" icon={<GraduationCap className="h-5 w-5" />} title="Education & Activities">
      <div className="space-y-12">
        {/* Education */}
        <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-[2px] before:bg-slate-800">
          <div className="absolute left-0 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-yellow-400 bg-slate-900" />
          
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
              <h3 className="text-lg font-semibold text-slate-200">
                FPT University, Ho Chi Minh
              </h3>
              
              <span className="font-mono text-sm text-slate-400">
                October 2021 - Present
              </span>
            </div>
            
            <div>
              <p className="text-slate-300">Bachelor of Software Engineering</p>
              <p className="mt-1 text-sm text-slate-400">Expected graduation: August 2025</p>
              <p className="text-sm text-slate-400">GPA: 7.0</p>
            </div>
          </div>
        </div>

        {/* Activities */}
        <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-[2px] before:bg-slate-800">
          <div className="absolute left-0 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-yellow-400 bg-slate-900" />
          
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
              <h3 className="text-lg font-semibold text-slate-200">
                FPTU Developer Student Community
              </h3>
            </div>
            
            <div className="space-y-2">
              <p className="text-slate-300">Club Member</p>
              <ul className="list-inside list-disc text-sm text-slate-400 space-y-1">
                <li>Participated in technology sharing sessions</li>
                <li>Learned and shared knowledge with other members</li>
                <li>Engaged in community learning activities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Awards */}
        <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-[2px] before:bg-slate-800">
          <div className="absolute left-0 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-yellow-400 bg-slate-900" />
          
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
              <h3 className="text-lg font-semibold text-slate-200">
                FPT Elympics - English Competition
              </h3>
              
              <span className="font-mono text-sm text-slate-400">
                April 2022
              </span>
            </div>
            
            <div>
              <p className="text-yellow-400 font-medium">TOP 4 Finalist</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
} 
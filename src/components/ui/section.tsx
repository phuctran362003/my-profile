import { ReactNode } from "react"

interface SectionProps {
  id: string
  title: string
  icon: ReactNode
  children: ReactNode
}

export function Section({ id, title, icon, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 py-16 md:py-24"
    >
      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="px-6 py-8 md:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-yellow-400">
              {icon}
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-200">
              {title}
            </h2>
          </div>
          
          {children}
        </div>
      </div>
    </section>
  )
} 
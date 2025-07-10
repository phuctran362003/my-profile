import { Section } from "@/components/ui/section"
import { Server } from "lucide-react"

const projects = [
  {
    title: "BlindTreasure",
    subtitle: "E-commerce & Mystery Box Platform",
    period: "04/2025 - Present",
    description: "Developed a B2B2C e-commerce platform integrating mystery shopping mechanics, supporting admin, seller, staff, and customer roles. Implemented transparent drop rates, inventory management, and PCI DSS-compliant secure payment processing.",
    tags: [".NET", "NextJS", "MinIO", "Resend", "Nginx", "Docker", "Redis", "Stripe", "Gemini", "PostgreSQL"],
    role: "Back-End Developer / DevOps Engineer / Team Leader",
    teamSize: "4 members"
  },
  {
    title: "ArWoh",
    subtitle: "Artwork High Quality Store",
    period: "01/2025 - 04/2025",
    description: "Digital platform specializing in high-quality artwork, connecting talented artists worldwide and providing premium art products. Implemented secure payment processing with VNPay and PayOS integration.",
    tags: [".NET", "ReactJS", "MinIO", "Nginx", "Docker", "GraphQL", "VNPay", "PayOS", "MSSQL"],
    role: "Back-End Developer / DevOps Engineer / Team Leader",
    teamSize: "3 members"
  },
  {
    title: "VaccinaCare",
    subtitle: "Medical Vaccination Center for Children",
    period: "01/2025 - 04/2025",
    description: "Developed a pediatric vaccination management system with appointment scheduling, vaccination tracking, automated reminders, feedback collection, and analytics dashboards.",
    tags: [".NET", "ReactJS", "MinIO", "Nginx", "Docker", "GraphQL", "VNPay", "PayOS", "MSSQL"],
    role: "Back-End Developer / DevOps Engineer / Team Leader",
    teamSize: "4 members"
  },
  {
    title: "Cursus",
    subtitle: "Online Course Platform",
    period: "05/2024 - 08/2024",
    description: "Built a processing flow for book import/sales management with shipping status tracking and automated invoice generation for stores.",
    tags: [".NET", "Azure Storage", "Redis", "Entity Framework", "VNPay", "Sentry", "MSSQL"],
    role: "Back-End Developer / Team Leader",
    teamSize: "6 members"
  }
]

export function Projects() {
  return (
    <Section id="projects" icon={<Server className="h-5 w-5" />} title="Projects">
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/30 p-6 transition-colors hover:bg-slate-900/50"
          >
            <div className="space-y-5">
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {project.subtitle}
                    </p>
                  </div>
                  
                  <span className="font-mono text-xs text-slate-400">
                    {project.period}
                  </span>
                </div>
              </div>
              
              <p className="text-sm leading-relaxed text-slate-300">
                {project.description}
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300 hover:bg-slate-800/80 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-400">
                    {project.role}
                  </span>
                  <span className="inline-block rounded-md bg-slate-800 px-2 py-1 text-xs font-medium text-slate-300">
                    {project.teamSize}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
} 
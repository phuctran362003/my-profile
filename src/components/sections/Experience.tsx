import { Section } from "@/components/ui/section"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    company: "BlindTreasure - E-commerce and Mystery Box Platform",
    position: "Back-End Developer / DevOps Engineer / Team Leader",
    period: "April 2025 - Present",
    description: [
      "Developed a B2B2C e-commerce platform integrating mystery shopping (blind box) mechanics",
      "Implemented multi-role system supporting admin, seller, staff, and customer roles",
      "Ensured transparent drop rates, inventory and resale marketplace management",
      "Integrated PCI DSS-compliant secure payment processing",
      "Technologies: .NET, NextJS, MinIO, Resend, Nginx, Docker, Redis, Stripe, Gemini",
      "Database: PostgreSQL",
      "Team size: 4"
    ]
  },
  {
    company: "ArWoh - Artwork High Quality Store",
    position: "Back-End Developer / DevOps Engineer / Team Leader",
    period: "January 2025 - April 2025",
    description: [
      "Built a digital platform specializing in high-quality artwork",
      "Connected talented artists worldwide and provided premium art products",
      "Implemented secure payment processing with VNPay and PayOS",
      "Technologies: .NET, ReactJS, MinIO, Nginx, Docker, GraphQL",
      "Database: MSSQL",
      "Team size: 3"
    ]
  },
  {
    company: "VaccinaCare - Medical Vaccination Center for Children",
    position: "Back-End Developer / DevOps Engineer / Team Leader",
    period: "January 2025 - April 2025",
    description: [
      "Developed a pediatric vaccination management system",
      "Implemented appointment scheduling and vaccination tracking",
      "Built automated reminders and feedback collection system",
      "Created analytics dashboards for data visualization",
      "Technologies: .NET, ReactJS, MinIO, Nginx, Docker, GraphQL, VNPay, PayOS",
      "Database: MSSQL",
      "Team size: 4"
    ]
  },
  {
    company: "Cursus - Online Course Platform",
    position: "Back-End Developer / Team Leader",
    period: "May 2024 - August 2024",
    description: [
      "Developed a processing flow for book import/sales management",
      "Implemented shipping status tracking system",
      "Integrated invoice generation for stores",
      "Technologies: .NET, Azure Storage, Redis, Entity Framework, VNPay, Sentry",
      "Database: MSSQL",
      "Team size: 6"
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
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
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
                  <li key={i} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
} 
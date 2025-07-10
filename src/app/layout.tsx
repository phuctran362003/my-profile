import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import "./globals.css"
import { ScrollToTop } from "@/components/ScrollToTop"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "phucdev | Portfolio",
  description: "phucdev's Personal Portfolio Website - .NET Developer & DevOps Engineer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased bg-slate-950 text-slate-200`}>
        {/* Particles Background */}
        <canvas className="fixed inset-0 -z-10 opacity-30 pointer-events-none" />
        
        {/* Main Content */}
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="sticky top-0 z-50 w-full border-b border-slate-800/40 bg-slate-950/80 backdrop-blur-sm">
            <div className="container max-w-5xl mx-auto">
              <div className="flex h-16 items-center justify-between px-6">
                <Link href="/" className="flex items-center gap-2">
                  <span className="font-bold text-yellow-400">TGP</span>
                </Link>
                
                <nav className="hidden md:flex items-center gap-6">
                  {["about", "skills", "education", "experience", "projects", "contact"].map((item) => (
                    <a
                      key={item}
                      href={`#${item}`}
                      className="text-sm font-medium tracking-wider uppercase hover:text-yellow-400 transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
                
                <a
                  href="https://github.com/phuctran362003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:block text-sm font-medium hover:text-yellow-400 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </header>
          
          {/* Main */}
          <main className="flex-1 container max-w-5xl mx-auto px-6 py-12">
            {children}
          </main>
          
          {/* Footer */}
          <footer className="border-t border-slate-800/40 py-8 bg-black/40 backdrop-blur-sm">
            <div className="container max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-sm text-slate-400">
              <div className="flex items-center gap-4 mb-4">
                <a
                  href="https://github.com/phuctran362003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-yellow-400 transition-colors"
                >
                  GitHub
                </a>
              </div>
              
              <p className="mb-2 text-center">
                <span className="text-yellow-400 font-medium">Tran Gia Phuc</span> © {new Date().getFullYear()} • All Rights Reserved
              </p>
              
              <div className="inline-flex items-center justify-center text-xs tracking-wide">
                <span className="flex gap-2 items-center opacity-80">
                  Built with<span className="text-yellow-400">♦</span>Next.js & TailwindCSS
                </span>
              </div>
            </div>
          </footer>
        </div>
        
        <ScrollToTop />
      </body>
    </html>
  )
}

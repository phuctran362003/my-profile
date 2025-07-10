"use client"

import { Download, Mail } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="flex flex-col items-center text-center space-y-8 py-20 md:py-32">
      {/* Avatar */}
      <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-yellow-400/20 blur" />
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-yellow-400/30">
          <Image
            src="https://avatars.githubusercontent.com/u/108740308?v=4"
            alt="phucdev"
            width={128}
            height={128}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Title */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          phucdev
        </h1>
        <p className="text-lg text-slate-400 font-mono flex items-center justify-center gap-2">
          <span>.NET Developer | DevOps Engineer</span>
          <span className="h-4 w-0.5 animate-pulse bg-yellow-400" />
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center gap-4 pt-4">
        <a
          href="/CV_TRANGIAPHUC.pdf"
          download
          className="inline-flex items-center gap-2 rounded-md bg-yellow-400 px-6 py-2.5 text-sm font-medium text-slate-900 hover:bg-yellow-500 transition-colors"
        >
          <Download className="h-4 w-4" />
          Download CV
        </a>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900/30 px-6 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-900/50 transition-colors"
        >
          <Mail className="h-4 w-4" />
          Contact Me
        </a>
      </div>
    </section>
  )
} 
"use client"

import { Section } from "@/components/ui/section"
import { Mail, Phone, Github } from "lucide-react"

export function Contact() {
  return (
    <Section id="contact" icon={<Mail className="h-5 w-5" />} title="Contact">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-slate-300 hover:text-yellow-400 transition-colors">
            <Mail className="h-5 w-5 text-yellow-400" />
            <a href="mailto:trangiaphuc362003181@gmail.com">
              trangiaphuc362003181@gmail.com
            </a>
          </div>
          
          <div className="flex items-center gap-3 text-slate-300 hover:text-yellow-400 transition-colors">
            <Phone className="h-5 w-5 text-yellow-400" />
            <a href="tel:+84393734206">
              +84 393 734 206
            </a>
          </div>
          
          <div className="flex items-center gap-3 text-slate-300 hover:text-yellow-400 transition-colors">
            <Github className="h-5 w-5 text-yellow-400" />
            <a
              href="https://github.com/phuctran362003"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/phuctran362003
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-slate-200"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                minLength={2}
                maxLength={50}
                className="w-full rounded-md border border-slate-800 bg-slate-900/30 px-3 py-2 text-sm text-slate-200 placeholder-slate-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-slate-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full rounded-md border border-slate-800 bg-slate-900/30 px-3 py-2 text-sm text-slate-200 placeholder-slate-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-slate-200"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              minLength={10}
              maxLength={500}
              rows={4}
              className="w-full rounded-md border border-slate-800 bg-slate-900/30 px-3 py-2 text-sm text-slate-200 placeholder-slate-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 resize-none"
              placeholder="Your message here..."
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-md bg-yellow-400 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </Section>
  )
} 
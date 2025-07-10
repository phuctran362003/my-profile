'use client';

import React from 'react';
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { Education } from "@/components/sections/Education"
import { Experience } from "@/components/sections/Experience"
import { Projects } from "@/components/sections/Projects"
import { Contact } from "@/components/sections/Contact"

const Home: React.FC = () => {
  return (
    <main className="space-y-16 md:space-y-20">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}

export default Home;

'use client'
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { navItems } from '@/data'
import { SECTION_IDS } from '@/config/site'
import SplashGate from '@/components/SplashGate'

// Dynamically import client-heavy components inside a client boundary
const FloatingNav = dynamic(() => import('@/components/ui/floating-navbar').then(m => m.FloatingNav), { ssr: false })
const Hero = dynamic(() => import('@/components/Hero'), {
  ssr: false,
  loading: () => <div className="flex h-[60vh] items-center justify-center">Loading...</div>,
})
const About = dynamic(() => import('@/components/About'), { ssr: false })
const Skills = dynamic(() => import('@/components/Skill'), { ssr: false })
const ProjectsShowcase = dynamic(() => import('@/components/DemoCard'), { ssr: false })
const ExperienceSection = dynamic(() => import('@/components/ExperienceSection'), { ssr: false })
const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: false })
const ScrollToTopButton = dynamic(() => import('@/components/ScrollToTopButton'), { ssr: false })

export default function ClientHome() {
  return (
    <>
      <FloatingNav navItems={navItems} />
      <SplashGate>
        <main className="relative mx-auto flex min-h-screen flex-col items-center justify-center overflow-clip bg-black-100">
          <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
            <Hero />
          </Suspense>
          <section id={SECTION_IDS.ABOUT} className="w-full">
            <About />
          </section>
          <Skills />
          <section id={SECTION_IDS.PROJECTS} className="w-full">
            <ProjectsShowcase />
          </section>
          <section id={SECTION_IDS.EXPERIENCE} className="w-full">
            <ExperienceSection />
          </section>
          <section id={SECTION_IDS.CONTACT} className="w-full">
            <ContactForm />
          </section>
          <ScrollToTopButton />
        </main>
      </SplashGate>
    </>
  )
}

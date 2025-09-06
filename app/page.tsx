"use client";

import React, { Suspense, lazy, useEffect, useState } from 'react';

import { FloatingNav } from '@/components/ui/floating-navbar';
import { navItems } from '@/data';
import { SECTION_IDS } from '@/config/site';

// Components
const Hero = lazy(() => import('@/components/Hero'));
import About from '@/components/About';
import Skills from '@/components/Skill';
import ProjectsShowcase from '@/components/DemoCard';
import ExperienceSection from '@/components/ExperienceSection';
import ContactForm from '@/components/ContactForm';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import VideoSplash from '@/components/VideoSplash';

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const hasSeenSplash = localStorage.getItem('hasSeenSplash');
    if (!hasSeenSplash) {
      setShowSplash(true);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <VideoSplash onComplete={handleSplashComplete} />;
  }

  return (
    <>
      <FloatingNav navItems={navItems} />
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
    </>
  );
}

"use client";

import React from 'react';
import Link from 'next/link';
import { FaLocationArrow } from "react-icons/fa";

import { cn } from '@/lib/utils';
import { SECTION_IDS } from '../config/site';

import { Spotlight } from './ui/spotlight';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { MagicButton } from './ui/magic-button';
import { TechnologiesSlider } from './TechnologiesSlider';

interface HeroProps {
  className?: string;
}

const HERO_CONTENT = {
  subtitle: 'MERN Stack Developer',
  title: 'Code That Speaks,Designs That Convert',
  description: "Hi, I'm Ujer, a full-stack developer who turns complex business challenges into elegant, scalable web applications. 2+ years of experience. Clean code, smooth performance, real results.",
  ctaText: 'Show My Work'
} as const;

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section 
      id={SECTION_IDS.HOME}
      className={cn(
        "relative h-screen w-full overflow-hidden",
        className
      )}
    >
      {/* Spotlight Effects */}
      <SpotlightBackground />
      
      {/* Grid Background */}
      <GridBackground />
      
      {/* Main Content */}
      <div className="relative z-10 md:pt-[100px] flex h-full items-center justify-center px-4">
        <div className="flex max-w-[89vw] flex-col items-center justify-center text-center md:max-w-2xl lg:max-w-[60vw]">
          
          {/* Subtitle */}
          <h2 className="mb-4 max-w-80 text-center text-xs font-semibold uppercase tracking-widest text-blue-100">
            {HERO_CONTENT.subtitle}
          </h2>

          {/* Main Title */}
          <TextGenerateEffect
            className="text-center text-3xl font-bold leading-tight md:text-5xl lg:text-6xl"
            words={HERO_CONTENT.title}
          />

          {/* Description */}
          <p className="my-6 text-center text-sm leading-relaxed text-white md:text-lg md:tracking-wide lg:my-8">
            {HERO_CONTENT.description}
          </p>

          {/* CTA Button */}
          <div className="my-8">
            <Link 
              href={`#${SECTION_IDS.PROJECTS}`}
              className="text-white"
              aria-label="View my projects"
            >
              <MagicButton
                title={HERO_CONTENT.ctaText}
                icon={<FaLocationArrow  className="ml-2" />}
                position="right"
                asChild
              />
            </Link>
          </div>

          {/* Technologies Slider */}
          <TechnologiesSlider />
        </div>
      </div>
    </section>
  );
};

// Spotlight Background Component
const SpotlightBackground: React.FC = () => (
  <div className="absolute inset-0">
    <Spotlight
      className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
      fill="white"
    />
    <Spotlight
      className="left-full top-10 h-[80vh] w-[50vw]"
      fill="purple"
    />
    <Spotlight 
      className="left-80 top-28 h-[80vh] w-[50vw]" 
      fill="blue" 
    />
  </div>
);

// Grid Background Component
const GridBackground: React.FC = () => (
  <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-black-100 bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]">
    <div
      className={cn(
        "pointer-events-none absolute inset-0 flex select-none items-center justify-center bg-black-100 [background-size:90px_90px]",
        "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
      )}
    />
  </div>
);

export default Hero;

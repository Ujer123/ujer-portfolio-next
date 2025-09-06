"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { skills } from '@/data';
import type { Skill } from '@/types';
import { SECTION_IDS } from '@/config/site';
import { cn } from '@/lib/utils';

interface SkillsProps {
  className?: string;
}

interface SkillsByCategoryProps {
  skills: Skill[];
  title: string;
}

const SKILLS_CONTENT = {
  title: 'Technical Skills',
  subtitle: 'Technologies I work with daily',
  categories: {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    tools: 'Tools & Others'
  }
} as const;

const Skills: React.FC<SkillsProps> = ({ className }) => {
  const skillsByCategory: Record<Skill['category'], Skill[]> = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<Skill['category'], Skill[]>);

  return (
    <section 
      id={SECTION_IDS.SKILLS}
      className={cn(
        "w-full px-4 py-12 sm:py-16 lg:py-20",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="text-3xl font-bold text-purple sm:text-4xl lg:text-5xl">
            {SKILLS_CONTENT.title}
          </h2>
          <p className="mt-4 text-gray-400 sm:text-lg">
            {SKILLS_CONTENT.subtitle}
          </p>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
        </div>

        {/* Skills by Category */}
        <div className="space-y-12 lg:space-y-16">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <SkillsByCategory
              key={category}
              skills={categorySkills}
              title={SKILLS_CONTENT.categories[category as Skill['category']]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsByCategory: React.FC<SkillsByCategoryProps> = ({
  skills,
  title
}) => {
  return (
    <div>
      <h3 className="mb-6 text-center text-xl font-semibold text-white sm:text-2xl">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-6">
        {skills.map((skill, index) => (
          <SkillCard 
            key={skill.id} 
            skill={skill} 
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: 'easeOut'
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className="group relative flex h-32 w-full flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-transparent p-4 transition-all duration-300 hover:border-purple-500/50 sm:h-40"
    >
      {/* Animated Background */}
      <div 
        className="absolute inset-0 overflow-hidden rounded-2xl"
        style={{ backgroundColor: `${skill.color}10` }}
      >
        {/* Spinning Gradient */}
        <div 
          className="absolute -top-1/2 left-1/2 h-[170%] w-20 animate-spin-slow"
          style={{ 
            background: `linear-gradient(to bottom, ${skill.color}, transparent)`,
            transformOrigin: 'center'
          }}
        />
        
        {/* Inner Background */}
        <div className="absolute inset-1 rounded-xl bg-gray-900/95 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
          <Image 
            src={skill.image} 
            alt={`${skill.title} logo`}
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
            loading="lazy"
          />
        </div>
        
        <h4 className="text-center text-sm font-medium text-white transition-colors duration-300 group-hover:text-purple-300 sm:text-base">
          {skill.title}
        </h4>
      </div>

      {/* Hover Glow Effect */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-20"
        style={{
          background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)`
        }}
      />
    </motion.div>
  );
};

export default Skills;

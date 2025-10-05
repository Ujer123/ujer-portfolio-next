"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { SECTION_IDS } from '@/config/site';

interface Project {
  title: string;
  img: string;
  desc: string;
  tech: string[];
  link?: string;
  github?: string;
}

export default function ProjectsShowcase() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "Daniyal Perfume",
      img: "/projects/Daniyal_E-com.png",
      desc: "Full-featured e-commerce store with payment integration, admin dashboard, and real-time order tracking. Built for scalability and performance with modern web technologies.",
      tech: ["Next.js", "Clerk", "TailwindCSS"],
      link: "https://daniyal-perfumes.netlify.app/",
      github: "https://github.com/Ujer123/Daniyal.git",
    },
    {
      title: "Task Manager",
      img: "/projects/Task_Angular.png",
      desc: "Collaborative task management platform featuring real-time updates, intuitive drag-and-drop interface, and comprehensive team collaboration tools.",
      tech: ["Angular", "Express.js", "MongoDB"],
      link: "https://angular-task-manager2.netlify.app/",
      github: "https://github.com/Ujer123/angular-project.git",
    },
    {
      title: "Gcore Clone",
      img: "/projects/Next_Animation.png",
      desc: "Interactive animated website clone featuring smooth animations, engaging micro-interactions, and an immersive video intro experience.",
      tech: ["Next.js", "Framer-motion", "TailwindCSS"],
      link: "https://gcore-website.netlify.app/",
      github: "https://github.com/Ujer123/volka-task.git",
    }
  ];

  return (
    <section className="w-full px-3 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg font-medium max-w-2xl mx-auto px-4">
              Explore my recent work and creative solutions
            </p>
            <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project: Project, idx: number) => (
            <div 
              key={`project-${idx}`}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl sm:rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.img}
                  alt={`${project.title} project screenshot`}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  priority={idx === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Action Buttons - Show on Hover */}
                <div className={`absolute top-3 right-3 flex gap-2 transition-all duration-300 ${
                  hoveredCard === idx ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}>
                  <a href={project.link} target="_blank" className="p-2 bg-black/70 hover:bg-purple-600/80 text-white rounded-lg backdrop-blur-sm transition-colors duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a href={project.github} target="_blank" className="p-2 bg-black/70 hover:bg-purple-600/80 text-white rounded-lg backdrop-blur-sm transition-colors duration-200">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-4 sm:p-6 space-y-3 sm:space-y-4">
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 line-clamp-1">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                  {project.tech.map((tech: string, techIdx: number) => (
                    <span
                      key={`${project.title}-tech-${techIdx}`}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-200 hover:from-purple-500/30 hover:to-blue-500/30 hover:border-purple-400/50 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex gap-3 pt-3 border-t border-gray-700/50">
                  <Link href={`${project.link}`} target="_blank" className="flex-1 py-2 text-center px-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                    View Project
                  </Link>
                  <a href={`${project.github}`} target="_blank" className="py-2 px-4 border border-gray-600 hover:border-purple-500 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-6">
            Ready to bring your ideas to life?
          </p>
          <Link href={`#${SECTION_IDS.CONTACT}`} className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900">
            <span className="text-sm sm:text-base">Let&apos;s Work Together</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

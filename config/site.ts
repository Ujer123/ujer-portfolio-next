import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: "Ujer Portfolio",
  description: "Full-stack MERN developer specializing in modern web applications. 2+ years of experience building scalable, user-friendly digital solutions.",
  url: "https://ujer-portfolio.vercel.app",
  author: {
    name: "Ujer",
    email: "ujer@example.com",
    twitter: "@ujer",
    github: "https://github.com/ujer",
  },
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Web Development",
    "Portfolio"
  ],
};

export const SECTION_IDS = {
  HOME: 'home',
  ABOUT: 'about',
  SKILLS: 'skills',
  PROJECTS: 'projects',
  EXPERIENCE: 'experience',
  CONTACT: 'contact',
} as const;

export const ROUTES = {
  HOME: '/',
  RESUME: '/Ujer-Resume.pdf',
} as const;

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/ujer',
  LINKEDIN: 'https://linkedin.com/in/ujer',
  TWITTER: 'https://twitter.com/ujer',
  EMAIL: 'mailto:ujer@example.com',
} as const;

export const ANIMATION_DURATION = {
  FAST: 0.2,
  MEDIUM: 0.3,
  SLOW: 0.5,
  VERY_SLOW: 1,
} as const;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

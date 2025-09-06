import type { NavItem, Skill, Project, Experience } from '@/types';
import { SECTION_IDS } from '@/config/site';
import { FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaGithubSquare } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import {
  RiNpmjsFill,
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { VscJson } from "react-icons/vsc";
import { TbBrandThreejs, TbWorld } from "react-icons/tb";
import { SiMongodb, SiFramer, SiGreensock } from "react-icons/si";
import { AiOutlineOpenAI } from "react-icons/ai";
import { FaDev } from "react-icons/fa6";

export const navItems: NavItem[] = [
  { name: "Home", link: `#${SECTION_IDS.HOME}` },
  { name: "About", link: `#${SECTION_IDS.ABOUT}` },
  { name: "Skills", link: `#${SECTION_IDS.SKILLS}` },
  { name: "Projects", link: `#${SECTION_IDS.PROJECTS}` },
  { name: "Experience", link: `#${SECTION_IDS.EXPERIENCE}` },
  { name: "Contact", link: `#${SECTION_IDS.CONTACT}` },
];

export const iconsArray = [
  FaDev,
  SiGreensock,
  SiFramer,
  FaJs,
  FaNodeJs,
  DiNodejs,
  RiNpmjsFill,
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
  VscJson,
  TbBrandThreejs,
  FaHtml5,
  FaCss3Alt,
  SiMongodb,
  TbWorld,
  AiOutlineOpenAI,
  FaGithubSquare,
] as const;

// Skills Data
export const skills: Skill[] = [
  {
    id: 1,
    title: 'HTML5',
    image: '/icons/HTML.png',
    color: '#fc4503',
    category: 'frontend'
  },
  {
    id: 2,
    title: 'CSS3',
    image: '/icons/CSS.png',
    color: '#0328fc',
    category: 'frontend'
  },
  {
    id: 3,
    title: 'JavaScript',
    image: '/icons/JS.png',
    color: '#fefe01',
    category: 'frontend'
  },
  {
    id: 4,
    title: 'TypeScript',
    image: '/icons/TS.png',
    color: '#007ACC',
    category: 'frontend'
  },
  {
    id: 5,
    title: 'React',
    image: '/icons/react.png',
    color: '#61DAFB',
    category: 'frontend'
  },
  {
    id: 6,
    title: 'Next.js',
    image: '/icons/Next.png',
    color: '#5e5e5e',
    category: 'frontend'
  },
  {
    id: 7,
    title: 'Angular',
    image: '/icons/Angular.png',
    color: '#dd0030',
    category: 'frontend'
  },
  {
    id: 8,
    title: 'React Native',
    image: '/icons/react-native.png',
    color: '#09a6cf',
    category: 'frontend'
  },
  {
    id: 9,
    title: 'Express.js',
    image: '/icons/Express.png',
    color: '#b0c1d4',
    category: 'backend'
  },
  {
    id: 10,
    title: 'Node.js',
    image: '/icons/Node.png',
    color: '#83cd28',
    category: 'backend'
  },
  {
    id: 11,
    title: 'MongoDB',
    image: '/icons/MongoDB.png',
    color: '#439c33',
    category: 'database'
  },
  {
    id: 12,
    title: 'Redux',
    image: '/icons/Redux.png',
    color: '#764abd',
    category: 'frontend'
  },
  {
    id: 13,
    title: 'TailwindCSS',
    image: '/icons/Tailwind.png',
    color: '#38bdf9',
    category: 'frontend'
  },
  {
    id: 14,
    title: 'Firebase',
    image: '/icons/Firebase.png',
    color: '#FFA611',
    category: 'database'
  },
  {
    id: 15,
    title: 'GitHub',
    image: '/icons/Github.png',
    color: '#ffffff',
    category: 'tools'
  },
];

// Legacy export for backward compatibility
export const cardSkills = skills;

// Projects Data
export const projects: Project[] = [
  {
    id: 'daniyal-perfume',
    title: 'Daniyal Perfume',
    description: 'Full-featured e-commerce store with payment integration, admin dashboard, and real-time order tracking. Built for scalability and performance with modern web technologies.',
    image: '/projects/Daniyal_E-com.png',
    technologies: ['Next.js', 'Clerk', 'TailwindCSS', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'task-manager',
    title: 'Task Manager',
    description: 'Collaborative task management platform featuring real-time updates, intuitive drag-and-drop interface, and comprehensive team collaboration tools.',
    image: '/projects/Task_Angular.png',
    technologies: ['Angular', 'Express.js', 'MongoDB', 'Socket.io'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'gcore-clone',
    title: 'Gcore Animation Clone',
    description: 'Interactive animated website clone featuring smooth animations, engaging micro-interactions, and an immersive video intro experience.',
    image: '/projects/Next_Animation.png',
    technologies: ['Next.js', 'Framer Motion', 'TailwindCSS', 'GSAP'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
];

// Experience Data
export const experiences: Experience[] = [
  {
    id: 'freelance-developer',
    company: 'Freelance',
    position: 'Full Stack Developer',
    duration: '2022 - Present',
    location: 'Mumbai, Maharashtra',
    description: [
      'Developed and maintained modern web applications using MERN stack',
      'Collaborated with clients to deliver custom solutions meeting business requirements',
      'Implemented responsive designs and ensured cross-browser compatibility',
      'Optimized application performance and implemented SEO best practices'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Next.js', 'TypeScript'],
    type: 'freelance'
  }
];

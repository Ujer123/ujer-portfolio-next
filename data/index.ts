import { FaJs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import {
  RiNpmjsFill,
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { VscJson } from "react-icons/vsc";
import { TbBrandThreejs, TbWorld } from "react-icons/tb";
import { FaHtml5, FaCss3Alt, FaGithubSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { AiOutlineOpenAI } from "react-icons/ai";
import { SiFramer } from "react-icons/si";
import { SiGreensock } from "react-icons/si";
import { FaDev } from "react-icons/fa6";


export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
] as const;

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
];

export const cardSkills = [
  {
    id: 1,
    title: 'HTML',
    
    img: '/icons/HTML.png',
    color: '#fc4503'
  },
  {
    id: 2,
    title: 'CSS',
      
    img: '/icons/CSS.png',
    color: '#0328fc'
  },
  {
    id: 3,
    title:'JavaScript',
     
    img: '/icons/JS.png',
    color: '#fefe01'
  },
  {
    id: 4,
    title:'TypeScript',
      
    img: '/icons/TS.png',
    color: '#007ACC'
  },
  {
    id: 5,
    title:'React',
      
    img: '/icons/react.png',
    color: '#61DAFB'
  },
  {
    id: 6,
    title:'Next.js',
      
    img: '/icons/Next.png',
    color: '#5e5e5e'
  },
  {
    id: 7,
    title: 'Angular',
      
    img: '/icons/Angular.png',
    color: '#dd0030'
  },
  {
    id: 8,
    title: 'React Native',
      
    img: '/icons/react-native.png',
    color: '#09a6cf'
  },
  {
    id: 9,
    title: 'Express.js',
      
    img: '/icons/Express.png',
    color: '#b0c1d4'
  },
  {
    id: 10,
    title: 'Node.js',
      
    img: '/icons/Node.png',
    color: '#83cd28'
  },
  {
    id: 11,
    title: 'MongoDB',
      
    img: '/icons/MongoDB.png',
    color: '#439c33'
  },
  {
    id: 12,
    title: 'Redux',      
    img: '/icons/Redux.png',
    color: '#764abd'
  },
  {
    id: 13,
    title: 'TailwindCSS',      
    img: '/icons/Tailwind.png',
    color: '#38bdf9'
  },
  {
    id: 16,
    title: 'Firebase',
    
    img: '/icons/Firebase.png',
    color: '#FFA611'
  },
  {
    id: 17,
    title: 'Github',
    
    img: '/icons/Github.png',
    color: '#ffffff'
  },
]
// Core Types
export interface NavItem {
  name: string;
  link: string;
  icon?: React.JSX.Element;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Skill {
  id: number;
  title: string;
  image: string;
  color: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.JSX.Element;
}

// Component Props Types
export interface MagicButtonProps {
  title: string;
  icon?: React.JSX.Element;
  position?: 'left' | 'right';
  asChild?: boolean;
  className?: string;
  onClick?: () => void;
}

export interface SpotlightProps {
  className?: string;
  fill?: string;
}

export interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}

// Animation Types
export interface AnimationVariants {
  initial: Record<string, any>;
  animate: Record<string, any>;
  exit?: Record<string, any>;
  transition?: Record<string, any>;
}

// API Response Types
export interface EmailJSResponse {
  status: number;
  text: string;
}

// Global Constants Types
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  author: {
    name: string;
    email: string;
    twitter: string;
    github: string;
  };
  keywords: string[];
}

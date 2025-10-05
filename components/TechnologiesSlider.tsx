"use client";

import React, { useMemo } from 'react';
import { LazyMotion, m, domAnimation, useReducedMotion } from 'framer-motion';

import { iconsArray } from '@/data';
import { cn } from '@/lib/utils';

interface TechnologiesSliderProps {
  className?: string;
  speed?: number;
  direction?: 'left' | 'right';
}

export const TechnologiesSlider: React.FC<TechnologiesSliderProps> = ({
  className,
  speed = 10,
  direction = 'left',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const duplicatedIcons = useMemo(() => [...iconsArray, ...iconsArray], []);

  return (
    <div
      className={cn("w-full overflow-x-hidden py-4 lg:py-6", className)}
      aria-label="Technologies I work with"
    >
      <LazyMotion features={domAnimation} strict>
        <m.div
          className="flex gap-8 lg:gap-16"
          initial={shouldReduceMotion ? undefined : { x: direction === 'left' ? 0 : '-100%' }}
          animate={shouldReduceMotion ? undefined : { x: direction === 'left' ? '-100%' : '0%' }}
          transition={shouldReduceMotion ? undefined : { repeat: Infinity, ease: 'linear', duration: speed }}
          style={{ display: 'flex', minWidth: '200%', willChange: 'transform' }}
        >
          {duplicatedIcons.map((IconComponent, index) => (
            <TechnologyIcon key={`tech-icon-${index}`} IconComponent={IconComponent} index={index} />
          ))}
        </m.div>
      </LazyMotion>
    </div>
  );
};

interface TechnologyIconProps {
  IconComponent: React.ComponentType<{ size?: number; className?: string }>;
  index: number;
}

const TechnologyIcon: React.FC<TechnologyIconProps> = ({ IconComponent, index }) => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className="flex-shrink-0"
        whileHover={shouldReduceMotion ? undefined : { scale: 1.2, transition: { duration: 0.2 } }}
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={shouldReduceMotion ? undefined : { delay: (index % iconsArray.length) * 0.1, duration: 0.5 }}
      >
        <IconComponent size={35} className="text-white transition-colors duration-200 hover:text-purple-400" />
      </m.div>
    </LazyMotion>
  );
};

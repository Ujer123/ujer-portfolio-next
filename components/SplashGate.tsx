'use client';

import React, { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import VideoSplash from '@/components/VideoSplash';

interface SplashGateProps {
  children: React.ReactNode;
}

export default function SplashGate({ children }: SplashGateProps) {
  const [showSplash, setShowSplash] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (prefersReducedMotion) {
      // Skip splash entirely for users who prefer reduced motion
      localStorage.setItem('hasSeenSplash', 'true');
      setShowSplash(false);
      return;
    }
    if (!localStorage.getItem('hasSeenSplash')) {
      setShowSplash(true);
    }
  }, [prefersReducedMotion]);

  const handleSplashComplete = () => {
    localStorage.setItem('hasSeenSplash', 'true');
    setShowSplash(false);
  };

  if (showSplash) {
    return <VideoSplash onComplete={handleSplashComplete} />;
  }
  return <>{children}</>;
}

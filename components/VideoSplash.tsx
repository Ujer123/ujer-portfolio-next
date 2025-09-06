"use client";

import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

interface VideoSplashProps {
  onComplete: () => void;
}

const VideoSplash: React.FC<VideoSplashProps> = ({ onComplete }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(console.error);

      // Show skip button after 3 seconds
      const timer = setTimeout(() => setShowSkip(true), 3000);

      const handleEnded = () => {
        localStorage.setItem('hasSeenSplash', 'true');
        onComplete();
      };

      video.addEventListener('ended', handleEnded);

      return () => {
        clearTimeout(timer);
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, [onComplete]);

  const handleSkip = () => {
    localStorage.setItem('hasSeenSplash', 'true');
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        muted
        playsInline
        preload="auto"
      >
        <source src="/ujer-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {showSkip && (
        <button
          onClick={handleSkip}
          className="absolute top-4 right-4 z-10 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30"
          aria-label="Skip video"
        >
          <X size={24} />
        </button>
      )}
    </div>
  );
};

export default VideoSplash;

'use client';

import React from 'react';

interface VideoSplashProps {
  onComplete: () => void;
}

const VideoSplash: React.FC<VideoSplashProps> = ({ onComplete }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
    <video
      className="h-full w-full object-cover"
      muted
      playsInline
      preload="auto"
      autoPlay
      onEnded={onComplete}
    >
      <source src="/ujer-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default VideoSplash;

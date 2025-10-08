'use client';

import { useEffect, useState } from 'react';

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min(100, (scrollTop / docHeight) * 100);
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress(); // Initial check

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-primary transition-all duration-75 ease-linear origin-left"
      style={{
        transform: `scaleX(${scrollProgress / 100})`,
        transformOrigin: 'left',
      }}
    />
  );
}


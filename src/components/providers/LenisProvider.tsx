'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (mediaQuery.matches) {
      lenis.stop();
    }

    const handleMediaChange = (mq: MediaQueryListEvent) => {
      if (mq.matches) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      lenis.destroy();
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  return <>{children}</>;
}

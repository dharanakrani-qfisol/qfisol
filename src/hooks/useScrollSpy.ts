'use client';

import { useEffect, useState } from 'react';

interface UseScrollSpyOptions {
  offset?: number;
  scrollThreshold?: number;
}

export function useScrollSpy(
  sectionIds: string[],
  options: UseScrollSpyOptions = {}
) {
  const { offset = 0, scrollThreshold = 0.1 } = options;
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    // Don't run on server side
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    
    if (sectionIds.length === 0) return;
    
    const scrollListener = () => {
      const scrollTop = window.scrollY + offset;
      
      // Find the section that's currently in view
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        
        if (element) {
          const sectionTop = element.offsetTop - window.innerHeight * scrollThreshold;
          
          if (scrollTop >= sectionTop) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    // Initial check
    scrollListener();
    
    window.addEventListener('scroll', scrollListener, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [sectionIds, offset, scrollThreshold]);

  return activeId;
}

'use client';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface ProjectData {
  title: string;
  description: string;
  color: string;
  href?: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const StackingCard = ({
  i,
  title,
  description,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='min-h-screen flex items-center justify-center sticky top-0 py-8 md:py-10 lg:py-20'
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[10%] md:-top-[25%] w-[95%] md:w-[85%] lg:w-[75%] rounded-2xl p-6 md:p-10 origin-top
          bg-white/70 dark:bg-gray-900/70 
          backdrop-blur-xl 
          border border-white/20 dark:border-gray-700/30
          shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]
          dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]`}
      >
        <h2 className='text-2xl md:text-3xl text-center font-bold text-foreground mb-4'>{title}</h2>
        <div className={`flex flex-col mt-2`}>
          <p className='text-sm md:text-base text-muted-foreground leading-relaxed'>{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

interface StackingCardsProps {
  projects: ProjectData[];
}

export function StackingCards({ projects }: StackingCardsProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={container} className="relative">
      {projects.map((project, i) => {
        const targetScale = 1;
        return (
          <StackingCard
            key={`p_${i}`}
            i={i}
            title={project.title}
            description={project.description}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}

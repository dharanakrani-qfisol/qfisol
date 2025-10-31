'use client';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

interface ProjectData {
  title: string;
  description: string;
  link: string;
  color: string;
  href?: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  href?: string;
}

export const StackingCardWithImages = ({
  i,
  title,
  description,
  url,
  progress,
  range,
  targetScale,
  href,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='min-h-screen flex items-center justify-center sticky top-0 py-8 md:py-10 lg:py-20'
    >
      <Link href={href || '#'} className="w-full flex items-center justify-center">
        <motion.div
          style={{
            scale,
            top: `calc(-5vh + ${i * 25}px)`,
          }}
          className={`flex flex-col relative -top-[10%] md:-top-[25%] w-[90%] md:w-[80%] lg:w-[70%] rounded-2xl p-6 md:p-10 origin-top
            bg-white/70 dark:bg-gray-900/70 
            backdrop-blur-xl 
            border border-white/20 dark:border-gray-700/30
            shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]
            dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden cursor-pointer hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.25)] transition-shadow duration-300`}
        >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <motion.div
            style={{
              scale: imageScale,
            }}
            className="w-full h-full"
          >
            <img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        
        {/* Translucent Black Overlay */}
        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
        
        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col">
          <h2 className='text-2xl md:text-3xl text-center font-bold text-white mb-4 drop-shadow-lg'>{title}</h2>
          <div className={`flex flex-col mt-2`}>
            <p className='text-sm md:text-base text-white leading-relaxed drop-shadow-md'>{description}</p>
          </div>
        </div>
      </motion.div>
    </Link>
    </div>
  );
};

interface StackingCardsWithImagesProps {
  projects: ProjectData[];
}

export function StackingCardsWithImages({ projects }: StackingCardsWithImagesProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={container} className="relative">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <StackingCardWithImages
            key={`p_${i}`}
            i={i}
            url={project.link}
            title={project.title}
            description={project.description}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
            href={project.href}
          />
        );
      })}
    </div>
  );
}

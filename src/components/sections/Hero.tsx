'use client';

import { motion } from 'framer-motion';
import { TrueFocus } from '@/components/ui/true-focus';
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

// Counter Animation Component
function CounterAnimation({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(end * easeOutQuart));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <motion.span
      key={count}
      initial={{ opacity: 0.8, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1 }}
    >
      {count}{suffix}
    </motion.span>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with masked gradient and floating shapes */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-blue-950 dark:via-navy-950 dark:to-indigo-950" />
        
        {/* Floating shapes with parallax */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-xl"
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-3/4 right-1/4 w-32 h-32 bg-indigo-200/20 dark:bg-indigo-800/20 rounded-full blur-lg"
            animate={{
              y: [10, -10, 10],
              x: [5, -5, 5],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-48 h-48 bg-purple-200/15 dark:bg-purple-800/15 rounded-full blur-2xl"
            animate={{
              y: [-5, 15, -5],
              x: [10, -10, 10],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-indigo-600/5" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container-standard section-gutter pt-32 pb-20">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <motion.div
            className="text-center w-full"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
          >
            {/* Main headline with True Focus animation */}
            <div className="mb-8">
              <TrueFocus
                sentence="Clarity in Numbers, Confidence in Decisions."
                manualMode={false}
                blurAmount={3}
                borderColor="rgb(59 130 246)"
                glowColor="rgba(59, 130, 246, 0.6)"
                animationDuration={1.2}
                pauseBetweenAnimations={2}
              />
            </div>

            {/* H2 Subhead */}
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Your Virtual Accounting & CFO Team Nationwide.
            </motion.h2>

            {/* Body/Supporting line */}
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              Outsourced accounting, bookkeeping, and virtual CFO services for small businesses led by experienced CPAs who simplify finances, ensure compliance, and drive profitable growth.
            </motion.p>

            {/* Minimalist Stats Section */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                
                {/* Stat 1 */}
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="text-5xl md:text-6xl font-light text-quantifi-primary">
                    <CounterAnimation end={100} duration={3} suffix="+" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-medium text-foreground">Clients</div>
                    <div className="text-sm text-muted-foreground">Served</div>
                  </div>
                </motion.div>

                {/* Divider */}
                <motion.div
                  className="hidden md:block w-px h-16 bg-gray-300 dark:bg-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                />

                {/* Stat 2 */}
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="text-5xl md:text-6xl font-light text-quantifi-primary">
                    <CounterAnimation end={15} duration={3} suffix="+" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-medium text-foreground">Years</div>
                    <div className="text-sm text-muted-foreground">Experience</div>
                  </div>
                </motion.div>

                {/* Divider */}
                <motion.div
                  className="hidden md:block w-px h-16 bg-gray-300 dark:bg-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                />

                {/* Stat 3 */}
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <div className="text-5xl md:text-6xl font-light text-quantifi-primary">
                    <CounterAnimation end={15} duration={3} suffix="K" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-medium text-foreground">Monthly</div>
                    <div className="text-sm text-muted-foreground">Reconciliations</div>
                  </div>
                </motion.div>

                {/* Divider */}
                <motion.div
                  className="hidden md:block w-px h-16 bg-gray-300 dark:bg-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                />

                {/* Stat 4 */}
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <div className="text-5xl md:text-6xl font-light text-quantifi-primary">
                    <CounterAnimation end={100} duration={3} suffix="K" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-medium text-foreground">Hours</div>
                    <div className="text-sm text-muted-foreground">of Services Provided</div>
                  </div>
                </motion.div>
              </div>

              {/* Services tagline */}
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <p className="text-sm text-muted-foreground font-light">
                  Bookkeeping • Payroll • Tax Return Processing
                </p>
              </motion.div>
            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}


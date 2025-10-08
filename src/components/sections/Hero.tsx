'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TrueFocus } from '@/components/ui/true-focus';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Link from 'next/link';

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
      <div className="relative z-10 container-standard section-gutter text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main headline */}
          <div className="mb-6">
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

          {/* Subhead */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Professional outsourced accounting and advisory services that transform your financial management into a strategic advantage.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <Button asChild size="lg" className="text-lg px-8 py-6 group bg-foreground hover:bg-gradient-to-r hover:from-blue-400 hover:via-blue-500 hover:to-blue-600 transition-all duration-300">
              <Link href="/contact">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Link
              href="#industries"
              className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore the Industries We Serve
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <div>
              <div className="text-2xl font-bold text-primary mb-1">200+</div>
              <div className="text-sm text-muted-foreground">Businesses Served</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">15</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">99.5%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
          </motion.div>
        </motion.div>
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


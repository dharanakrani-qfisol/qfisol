'use client';

import { motion } from 'framer-motion';
import { BookCallButton } from '@/components/ui/book-call-button';
import Link from 'next/link';
import { BlurredStagger } from '@/components/ui/blurred-stagger-text';

export function FinalCTA() {
  return (
    <motion.section 
      className="py-20 bg-background relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.3, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-blue-950 dark:via-navy-950 dark:to-indigo-950" />
      
      {/* Floating accent elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/4 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"
          animate={{
            y: [-20, 20, -20],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-purple-400/20 rounded-full blur-lg"
          animate={{
            y: [20, -20, 20],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-standard section-gutter relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-center flex justify-center">
            <BlurredStagger text="Ready for Clarity and Confidence?" />
          </div>

          <div className="text-xl text-muted-foreground mb-8 text-center flex justify-center">
            <BlurredStagger text="Book your free consultation and discover how we can transform your financial management into a strategic advantage for growth." />
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Primary CTA with animated gradient border */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
              <Link href="/contact" className="relative block">
                <BookCallButton className="text-lg px-8 py-6">
                  Book a Call
                </BookCallButton>
              </Link>
            </div>
            
            {/* Secondary link */}
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-colors font-medium underline"
            >
              Or learn more about our process
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}


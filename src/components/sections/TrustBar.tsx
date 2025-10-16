'use client';

import { motion } from 'framer-motion';
import { BlurredStagger } from '@/components/ui/blurred-stagger-text';

export function TrustBar() {
  return (
    <motion.section 
      className="relative py-32 overflow-hidden bg-white dark:bg-gray-950"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.3, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Light grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 mb-4 text-sm rounded-full border border-border bg-background text-foreground"
        >
          ⚡ Trusted Partners
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
        >
          <BlurredStagger text="We work with the tools you already use" className="inline-block" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto text-center"
        >
          <BlurredStagger 
            text="We integrate seamlessly with the tools you already use to streamline your accounting workflow." 
            className="block text-center w-full"
          />
        </motion.div>
      </div>

    </motion.section>
  );
}

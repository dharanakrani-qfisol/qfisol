'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Quote } from 'lucide-react';

export function TestimonialSection() {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200/10 dark:bg-blue-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-200/10 dark:bg-purple-800/10 rounded-full blur-3xl" />
      </div>

      <div className="container-standard section-gutter relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Quote mark decoration */}
            <div className="absolute -top-4 -left-4 w-8 h-8 text-6xl text-primary/20 overflow-hidden">
              <Quote className="absolute -top-4 -left-4" />
            </div>

            {/* Main quote */}
            <blockquote className="text-2xl md:text-3xl font-semibold text-foreground mb-8 leading-relaxed">
              Quantifi transformed our financial clarity and gave us the confidence to scale strategically. 
              Their industry expertise saved us months of setup time.&quot;
            </blockquote>

            {/* Attribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  JD
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">Jennifer Davis</div>
                  <div className="text-sm text-muted-foreground">CEO, Davis Construction</div>
                </div>
              </div>
              
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                Construction Industry
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Link 
                href="/case-studies" 
                className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group"
              >
                Read the full case study
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

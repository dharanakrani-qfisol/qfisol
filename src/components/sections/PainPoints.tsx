'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Link2, Briefcase, FileCheck } from 'lucide-react';

const differentiators = [
  {
    icon: Link2,
    title: 'Liaison Model',
    description: 'We act as your in-house financial bridge.',
    gradientFrom: 'from-blue-400',
    gradientVia: 'via-blue-500',
    gradientTo: 'to-blue-600',
  },
  {
    icon: Briefcase,
    title: 'Fully Outsourced Option',
    description: 'No accounting team? We become one.',
    gradientFrom: 'from-blue-400',
    gradientVia: 'via-blue-500',
    gradientTo: 'to-blue-600',
  },
  {
    icon: FileCheck,
    title: 'CPA-Ready Accuracy',
    description: 'Every report, audit-ready and verified.',
    gradientFrom: 'from-blue-400',
    gradientVia: 'via-blue-500',
    gradientTo: 'to-blue-600',
  },
];

export function PainPoints() {
  return (
    <motion.section 
      id="differentiators" 
      className="relative py-32 md:py-40 overflow-hidden bg-[linear-gradient(to_bottom,#fff,#f8f9fa_30%,#f1f3f5_98%)] dark:bg-[linear-gradient(to_bottom,#000_10%,#0a0a0a_30%,#0f0f0f_98%)]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.3, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >

      <div className="container-standard section-gutter relative z-10">
        {/* Section Header */}
        <div className="text-center pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="text-sm font-semibold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
              How We&apos;re Different
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6 text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto font-bold tracking-tighter p-4 bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground/90 to-foreground/70"
          >
            Not Outsourced. Not Detached.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
              Integrated.
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-3xl"
          >
            <div className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed space-y-2">
              <p>Traditional accounting firms work <span className="text-foreground font-semibold">outside</span> your business.</p>
              <p>We work <span className="text-foreground font-semibold">inside</span> it.</p>
              <p className="mt-4 text-base md:text-lg">
                Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 font-bold">Liaison Accounting Partnership (LAP Model)</span> connects your team, management, and CPA — ensuring accuracy, visibility, and efficiency across every system.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Three Columns with Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16 relative">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              viewport={{ once: true }}
            >
              <Card
                className="group relative p-6 h-full backdrop-blur-xl bg-white/60 dark:bg-black/40 border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-700 overflow-hidden rounded-3xl"
              >
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradientFrom} ${item.gradientVia} ${item.gradientTo} opacity-60`} />

                {/* Icon with animated gradient */}
                <div className="relative mb-6">
                  <div 
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl bg-gradient-to-br ${item.gradientFrom} ${item.gradientVia} ${item.gradientTo} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <item.icon className="h-8 w-8 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                  {item.description}
                </p>

                {/* Animated gradient bar */}
                <div className="mt-6 overflow-hidden rounded-full">
                  <div 
                    className={`h-1.5 w-0 group-hover:w-full bg-gradient-to-r ${item.gradientFrom} ${item.gradientVia} ${item.gradientTo} transition-all duration-1000 ease-out rounded-full`}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 text-sm font-medium">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-muted-foreground via-foreground to-muted-foreground">
              Experience the integrated difference
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

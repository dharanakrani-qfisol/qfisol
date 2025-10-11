'use client';

import { motion } from 'framer-motion';
import { Search, Handshake, FileText, Settings, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    subtitle: 'Analysis & Assessment',
    description: 'We analyze your current financial processes, systems, and pain points to understand your unique needs.',
  },
  {
    icon: Handshake,
    title: 'Kickoff',
    subtitle: 'Team Alignment',
    description: 'We align on goals, timelines, and deliverables, then introduce your dedicated team and establish communication protocols.',
  },
  {
    icon: FileText,
    title: 'Cleanup',
    subtitle: 'Data Organization',
    description: 'We reconcile accounts, organize historical data, and establish a clean foundation for accurate financial reporting.',
  },
  {
    icon: Settings,
    title: 'Improvement',
    subtitle: 'Process Automation',
    description: 'We implement automation, optimize workflows, and integrate systems to improve efficiency and accuracy.',
  },
  {
    icon: Rocket,
    title: 'Support',
    subtitle: 'Ongoing Guidance',
    description: 'We provide ongoing accounting support, strategic insights, and proactive guidance as your business scales.',
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    subtitle: 'Strategic Insights',
    description: 'We deliver actionable insights and strategic recommendations to fuel sustainable business growth and long-term success.',
  },
];

export function HowWeWork() {
  return (
    <motion.section
      className="relative py-24 md:py-32 overflow-hidden bg-white dark:bg-gray-950"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.3, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container-standard section-gutter relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Side: Text Content */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:sticky lg:top-32">
              <p className="text-sm font-bold tracking-wider text-primary mb-3 uppercase">
                Our Process
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                How We Work
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our 5-Step Process combines strategic analysis, seamless implementation, and continuous optimization to transform your financial operations and deliver measurable business results.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Grid of Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3, ease: "easeOut", delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="group bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all duration-300 h-full flex flex-col relative">
                    {/* Step Number Badge - Hide for Growth card (index 5) */}
                    {index !== 5 && (
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-blue-700 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md z-10">
                        {index + 1}
                      </div>
                    )}

                    {/* Icon */}
                    <div className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 transition-colors">
                      <step.icon className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" strokeWidth={2} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-3">
                      {step.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Search, Handshake, FileText, Settings, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery & Understanding',
    description: 'We begin by getting to know your business - your goals, systems, and challenges. This deep dive helps us map out your current financial landscape and design a plan that aligns with your operations and long-term vision.',
    goal: 'Gain complete clarity on where you are today and where you want to go.',
  },
  {
    icon: Handshake,
    title: 'Kickoff & Alignment',
    description: 'Once we move forward, we ensure a seamless start. Our team securely gathers access, organizes documentation, and introduces your dedicated QuantiFi specialists. Together, we establish communication channels, deliverables, and a reporting rhythm that keeps everyone aligned from day one.',
    goal: 'Build a transparent, structured workflow that sets the tone for long-term success.',
  },
  {
    icon: FileText,
    title: 'Cleanup & Reconciliation',
    description: "We bring your books fully up to date - identifying discrepancies, correcting errors, and aligning everything to GAAP standards. You'll gain accurate, compliant, audit-ready financials that restore confidence and consistency.",
    goal: 'Establish a clean, dependable foundation for accurate reporting and smart decision-making.',
  },
  {
    icon: Settings,
    title: 'Process Enhancement & Automation',
    description: 'Next, we focus on efficiency. By simplifying workflows, automating recurring tasks, and integrating systems, we eliminate redundancy and enhance accuracy. Our goal is to give you real-time visibility across every financial process.',
    goal: 'Create efficient, scalable accounting operations that grow with your business.',
  },
  {
    icon: Rocket,
    title: 'Continuous Support & Insights',
    description: 'We stay with you - not just as accountants, but as financial partners. Through consistent bookkeeping, insightful reporting, and proactive advisory, we help you grow with confidence. Our goal is simple - to keep your numbers meaningful, your strategy clear, and your business moving forward.',
    goal: 'Deliver clarity, consistency, and confidence every month, year-round.',
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
        {/* Top: Text Content */}
        <motion.div
          className="text-center mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 mb-3">
            Our Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our 5-Step Process combines strategic analysis, seamless implementation, and continuous optimization to transform your financial operations and deliver measurable business results.
          </p>
        </motion.div>

        {/* Bottom: Grid of Cards in Single Row */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((step, index) => (
              <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3, ease: "easeOut", delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                    <div className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all duration-300 h-full flex flex-col relative">
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-blue-700 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md z-10">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 transition-colors">
                      <step.icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" strokeWidth={2} />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>
                    
                    {/* Goal */}
                    <div className="mt-auto pt-3 border-t border-gray-200 dark:border-gray-800">
                      <p className="text-xs font-semibold text-primary mb-1">Goal:</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {step.goal}
                      </p>
                    </div>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}


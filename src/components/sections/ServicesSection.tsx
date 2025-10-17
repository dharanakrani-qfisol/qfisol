'use client';

import { motion } from 'framer-motion';
import { BlurredStagger } from '@/components/ui/blurred-stagger-text';
import { StackingCards } from '@/components/ui/stacking-card';
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern';
import { cn } from '@/lib/utils';

const services = [
  {
    title: 'Outsourced Bookkeeping & Accounting',
    description: 'Stay organized with accurate, audit-ready books managed daily by accounting experts so you can focus on growth.',
    link: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop',
    color: '#5196fd',
    href: '/services/outsourced-accounting',
  },
  {
    title: 'Controller & CFO Services',
    description: 'Access CFO-level insight without full-time overhead from budgeting and forecasting to strategic financial leadership.',
    link: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    color: '#8f89ff',
    href: '/services/cfo-advisory',
  },
  {
    title: 'Tax Preparation & Compliance',
    description: 'Be tax-ready all year long with CPA-reviewed returns, quarterly planning, and proactive compliance.',
    link: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2070&auto=format&fit=crop',
    color: '#f97316',
    href: '/services/tax-cpa',
  },
  {
    title: 'Payroll & HR Support',
    description: 'Reliable, accurate, and compliant payroll and HR management handled by experts who value your time.',
    link: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
    color: '#10b981',
    href: '/services/payroll-compliance',
  },
  {
    title: 'Systems Integration & Tech Consulting',
    description: 'Connect QuickBooks, Xero, NetSuite, and your business apps for real-time automation and accuracy.',
    link: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    color: '#ec4899',
    href: '/services/erp-migrations',
  },
  {
    title: 'Financial Analytics & Dashboards',
    description: 'Turn financial data into real-time insights with dashboards, KPIs, and performance reports that drive smarter decisions.',
    link: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop',
    color: '#6b7280',
    href: '/services/reporting-automation',
  },
];

export function ServicesSection() {
  return (
    <motion.section 
      id="services" 
      className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-blue-950 dark:via-navy-950 dark:to-indigo-950"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.3, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Header Section */}
      <div className="w-full pt-24 md:pt-32 pb-8 flex flex-col justify-center relative overflow-hidden">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />

        <div className='relative z-10 px-8'>
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight tracking-tight mb-4 text-foreground">
            <BlurredStagger text="Services We Offer" className="inline-block whitespace-normal text-center" />
          </div>
          <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-center leading-tight tracking-tight mb-6 text-muted-foreground">
            <BlurredStagger text="Smarter Accounting, Tailored to How You Operate" className="inline-block whitespace-normal text-center" />
          </div>
          <div className="text-base md:text-lg text-center text-muted-foreground leading-relaxed max-w-[900px] mx-auto px-4">
            <p className="whitespace-normal">
              We combine CPA-level precision, automation, and strategic insight to deliver outsourced accounting, tax compliance, and virtual CFO support built around how your business operates. Fast, flexible, and designed for clarity, compliance, and confident decision-making.
            </p>
          </div>
        </div>
      </div>

      {/* Stacking Cards Section */}
      <div className="w-full">
        <StackingCards projects={services} />
      </div>
    </motion.section>
  );
}
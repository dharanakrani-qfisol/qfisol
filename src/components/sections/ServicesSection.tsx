'use client';

import { motion } from 'framer-motion';
import { BlurredStagger } from '@/components/ui/blurred-stagger-text';
import { StackingCards } from '@/components/ui/stacking-card';
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern';
import { cn } from '@/lib/utils';

const services = [
  {
    title: 'Outsourced Accounting',
    description: 'Daily posting, reconciliations, month-end close. We handle your day-to-day bookkeeping so you can focus on growing your business. From transaction processing to monthly reconciliations, our team ensures accuracy and compliance.',
    link: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop',
    color: '#5196fd',
    href: '/services/outsourced-accounting',
  },
  {
    title: 'Controller & CFO Advisory',
    description: 'Dashboards, forecasting, KPI analysis. Strategic financial guidance to drive business decisions. We provide executive-level insights through comprehensive financial analysis, budgeting, and strategic planning.',
    link: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    color: '#8f89ff',
    href: '/services/cfo-advisory',
  },
  {
    title: 'Payroll & Compliance',
    description: 'Certified payroll, taxes, and multi-state reporting. Comprehensive payroll management ensuring compliance with federal, state, and local regulations. We handle everything from processing to reporting.',
    link: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
    color: '#10b981',
    href: '/services/payroll-compliance',
  },
  {
    title: 'Tax & CPA Collaboration',
    description: 'Year-end prep, trial balance, tax review. Seamless collaboration with your CPA to ensure smooth tax filing. We prepare your books for year-end and provide detailed documentation for tax preparation.',
    link: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2070&auto=format&fit=crop',
    color: '#f97316',
    href: '/services/tax-cpa',
  },
  {
    title: 'ERP & System Migrations',
    description: 'QuickBooks ↔ Acumatica ↔ NetSuite. Expert guidance through system transitions and implementations. We ensure data integrity and minimal disruption during your ERP migration or upgrade. Our experienced team handles everything from data mapping and validation to training and post-migration support, ensuring a smooth transition.',
    link: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    color: '#ec4899',
    href: '/services/erp-migrations',
  },
  {
    title: 'Reporting & Automation',
    description: 'Power BI, Smartsheet, and management reports. Transform your financial data into actionable insights. We create custom dashboards and automated reporting solutions tailored to your business needs.',
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
      <div className="h-[70vh] w-full grid place-content-center relative overflow-hidden">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />

        <div className='relative z-10 px-8'>
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight tracking-tight mb-6 text-foreground">
            <BlurredStagger text="Our Core Services" />
          </div>
          <div className="text-base md:text-lg text-center text-muted-foreground leading-relaxed max-w-[560px] mx-auto">
            <BlurredStagger text="Every Service. One Connected Approach." />
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




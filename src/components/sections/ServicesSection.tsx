'use client';

import { BlurredStagger } from '@/components/ui/blurred-stagger-text';
import { StackingCards } from '@/components/ui/stacking-card';

const services = [
  {
    title: 'Outsourced Accounting',
    description: 'Daily posting, reconciliations, month-end close. We handle your day-to-day bookkeeping so you can focus on growing your business. From transaction processing to monthly reconciliations, our team ensures accuracy and compliance.',
    link: '/images/services/Outsourced Accounting.png',
    color: '#5196fd',
    href: '/services/outsourced-accounting',
  },
  {
    title: 'Controller & CFO Advisory',
    description: 'Dashboards, forecasting, KPI analysis. Strategic financial guidance to drive business decisions. We provide executive-level insights through comprehensive financial analysis, budgeting, and strategic planning.',
    link: '/images/services/Controller & CFO Advisory.png',
    color: '#8f89ff',
    href: '/services/cfo-advisory',
  },
  {
    title: 'Payroll & Compliance',
    description: 'Certified payroll, taxes, and multi-state reporting. Comprehensive payroll management ensuring compliance with federal, state, and local regulations. We handle everything from processing to reporting.',
    link: '/images/services/Payroll & Compliance.png',
    color: '#10b981',
    href: '/services/payroll-compliance',
  },
  {
    title: 'Tax & CPA Collaboration',
    description: 'Year-end prep, trial balance, tax review. Seamless collaboration with your CPA to ensure smooth tax filing. We prepare your books for year-end and provide detailed documentation for tax preparation.',
    link: '/images/services/Tax & CPA Collaboration.png',
    color: '#f97316',
    href: '/services/tax-cpa',
  },
  {
    title: 'ERP & System Migrations',
    description: 'QuickBooks ↔ Acumatica ↔ NetSuite. Expert guidance through system transitions and implementations. We ensure data integrity and minimal disruption during your ERP migration or upgrade.',
    link: '/images/services/ERP & System Migrations.png',
    color: '#ec4899',
    href: '/services/erp-migrations',
  },
  {
    title: 'Reporting & Automation',
    description: 'Power BI, Smartsheet, and management reports. Transform your financial data into actionable insights. We create custom dashboards and automated reporting solutions tailored to your business needs.',
    link: '/images/services/Reporting & Automation.png',
    color: '#6b7280',
    href: '/services/reporting-automation',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-blue-950 dark:via-navy-950 dark:to-indigo-950">
      {/* Header Section */}
      <div className="h-[70vh] w-full grid place-content-center relative">
        <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

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
    </section>
  );
}

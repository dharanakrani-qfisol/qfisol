'use client';

import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { Calculator, TrendingUp, Shield, BarChart3, GitBranch, Zap } from 'lucide-react';
import { ServiceGradientCard } from '@/components/ui/service-gradient-card';

const services = [
  {
    icon: Calculator,
    title: 'Outsourced Accounting',
    description: 'Daily posting, reconciliations, month-end close',
    gradient: 'blue' as const,
    href: '/services/outsourced-accounting',
    imageUrl: '/images/services/Outsourced Accounting.png',
  },
  {
    icon: TrendingUp,
    title: 'Controller & CFO Advisory',
    description: 'Dashboards, forecasting, KPI analysis',
    gradient: 'purple' as const,
    href: '/services/cfo-advisory',
    imageUrl: '/images/services/Controller & CFO Advisory.png',
  },
  {
    icon: BarChart3,
    title: 'Payroll & Compliance',
    description: 'Certified payroll, taxes, and multi-state reporting',
    gradient: 'green' as const,
    href: '/services/payroll-compliance',
    imageUrl: '/images/services/Payroll & Compliance.png',
  },
  {
    icon: Shield,
    title: 'Tax & CPA Collaboration',
    description: 'Year-end prep, trial balance, tax review',
    gradient: 'orange' as const,
    href: '/services/tax-cpa',
    imageUrl: '/images/services/Tax & CPA Collaboration.png',
  },
  {
    icon: GitBranch,
    title: 'ERP & System Migrations',
    description: 'QuickBooks ↔ Acumatica ↔ NetSuite',
    gradient: 'pink' as const,
    href: '/services/erp-migrations',
    imageUrl: '/images/services/ERP & System Migrations.png',
  },
  {
    icon: Zap,
    title: 'Reporting & Automation',
    description: 'Power BI, Smartsheet, and management reports',
    gradient: 'gray' as const,
    href: '/services/reporting-automation',
    imageUrl: '/images/services/Reporting & Automation.png',
  },
];

export default function ServicesPage() {
  return (
    <MarketingLayout>
      <div className="pt-20">
        <div className="container-standard section-gutter py-20">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">Our Core Services</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">&ldquo;Every Service. One Connected Approach.&rdquo;</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <ServiceGradientCard
                key={service.title}
                title={service.title}
                description={service.description}
                gradient={service.gradient}
                icon={service.icon}
                imageUrl={service.imageUrl}
                ctaText="Learn More"
                ctaHref={service.href}
              />
            ))}
          </div>
        </div>
      </div>
    </MarketingLayout>
  );
}







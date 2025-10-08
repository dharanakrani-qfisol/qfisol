import { Metadata } from 'next';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Process',
  description: 'A proven 4-step process for transforming your financial management operations.',
};

const processSteps = [
  {
    number: '01',
    title: 'Discover & Onboard',
    description: 'We conduct a comprehensive business assessment and set up your accounting systems.',
    subtitle: 'Comprehensive Business Assessment',
    details: [
      'Financial health analysis and current system review',
      'Team introduction and workflow alignment',
      'Document gathering and historical data evaluation',
      'Custom setup for industry-specific needs',
      'Software integration and data migration',
      'Initial process and timeline establishment',
    ],
  },
  {
    number: '02', 
    title: 'Strategize & Plan',
    description: 'We develop a tailored financial strategy and operational roadmap for your business.',
    subtitle: 'Strategic Roadmap Development',
    details: [
      'Industry-specific best practice identification',
      'Cash flow optimization strategy',
      'Financial reporting structure design',
      'Compliance and regulatory mapping',
      'Performance KPI definitions',
      'Budgeting and forecasting processes',
    ],
  },
  {
    number: '03',
    title: 'Implement & Execute',
    description: 'We roll out your new financial operations and begin immediate improvements.',
    subtitle: 'Operational Transformation',
    details: [
      'System implementation and training',
      'Day-to-day accounting operations takeover',
      'Monthly reporting and analysis delivery',
      'Budget-to-actual variance monitoring',
      'Staff training and process refinement',
      'Technology integration and optimization',
    ],
  },
  {
    number: '04',
    title: 'Report & Optimize',
    description: 'We continuously monitor performance and optimize for continuous business growth.',
    subtitle: 'Continuous Performance Improvement',
    details: [
      'Regular financial performance reviews',
      'Strategic planning and forecasting',
      'Process refinement and automation',
      'Growth opportunity identification',
      'ROI measurement and optimization',
      'Long-term roadmap adjustments',
    ],
  },
];

export default function ProcessPage() {
  return (
    <MarketingLayout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 py-20">
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Proven 4-Step Process
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your accounting into a strategic advantage with our systematic approach. 
                From discovery to optimization, we ensure measurable results at every step.
              </p>
              <h2 className="text-lg font-semibold text-primary mb-4">
                Clear. Systematic. Results-Oriented.
              </h2>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 bg-background">
          <div className="container-standard section-gutter">
            <div className="max-w-6xl mx-auto">
              {processSteps.map((step, index) => (
                <div key={step.number} className="mb-20 last:mb-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Step Content */}
                    <div className={`${index % 2 === 0 ? '' : 'lg:order-2'}`}>
                      <div className="mb-6">
                        <span className="text-6xl font-bold text-muted-foreground/20">
                          {step.number}
                        </span>
                        <h3 className="text-3xl font-bold text-foreground mt-2">
                          {step.title}
                        </h3>
                        <h4 className="text-xl text-primary font-semibold mb-4 mt-2">
                          {step.subtitle}
                        </h4>
                        <p className="text-lg text-muted-foreground mb-6">
                          {step.description}
                        </p>
                      </div>
                      
                      <div className="grid gap-3">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Step Visual */}
                    <div className={`${index % 2 === 0 ? 'lg:order-2' : ''}`}>
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 h-80 flex items-center justify-center">
                        <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl opacity-80">
                          {step.number}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider between steps */}
                  {index < processSteps.length - 1 && (
                    <div className="flex justify-center my-12">
                      <div className="w-px h-16 bg-gradient-to-b from-blue-200 to-transparent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
          <div className="container-standard section-gutter text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Financial Operations?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the difference our systematic approach can make in your business financial management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">
                  Book Your Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/case-studies">View Success Stories</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
















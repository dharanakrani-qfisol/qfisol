import { Metadata } from 'next';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookCallButton } from '@/components/ui/book-call-button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Calculator, BarChart, Clock, Users, FileText, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Outsourced Accounting Services',
  description: 'Complete bookkeeping, financial reporting, and accounting operations for businesses of all sizes.',
};

const serviceHighlights = [
  {
    icon: Calculator,
    title: 'Monthly Bookkeeping',
    description: 'Complete transaction categorization, reconciliation, and financial statement generation.',
  },
  {
    icon: BarChart,
    title: 'Financial Reporting',
    description: 'Professional P&L statements, balance sheets, and cash flow reports.',
  },
  {
    icon: Clock,
    title: 'Real-time Updates',
    description: 'Access up-to-date financial data for immediate business insights.',
  },
  {
    icon: Users,
    title: 'Dedicated Team',
    description: 'Consistent, experienced accountants familiar with your business.',
  },
];

const included = [
  'Monthly bookkeeping & reconciliation',
  'Accounts payable & receivable management',
  'Payroll processing support',
  'Monthly financial statements',
  'Cash flow monitoring',
  'Tax preparation support',
  'Quarterly reviews',
  'Cloud-based access',
];

const clientType = [
  'Businesses needing professional bookkeeping',
  'Companies scaling beyond owner-managed accounting',
  'Firms requiring specialized industry expertise',
  'Organizations seeking timely financial insights',
];

const industries = [
  { name: 'Construction', href: '/industries/construction' },
  { name: 'Dental', href: '/industries/dental' },
  { name: 'Hospitality', href: '/industries/hospitality' },
  { name: 'Retail', href: '/industries/retail' },
];

export default function OutsourcedAccountingPage() {
  return (
    <MarketingLayout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 py-20">
          <div className="container-standard section-gutter">
            <div className="max-w-4xl">
              <Badge className="mb-4 px-4 py-2 text-sm">Core Service</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Outsourced Accounting Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Full-service bookkeeping and financial management that gives you clarity in your business operations. 
                Professional accounting support tailored to your industry and business needs.
              </p>
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">
                  Schedule Accounting Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Service Highlights */}
        <section className="py-20 bg-background">
          <div className="container-standard section-gutter">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Choose Outsourced Accounting
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional financial management with the expertise and dedicated resources your business deserves.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceHighlights.map((highlight, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <highlight.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-lg">{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* This Service is For You If */}
        <section className="py-20 bg-muted/30">
          <div className="container-standard section-gutter">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                This Service Is For You If...
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {clientType.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What&apos;s Included */}
        <section className="py-20 bg-background">
          <div className="container-standard section-gutter">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                What&apos;s Included
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive accounting services to keep your business financially organized and compliant.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {included.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-20 bg-muted/30">
          <div className="container-standard section-gutter">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Industry Applications
              </h2>
              <p className="text-lg text-muted-foreground">
                Specialized accounting expertise across key industry verticals.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <Link
                  key={index}
                  href={industry.href}
                  className="p-4 border rounded-lg hover:shadow-md transition-shadow text-center group"
                >
                  <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {industry.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="py-20 bg-background">
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Security & Compliance Standards
                </h2>
                <p className="text-lg text-muted-foreground">
                  Your data security and regulatory compliance are our top priorities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-6 text-center">
                  <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>Secure Data Handling</CardTitle>
                  <p className="text-muted-foreground mt-2">
                    Encrypted data transmission and secure cloud storage.
                  </p>
                </Card>

                <Card className="p-6 text-center">
                  <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Industry Compliance</CardTitle>
                  <p className="text-muted-foreground mt-2">
                    Adherence to GAAP and industry-specific standards.
                  </p>
                </Card>

                <Card className="p-6 text-center">
                  <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Certified Team</CardTitle>
                  <p className="text-muted-foreground mt-2">
                    Licensed and certified accounting professionals.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
          <div className="container-standard section-gutter text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Professional Accounting Management?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how outsourced accounting can streamline your business operations.
            </p>
            <Link href="/contact">
              <BookCallButton className="text-lg px-8 py-6">
                Book a Call
              </BookCallButton>
            </Link>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}

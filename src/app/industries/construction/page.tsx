import { Metadata } from 'next';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookCallButton } from '@/components/ui/book-call-button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Hammer, Calculator, FileText, BarChart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Construction Industry Accounting Services',
  description: 'Specialized accounting and advisory services for construction companies including job costing, WIP reporting, and project accounting.',
};

const reasons = [
  'Accurate job costing and profit tracking',
  'Work-in-Progress (WIP) management',
  'Project-level financial analysis',
  'Construction-specific compliance',
  'Equipment depreciation tracking',
  'Bond and insurance coordination',
];

const coreAccountingServices = [
  { name: 'Job Costing', description: 'Track costs per project down to the line item' },
  { name: 'WIP Reporting', description: 'Work-in-progress status across all projects' },
  { name: 'Project Profitability', description: 'Real-time profit tracking per project' },
  { name: 'Equipment Cost Allocation', description: 'Proper allocation of equipment costs' },
];

const specializedServices = [
  { name: 'Subcontractor Management', description: '1099 compliance and payment tracking' },
  { name: 'Retention Reporting', description: 'Manage contractor and customer retentions' },
  { name: 'Lien Management', description: 'Track mechanic\'s liens and releases' },
  { name: 'Change Order Processing', description: 'Project scope change documentation' },
];

const strategicServices = [
  {
    title: 'Fractional CFO for Construction',
    description: 'Financial leadership tailored to construction business cycles',
    icon: Calculator
  },
  {
    title: 'Construction Software Integration',
    description: 'Connect accounting software with construction management systems',
    icon: FileText
  },
  {
    title: 'Financial Forecasting',
    description: 'Long-term financial planning based on project pipeline',
    icon: BarChart
  },
];

export default function ConstructionPage() {
  return (
    <MarketingLayout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 to-blue-50 dark:from-orange-950/20 dark:to-blue-950/20 py-20">
          <div className="container-standard section-gutter">
            <div className="max-w-3xl">
              <Badge className="mb-4 px-4 py-2 text-sm">Construction Industry</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Construction Industry Excellence
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Specialized accounting and advisory services for construction companies. From job costing to project management, we provide the financial clarity you need to scale profitably.
              </p>
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">
                  Book Construction Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Construction Businesses Choose Quantifi */}
        <section className="py-20 bg-background">
          <div className="container-standard section-gutter">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Construction Companies Choose Quantifi
              </h2>
              <p className="text-lg text-muted-foreground">
                We understand the unique financial challenges of the construction industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Tabs */}
        <section className="py-20 bg-muted/30">
          <div className="container-standard section-gutter">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Construction Accounting Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive solutions for construction businesses of all sizes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Core Accounting */}
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Hammer className="h-6 w-6 mr-2 text-orange-600" />
                    Core Accounting Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {coreAccountingServices.map((service, index) => (
                      <div key={index} className="border-l-4 border-orange-200 pl-4">
                        <div className="font-semibold text-foreground">{service.name}</div>
                        <div className="text-sm text-muted-foreground">{service.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Specialized Services */}
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-6 w-6 mr-2 text-blue-600" />
                    Specialized Construction Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {specializedServices.map((service, index) => (
                      <div key={index} className="border-l-4 border-blue-200 pl-4">
                        <div className="font-semibold text-foreground">{service.name}</div>
                        <div className="text-sm text-muted-foreground">{service.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Strategic Services */}
        <section className="py-20 bg-background">
          <div className="container-standard section-gutter">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Strategic Advisory Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Beyond accounting - strategic financial leadership for construction businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {strategicServices.map((service, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <service.icon className="h-8 w-8 text-blue-600 mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
          <div className="container-standard section-gutter text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Streamline Your Construction Accounting?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a free consultation and see how our construction expertise can transform your financial operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <BookCallButton className="text-lg px-8 py-6">
                  Book a Call
                </BookCallButton>
              </Link>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/process">Learn About Our Process</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}



















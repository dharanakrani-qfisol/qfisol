import { Metadata } from 'next';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real client success stories showcasing our expertise across industries.',
};

const caseStudies = [
  {
    title: 'Davis Construction Reduced Close Time by 67%',
    industry: 'Construction',
    challenge: 'Month-end closing taking 15 days to complete with job costing inaccuracies.',
    solution: 'Integrated job costing system with real-time WIP reporting and automated reconciliations.',
    results: {
      metric: '67%',
      description: 'Faster closing cycle',
      details: '15 days → 5 days',
    },
    key_highlights: ['Real-time job profitability tracking', 'Automated WIP calculations', 'Streamlined AP/AR processes'],
  },
  {
    title: 'Dental Practice Achieved 40% Net Margin Increase',
    industry: 'Dental',
    challenge: 'Poor cash flow visibility affecting practice expansion planning.',
    solution: 'Comprehensive financial dashboard with predictive analytics and practice-specific KPIs.',
    results: {
      metric: '40%',
      description: 'Net margin increase',
      details: 'Through optimized fee schedules and insurance processing',
    },
    key_highlights: ['Predictive revenue forecasting', 'Insurance optimization', 'Patient payment tracking'],
  },
  {
    title: 'ProHotel Group Streamlined Multi-Location Management',
    industry: 'Hospitality',
    challenge: 'Complex multi-hotel accounting with inconsistent reporting across properties.',
    solution: 'Centralized financial system with property-specific reporting and consolidated analytics.',
    results: {
      metric: '50%',
      description: 'Reduction in reporting time',
      details: 'From weekly manual processes to automated dashboard',
    },
    key_highlights: ['Unified reporting dashboard', 'Property-specific metrics', 'Compliance tracking'],
  },
];

export default function CaseStudiesPage() {
  return (
    <MarketingLayout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 py-20">
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Client Success Stories
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Real results from our accounting and advisory services across diverse industry clients.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-background">
          <div className="container-standard section-gutter">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {caseStudies.map((study, index) => (
                  <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <Badge variant="outline" className="mb-2">
                          {study.industry}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl leading-tight mb-4">
                        {study.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Challenge:</h4>
                        <p className="text-sm text-muted-foreground">
                          {study.challenge}
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Solution:</h4>
                        <p className="text-sm text-muted-foreground">
                          {study.solution}
                        </p>
                      </div>

                      <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-green-600 mb-1">
                          {study.results.metric}
                        </div>
                        <div className="text-sm font-semibold text-green-700">
                          {study.results.description}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {study.results.details}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Key Highlights:</h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {study.key_highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg">
                <a href="/contact">Schedule a Similar Success Story</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}

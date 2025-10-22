import { Metadata } from 'next';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookCallButton } from '@/components/ui/book-call-button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  CheckCircle, 
  Calculator, 
  BarChart, 
  ArrowRight, 
  DollarSign, 
  Users, 
  Shield, 
  TrendingUp, 
  Building2, 
  Clock,
  Zap,
  Target,
  Award
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Construction Accounting Services for Contractors | QuantiFi',
  description: 'Outsourced construction accounting, bookkeeping, WIP reporting, and job costing services for contractors. Nationwide CPA support – get a free consultation.',
};

const constructionServices = [
  {
    title: 'Bookkeeping & Job Cost Tracking',
    description: 'We maintain your general ledger with meticulous care — handling accounts payable/receivable, fixed asset tracking, and monthly bank reconciliations. Our team implements construction-specific bookkeeping, tagging every transaction by project.',
    icon: Calculator,
    features: ['Project-based transaction tagging', 'Audit-ready records', 'Monthly bank reconciliations', 'Fixed asset tracking']
  },
  {
    title: 'Payroll Management & Certified Payroll Compliance',
    description: 'Outsource your complex payroll to us for error-free processing. We manage weekly and bi-weekly payroll for construction crews, including handling union wages, overtime, and certified payroll reports for government contracts.',
    icon: Users,
    features: ['Union wage management', 'Davis-Bacon Act compliance', 'Certified payroll reports', 'Payroll tax handling']
  },
  {
    title: 'Tax Planning & Preparation',
    description: 'Proactive tax strategy helps contractors minimize liability and avoid surprises. We provide year-round tax planning with specialized tactics like cost segregation studies to reduce tax burdens.',
    icon: DollarSign,
    features: ['Cost segregation studies', 'Entity structuring', 'Year-round tax planning', 'CPA coordination']
  },
  {
    title: 'Financial Reporting & Assurance',
    description: 'Get clear, professional financial statements that stakeholders trust. We prepare monthly and quarterly financial reports using GAAP-compliant methods and correct revenue recognition for your projects.',
    icon: BarChart,
    features: ['GAAP-compliant reporting', 'Job cost schedules', 'Budget vs. actual analysis', 'Audit preparation']
  },
  {
    title: 'Job Costing & WIP Reporting',
    description: 'Know exactly how each project is performing financially. We implement robust job costing, tracking every material, labor, and subcontractor expense with detailed Job Cost Reports and Work-in-Progress reports.',
    icon: Target,
    features: ['Real-time project tracking', 'Budget vs. actual reports', 'Change order accounting', 'Margin fade alerts']
  },
  {
    title: 'Project Cash Flow Management',
    description: 'Construction businesses live and die by cash flow. We help you forecast and manage cash needs for each project with cash flow projections that factor in project schedules, billing milestones, and retention releases.',
    icon: TrendingUp,
    features: ['Cash flow forecasting', 'Billing milestone tracking', 'Retention management', 'Vendor payment optimization']
  },
  {
    title: 'Internal Controls & Audit-Readiness',
    description: 'We implement strong internal controls so you can trust your financial systems. QuantiFi establishes checks and balances for your construction accounting processes to help prevent fraud and errors.',
    icon: Shield,
    features: ['Fraud prevention', 'Process oversight', 'Compliance documentation', 'Audit preparation']
  },
  {
    title: 'Construction Software & Systems Consulting',
    description: 'Leverage technology to streamline your accounting. Our team are experts in industry software like QuickBooks, Sage 300, Foundation Software, Acumatica, Viewpoint, and Procore.',
    icon: Zap,
    features: ['Software integration', 'Data migration', 'Staff training', 'Custom reporting']
  },
  {
    title: 'Surety & Bonding Support',
    description: 'Need better bonding capacity? We prepare the detailed financial statements and WIP schedules that surety underwriters require, helping you meet bonding requirements with less stress.',
    icon: Award,
    features: ['Bonding capacity improvement', 'Financial statement preparation', 'WIP schedule creation', 'Underwriter coordination']
  },
  {
    title: 'Fractional CFO & Advisory Services',
    description: 'Get CFO-level guidance without the full-time cost. Our Fractional CFO service provides experienced construction finance executive support for strategic planning, budgeting, and growth decisions.',
    icon: Building2,
    features: ['Strategic planning', 'Annual budgeting', 'Scenario analysis', 'Growth strategy']
  }
];

const whyChooseQuantiFi = [
  {
    title: 'Outsourced & Liaison Support',
    description: 'Flexible engagement to fit your needs. We can operate as your fully outsourced accounting department or integrate with your existing staff as a liaison.',
    icon: Users
  },
  {
    title: 'Cost-Effective Expertise',
    description: 'Professional financial expertise without the heavy overhead. Access seasoned experts at a fraction of the cost of hiring full-time accounting staff.',
    icon: DollarSign
  },
  {
    title: 'Consistent & Reliable Service',
    description: 'Never worry about vacations or turnover derailing your accounting. Our team provides year-round consistency and dependable delivery.',
    icon: Clock
  },
  {
    title: 'Construction Industry Expertise',
    description: 'We know construction inside and out. From AIA billing and retainage to job costing, WIP reports, and bonding requirements, our specialists speak the language of contractors.',
    icon: Building2
  },
  {
    title: 'Technology-Driven Processes',
    description: 'We combine cloud accounting systems with hands-on financial expertise to deliver accuracy, transparency, and speed through secure client portals and automated tools.',
    icon: Zap
  },
  {
    title: 'Scalable Support as You Grow',
    description: 'A partner that grows with your business. Whether you\'re a small subcontractor or established GC, we scale our services accordingly.',
    icon: TrendingUp
  }
];

const faqData = [
  {
    question: 'Why does construction accounting require specialized expertise?',
    answer: 'Construction accounting involves unique elements like project-based costing, work-in-progress accounting, retainage tracking, and variable billing cycles that general accounting firms may not handle well. A construction-focused accountant is familiar with industry specifics and avoids costly mistakes that can happen with generic bookkeepers.'
  },
  {
    question: 'How does QuantiFi handle job costing and WIP reporting for my construction projects?',
    answer: 'We set up your accounting system to track costs by job and phase, providing detailed Job Cost Reports comparing actual expenses to your budget and Work-in-Progress reports showing each project\'s percentage complete and revenue status.'
  },
  {
    question: 'Can you assist with construction payroll and certified payroll reports?',
    answer: 'Yes — we provide comprehensive construction payroll services including certified payroll reporting, WH-347 forms for government projects, and full compliance with prevailing wage laws and Davis-Bacon Act requirements.'
  },
  {
    question: 'Will you work with our existing accounting software and project management tools?',
    answer: 'Absolutely. We have experience with all major construction accounting software and project management platforms. We\'ll adapt to your workflow or help you improve it by integrating your systems.'
  },
  {
    question: 'Will QuantiFi help with bonding and preparing financials for surety companies?',
    answer: 'Yes, we routinely assist clients with bonding requirements, preparing specialized financial statements, work-in-progress schedules, and contract backlog reports that surety companies require.'
  }
];

export default function ConstructionPage() {
  return (
    <MarketingLayout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 via-blue-50 to-green-50 dark:from-orange-950/20 dark:via-blue-950/20 dark:to-green-950/20 py-24">
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 px-6 py-3 text-base font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                Construction & Contracting Accounting Services
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                Build Profitably, Control Costs, and Grow with Confidence
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Project finances don&apos;t have to be complicated. QuantiFi&apos;s specialized construction accounting services help contractors keep their books accurate, projects profitable, and businesses fully compliant from the ground up. We handle the numbers — you focus on building.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookCallButton className="text-lg px-10 py-6 bg-orange-600 hover:bg-orange-700 text-white font-semibold">
                  Schedule a Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </BookCallButton>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-gray-900">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Overview */}
        <section className="py-20 bg-background">
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Building Solid Financial Foundations
                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
              </div>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  At QuantiFi, we make construction finance simple, strategic, and CPA-ready. We understand that construction accounting isn&apos;t like typical bookkeeping — it demands job-based costing, progress billing, retainage tracking, and real-time insight into every project&apos;s financial health.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Many contractors struggle because generic bookkeepers or small accounting services don&apos;t understand how to manage change orders, WIP reports, and revenue recognition correctly — leading to inaccurate profits and higher risk.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Our construction accounting specialists solve these challenges by providing tailored construction bookkeeping and financial management services designed for general contractors, subcontractors, and infrastructure firms. We act as your outsourced accounting department or integrate seamlessly with your in-house team, ensuring you always have audit-ready, CPA-ready financials.
                </p>
                
                <div className="bg-orange-50 dark:bg-orange-950/20 p-8 rounded-2xl border-l-4 border-orange-500 mt-8">
                  <p className="text-lg font-medium text-foreground mb-0">
                    <strong>With QuantiFi, you get the perfect balance of big-firm experience and local insight</strong> — a dedicated accounting partner that understands contractors, builds financial strength, and keeps your numbers working as hard as your crews do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Construction Accounting Services */}
        <section className="py-20 bg-muted/30">
          <div className="container-standard section-gutter">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Construction Accounting Services for Contractors
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                QuantiFi offers a comprehensive suite of accounting and financial services tailored to the construction industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {constructionServices.map((service, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-900">
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
                        <service.icon className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Contractors Trust QuantiFi */}
        <section className="py-20 bg-background">
          <div className="container-standard section-gutter">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Contractors Trust QuantiFi for Construction Accounting
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Construction accounting is more than just crunching numbers — it's the backbone of successful projects. At QuantiFi, we pride ourselves on being more than an accounting vendor; we're a partner in your business's success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseQuantiFi.map((reason, index) => (
                <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                  <CardHeader className="pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl">
                        <reason.icon className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground mb-3">
                      {reason.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Construction Accounting FAQs
                </h2>
                <p className="text-xl text-muted-foreground">
                  Still have questions? Below are some common questions we hear from contractors — along with answers to help you understand how QuantiFi's construction accounting services can benefit your business.
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 dark:border-gray-700 rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
          <div className="container-standard section-gutter text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Build a Strong Financial Foundation?
              </h2>
              <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
                Don't let accounting issues undermine your projects. Let QuantiFi handle the finances while you focus on construction. We're here to provide clarity, strategy, and peace of mind in every job's numbers.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <BookCallButton className="text-xl px-12 py-8 bg-white text-blue-600 hover:bg-gray-100 font-bold">
                  Schedule a Free Consultation
                  <ArrowRight className="h-6 w-6" />
                </BookCallButton>
                <Button asChild size="lg" variant="outline" className="text-xl px-8 py-8 border-white text-white hover:bg-white hover:text-blue-600">
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}



















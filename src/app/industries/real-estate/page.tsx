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
  FileText, 
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
  Award,
  CreditCard,
  Receipt,
  Home,
  Building,
  PieChart,
  Smartphone,
  Globe,
  Lock,
  Landmark
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Real Estate Accounting & Bookkeeping Services | QuantiFi',
  description: 'Specialized real estate accounting for property owners, managers, and developers. We handle property bookkeeping, rent rolls, financial reporting, and tax strategies (1031 exchanges, depreciation) to maximize your returns. Schedule a free consultation with our real estate accounting experts.',
};

const realEstateServices = [
  {
    title: 'Property Bookkeeping and Rent Roll Management',
    description: 'We maintain complete, property-specific books that track every dollar in and out. Our team records rental income, management fees, CAM recoveries, and all property-level expenses.',
    icon: Home,
    features: ['Property-specific books', 'Rent roll management', 'Tenant ledger reconciliation', 'CAM recoveries tracking']
  },
  {
    title: 'Accounts Payable and Expense Tracking',
    description: 'We establish a streamlined accounts payable system for all your vendors, contractors, and service providers. Every invoice is coded to the right property and expense category.',
    icon: Receipt,
    features: ['Vendor invoice processing', 'Property expense coding', 'Capital improvement tracking', 'Fixed asset management']
  },
  {
    title: 'Bank Reconciliations and Escrow Accounting',
    description: 'Real estate portfolios often manage multiple bank accounts, including operating, reserve, and escrow accounts. We perform regular reconciliations for each account.',
    icon: CreditCard,
    features: ['Multi-account reconciliation', 'Escrow account management', 'Trust ledger maintenance', 'Compliance reporting']
  },
  {
    title: 'Financial Reporting per Property and Consolidated',
    description: 'We prepare tailored real estate financial reporting that provides both property-specific and portfolio-wide insights. You receive detailed income statements and cash flow summaries.',
    icon: BarChart,
    features: ['Property-specific reports', 'Portfolio consolidation', 'NOI calculations', 'Cap rate analysis']
  },
  {
    title: 'Cash Flow Management and Forecasting',
    description: 'Real estate success depends on liquidity. We develop cash flow forecasts that map rental inflows, mortgage payments, and capital expenses month by month.',
    icon: TrendingUp,
    features: ['Cash flow forecasting', 'Liquidity planning', 'Distribution scheduling', 'Acquisition planning']
  },
  {
    title: 'Loan Compliance and Lender Reporting',
    description: 'We monitor your loans and prepare accurate lender-ready reports. Our team tracks loan balances, calculates DSCR, LTV, and covenant ratios.',
    icon: Landmark,
    features: ['DSCR calculations', 'LTV monitoring', 'Covenant tracking', 'Construction loan draws']
  },
  {
    title: 'Tax Coordination, Cost Segregation, and 1031 Exchange Support',
    description: 'Our accounting team supports your tax preparer by maintaining clean depreciation schedules, tracking improvements, and organizing data for cost segregation.',
    icon: Shield,
    features: ['Depreciation schedules', 'Cost segregation support', '1031 exchange accounting', 'Tax coordination']
  },
  {
    title: 'Investment and Portfolio Analysis',
    description: 'We provide in-depth real estate financial analysis and investor reporting that goes beyond basic bookkeeping. Our reports include key performance indicators.',
    icon: PieChart,
    features: ['ROI analysis', 'IRR tracking', 'Occupancy rates', 'Portfolio performance']
  },
  {
    title: 'Property Management Software Integration',
    description: 'We integrate with your preferred property management software including Yardi, AppFolio, Buildium, Rent Manager, MRI, and QuickBooks.',
    icon: Zap,
    features: ['Yardi integration', 'AppFolio bookkeeping', 'Buildium support', 'QuickBooks optimization']
  },
  {
    title: 'Fractional CFO and Real Estate Advisory',
    description: 'Beyond bookkeeping, QuantiFi acts as your fractional CFO, delivering strategic financial leadership tailored to real estate operations.',
    icon: Building2,
    features: ['Acquisition modeling', 'Development budgets', 'Refinancing analysis', 'Strategic planning']
  }
];

const whyChooseQuantiFi = [
  {
    title: 'Deep Real Estate Industry Expertise',
    description: 'Our team understands real estate accounting inside and out, from NOI, cap rates, and CAM reconciliations to 1031 exchanges, depreciation schedules, and loan compliance requirements.',
    icon: Building
  },
  {
    title: 'Seamless Software Integration',
    description: 'We integrate seamlessly with your property management software, whether you use Yardi, AppFolio, Buildium, Rent Manager, MRI, or QuickBooks. Our process eliminates duplication.',
    icon: Zap
  },
  {
    title: 'Full Accounting Department Without Overhead',
    description: 'With QuantiFi, you gain a full accounting department without the overhead of in-house staff. We scale services based on your needs, from property acquisition to ongoing investor reporting.',
    icon: DollarSign
  },
  {
    title: 'Financial Clarity for Better Decision Making',
    description: 'Beyond compliance, QuantiFi delivers financial clarity that drives better decision making. Our experts perform real estate financial analysis, identifying trends in operating performance.',
    icon: Target
  },
  {
    title: 'Consistency, Accuracy, and Professionalism',
    description: 'Your financials are delivered on time, every time, clean, compliant, and audit ready. Your investors and lenders gain confidence, your decisions become sharper.',
    icon: Award
  },
  {
    title: 'Strategic Growth Tool',
    description: 'With QuantiFi, your accounting becomes more than a back office function; it becomes a strategic growth tool built for long-term success.',
    icon: TrendingUp
  }
];

const faqData = [
  {
    question: 'What types of real estate companies does QuantiFi work with?',
    answer: 'We partner with a wide range of clients across the real estate industry, including property management companies, real estate investment firms, developers, and brokerages. Whether you manage a multifamily portfolio, a commercial property, or multiple single-family rentals, our property accounting services are designed to fit your structure.'
  },
  {
    question: 'Why is specialized real estate accounting important?',
    answer: 'Real estate requires precise accounting for multi-entity structures, fixed asset tracking, and depreciation schedules that typical bookkeepers often overlook. Our team understands cost segregation accounting, property improvement accounting, and real estate financial analysis, ensuring every transaction is classified correctly.'
  },
  {
    question: 'Can QuantiFi work with my property management software like Yardi or AppFolio?',
    answer: 'Yes. We work directly within your property management software, including Yardi, AppFolio, Buildium, Rent Manager, MRI, and QuickBooks. Whether you need Yardi accounting reconciliations or AppFolio bookkeeping cleanup, we adapt to your workflow and ensure your real estate financial reporting stays accurate.'
  },
  {
    question: 'How do you handle accounting for multiple properties and entities?',
    answer: 'QuantiFi specializes in multi-entity accounting and maintains clean, separate books for every property or LLC. We track intercompany transactions, shared costs, and due-to/due-from balances to ensure accuracy and compliance. You\'ll receive individual property reports as well as consolidated real estate financial statements.'
  },
  {
    question: 'Do you prepare reports for investors and lenders?',
    answer: 'Absolutely. We prepare customized investor reporting and real estate financial reporting packages that include income statements, rent rolls, and variance analyses. Our reports are presentation-ready for investor meetings and lender compliance, helping you maintain transparency and build long-term trust.'
  },
  {
    question: 'Can you help with cost segregation or property valuation support?',
    answer: 'Yes. We provide cost segregation accounting and real estate valuation support by maintaining detailed improvement records, fixed asset tracking, and depreciation schedules. Our CPA-ready reports make it easy for your tax preparer or valuation specialist to perform cost segregation studies.'
  },
  {
    question: 'Can you assist during property acquisitions or 1031 exchanges?',
    answer: 'Definitely. QuantiFi handles all aspects of property acquisition accounting, disposition accounting, and 1031 exchange accounting. We review seller financials, assist with due diligence, and set up new property books accurately from day one. During a sale, we ensure clean closing entries and smooth fund distributions.'
  }
];

export default function RealEstatePage() {
  return (
    <MarketingLayout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-blue-50 to-teal-50 dark:from-green-950/20 dark:via-blue-950/20 dark:to-teal-950/20 py-24">
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 px-6 py-3 text-base font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Real Estate & Property Management Accounting Services
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                Keep Your Properties Profitable with Expert Real Estate Accounting
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                QuantiFi provides specialized accounting for real estate businesses – from property managers and investors to developers. We'll handle rent rolls, expense tracking, loan compliance, and financial reporting for your properties, ensuring you have clear financial insight and more time to close deals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookCallButton className="text-lg px-10 py-6 bg-green-600 hover:bg-green-700 text-white font-semibold">
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
                  Building Wealth on Solid Financial Foundations
                </h2>
                <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
              </div>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  Real estate is an industry of big assets and big decisions – and one where financial complexity abounds. Owners and managers must track income and expenses across multiple properties or projects, navigate mortgage and loan covenants, handle security deposits and escrow accounts, and adhere to tax rules that can change by locality.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Many real estate firms struggle with disparate systems and labor-intensive spreadsheets that can lead to errors or missed opportunities. Hiring in-house accounting talent with real estate expertise is costly and often hard to find, which is why more industry leaders are turning to outsourced accounting as a solution.
                </p>
                
                <p className="text-lg leading-relaxed">
                  QuantiFi delivers the financial clarity and control that real estate businesses need. We understand the nuances of property accounting – from tracking individual building performance and reconciling tenant ledgers, to managing development project budgets and cost allocations.
                </p>
                
                <div className="bg-green-50 dark:bg-green-950/20 p-8 rounded-2xl border-l-4 border-green-500 mt-8">
                  <p className="text-lg font-medium text-foreground mb-0">
                    <strong>With us handling the accounting groundwork, you can focus on deals, developments, and growth opportunities with confidence.</strong> QuantiFi helps you maximize returns and minimize headaches by ensuring your real estate finances are rock-solid.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Estate Accounting Services */}
        <section className="py-20 bg-muted/30">
          <div className="container-standard section-gutter">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Real Estate Accounting Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                QuantiFi provides specialized real estate accounting and bookkeeping services for property managers, investors, developers, and syndicators.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {realEstateServices.map((service, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-900">
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                        <service.icon className="h-8 w-8 text-green-600 dark:text-green-400" />
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

        {/* Why Real Estate Professionals Choose QuantiFi */}
        <section className="py-20 bg-background">
          <div className="container-standard section-gutter">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Real Estate Professionals Choose QuantiFi
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real estate firms and investors choose QuantiFi because we bring deep industry expertise, precision, and peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseQuantiFi.map((reason, index) => (
                <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                  <CardHeader className="pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-2xl">
                        <reason.icon className="h-10 w-10 text-green-600 dark:text-green-400" />
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
                  Real Estate Accounting FAQs
                </h2>
                <p className="text-xl text-muted-foreground">
                  Navigating real estate finances raises many questions. Here are answers to some common ones:
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
        <section className="py-24 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 text-white">
          <div className="container-standard section-gutter text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Elevate Your Real Estate Profits with Rock-Solid Financial Management?
              </h2>
              <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
                Don't let accounting complexities or compliance worries hold back your real estate success. With QuantiFi as your financial partner, you gain clarity, confidence, and control over every property and project. We'll handle the books and the details – you focus on deals, development, and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <BookCallButton className="text-xl px-12 py-8 bg-white text-green-600 hover:bg-gray-100 font-bold">
                  Schedule a Free Consultation
                  <ArrowRight className="h-6 w-6" />
                </BookCallButton>
                <Button asChild size="lg" variant="outline" className="text-xl px-8 py-8 border-white text-white hover:bg-white hover:text-green-600">
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

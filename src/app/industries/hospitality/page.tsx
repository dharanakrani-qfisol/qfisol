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
  Zap,
  Target,
  Award,
  CreditCard,
  Receipt,
  UtensilsCrossed,
  Bed,
  Smartphone,
  Globe
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hospitality & Restaurant Accounting Services | QuantiFi',
  description: 'Hospitality bookkeeping, hotel accounting, and restaurant finance services. We manage payroll, inventory, and taxes for your hospitality business – focus on your guests while we handle the books. Get a free consultation.',
};

const hospitalityServices = [
  {
    title: 'Bookkeeping & Daily Revenue Reconciliation',
    description: 'We manage your day-to-day bookkeeping, recording all sales and expenses from your property management system (PMS) or point-of-sale (POS) systems. Each night\'s revenue reports are reconciled against bank deposits and credit card batches.',
    icon: Calculator,
    features: ['Nightly revenue reconciliation', 'PMS/POS integration', 'Audit trail maintenance', 'Discrepancy detection']
  },
  {
    title: 'Chargeback Monitoring & Response Management',
    description: 'We track and flag all chargeback notices from your payment processors and respond within the required 72-hour window to dispute illegitimate claims and protect your revenue.',
    icon: CreditCard,
    features: ['72-hour response window', 'Documentation preparation', 'Merchant provider liaison', 'Revenue protection']
  },
  {
    title: 'Accounts Payable & Vendor Management',
    description: 'Never miss a payment or overpay a vendor. We handle the entire accounts payable process for your hotel or restaurant – coding and entering vendor bills, scheduling payments, and managing vendor relationships.',
    icon: Receipt,
    features: ['Vendor bill processing', 'Payment optimization', 'Early payment discounts', 'Vendor relationship management']
  },
  {
    title: 'Payroll Processing and Compliance',
    description: 'We simplify hospitality payroll management for hotels, restaurants, and resorts. Our team supports payroll for your entire staff including front desk, housekeeping, servers, and kitchen teams.',
    icon: Users,
    features: ['Multi-department payroll', 'Overtime management', 'CPA-ready reports', 'Compliance documentation']
  },
  {
    title: 'Financial Reporting & Multi-Property Consolidation',
    description: 'Get the financial clarity you need to run a successful hospitality operation. We prepare detailed monthly financial statements and consolidate reports for multiple properties.',
    icon: BarChart,
    features: ['Departmental P&L reports', 'Multi-property consolidation', 'Key performance indicators', 'Custom dashboards']
  },
  {
    title: 'Sales, Occupancy & Liquor Tax Compliance',
    description: 'Hospitality businesses face a web of tax obligations – sales tax on food and beverage, occupancy/accommodations tax on rooms, tourism levies, and possibly liquor taxes.',
    icon: Shield,
    features: ['Sales tax management', 'Occupancy tax filing', 'Liquor tax compliance', 'Multi-jurisdiction support']
  },
  {
    title: 'Inventory & Cost of Goods Sold Management',
    description: 'For restaurants and hotel F&B operations, controlling food and beverage costs is crucial. We implement systems to track inventory purchases and usage for accurate COGS.',
    icon: UtensilsCrossed,
    features: ['Inventory tracking', 'COGS calculation', 'Food cost monitoring', 'Waste identification']
  },
  {
    title: 'Budgeting, Forecasting & Cash Flow Planning',
    description: 'Seasonality and events can make hospitality revenue swing widely. We assist in creating budgets and forecasts that anticipate these fluctuations.',
    icon: TrendingUp,
    features: ['Seasonal forecasting', 'Cash flow projections', 'Budget vs. actual analysis', 'Event planning support']
  },
  {
    title: 'Franchise & Brand Compliance Reporting',
    description: 'If you\'re a franchised hotel or part of a branded chain, we manage the additional accounting work that comes with it. We prepare required franchise reports and ensure compliance.',
    icon: Award,
    features: ['Franchise report preparation', 'Royalty calculations', 'Brand compliance', 'Audit support']
  },
  {
    title: 'Technology Integration & Cloud Accounting',
    description: 'We leverage technology to streamline hospitality accounting. We can integrate your front-end systems directly with your accounting software to reduce manual data entry.',
    icon: Zap,
    features: ['PMS/POS integration', 'Cloud-based platforms', 'Automated reporting', '24/7 data access']
  },
  {
    title: 'Fractional CFO & Advisory Services',
    description: 'We provide fractional CFO support designed specifically for hotels, restaurants, and multi-location hospitality groups — giving you executive-level financial expertise without the full-time overhead.',
    icon: Building2,
    features: ['Strategic planning', 'Feasibility studies', 'Cost segregation', 'Valuation consulting']
  }
];

const whyChooseQuantiFi = [
  {
    title: 'Outsourced Flexibility, In-House Feel',
    description: 'We adapt to your needs – acting as your fully outsourced accounting department or working alongside your existing finance staff. We become an extension of your team.',
    icon: Users
  },
  {
    title: 'Cost-Effective Expertise',
    description: 'Gain top-notch hospitality accounting expertise without the overhead of full-time hires. You pay only for the services you require – saving on salaries, benefits, and training.',
    icon: DollarSign
  },
  {
    title: 'Hospitality Industry Know-How',
    description: 'Our team knows the hospitality sector inside and out. From understanding nightly PMS reports to knowing metrics like RevPAR and food cost ratios.',
    icon: Bed
  },
  {
    title: 'Real-Time Data & 24/7 Access',
    description: 'We leverage cloud-based systems to give you real-time access to your financial data. Monitor your business\'s financial health in real time, even while managing operations.',
    icon: Smartphone
  },
  {
    title: 'Multi-Property & Growth Support',
    description: 'As your hospitality business grows, QuantiFi grows with you. We are experienced in multi-property consolidation and reporting for hotels and restaurants.',
    icon: Globe
  },
  {
    title: 'Proactive Guidance & Trusted Partner',
    description: 'We go beyond number-crunching. We provide proactive advice to improve your bottom line and bring peace of mind knowing a CPA-led team keeps your financial house in order.',
    icon: Target
  }
];

const faqData = [
  {
    question: 'What makes hospitality accounting different from regular accounting?',
    answer: 'Hospitality accounting involves unique challenges like daily revenue reconciliation, managing large volumes of small transactions (hotel stays, restaurant checks), and handling industry-specific taxes (like occupancy taxes on rooms and sales taxes on meals). There are also sector-specific metrics and reports (e.g. RevPAR for hotels, menu item profitability for restaurants) that generalist accountants might not track.'
  },
  {
    question: 'Can QuantiFi work with my hotel\'s or restaurant\'s software (PMS, POS, etc.)?',
    answer: 'Absolutely. We are well-versed in hospitality systems. For hotels, we can integrate with Property Management Systems like Opera, Cloudbeds, or Maestro. For restaurants, we work with POS systems such as Toast, Square, or Clover. We\'ll adapt to whatever you\'re using and help implement essential systems if needed.'
  },
  {
    question: 'Do you handle occupancy taxes, sales taxes, and other compliance for multiple jurisdictions?',
    answer: 'Yes, we take care of all tax compliance needs. Hotels often have city, county, and state occupancy taxes – we calculate and file those returns on schedule. Restaurants need to file sales tax and in some areas, separate food & beverage or liquor taxes. If your business spans multiple jurisdictions, we\'ll ensure each location\'s taxes are registered, collected, and remitted properly.'
  },
  {
    question: 'We operate several locations – can QuantiFi provide reporting for each property and the whole portfolio?',
    answer: 'Yes, multi-unit reporting is a core part of our service. We maintain bookkeeping for each location separately so you can see individual performance, while also rolling everything up into consolidated financial statements that give owners a bird\'s-eye view of the entire portfolio. This allows you to compare metrics across locations and track overall profitability.'
  },
  {
    question: 'How will working with an outsourced accounting team affect my day-to-day operations?',
    answer: 'Our goal is to make your day-to-day easier. We establish clear workflows with you, set schedules for deliverables (daily sales reports, weekly cash flow updates, monthly statements), and communicate regularly. You\'ll always have access to your financial data and get timely information and expert advice, while freeing up your time to interact with guests and staff.'
  }
];

export default function HospitalityPage() {
  return (
    <MarketingLayout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 dark:from-orange-950/20 dark:via-red-950/20 dark:to-yellow-950/20 py-24">
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 px-6 py-3 text-base font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                Hospitality & Restaurant Accounting Services
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                Focus on Your Guests, Not Your Books
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                QuantiFi's hospitality bookkeeping and accounting services keep your hotel or restaurant financially healthy behind the scenes. From nightly revenue reconciliations to payroll and occupancy tax filings, we handle the numbers so you can deliver five-star experiences.
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
                  Serving Up Financial Clarity
                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
              </div>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  Running a hotel or restaurant is fast-paced and margin-tight. Between daily sales tallies, inventory management, and ever-changing occupancy rates, hospitality accounting can get complicated. In fact, the average restaurant profit margin is only about 3–5%, so even small accounting errors or cost leaks can eat into profits.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Many hospitality businesses struggle with complex financial tasks – like reconciling property management system (PMS) reports, handling nightly cash-outs, or calculating occupancy and liquor taxes – that generic bookkeepers may not handle well.
                </p>
                
                <p className="text-lg leading-relaxed">
                  QuantiFi brings hotel and restaurant-specific accounting expertise to solve these challenges. We understand metrics like RevPAR, ADR, and food cost percentages that drive your industry. Whether it's a boutique hotel, a multi-property franchise, or a local bistro, we provide tailored bookkeeping and CFO support.
                </p>
                
                <div className="bg-orange-50 dark:bg-orange-950/20 p-8 rounded-2xl border-l-4 border-orange-500 mt-8">
                  <p className="text-lg font-medium text-foreground mb-0">
                    <strong>With cloud-based tools, you'll have 24/7 access to your financial data.</strong> QuantiFi offers the peace of mind that your back-office is handled by professionals who know hospitality inside and out, giving you confidence to make data-driven decisions on pricing, staffing, and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hospitality Accounting Services */}
        <section className="py-20 bg-muted/30">
          <div className="container-standard section-gutter">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Hospitality Accounting Services for Hotels & Restaurants
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                QuantiFi provides a full suite of accounting and financial services designed for the hospitality industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hospitalityServices.map((service, index) => (
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

        {/* Why Hospitality Businesses Choose QuantiFi */}
        <section className="py-20 bg-background">
          <div className="container-standard section-gutter">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Hospitality Businesses Choose QuantiFi
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Hospitality and restaurant owners choose QuantiFi as their accounting partner because we offer a unique blend of industry-specific expertise, flexibility, and technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseQuantiFi.map((reason, index) => (
                <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                  <CardHeader className="pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-orange-100 dark:bg-orange-900/30 rounded-2xl">
                        <reason.icon className="h-10 w-10 text-orange-600 dark:text-orange-400" />
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
                  Hospitality Accounting FAQs
                </h2>
                <p className="text-xl text-muted-foreground">
                  Curious about how QuantiFi works for hospitality? Here are answers to common questions hotel and restaurant owners ask:
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
        <section className="py-24 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white">
          <div className="container-standard section-gutter text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Elevate Your Hospitality Finances?
              </h2>
              <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
                Don't let bookkeeping headaches or tax worries detract from your guest experience. Let QuantiFi handle the financial details while you focus on delighting guests and growing your business. We bring clarity, confidence, and control to your hotel or restaurant's finances.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <BookCallButton className="text-xl px-12 py-8 bg-white text-orange-600 hover:bg-gray-100 font-bold">
                  Schedule a Free Consultation
                  <ArrowRight className="h-6 w-6" />
                </BookCallButton>
                <Button asChild size="lg" variant="outline" className="text-xl px-8 py-8 border-white text-white hover:bg-white hover:text-orange-600">
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

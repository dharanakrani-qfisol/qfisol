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
  Rocket,
  Lightbulb,
  PieChart,
  Smartphone,
  Globe,
  Lock
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Startup Accounting & CFO Services | QuantiFi',
  description: 'Outsourced accounting and fractional CFO services for startups. We manage your bookkeeping, cash flow, and financial strategy — from seed stage to scale-up — so you can focus on growth. Get a free consultation.',
};

const startupServices = [
  {
    title: 'Bookkeeping & General Ledger Management',
    description: 'We take over the day-to-day bookkeeping so you don\'t have to. This includes recording all transactions, categorizing expenses, and ensuring every Stripe/PayPal deposit is properly booked.',
    icon: Calculator,
    features: ['Bank feed integration', 'Expense categorization', 'Monthly reconciliations', 'Clean financial data']
  },
  {
    title: 'Monthly Financial Statements & Reporting',
    description: 'Each month we produce a full set of financial statements tailored to startups. This includes Income Statement, Balance Sheet, and Cash Flow Statement with key metrics like burn rate and runway.',
    icon: BarChart,
    features: ['Investor-grade reports', 'Burn rate tracking', 'Runway calculations', 'Board-ready statements']
  },
  {
    title: 'Cash Flow Management & Runway Forecasting',
    description: 'Cash is the lifeblood of startups. We help you monitor and project your cash flow so you always know how much runway you have and when you need to raise.',
    icon: TrendingUp,
    features: ['Cash flow projections', 'Runway forecasting', 'Early warning system', 'Collection optimization']
  },
  {
    title: 'Budgeting & Financial Modeling',
    description: 'We collaborate with you to set up budgets and dynamic financial models. This includes revenue projections, expense forecasts, and scenario analysis for strategic planning.',
    icon: PieChart,
    features: ['Revenue projections', 'Expense forecasting', 'Scenario analysis', 'Growth planning']
  },
  {
    title: 'Accounts Payable & Expense Management',
    description: 'We implement a smooth system for handling your startup\'s bills and expenses. We organize subscription services, contractor invoices, and vendor bills efficiently.',
    icon: Receipt,
    features: ['Bill processing', 'Expense categorization', 'Payment scheduling', 'Spend policy enforcement']
  },
  {
    title: 'Payroll & Equity Compensation Support',
    description: 'We manage accurate payroll accounting while coordinating with your payroll provider. We also track stock-based compensation and equity grants for accurate financial reporting.',
    icon: Users,
    features: ['Payroll coordination', 'Equity tracking', 'Stock-based compensation', 'Cap table integration']
  },
  {
    title: 'Tax Compliance & Startup Tax Credits',
    description: 'We help startups stay compliant and financially prepared by organizing CPA-ready tax records. We also provide guidance on R&D Tax Credits and other startup incentives.',
    icon: Shield,
    features: ['CPA-ready records', 'R&D tax credits', 'Entity optimization', 'Compliance support']
  },
  {
    title: 'Financial Systems Setup & Automation',
    description: 'We help implement the right finance tech stack for your startup. We integrate your systems and automate data flow to reduce manual entry and errors.',
    icon: Zap,
    features: ['System integration', 'Automation setup', 'Data migration', 'Error reduction']
  },
  {
    title: 'Fundraising Preparation & Investor Reporting',
    description: 'When it\'s time to raise money, we assist in preparing financial materials for fundraising rounds and help with investor reporting and due diligence support.',
    icon: Rocket,
    features: ['Fundraising materials', 'Due diligence support', 'Investor reporting', 'Financial storytelling']
  },
  {
    title: 'Fractional CFO Advisory & Strategy',
    description: 'Our fractional CFO service provides seasoned financial executive guidance scaled to your needs. We participate in strategic discussions and help with key business decisions.',
    icon: Building2,
    features: ['Strategic planning', 'SaaS metrics analysis', 'Pricing strategy', 'Board meeting support']
  }
];

const whyChooseQuantiFi = [
  {
    title: 'Cost-Effective Expertise Without the Overhead',
    description: 'Startups need senior-level guidance without the cost of a full finance team. QuantiFi gives you access to a complete outsourced accounting and CFO department for a fraction of the cost.',
    icon: DollarSign
  },
  {
    title: 'Scalable Support for Every Growth Stage',
    description: 'Your financial needs change as you grow — and we scale right alongside you. Start with light bookkeeping during incubation, add CFO advisory when preparing for fundraising.',
    icon: TrendingUp
  },
  {
    title: 'Startup-Savvy Guidance and Strategic Insight',
    description: 'We understand SaaS metrics like MRR, CAC:LTV ratios, churn, and burn rate. We know investor expectations and how to prepare financials for due diligence.',
    icon: Lightbulb
  },
  {
    title: 'Founder Focus and Peace of Mind',
    description: 'We handle your accounting, payroll, compliance, and financial reporting so you can focus on building your product, customers, and team.',
    icon: Target
  },
  {
    title: 'Tech Integration and Real-Time Transparency',
    description: 'We integrate your financial systems seamlessly. You\'ll have real-time dashboards and live performance metrics, giving you continuous visibility into cash flow and runway.',
    icon: Smartphone
  },
  {
    title: 'Reliability, Forecasting, and Zero Surprises',
    description: 'We manage your books, close financials on time, and forecast months ahead so you\'re never caught off guard. We flag potential risks early and guide your next steps.',
    icon: Lock
  }
];

const faqData = [
  {
    question: 'When should a startup start outsourcing accounting or CFO services?',
    answer: 'The earlier, the better. Even at the pre-seed stage, clean books and a sound financial setup are essential. Having startup accounting services in place from day one helps you understand burn rate, manage investor funds, and make informed spending decisions. We can start with light-touch bookkeeping support and scale up to strategic CFO advisory as your needs evolve.'
  },
  {
    question: 'Can QuantiFi help with fundraising or investor communications?',
    answer: 'Absolutely. We\'ve guided dozens of startups through funding rounds and investor diligence. Before you fundraise, we\'ll ensure your financial statements, cash flow forecasts, and budgets are investor-ready. During the raise, we assist with due-diligence packages and can join investor meetings to explain your financials clearly.'
  },
  {
    question: 'We already use tools like Stripe, QuickBooks, Gusto, and Expensify. Will you work with them?',
    answer: 'Definitely. QuantiFi is tool-agnostic and fluent in the modern SaaS accounting ecosystem. We integrate your systems — connecting Stripe, Shopify, or PayPal for revenue, linking payroll through Gusto or Rippling, and syncing expense platforms to your general ledger. We adapt to your tech stack, not the other way around.'
  },
  {
    question: 'How do we collaborate day to day? Will I lose control of my finances?',
    answer: 'Not at all. You maintain full access and authority over your accounts, systems, and approvals. We integrate into your workflow — whether that\'s Slack, email, or recurring video check-ins — to keep communication effortless. We provide frequent updates on reconciliations, balances, and KPIs, so you\'re never guessing about your financial position.'
  }
];

export default function StartupsPage() {
  return (
    <MarketingLayout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-indigo-950/20 py-24">
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 px-6 py-3 text-base font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                Startups & Emerging Business Accounting Services
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                Big-Firm Financial Expertise for Startups, On Your Terms
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Launching and growing a startup is hard enough – let QuantiFi's tech-savvy accountants and fractional CFOs handle the finances. We'll keep your books investor-ready, monitor your burn rate, and help you plan for funding rounds, all at a startup-friendly cost.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookCallButton className="text-lg px-10 py-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold">
                  Schedule a Free Startup Consultation
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
                  Finance that Scales with Your Startup
                </h2>
                <div className="w-24 h-1 bg-purple-500 mx-auto mb-8"></div>
              </div>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  Many startups run lean and fast, which often means founders juggling product development, customer acquisition, and bookkeeping. The result? Financial chaos – or worse, running out of cash unexpectedly. In fact, poor cash flow management and financial planning contribute to failure in nearly 1 out of 6 startups.
                </p>
                
                <p className="text-lg leading-relaxed">
                  QuantiFi exists to prevent those problems and empower founders with clarity. We provide startups with CFO-level financial support and rigorous accounting without the full-time cost. Think of us as your on-demand finance department – keeping your books accurate, ensuring you're compliant with taxes and regulations, and delivering insights that drive smarter decisions.
                </p>
                
                <p className="text-lg leading-relaxed">
                  We understand startup dynamics: volatile revenues, fast-paced pivots, investor scrutiny, and the need for agile planning. Our services scale as you scale – from basic bookkeeping when you're pre-seed, up to strategic CFO guidance when you're raising Series A or beyond.
                </p>
                
                <div className="bg-purple-50 dark:bg-purple-950/20 p-8 rounded-2xl border-l-4 border-purple-500 mt-8">
                  <p className="text-lg font-medium text-foreground mb-0">
                    <strong>With QuantiFi handling the numbers, you can focus on building your product and growing your user base</strong>, confident that your finances are handled by professionals who get the startup journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Startup Accounting & CFO Services */}
        <section className="py-20 bg-muted/30">
          <div className="container-standard section-gutter">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Startup Accounting & CFO Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                QuantiFi offers a full suite of services to support startups at every phase, from initial setup to high growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {startupServices.map((service, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-900">
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                        <service.icon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
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

        {/* Why Startups Partner with QuantiFi */}
        <section className="py-20 bg-background">
          <div className="container-standard section-gutter">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Startups Partner with QuantiFi
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Startup founders choose QuantiFi because we deliver exactly what fast-growing companies need from a finance partner — a balance of precision, flexibility, and strategic insight.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseQuantiFi.map((reason, index) => (
                <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                  <CardHeader className="pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-2xl">
                        <reason.icon className="h-10 w-10 text-purple-600 dark:text-purple-400" />
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
                  Startup Accounting FAQs
                </h2>
                <p className="text-xl text-muted-foreground">
                  Launching and scaling a startup brings complex financial questions. Here are answers to some of the most common ones we hear from founders and early-stage teams.
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
        <section className="py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 text-white">
          <div className="container-standard section-gutter text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Supercharge Your Startup's Finances?
              </h2>
              <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
                Don't let financial growing pains stall your momentum. With QuantiFi as your partner, you gain clarity, strategy, and confidence in every stage of growth – without the overhead. Free up your time to innovate, while our experts handle the books and guide your financial decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <BookCallButton className="text-xl px-12 py-8 bg-white text-purple-600 hover:bg-gray-100 font-bold">
                  Schedule a Free Startup Consultation
                  <ArrowRight className="h-6 w-6" />
                </BookCallButton>
                <Button asChild size="lg" variant="outline" className="text-xl px-8 py-8 border-white text-white hover:bg-white hover:text-purple-600">
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

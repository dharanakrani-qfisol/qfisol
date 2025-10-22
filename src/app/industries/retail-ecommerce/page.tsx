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
  ShoppingCart,
  Package,
  Store,
  Globe,
  Smartphone,
  PieChart
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Retail & E-Commerce Accounting Services | QuantiFi',
  description: 'Outsourced retail accounting and e-commerce bookkeeping to manage inventory, sales tax, and cash flow. Optimize your store\'s finances and online sales metrics with QuantiFi\'s expert team – get a free consultation.',
};

const retailServices = [
  {
    title: 'Bookkeeping & Daily Sales Reconciliation',
    description: 'We take the day-to-day number crunching off your plate. Our team records all your sales and expenses, reconciling daily register/POS totals and online payment reports to your bank deposits.',
    icon: Calculator,
    features: ['Daily POS reconciliation', 'Online payment tracking', 'Credit card statement matching', 'Bank deposit verification']
  },
  {
    title: 'Inventory Tracking & Cost of Goods Sold (COGS)',
    description: 'Inventory is the heart of retail. We implement systems to track your inventory purchases, usage, and shrinkage. When you buy merchandise or stock, we record it properly; as you sell items, we adjust inventory and calculate COGS.',
    icon: Package,
    features: ['Inventory purchase tracking', 'Shrinkage identification', 'COGS calculation', 'SKU-level profitability']
  },
  {
    title: 'Accounts Payable & Supplier Management',
    description: 'QuantiFi handles your payables so you maintain great supplier relationships and avoid late fees. We manage the entire bill pay process: receiving vendor bills, coding them correctly, and scheduling payments.',
    icon: Receipt,
    features: ['Vendor bill processing', 'Payment optimization', 'Early pay discounts', 'Cash flow forecasting']
  },
  {
    title: 'Payroll & Labor Cost Management',
    description: 'In the world of retail, staff scheduling and wages directly impact your bottom line. We process payroll for your store employees or fulfillment team accurately and on time.',
    icon: Users,
    features: ['Multi-employee payroll', 'Labor cost tracking', 'Commission calculations', 'Payroll tax compliance']
  },
  {
    title: 'Sales Tax Compliance (Multi-State)',
    description: 'Selling products means navigating sales tax, which can be especially tricky for e-commerce. Different states have different rules about when you need to collect tax and how to file.',
    icon: Shield,
    features: ['Multi-state nexus tracking', 'Tax permit management', 'Automated tax calculations', 'Compliance filing']
  },
  {
    title: 'Financial Reporting & Multi-Store Consolidation',
    description: 'Get a clear view of your business performance with our tailored financial reports. We produce monthly financial statements and create segment reports for different locations or channels.',
    icon: BarChart,
    features: ['Multi-location reporting', 'Channel performance analysis', 'Key retail metrics', 'Consolidated statements']
  },
  {
    title: 'Cash Flow Forecasting & Budgeting',
    description: 'Cash is king in retail. We help you project and manage your cash flow so you\'re not caught off guard. Our team creates budgets and rolling cash flow forecasts.',
    icon: TrendingUp,
    features: ['Seasonal budgeting', 'Cash flow projections', 'Inventory planning', 'Growth planning']
  },
  {
    title: 'Systems Integration & E-Commerce Automation',
    description: 'We make sure your various systems talk to each other to reduce manual work. We can help you integrate your e-commerce platforms and payment processors with your accounting software.',
    icon: Zap,
    features: ['POS system integration', 'E-commerce platform sync', 'Payment processor linking', 'Automated reporting']
  },
  {
    title: 'Benchmarking & KPI Dashboard',
    description: 'We help you understand how your business stacks up and where to improve. We establish key performance indicators and track them against industry benchmarks.',
    icon: PieChart,
    features: ['KPI establishment', 'Industry benchmarking', 'Performance tracking', 'Improvement insights']
  },
  {
    title: 'Fractional CFO Advisory & Growth Planning',
    description: 'When it\'s time to level up your business, our fractional CFO services are here to guide you. We provide high-level financial advice on strategic decisions.',
    icon: Building2,
    features: ['Strategic planning', 'Feasibility analysis', 'Investor preparation', 'Growth strategy']
  }
];

const whyChooseQuantiFi = [
  {
    title: 'Retail-Focused Expertise',
    description: 'We have hands-on experience across the retail spectrum – from brick-and-mortar shops to online sellers. We understand industry specifics like managing inventory shrinkage and tracking SKU-level profitability.',
    icon: Store
  },
  {
    title: 'Cost Savings & Efficiency',
    description: 'QuantiFi provides professional accounting at a fraction of the cost of hiring full-time staff. Our efficient processes and automations often reduce administrative overhead.',
    icon: DollarSign
  },
  {
    title: 'Integrated Systems & Tech-Savvy Processes',
    description: 'Modern retail requires modern tools. We ensure your accounting is seamlessly integrated with your sales platforms and strive to set up real-time data flows.',
    icon: Smartphone
  },
  {
    title: 'Multichannel Insight in One Place',
    description: 'If you\'re selling both in-store and online, we provide omni-channel visibility. We\'ll show you how your web store is performing relative to your physical store.',
    icon: Globe
  },
  {
    title: 'Consistency and Reliability',
    description: 'In retail, timing is everything – and we make sure your financial routine is rock-solid. We close your books on a dependable schedule and deliver reports when promised.',
    icon: Clock
  },
  {
    title: 'Scalable Support for Growth',
    description: 'Today you might run one boutique or a small online shop; in a year, you could be managing three locations. QuantiFi is a partner that scales with you.',
    icon: Target
  }
];

const faqData = [
  {
    question: 'How will you help me manage my inventory accounting and prevent losses?',
    answer: 'We set up robust inventory accounting practices tailored to your business. This includes tracking every product from purchase to sale, implementing periodic inventory counts, and reconciling any differences to pinpoint shrinkage. By recording inventory at cost and computing COGS with each sale, we ensure accurate gross profit calculations.'
  },
  {
    question: 'Can QuantiFi integrate with my POS system or online shopping cart?',
    answer: 'Yes, integration is one of our specialties. We have experience connecting many point-of-sale systems (Square, Clover, Lightspeed) and e-commerce platforms (Shopify, Magento, Etsy, Amazon) to accounting software. Daily sales data flows into the books automatically, broken down by category or any classification you need.'
  },
  {
    question: 'My business sells in multiple states online – can you handle all the different sales tax requirements?',
    answer: 'Definitely. We know multi-state sales tax can be a headache, especially after regulations like Wayfair expanded tax obligations for online sellers. Our team will help determine where you have nexus, track your sales by state, register your business in required jurisdictions, and prepare and file all sales tax returns.'
  },
  {
    question: 'We have two stores and an online shop – will your reporting show each separately?',
    answer: 'Yes, we will tailor our reporting to give you the clarity you need. We can maintain class or location tracking in the accounting system, so each store\'s financial activity is tagged separately. Each month, we\'ll provide income statements for Store A, Store B, and Online, as well as a combined one for the total business.'
  },
  {
    question: 'What does day-to-day collaboration with QuantiFi look like for a retailer? Will I still have control over my finances?',
    answer: 'Collaboration is straightforward and designed to keep you in control while offloading the heavy lifting to us. We establish shared folders or software where you can drop documents, and we process them without you having to enter data. You\'ll receive regular updates and always have access to your accounting file and bank accounts – we operate transparently.'
  }
];

export default function RetailEcommercePage() {
  return (
    <MarketingLayout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20 py-24">
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 px-6 py-3 text-base font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Retail & E-Commerce Accounting Services
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                Retail & E-Commerce Accounting, Simplified
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Whether you run a local shop or a global online store, QuantiFi's specialized accounting services help you stay on top of inventory, sales tax, and cash flow. We handle your bookkeeping and financial planning so you can focus on selling and growing – online and off.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <BookCallButton className="text-lg px-10 py-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
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
                  Driving Profits in a Dynamic Market
                </h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
              </div>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  Retailers today face razor-thin margins, seasonal swings, and the complexities of selling across multiple channels. A mismanaged inventory or a missed sales tax filing can quickly hurt cash flow. Retail and e-commerce accounting requires juggling a lot of moving parts – tracking stock levels, syncing online sales data, handling multi-state taxes, and more.
                </p>
                
                <p className="text-lg leading-relaxed">
                  For example, inventory shrink (loss) alone averaged about 1.6% of sales for retailers recently, representing billions in losses industry-wide. Without solid accounting systems, issues like shrinkage, unrecorded sales, or inaccurate cost calculations can quietly erode your profits.
                </p>
                
                <p className="text-lg leading-relaxed">
                  QuantiFi understands these challenges. We bring experience from working with brick-and-mortar stores, gas stations, liquor shops, and online sellers. Our approach is to streamline and integrate your financial processes so that every sale, return, and expense is accurately recorded and analyzed.
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-950/20 p-8 rounded-2xl border-l-4 border-blue-500 mt-8">
                  <p className="text-lg font-medium text-foreground mb-0">
                    <strong>With our support, you'll have clear financial visibility and expert guidance</strong> — so you can optimize pricing, reduce costs, and confidently plan expansions, rather than getting bogged down in spreadsheets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Retail & E-Commerce Accounting Services */}
        <section className="py-20 bg-muted/30">
          <div className="container-standard section-gutter">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Retail & E-Commerce Accounting Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive services help retail and e-commerce businesses maintain financial health and compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {retailServices.map((service, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-900">
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                        <service.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
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

        {/* Why Retailers Choose QuantiFi */}
        <section className="py-20 bg-background">
          <div className="container-standard section-gutter">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Retailers Choose QuantiFi
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Retail and e-commerce businesses partner with QuantiFi because we deliver exactly what they need: specialized expertise, flexibility, and tools to thrive in a competitive market.
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
                  Retail & E-Commerce FAQs
                </h2>
                <p className="text-xl text-muted-foreground">
                  Want to learn more about how QuantiFi can fit into your retail world? Here are answers to questions many shop owners and e-commerce entrepreneurs ask:
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
        <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
          <div className="container-standard section-gutter text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Boost Your Retail Profits?
              </h2>
              <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
                Don't let accounting challenges slow down your business. With QuantiFi handling your books, inventory tracking, and financial strategy, you can devote your energy to sales and customer service. We help retail and e-commerce companies of all sizes increase clarity and control over their finances.
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

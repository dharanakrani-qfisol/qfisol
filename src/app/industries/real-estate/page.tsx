import React from 'react';
import { Metadata } from 'next';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookCallButton } from '@/components/ui/book-call-button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { 
  CheckCircle, 
  BarChart, 
  ArrowRight, 
  DollarSign, 
  Shield, 
  TrendingUp, 
  Building2, 
  Zap,
  Target,
  Award,
  CreditCard,
  Receipt,
  Home,
  Building,
  PieChart,
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
    description: 'We maintain complete, property-specific books that track every dollar in and out. Our team records rental income, management fees, CAM recoveries, and all property-level expenses such as maintenance, utilities, and taxes. We keep your rent roll current, reconciling tenant ledgers so you always know which units are occupied, which rents are due, and what deposits are held. With this level of organization, you can instantly view property profitability and ensure every transaction is captured accurately for real estate bookkeeping and audit purposes.',
    icon: Home,
    features: ['Property-specific books', 'Rent roll management', 'Tenant ledger reconciliation', 'CAM recoveries tracking']
  },
  {
    title: 'Accounts Payable and Expense Tracking',
    description: 'We establish a streamlined accounts payable system for all your vendors, contractors, and service providers. Every invoice is coded to the right property and expense category, helping you track operating expenses and capital improvements separately. Our detailed cost coding supports fixed asset tracking and depreciation schedules, so your CPA receives clean data for tax reporting. With transparent expense tracking and payment scheduling, you avoid late fees, take advantage of early-pay discounts, and maintain tight control over property cash flow.',
    icon: Receipt,
    features: ['Vendor invoice processing', 'Property expense coding', 'Capital improvement tracking', 'Fixed asset management']
  },
  {
    title: 'Bank Reconciliations and Escrow Accounting',
    description: 'Real estate portfolios often manage multiple bank accounts, including operating, reserve, and escrow accounts. QuantiFi performs regular reconciliations for each account to ensure your books match your bank statements to the penny. We maintain separate trust ledgers for tenant deposits and reconcile them to your escrow balances to meet compliance requirements. Our escrow and trust accounting safeguards funds and eliminates errors, keeping your financial records audit-ready at all times.',
    icon: CreditCard,
    features: ['Multi-account reconciliation', 'Escrow account management', 'Trust ledger maintenance', 'Compliance reporting']
  },
  {
    title: 'Financial Reporting per Property and Consolidated',
    description: 'We prepare tailored real estate financial reporting that provides both property-specific and portfolio-wide insights. You receive detailed income statements, balance sheets, and cash flow summaries formatted for real estate metrics such as NOI, cap rate, and DSCR. Whether you have multiple LLCs or a single property entity, our multi-entity accounting approach delivers both granular and consolidated views for owners, lenders, and investors.',
    icon: BarChart,
    features: ['Property-specific reports', 'Portfolio consolidation', 'NOI calculations', 'Cap rate analysis']
  },
  {
    title: 'Cash Flow Management and Forecasting',
    description: 'Real estate success depends on liquidity. We develop cash flow forecasts that map rental inflows, mortgage payments, and capital expenses month by month. This proactive planning helps you anticipate shortfalls, schedule distributions, and plan acquisitions without surprises. Our detailed forecasting ensures stable operations and strategic timing for renovations, debt payments, and reinvestment decisions.',
    icon: TrendingUp,
    features: ['Cash flow forecasting', 'Liquidity planning', 'Distribution scheduling', 'Acquisition planning']
  },
  {
    title: 'Loan Compliance and Lender Reporting',
    description: 'We monitor your loans and prepare accurate lender-ready reports. Our team tracks loan balances, calculates DSCR, LTV, and covenant ratios, and ensures your books tie perfectly to lender statements. For construction and renovation projects, we prepare loan draw packages with updated cost tracking and lien documentation. With our loan compliance reporting, you stay in good standing with banks and maintain a strong borrowing reputation.',
    icon: Landmark,
    features: ['DSCR calculations', 'LTV monitoring', 'Covenant tracking', 'Construction loan draws']
  },
  {
    title: 'Tax Coordination, Cost Segregation, and 1031 Exchange Support',
    description: 'Our accounting team supports your tax preparer or CPA by maintaining clean depreciation schedules, tracking improvements, and organizing data for cost segregation accounting and 1031 exchange accounting. We prepare asset and improvement breakdowns, monitor basis, and coordinate with specialists for accelerated depreciation or like-kind exchanges. We also assist with real estate valuation support, ensuring your property records align with appraisal and financing requirements. This structure helps maximize deductions, defer gains, and optimize after-tax returns.',
    icon: Shield,
    features: ['Depreciation schedules', 'Cost segregation support', '1031 exchange accounting', 'Tax coordination']
  },
  {
    title: 'Investment and Portfolio Analysis',
    description: 'We provide in-depth real estate financial analysis and investor reporting that goes beyond basic bookkeeping. Our reports include key performance indicators like ROI, IRR, occupancy rates, and expense ratios. For syndications and partnerships, we maintain accurate investor ledgers, capital accounts, and distribution waterfalls. You\'ll receive clear, timely insights that reveal property trends, highlight high-performing assets, and guide long-term portfolio strategy.',
    icon: PieChart,
    features: ['ROI analysis', 'IRR tracking', 'Occupancy rates', 'Portfolio performance']
  },
  {
    title: 'Property Management Software Integration',
    description: 'QuantiFi integrates with your preferred property management software including Yardi, AppFolio, Buildium, Rent Manager, MRI, and QuickBooks. We align operational data with your accounting system to eliminate manual entry and ensure consistent, accurate reporting. Our team optimizes your chart of accounts and reporting templates for Yardi accounting, AppFolio bookkeeping, and other platforms, creating a unified workflow that saves time and reduces errors.',
    icon: Zap,
    features: ['Yardi integration', 'AppFolio bookkeeping', 'Buildium support', 'QuickBooks optimization']
  },
  {
    title: 'Fractional CFO and Real Estate Advisory',
    description: 'Beyond bookkeeping, QuantiFi acts as your fractional CFO, delivering strategic financial leadership tailored to real estate operations. We model acquisitions, dispositions, and refinancing scenarios, prepare development budgets, and analyze returns. Our experts advise on property acquisition accounting, property improvement accounting, and entity restructuring to enhance efficiency and profitability. With forward-looking forecasts and financial insight, we help you make confident, data-driven decisions that strengthen your portfolio\'s long-term growth.',
    icon: Building2,
    features: ['Acquisition modeling', 'Development budgets', 'Refinancing analysis', 'Strategic planning']
  }
];

const whyChooseQuantiFi = [
  {
    title: 'Deep Real Estate Industry Expertise',
    description: 'Our team understands real estate accounting inside and out, from NOI, cap rates, and CAM reconciliations to 1031 exchanges, depreciation schedules, and loan compliance requirements. Unlike general bookkeepers, we speak real estate, applying specialized knowledge in property accounting services, real estate bookkeeping, and multi-entity accounting to deliver accurate, CPA ready, investor trusted financials.',
    icon: Building
  },
  {
    title: 'Seamless Software Integration',
    description: 'We integrate seamlessly with your property management software, whether you use Yardi, AppFolio, Buildium, Rent Manager, MRI, or QuickBooks. Our process eliminates duplication and ensures clean, reconciled financials across every property, entity, and trust account. Every ledger ties precisely to your general ledger, every bank account is reconciled, and every financial statement aligns with real estate financial reporting and audit requirements.',
    icon: Zap
  },
  {
    title: 'Full Accounting Department Without Overhead',
    description: 'With QuantiFi, you gain a full accounting department without the overhead of in house staff. We scale services based on your needs, from property acquisition accounting and 1031 exchange accounting to ongoing investor reporting, lender packages, and intercompany consolidations. Our flexible structure allows you to expand or streamline support as your portfolio grows, ensuring consistent accuracy and cost efficiency year round.',
    icon: DollarSign
  },
  {
    title: 'Financial Clarity for Better Decision Making',
    description: 'Beyond compliance, QuantiFi delivers financial clarity that drives better decision making. Our experts perform real estate financial analysis, identifying trends in operating performance, cash flow, and portfolio ROI. We help you evaluate opportunities such as renovations, refinancing, or market expansion through clear, data backed projections. Whether you require cost segregation accounting, real estate valuation support, property improvement accounting, or fixed asset tracking and depreciation schedules, our insights help maximize returns, minimize risk, and strengthen your investment strategy.',
    icon: Target
  },
  {
    title: 'Consistency, Accuracy, and Professionalism',
    description: 'Above all, QuantiFi stands for consistency, accuracy, and professionalism. Your financials are delivered on time, every time, clean, compliant, and audit ready. Your investors and lenders gain confidence, your decisions become sharper, and your business operates on a solid financial foundation.',
    icon: Award
  },
  {
    title: 'Strategic Growth Tool',
    description: 'With QuantiFi, your accounting becomes more than a back office function; it becomes a strategic growth tool built for long term success.',
    icon: TrendingUp
  }
];

const faqData = [
  {
    question: 'What types of real estate companies does QuantiFi work with?',
    answer: 'We partner with a wide range of clients across the real estate industry, including property management companies, real estate investment firms, developers, and brokerages. Whether you manage a multifamily portfolio, a commercial property, or multiple single-family rentals, our property accounting services and real estate bookkeeping solutions are designed to fit your structure. From owner statements and escrow accounting to project and construction cost tracking, QuantiFi delivers accurate, CPA-ready financials for every property.'
  },
  {
    question: 'Why is specialized real estate accounting important?',
    answer: 'Real estate requires precise accounting for multi-entity structures, fixed asset tracking, and depreciation schedules that typical bookkeepers often overlook. Our team understands cost segregation accounting, property improvement accounting, and real estate financial analysis, ensuring every transaction is classified correctly. With QuantiFi, you get compliant, audit-ready records that support smarter financial decisions, protect against risk, and maximize property value.'
  },
  {
    question: 'Can QuantiFi work with my property management software like Yardi or AppFolio?',
    answer: 'Yes. We work directly within your property management software, including Yardi, AppFolio, Buildium, Rent Manager, MRI, and QuickBooks. Whether you need Yardi accounting reconciliations or AppFolio bookkeeping cleanup, we adapt to your workflow and ensure your real estate financial reporting stays accurate and consistent across all systems.'
  },
  {
    question: 'How do you handle accounting for multiple properties and entities?',
    answer: 'QuantiFi specializes in multi-entity accounting and maintains clean, separate books for every property or LLC. We track intercompany transactions, shared costs, and due-to/due-from balances to ensure accuracy and compliance. You\'ll receive individual property reports as well as consolidated real estate financial statements for a complete view of portfolio performance.'
  },
  {
    question: 'Do you prepare reports for investors and lenders?',
    answer: 'Absolutely. We prepare customized investor reporting and real estate financial reporting packages that include income statements, rent rolls, and variance analyses. Our reports are presentation-ready for investor meetings and lender compliance, helping you maintain transparency and build long-term trust.'
  },
  {
    question: 'Can you help with cost segregation or property valuation support?',
    answer: 'Yes. We provide cost segregation accounting and real estate valuation support by maintaining detailed improvement records, fixed asset tracking, and depreciation schedules. Our CPA-ready reports make it easy for your tax preparer or valuation specialist to perform cost segregation studies, support lending or refinancing needs, and maximize property tax benefits.'
  },
  {
    question: 'Can you assist during property acquisitions or 1031 exchanges?',
    answer: 'Definitely. QuantiFi handles all aspects of property acquisition accounting, disposition accounting, and 1031 exchange accounting. We review seller financials, assist with due diligence, and set up new property books accurately from day one. During a sale, we ensure clean closing entries, gain/loss recognition, and smooth fund distributions for a seamless financial transition.'
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
                QuantiFi provides specialized accounting for real estate businesses – from property managers and investors to developers. We&apos;ll handle rent rolls, expense tracking, loan compliance, and financial reporting for your properties, ensuring you have clear financial insight and more time to close deals.
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
                  Real estate is an industry of big assets and big decisions – and one where financial complexity abounds. Owners and managers must track income and expenses across multiple properties or projects, navigate mortgage and loan covenants, handle security deposits and escrow accounts, and adhere to tax rules that can change by locality. It&apos;s a lot to juggle. Many real estate firms struggle with disparate systems and labor-intensive spreadsheets that can lead to errors or missed opportunities. Hiring in-house accounting talent with real estate expertise is costly and often hard to find, which is why more industry leaders are turning to outsourced accounting as a solution.
                </p>
                
                <p className="text-lg leading-relaxed">
                  QuantiFi delivers the financial clarity and control that real estate businesses need. We understand the nuances of property accounting – from tracking individual building performance and reconciling tenant ledgers, to managing development project budgets and cost allocations. Our team acts as your back-office accounting department (or works seamlessly with your current staff) to keep your books accurate, compliant, and up-to-date. With our help, you&apos;ll know exactly how each property or project is performing and have the reliable financial reports needed for lenders, investors, and your own strategic decisions.
                </p>
                
                <p className="text-lg leading-relaxed">
                  We work with a variety of real estate professionals: residential property management companies, commercial real estate developers, REIT investors, brokers, and more. Whether you own a portfolio of rental homes, run a property management firm for hundreds of units, or build new commercial projects, we tailor our approach to fit. We can work with your existing property management software (like Yardi, AppFolio, or QuickBooks Property) to integrate financial data, or help implement one if you&apos;re starting fresh. The bottom line? QuantiFi helps you maximize returns and minimize headaches by ensuring your real estate finances are rock-solid. With us handling the accounting groundwork, you can focus on deals, developments, and growth opportunities with confidence.
                </p>
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
                QuantiFi provides specialized real estate accounting and bookkeeping services for property managers, investors, developers, and syndicators. Our solutions combine precise financial management, multi-entity compliance, and strategic reporting to help you protect assets, optimize returns, and grow your real estate portfolio with confidence. Here are 10 key services we provide:
              </p>
            </div>

            <BentoGrid className="max-w-7xl mx-auto">
              {/* Featured Services - Larger Cards */}
              <BentoGridItem
                title={realEstateServices[0].title}
                description={realEstateServices[0].description}
                header={
                  <div className="flex items-center mb-2">
                      <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                      {React.createElement(realEstateServices[0].icon, { className: "h-8 w-8 text-green-600 dark:text-green-400" })}
                    </div>
                  </div>
                }
                className="md:col-span-2 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border-green-200 dark:border-green-800"
              >
                <div className="space-y-1 mt-2">
                  {realEstateServices[0].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                      <span className="text-xs font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </BentoGridItem>

              <BentoGridItem
                title={realEstateServices[1].title}
                description={realEstateServices[1].description}
                header={
                  <div className="flex items-center mb-2">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                      {React.createElement(realEstateServices[1].icon, { className: "h-8 w-8 text-blue-600 dark:text-blue-400" })}
                    </div>
                  </div>
                }
                className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border-blue-200 dark:border-blue-800"
              >
                <div className="space-y-1 mt-2">
                  {realEstateServices[1].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                      <span className="text-xs font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </BentoGridItem>

              {/* Second Row */}
              <BentoGridItem
                title={realEstateServices[2].title}
                description={realEstateServices[2].description}
                header={
                  <div className="flex items-center mb-2">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                      {React.createElement(realEstateServices[2].icon, { className: "h-8 w-8 text-purple-600 dark:text-purple-400" })}
                    </div>
                  </div>
                }
                className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 border-purple-200 dark:border-purple-800"
              >
                <div className="space-y-1 mt-2">
                  {realEstateServices[2].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                      <span className="text-xs font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </BentoGridItem>

              <BentoGridItem
                title={realEstateServices[3].title}
                description={realEstateServices[3].description}
                header={
                  <div className="flex items-center mb-2">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
                      {React.createElement(realEstateServices[3].icon, { className: "h-8 w-8 text-orange-600 dark:text-orange-400" })}
                    </div>
                  </div>
                }
                className="md:col-span-2 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 border-orange-200 dark:border-orange-800"
              >
                <div className="space-y-1 mt-2">
                  {realEstateServices[3].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                      <span className="text-xs font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </BentoGridItem>

              {/* Third Row */}
              <BentoGridItem
                title={realEstateServices[4].title}
                description={realEstateServices[4].description}
                header={
                  <div className="flex items-center mb-2">
                    <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl">
                      {React.createElement(realEstateServices[4].icon, { className: "h-8 w-8 text-red-600 dark:text-red-400" })}
                    </div>
                  </div>
                }
                className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 border-red-200 dark:border-red-800"
              >
                <div className="space-y-1 mt-2">
                  {realEstateServices[4].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                      <span className="text-xs font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </BentoGridItem>

              <BentoGridItem
                title={realEstateServices[5].title}
                description={realEstateServices[5].description}
                header={
                  <div className="flex items-center mb-2">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl">
                      {React.createElement(realEstateServices[5].icon, { className: "h-8 w-8 text-indigo-600 dark:text-indigo-400" })}
                    </div>
                  </div>
                }
                className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/20 dark:to-indigo-900/20 border-indigo-200 dark:border-indigo-800"
              >
                <div className="space-y-1 mt-2">
                  {realEstateServices[5].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                      <span className="text-xs font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </BentoGridItem>

              <BentoGridItem
                title={realEstateServices[6].title}
                description={realEstateServices[6].description}
                header={
                  <div className="flex items-center mb-2">
                    <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl">
                      {React.createElement(realEstateServices[6].icon, { className: "h-8 w-8 text-teal-600 dark:text-teal-400" })}
                    </div>
                  </div>
                }
                className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950/20 dark:to-teal-900/20 border-teal-200 dark:border-teal-800"
              >
                <div className="space-y-1 mt-2">
                  {realEstateServices[6].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                      <span className="text-xs font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </BentoGridItem>

              {/* Fourth Row */}
              <BentoGridItem
                title={realEstateServices[7].title}
                description={realEstateServices[7].description}
                header={
                  <div className="flex items-center mb-2">
                    <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl">
                      {React.createElement(realEstateServices[7].icon, { className: "h-8 w-8 text-yellow-600 dark:text-yellow-400" })}
                    </div>
                  </div>
                }
                className="md:col-span-2 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950/20 dark:to-yellow-900/20 border-yellow-200 dark:border-yellow-800"
              >
                <div className="space-y-1 mt-2">
                  {realEstateServices[7].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                      <span className="text-xs font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                      </div>
              </BentoGridItem>

              <BentoGridItem
                title={realEstateServices[8].title}
                description={realEstateServices[8].description}
                header={
                  <div className="flex items-center mb-2">
                    <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-xl">
                      {React.createElement(realEstateServices[8].icon, { className: "h-8 w-8 text-pink-600 dark:text-pink-400" })}
                    </div>
                  </div>
                }
                className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/20 dark:to-pink-900/20 border-pink-200 dark:border-pink-800"
              >
                <div className="space-y-1 mt-2">
                  {realEstateServices[8].features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                      <span className="text-xs font-medium text-foreground">{feature}</span>
                        </div>
                      ))}
                </div>
              </BentoGridItem>

              {/* Fifth Row */}
              <BentoGridItem
                title={realEstateServices[9].title}
                description={realEstateServices[9].description}
                header={
                  <div className="flex items-center mb-2">
                    <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl">
                      {React.createElement(realEstateServices[9].icon, { className: "h-8 w-8 text-cyan-600 dark:text-cyan-400" })}
                    </div>
                  </div>
                }
                className="md:col-span-3 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950/20 dark:to-cyan-900/20 border-cyan-200 dark:border-cyan-800"
              >
                <div className="space-y-1 mt-2">
                  {realEstateServices[9].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                      <span className="text-xs font-medium text-foreground">{feature}</span>
                    </div>
              ))}
            </div>
              </BentoGridItem>
            </BentoGrid>
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
                Don&apos;t let accounting complexities or compliance worries hold back your real estate success. With QuantiFi as your financial partner, you gain clarity, confidence, and control over every property and project. We&apos;ll handle the books and the details – you focus on deals, development, and growth.
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
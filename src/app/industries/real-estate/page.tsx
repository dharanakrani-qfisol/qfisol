import React from 'react';
import { Metadata } from 'next';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookCallButton } from '@/components/ui/book-call-button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { StackingCards } from '@/components/ui/stacking-card';
import { 
  ArrowRight, 
  DollarSign, 
  Target,
  Award,
  Building,
  Zap,
  TrendingUp
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
    link: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/outsourced-accounting',
  },
  {
    title: 'Accounts Payable and Expense Tracking',
    description: 'We establish a streamlined accounts payable system for all your vendors, contractors, and service providers. Every invoice is coded to the right property and expense category, helping you track operating expenses and capital improvements separately. Our detailed cost coding supports fixed asset tracking and depreciation schedules, so your CPA receives clean data for tax reporting. With transparent expense tracking and payment scheduling, you avoid late fees, take advantage of early-pay discounts, and maintain tight control over property cash flow.',
    link: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/outsourced-accounting',
  },
  {
    title: 'Bank Reconciliations and Escrow Accounting',
    description: 'Real estate portfolios often manage multiple bank accounts, including operating, reserve, and escrow accounts. QuantiFi performs regular reconciliations for each account to ensure your books match your bank statements to the penny. We maintain separate trust ledgers for tenant deposits and reconcile them to your escrow balances to meet compliance requirements. Our escrow and trust accounting safeguards funds and eliminates errors, keeping your financial records audit-ready at all times.',
    link: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/outsourced-accounting',
  },
  {
    title: 'Financial Reporting per Property and Consolidated',
    description: 'We prepare tailored real estate financial reporting that provides both property-specific and portfolio-wide insights. You receive detailed income statements, balance sheets, and cash flow summaries formatted for real estate metrics such as NOI, cap rate, and DSCR. Whether you have multiple LLCs or a single property entity, our multi-entity accounting approach delivers both granular and consolidated views for owners, lenders, and investors.',
    link: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/outsourced-accounting',
  },
  {
    title: 'Cash Flow Management and Forecasting',
    description: 'Real estate success depends on liquidity. We develop cash flow forecasts that map rental inflows, mortgage payments, and capital expenses month by month. This proactive planning helps you anticipate shortfalls, schedule distributions, and plan acquisitions without surprises. Our detailed forecasting ensures stable operations and strategic timing for renovations, debt payments, and reinvestment decisions.',
    link: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/outsourced-accounting',
  },
  {
    title: 'Loan Compliance and Lender Reporting',
    description: 'We monitor your loans and prepare accurate lender-ready reports. Our team tracks loan balances, calculates DSCR, LTV, and covenant ratios, and ensures your books tie perfectly to lender statements. For construction and renovation projects, we prepare loan draw packages with updated cost tracking and lien documentation. With our loan compliance reporting, you stay in good standing with banks and maintain a strong borrowing reputation.',
    link: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/outsourced-accounting',
  },
  {
    title: 'Tax Coordination, Cost Segregation, and 1031 Exchange Support',
    description: 'Our accounting team supports your tax preparer or CPA by maintaining clean depreciation schedules, tracking improvements, and organizing data for cost segregation accounting and 1031 exchange accounting. We prepare asset and improvement breakdowns, monitor basis, and coordinate with specialists for accelerated depreciation or like-kind exchanges. We also assist with real estate valuation support, ensuring your property records align with appraisal and financing requirements. This structure helps maximize deductions, defer gains, and optimize after-tax returns.',
    link: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/outsourced-accounting',
  },
  {
    title: 'Investment and Portfolio Analysis',
    description: 'We provide in-depth real estate financial analysis and investor reporting that goes beyond basic bookkeeping. Our reports include key performance indicators like ROI, IRR, occupancy rates, and expense ratios. For syndications and partnerships, we maintain accurate investor ledgers, capital accounts, and distribution waterfalls. You\'ll receive clear, timely insights that reveal property trends, highlight high-performing assets, and guide long-term portfolio strategy.',
    link: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/outsourced-accounting',
  },
  {
    title: 'Property Management Software Integration',
    description: 'QuantiFi integrates with your preferred property management software including Yardi, AppFolio, Buildium, Rent Manager, MRI, and QuickBooks. We align operational data with your accounting system to eliminate manual entry and ensure consistent, accurate reporting. Our team optimizes your chart of accounts and reporting templates for Yardi accounting, AppFolio bookkeeping, and other platforms, creating a unified workflow that saves time and reduces errors.',
    link: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/outsourced-accounting',
  },
  {
    title: 'Fractional CFO and Real Estate Advisory',
    description: 'Beyond bookkeeping, QuantiFi acts as your fractional CFO, delivering strategic financial leadership tailored to real estate operations. We model acquisitions, dispositions, and refinancing scenarios, prepare development budgets, and analyze returns. Our experts advise on property acquisition accounting, property improvement accounting, and entity restructuring to enhance efficiency and profitability. With forward-looking forecasts and financial insight, we help you make confident, data-driven decisions that strengthen your portfolio\'s long-term growth.',
    link: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/outsourced-accounting',
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
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950/20 dark:via-gray-950 dark:to-blue-950/20 py-24">
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 px-6 py-3 text-base font-medium" style={{ backgroundColor: '#e6e8ff', color: '#0015ff' }}>
                Real Estate & Property Management Accounting Services
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                Keep Your Properties Profitable with Expert Real Estate Accounting
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                QuantiFi provides specialized accounting for real estate businesses, from property managers and investors to developers. We&apos;ll handle rent rolls, expense tracking, loan compliance, and financial reporting for your properties, ensuring you have clear financial insight and more time to close deals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookCallButton className="text-lg px-10 py-6 text-white font-semibold !bg-[#0015ff] hover:!bg-[#0012cc]">
                  Schedule a Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </BookCallButton>
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
                <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#0015ff' }}></div>
              </div>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  Real estate is an industry of big assets and big decisions, and one where financial complexity abounds. Owners and managers must track income and expenses across multiple properties or projects, navigate mortgage and loan covenants, handle security deposits and escrow accounts, and adhere to tax rules that can change by locality. It&apos;s a lot to juggle. Many real estate firms struggle with disparate systems and labor-intensive spreadsheets that can lead to errors or missed opportunities. Hiring in-house accounting talent with real estate expertise is costly and often hard to find, which is why more industry leaders are turning to outsourced accounting as a solution.
                </p>
                
                <p className="text-lg leading-relaxed">
                  QuantiFi delivers the financial clarity and control that real estate businesses need. We understand the nuances of property accounting, from tracking individual building performance and reconciling tenant ledgers, to managing development project budgets and cost allocations. Our team acts as your back-office accounting department (or works seamlessly with your current staff) to keep your books accurate, compliant, and up-to-date. With our help, you&apos;ll know exactly how each property or project is performing and have the reliable financial reports needed for lenders, investors, and your own strategic decisions.
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

            <StackingCards projects={realEstateServices} />
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
                <Card key={index} className="p-8 text-left hover:shadow-lg transition-shadow border-0 bg-white dark:bg-gray-900">
                  <CardHeader className="pb-4">
                    <div className="flex justify-start mb-4">
                      <div className="p-4 rounded-2xl" style={{ backgroundColor: '#e6e8ff' }}>
                        <reason.icon className="h-10 w-10" style={{ color: '#0015ff' }} />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground mb-3 text-left">
                      {reason.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-left">
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

        {/* Final CTA Card */}
        <section className="py-24 bg-background">
          <div className="container-standard section-gutter">
            <Card className="bg-[#0015ff] text-white border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-12 md:p-16">
                <div className="text-center max-w-4xl mx-auto">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Ready to Elevate Your Real Estate Profits with Rock-Solid Financial Management?
                  </h2>
                  <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
                    Don&apos;t let accounting complexities or compliance worries hold back your real estate success. With QuantiFi as your financial partner, you gain clarity, confidence, and control over every property and project. We&apos;ll handle the books and the details while you focus on deals, development, and growth.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link href="/contact">
                      <BookCallButton className="!text-base !px-8 !py-6 !bg-white hover:!bg-gray-100 !font-bold !text-[#0015ff] !w-[360px] !h-[64px] !rounded-xl !shadow-lg !border-0 from-white to-white hover:from-gray-100 hover:to-gray-100 whitespace-nowrap">
                        Schedule a Free Consultation
                        <ArrowRight className="h-5 w-5" />
                      </BookCallButton>
                    </Link>
                    <Link href="/contact">
                      <Button size="lg" variant="outline" className="text-lg px-10 py-6 !w-[280px] !h-[64px] border-2 border-white bg-transparent !text-white hover:bg-white hover:!text-[#0015ff] transition-colors">
                        Contact Us Today
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}

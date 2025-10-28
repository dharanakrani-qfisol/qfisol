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
  Users, 
  TrendingUp, 
  Clock,
  Zap,
  Building2
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Construction Accounting Services for Contractors | QuantiFi',
  description: 'Outsourced construction accounting, bookkeeping, WIP reporting, and job costing services for contractors. Nationwide CPA support – get a free consultation.',
};

const constructionServices = [
  {
    title: 'Bookkeeping & Job Cost Tracking',
    description: 'We maintain your general ledger with meticulous care, handling accounts payable/receivable, fixed asset tracking, and monthly bank reconciliations. Our team implements construction-specific bookkeeping, tagging every transaction by project. This means you get accurate, up-to-date cost records for each job site, ensuring nothing falls through the cracks. All records are kept audit-ready and tax-ready, giving you confidence in your numbers year-round.',
    color: '#0015ff',
    href: '/services/outsourced-accounting',
  },
  {
    title: 'Payroll Management & Certified Payroll Compliance',
    description: 'Outsource your complex payroll to us for error-free processing. We manage weekly and bi-weekly payroll for construction crews, including handling union wages, overtime, and certified payroll reports for government contracts. Our experts ensure full construction payroll compliance with state and federal requirements (e.g. Davis-Bacon Act prevailing wages), so your team gets paid correctly and on time without compliance headaches.',
    color: '#0015ff',
    href: '/services/payroll-hr',
  },
  {
    title: 'Tax Planning & Preparation',
    description: 'Proactive tax strategy helps contractors minimize liability and avoid surprises. We provide year-round tax planning, reviewing financials for eligible deductions, credits, and entity structuring opportunities to save you money. Construction companies benefit from specialized tactics like cost segregation studies (accelerated depreciation of building, components, machinery, and equipment) to reduce tax burdens.',
    color: '#0015ff',
    href: '/services/tax-preparation-compliance',
  },
  {
    title: 'Financial Reporting & Assurance',
    description: 'Get clear, professional financial statements that stakeholders (and sureties) trust. We prepare monthly and quarterly financial reports, including Profit & Loss, Balance Sheet, job cost schedules, and budget vs. actual analyses, tailored to construction. Our team uses GAAP-compliant methods and applies the correct revenue recognition (percentage-of-completion or completed-contract) for your projects.',
    color: '#0015ff',
    href: '/services/financial-analytics',
  },
  {
    title: 'Job Costing & WIP Reporting',
    description: 'Know exactly how each project is performing financially. We implement robust job costing for construction projects, tracking every material, labor, and subcontractor expense to its respective job. You receive detailed Job Cost Reports that show budget vs. actual spend, so you can pinpoint cost overruns or savings. We also produce Work-in-Progress (WIP) reports that update each project\'s percent complete, earned revenue, and under/over-billings.',
    color: '#0015ff',
    href: '/services/financial-analytics',
  },
  {
    title: 'Project Cash Flow Management',
    description: 'Construction businesses live and die by cash flow. We help you forecast and manage cash needs for each project and your company as a whole. Our team creates cash flow projections that factor in project schedules, billing milestones, retention releases, and expenses, giving you a clear look at what\'s ahead. We advise on timing invoices, accelerating collections, and managing vendor payments to avoid cash crunches.',
    color: '#0015ff',
    href: '/services/cfo-controller',
  },
  {
    title: 'Internal Controls & Audit-Readiness',
    description: 'We implement strong internal controls so you can trust your financial systems. QuantiFi will establish checks and balances for your construction accounting processes, from purchase approvals to reconciliation reviews, to help prevent fraud and errors. We ensure critical items like change orders, procurement, and payroll have proper oversight. The result is clean, reliable financial data.',
    color: '#0015ff',
    href: '/services/systems-integration',
  },
  {
    title: 'Construction Software & Systems Consulting',
    description: 'Leverage technology to streamline your accounting. Our team are experts in industry software like QuickBooks, Sage 300 (Timberline), Foundation Software, Acumatica, Viewpoint, and Procore. Whether you need to set up a new cloud accounting system or integrate your project management software with your ledger, we can help. We\'ll migrate data, implement job-cost accounting features, and train your staff on best practices.',
    color: '#0015ff',
    href: '/services/systems-integration',
  },
  {
    title: 'Surety & Bonding Support',
    description: 'Need better bonding capacity? We\'ve got your back. QuantiFi prepares the detailed financial statements and WIP schedules that surety underwriters require. We understand the ratios and benchmarks that bonding companies look for, and we\'ll advise you on improving them (like maintaining certain working capital levels or equity balances). From assembling contractor pre-qualification packages to producing on-demand financial reports for your bond agent, we ensure you can bid on bigger projects.',
    color: '#0015ff',
    href: '/services/financial-analytics',
  },
  {
    title: 'Fractional CFO & Advisory Services',
    description: 'Get CFO-level guidance without the full-time cost. Our Fractional CFO service provides you with an experienced construction finance executive on-call. We help with strategic planning, such as annual budgeting, forecasting for project pipelines, and scenario analysis for big equipment purchases or expansions. If you\'re looking at new financing or an exit strategy, we\'ll provide valuation insights and prep your financials for investors.',
    color: '#0015ff',
    href: '/services/cfo-controller',
  }
];

const whyChooseQuantiFi = [
  {
    title: 'Outsourced & Liaison Support',
    description: 'Flexible engagement to fit your needs. We can operate as your fully outsourced accounting department or integrate with your existing staff as a liaison. This means you get help where you need it most, whether it\'s managing everything end-to-end or collaborating on specific tasks, adapting as your projects and team change.',
    icon: Users
  },
  {
    title: 'Cost-Effective Expertise',
    description: 'Professional financial expertise without the heavy overhead. Hiring full-time accounting staff (or a construction-specialist CFO) is expensive. With QuantiFi, you access seasoned experts at a fraction of that cost. You pay only for the services you need, saving on salaries, benefits, and training while still shoring up your finances with top talent.',
    icon: DollarSign
  },
  {
    title: 'Consistent & Reliable Service',
    description: 'Never worry about vacations or turnover derailing your accounting. Our team provides year-round consistency and dependable delivery. We establish routines and deadlines (weekly reports, monthly closes) and stick to them. With QuantiFi, you won\'t face the common in-house challenges of staff attrition or sick leave; your books are always up-to-date and accurate, period.',
    icon: Clock
  },
  {
    title: 'Construction Industry Expertise',
    description: 'We know construction inside and out. From AIA billing and retainage to job costing, WIP reports, and bonding requirements, our specialists speak the language of contractors. We stay on top of construction accounting rules and best practices (percentage-of-completion revenue, sales tax on materials, union payroll, etc.). You don\'t have to teach us; instead, we\'ll share insights that sharpen your competitive edge.',
    icon: Building2
  },
  {
    title: 'Technology-Driven Processes',
    description: 'At QuantiFi, we combine cloud accounting systems with hands-on financial expertise to deliver accuracy, transparency, and speed. Our team uses secure client portals, digital document management, and automated data entry tools to streamline workflows and keep your records organized. While we don\'t create real-time dashboards, every analysis is performed manually by accounting professionals, ensuring context, accuracy, and CPA-ready insight. This balance of modern technology and human intelligence gives you reliable financial clarity without the complexity of managing new systems yourself. QuantiFi\'s tech-enabled accounting approach helps construction and service businesses gain the benefits of automation with the precision of expert review, leading to faster decisions, fewer errors, and complete financial confidence.',
    icon: Zap
  },
  {
    title: 'Scalable Support as You Grow',
    description: 'A partner that grows with your business. Whether you\'re a small subcontractor taking on bigger jobs or an established GC expanding into new markets, we scale our services accordingly. Need more strategic advice? We\'ll provide CFO-level guidance. Taking on more projects? We\'ll add bookkeeping capacity. Our Liaison Accounting Partnership model is designed to flex, ramping up or dialing back services as your needs evolve, so you\'re never paying for more than you require, and never left without support when challenges arise.',
    icon: TrendingUp
  }
];

const faqData = [
  {
    question: 'Why does construction accounting require specialized expertise?',
    answer: 'Construction accounting involves unique elements like project-based costing, work-in-progress accounting, retainage tracking, and variable billing cycles that general accounting firms may not handle well. A construction-focused accountant (like QuantiFi) is familiar with industry specifics: for example, we know how to properly account for change orders, handle retention on invoices, choose the right revenue recognition method for long-term projects, and ensure job costs are allocated accurately. This specialized expertise means your financial reports truly reflect your project performance and you avoid costly mistakes (like overbilling or compliance violations) that can happen when using a generic bookkeeper.'
  },
  {
    question: 'How does QuantiFi handle job costing and WIP reporting for my construction projects?',
    answer: 'We set up your accounting system to track costs by job and phase, so every dollar spent is assigned to the right project and category. Throughout each project, we provide detailed Job Cost Reports comparing actual expenses to your budget, helping you spot overruns early. We also prepare Work-in-Progress (WIP) reports that show each project\'s percentage complete, revenue earned vs. billed, and the status of under-billings or over-billings. These WIP reports are typically updated monthly and are invaluable for both internal management and external stakeholders (like bonding companies). In short, QuantiFi ensures you always know how each job is performing financially, in real time. (For deeper insights on managing job profitability, check out our blog post on job cost control in construction.)'
  },
  {
    question: 'Can you assist with construction payroll and certified payroll reports?',
    answer: 'Yes, we provide comprehensive construction payroll services that help contractors, subcontractors, and construction companies manage payroll efficiently and stay fully compliant. Our team supports your payroll process within your in-house system, whether it\'s Gusto, QuickBooks, ADP, or Paychex, ensuring accurate setup, reporting, and reconciliation every pay cycle. While we do not calculate or file payroll taxes, we manage every aspect of payroll data entry, certified payroll reporting, and construction payroll compliance documentation to keep your books accurate and audit-ready. We prepare and maintain certified payroll reports, including WH-347 forms, for government-funded construction projects, ensuring full compliance with prevailing wage laws and Davis-Bacon Act requirements. For companies employing union workers or multi-state crews, our experts handle varying wage rates, fringe benefits, and deductions with precision. We also produce job-costed labor reports, workers\' compensation summaries, and certified payroll submissions that meet federal, state, and local standards. QuantiFi\'s construction payroll reporting services simplify complex payroll requirements, reduce compliance risks, and save valuable administrative time. With accurate reporting, timely submissions, and full visibility into labor costs, we help construction firms run payroll seamlessly so you can focus on building projects while we handle the numbers behind them.'
  },
  {
    question: 'Will you work with our existing accounting software and project management tools?',
    answer: 'Absolutely. QuantiFi can work with whatever systems you currently use. We have experience with all major construction accounting software, including QuickBooks, Sage 100/300 Contractor, Foundation software, and more, as well as project management platforms like Procore, PlanGrid, or Buildertrend, Contractor Foreman. Our team will adapt to your workflow or help you improve it by integrating your systems. For example, we can sync your project management tool with your accounting ledger to automatically import field data (timesheets, expenses) into your books. If you\'re not satisfied with your current setup, we\'ll recommend and implement better solutions. In any case, you won\'t have to "start from scratch"; we leverage your existing tech and make sure you get the most out of it.'
  },
  {
    question: 'Will QuantiFi help with bonding and preparing financials for surety companies?',
    answer: 'Yes, we routinely assist clients with bonding requirements. We\'ll prepare the specialized financial statements that surety companies and lenders often request. This includes producing an accurate work-in-progress schedule, detailed contract backlog reports, and adjusting financials to meet surety format standards. We understand the key financial ratios (like working capital, debt-to-equity, etc.) that underwriters evaluate, and we\'ll advise you on presenting your financials in the best light. Additionally, we can coordinate directly with your bond agent or underwriter if questions arise, providing any supplemental data they need. With QuantiFi\'s help, you can approach bond applications confidently, knowing your financial documents are in order to maximize your bonding capacity.'
  }
];

export default function ConstructionPage() {
  return (
    <MarketingLayout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950/20 dark:via-gray-950 dark:to-blue-950/20 py-24">
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 px-6 py-3 text-base font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" style={{ backgroundColor: '#e6e8ff', color: '#0015ff' }}>
                Construction & Contracting Accounting Services
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                Build Profitably, Control Costs, and Grow with Confidence
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Project finances don&apos;t have to be complicated. QuantiFi&apos;s specialized construction accounting services help contractors keep their books accurate, projects profitable, and businesses fully compliant from the ground up. We handle the numbers, you focus on building.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookCallButton className="text-lg px-10 py-6 text-white font-semibold !bg-[#0015ff] hover:!bg-[#0012cc]">
                  Schedule a Free Consultation
                  <ArrowRight className="h-3 w-3" />
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
                  Building Solid Financial Foundations
                </h2>
                <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#0015ff' }}></div>
              </div>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  At QuantiFi, we make construction finance simple, strategic, and CPA-ready. We understand that construction accounting isn&apos;t like typical bookkeeping; it demands job-based costing, progress billing, retainage tracking, and real-time insight into every project&apos;s financial health.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Many contractors struggle because generic bookkeepers or small accounting services don&apos;t understand how to manage change orders, WIP reports, and revenue recognition correctly, leading to inaccurate profits and higher risk.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Our construction accounting specialists solve these challenges by providing tailored construction bookkeeping and financial management services designed for general contractors, subcontractors, and infrastructure firms. We act as your outsourced accounting department or integrate seamlessly with your in-house team, ensuring you always have audit-ready, CPA-ready financials.
                </p>
                
                <p className="text-lg leading-relaxed">
                  We manage everything from job cost tracking and percentage-of-completion accounting to retainage schedules, indirect cost allocation, and compliance reporting. Our detailed WIP accounting reports and real-time insights help you maximize project profitability and improve cash flow visibility. With QuantiFi, you can focus on managing construction projects while we handle the financial clarity that keeps them running smoothly.
                </p>
                
                <p className="text-lg leading-relaxed">
                  QuantiFi supports construction companies across the nation, from Atlanta to Dallas to the Los Angeles, delivering industry-specific expertise and scalable financial systems. Whether you need construction payroll support, contractor bookkeeping cleanup, or CPA-ready reporting for your tax preparer, we ensure your books are accurate, compliant, and ready for year-end filings.
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-950/20 p-8 rounded-2xl border-l-4 mt-8" style={{ borderLeftColor: '#0015ff' }}>
                  <p className="text-lg font-medium text-foreground mb-0">
                    <strong>With QuantiFi, you get the perfect balance of big-firm experience and local insight</strong>, a dedicated accounting partner that understands contractors, builds financial strength, and keeps your numbers working as hard as your crews do.
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
                QuantiFi offers a comprehensive suite of accounting and financial services tailored to the construction industry. Our key construction-focused services include:
              </p>
            </div>

            <StackingCards projects={constructionServices} />
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
                Construction accounting is more than just crunching numbers; it&apos;s the backbone of successful projects. At QuantiFi, we pride ourselves on being more than an accounting vendor; we&apos;re a partner in your business&apos;s success. Here&apos;s why construction companies nationwide choose to work with QuantiFi:
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
                    <CardTitle className="text-xl font-bold text-foreground mb-2 text-left">
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
                  Construction Accounting FAQs
                </h2>
                <p className="text-xl text-muted-foreground">
                  Still have questions? Below are some common questions we hear from contractors, along with answers to help you understand how QuantiFi&apos;s construction accounting services can benefit your business.
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
                    Ready to Build a Strong Financial Foundation?
                  </h2>
                  <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
                    Don&apos;t let accounting issues undermine your projects. Let QuantiFi handle the finances while you focus on construction. We&apos;re here to provide clarity, strategy, and peace of mind in every job&apos;s numbers. Reach out today to start with a personalized consultation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link href="/contact">
                      <BookCallButton className="!text-base !px-8 !py-6 !bg-white hover:!bg-gray-100 !font-bold !text-[#0015ff] !w-[360px] !h-[64px] !rounded-xl !shadow-lg !border-0 !from-white to-white hover:from-gray-100 hover:to-gray-100 whitespace-nowrap">
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
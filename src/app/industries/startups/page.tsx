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
  Lightbulb,
  Smartphone,
  Lock,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Startup Accounting & CFO Services | QuantiFi',
  description: 'Outsourced accounting and fractional CFO services for startups. We manage your bookkeeping, cash flow, and financial strategy — from seed stage to scale-up — so you can focus on growth. Get a free consultation.',
};

const startupServices = [
  {
    title: 'Bookkeeping & General Ledger Management',
    description: 'We take over the day-to-day bookkeeping so you don\'t have to. This includes recording all transactions – linking to your bank and credit card feeds, categorizing expenses (AWS bills to "Cloud Services," developer payouts to "Contractor Expenses," etc.), and ensuring every Stripe/PayPal deposit or customer payment is properly booked. We perform monthly reconciliations of accounts so that your ledgers are accurate. With professional bookkeeping, you\'ll have clean financial data from day one, which is crucial for decision-making and impressing investors. No more messy spreadsheets – consider your basic financial record-keeping handled.',
    link: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/outsourced-accounting',
  },
  {
    title: 'Monthly Financial Statements & Reporting',
    description: 'Each month (or quarter), we produce a full set of financial statements for your startup. This includes an Income Statement (showing your revenue, if any, and all expenses – so you know your burn rate and net income/loss), a Balance Sheet (listing your assets like cash and any equipment, and liabilities like loans or credit card balances), and a Cash Flow Statement (crucial for startups, showing how cash is moving in and out). But we don\'t just send generic reports – we tailor them to what startups need. For example, we can show operational expenditures vs. capital expenditures, or separate your R&D expenses from SG&A. We\'ll also include key metrics like monthly burn and remaining runway (how many months of cash left at current burn). These investor-grade reports keep you on top of your finances and are ready to share at board meetings or due diligence.',
    link: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/financial-analytics',
  },
  {
    title: 'Cash Flow Management & Runway Forecasting',
    description: 'Cash is the lifeblood of startups. We help you monitor and project your cash flow so you always know how much runway you have. We\'ll set up a cash management system to track inflows (sales revenue, investment tranches, loans) and outflows (payroll, rent, marketing, etc.). Using this, we create short-term and medium-term cash forecasts. For example, we might project that, given your plans, you\'ll run low on cash in 8 months – which means you should consider raising another round in 6 months to be safe. We\'ll also advise on timing expenditures or accelerating collections if possible to extend runway. In essence, we act as an early warning system for cash issues and help you avoid the nightmare of finding out you\'re almost broke when it\'s too late.',
    link: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2070&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/cfo-controller',
  },
  {
    title: 'Budgeting & Financial Modeling',
    description: 'Strategic planning is critical as you grow. We collaborate with you to set up a budget (even if it\'s rough at first) and a dynamic financial model for your business. This could include revenue projections (maybe based on user growth and monetization rates), expense forecasts (hiring plans, marketing spend, infrastructure costs scaling with users, etc.), and scenario analysis (e.g., what if growth is 20% slower or faster?). If you don\'t have a model yet, we\'ll build one that fits your business drivers – for SaaS startups, we\'ll incorporate things like MRR, CAC, churn; for marketplaces, maybe GMV and take rates, etc. We also update the budget vs. actuals so you can see how reality compares to forecasts and adjust course.',
    link: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/cfo-controller',
  },
  {
    title: 'Accounts Payable & Expense Management',
    description: 'We implement a smooth system for handling your startup\'s bills and expenses. Startups often have many subscription services, contractor invoices, and vendor bills. We\'ll organize these by setting you up with an expense management or bill pay tool (or use your existing one). You or your team can easily forward bills or snap receipts; we take it from there: recording the expense, assigning it to the right category or project, and scheduling payment (with your approval flow if you want). We\'ll ensure your vendors (or contractors) get paid on time and that you\'re not overpaying (we cross-check charges, flag duplicates, etc.).',
    link: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/outsourced-accounting',
  },
  {
    title: 'Payroll & Equity Compensation Support',
    description: 'We manage accurate payroll accounting for startups while coordinating with your chosen payroll provider (such as Gusto, Rippling, or ADP) — but we do not file payroll taxes. Our team ensures salaries, hourly wages, bonuses, and founder draws are recorded correctly, reconciled, and reflected accurately in your books. For startups offering equity, we help track and report stock-based compensation using your cap-table system or law firm\'s data. We record 83(b) elections, option pool grants, and stock-based expense allocations in your financial statements so you understand the true cost of equity and dilution.',
    link: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/payroll-hr',
  },
  {
    title: 'Tax Compliance & Startup Tax Credits',
    description: 'We help startups stay compliant and financially prepared by organizing CPA-ready tax records — but we do not file income or payroll taxes. Our team ensures your books, schedules, and reports are complete and accurate for your CPA or tax preparer to file. We also prepare and reconcile 1099s from your payroll system, track deductible expenses, and maintain documentation to support every filing. Beyond compliance, we provide strategic guidance on tax planning for startups — from entity structure optimization and depreciation schedules to identifying valuable incentives like the R&D Tax Credit.',
    link: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/tax-preparation-compliance',
  },
  {
    title: 'Financial Systems Setup & Automation',
    description: 'We help implement the right finance tech stack for your startup. Early on, many startups just use a simple setup, but as you grow, the volume of transactions and complexity grows too. We\'ll recommend and set up tools that save time and reduce errors: for example, connecting your e-commerce or subscription billing platform (Stripe, Shopify, etc.) directly into accounting software; using Receipt Bank or Expensify for receipt capture; integrating your bank feeds to auto-import transactions; setting up rules to auto-categorize regular transactions (so that monthly Google Cloud charge always goes to "Hosting" for instance).',
    link: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2070&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/systems-integration',
  },
  {
    title: 'Fundraising Preparation & Investor Reporting',
    description: 'When it\'s time to raise money (or report on how you\'re using it), QuantiFi has your back. We assist in preparing the financial materials needed for fundraising rounds – from seed pitch decks to Series B due diligence. This can include creating historical financial summaries, current metrics, and projected financials in a format investors expect. We\'ll ensure that your accounting records can stand up to investor scrutiny: everything reconciled, expenses categorized consistently, revenue recognition done right, etc. If an investor or VC firm does due diligence, we can help answer their questions and provide backup data quickly (so you appear well-organized and credible).',
    link: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/cfo-controller',
  },
  {
    title: 'Fractional CFO Advisory & Strategy',
    description: 'Our fractional CFO service is like having a seasoned financial executive on your team, scaled to the level you need. You might not need a full-time CFO at an early stage, but you can still benefit from high-level guidance. We provide that. We\'ll participate in strategic discussions: e.g., evaluating your SaaS metrics (LTV, CAC, churn) to see if your business model is on track, or analyzing unit economics on a product to ensure it can be profitable at scale. We can assist with pricing strategy, budgeting for hires, or deciding how much to raise in the next round. When you have investor board meetings, we\'ll help prepare reports and can even join to present the financials if you want support.',
    link: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/cfo-controller',
  }
];

const whyChooseQuantiFi = [
  {
    title: 'Cost-Effective Expertise Without the Overhead',
    description: 'Startups need senior-level guidance without the cost of a full finance team. QuantiFi gives you access to a complete outsourced accounting and CFO department — bookkeepers, accountants, and financial advisors — for a fraction of the cost of hiring in-house. You save on salaries, benefits, recruiting, and turnover while gaining professionals who understand startup finance inside and out. For less than the cost of one senior hire, you get end-to-end financial coverage — from reconciliations and budgeting to investor reporting and board-ready statements. That\'s how we help founders preserve cash for growth while maintaining top-tier financial control.',
    icon: DollarSign
  },
  {
    title: 'Scalable Support for Every Growth Stage',
    description: 'Your financial needs will change as your company grows — and we scale right alongside you. Start with light bookkeeping during incubation, add outsourced CFO advisory when preparing for fundraising, or expand support when revenue surges. Our structure is built for volatility. When business slows, you can scale down seamlessly. When you raise capital or double transaction volume, we ramp up instantly. This agility ensures you always have the right level of financial support without paying for what you don\'t need.',
    icon: TrendingUp
  },
  {
    title: 'Startup-Savvy Guidance and Strategic Insight',
    description: 'QuantiFi isn\'t just an accounting firm — we\'re a strategic finance partner who understands how startups operate. We know SaaS metrics like MRR, CAC:LTV ratios, churn, and burn rate. We know investor expectations, how to build data-driven forecasts, and how to prepare financials for due diligence. We\'ve seen what works — and what doesn\'t — across hundreds of early-stage companies. Whether you\'re debating pricing strategy, capital structure, or timing your next raise, we offer experienced, practical advice that aligns with your growth goals. Think of us as your finance co-founder: proactive, grounded, and deeply invested in your success.',
    icon: Lightbulb
  },
  {
    title: 'Founder Focus and Peace of Mind',
    description: 'Running a startup demands your full attention. We handle your accounting, payroll, compliance, and financial reporting so you can focus on building your product, customers, and team. With QuantiFi, you gain complete financial clarity — up-to-date books, accurate burn tracking, clean cash flow visibility, and timely reporting. You\'ll never wonder if your numbers are right or if a tax deadline was missed. Our goal is to lift the financial burden off your shoulders so you can make fast, confident business decisions backed by reliable data.',
    icon: Target
  },
  {
    title: 'Tech Integration and Real-Time Transparency',
    description: 'We meet you where you are technologically. Our team is fluent in today\'s SaaS accounting tools — including QuickBooks, Xero, Gusto, Rippling, Deel, Expensify, Bill.com, Stripe, and Shopify — and we make them work together seamlessly. By integrating your financial systems, we automate data flow, reduce manual entry, and eliminate errors. You\'ll have real-time dashboards and live performance metrics, giving you continuous visibility into cash flow, revenue, and runway. Communication is frictionless — Slack, email, or dashboards — so your financial updates move as fast as your startup.',
    icon: Smartphone
  },
  {
    title: 'Reliability, Forecasting, and Zero Surprises',
    description: 'In a world where uncertainty is the norm, QuantiFi brings stability. We manage your books, close financials on time, and forecast months ahead so you\'re never caught off guard. Our financial forecasting and cash flow modeling show exactly how long your runway extends and what levers can optimize it. We also flag potential risks early — from upcoming tax obligations to liquidity gaps — giving you the ability to pivot before problems arise. And if external changes (like tax laws or economic shifts) affect your business, we analyze the impact immediately and guide your next steps.',
    icon: Lock
  }
];

const faqData = [
  {
    question: 'When should a startup start outsourcing accounting or CFO services?',
    answer: 'The earlier, the better. Even at the pre-seed stage, clean books and a sound financial setup are essential. Having startup accounting services in place from day one helps you understand burn rate, manage investor funds, and make informed spending decisions. Many founders reach out after raising their first seed round or when revenue and payroll start growing — that\'s when things get too complex for spreadsheets. Our team sets up accounting systems, reconciles bank feeds, and ensures investor cash is tracked properly. As your business grows, our outsourced CFO services become even more valuable. We help with forecasting, budgeting, scenario planning, and board reporting — especially during key inflection points like a Series A raise, hiring expansions, or entering new markets. We can start with light-touch bookkeeping support and scale up to strategic CFO advisory as your needs evolve.'
  },
  {
    question: 'Can QuantiFi help with fundraising or investor communications?',
    answer: 'Absolutely. We\'ve guided dozens of startups through funding rounds and investor diligence. Before you fundraise, we\'ll ensure your financial statements, cash flow forecasts, and budgets are investor-ready and formatted for clarity. We build key startup metrics such as MRR, ARR, CAC:LTV ratios, runway, and churn, so you can present credible data that builds investor trust. During the raise, we assist with due-diligence packages and can join investor meetings to explain your financials clearly. After the raise, we help with post-funding reporting, creating investor update decks, tracking use of funds, and maintaining transparent communication with VCs and angels. Essentially, we act as your financial liaison — translating complex data into insights that strengthen your story and credibility.'
  },
  {
    question: 'We already use tools like Stripe, QuickBooks, Gusto, and Expensify. Will you work with them?',
    answer: 'Definitely. QuantiFi is tool-agnostic and fluent in the modern SaaS accounting ecosystem. Whether you use QuickBooks Online, Xero, Gusto, Rippling, Deel, Bill.com, or Expensify, we\'ll optimize your workflow for accuracy, automation, and efficiency. We integrate your systems — connecting Stripe, Shopify, or PayPal for revenue, linking payroll through Gusto or Rippling, and syncing expense platforms to your general ledger. Our goal is to give you a cohesive, automated environment where every transaction flows cleanly into your books. If we spot opportunities to improve (for instance, automating invoicing or consolidating tools to cut costs), we\'ll recommend them — but final decisions are always yours. We adapt to your tech stack, not the other way around.'
  },
  {
    question: 'How do we collaborate day to day? Will I lose control of my finances?',
    answer: 'Not at all. You maintain full access and authority over your accounts, systems, and approvals. We integrate into your workflow — whether that\'s Slack, email, or recurring video check-ins — to keep communication effortless. We provide frequent updates on reconciliations, balances, and KPIs, so you\'re never guessing about your financial position. Many founders even have us use an internal startup email (e.g., finance@yourcompany.com) to handle vendor communication while maintaining visibility. Every process is documented, and all payments or approvals follow the controls you set. We make financial management more transparent, not less — so you feel fully informed while freeing your time to focus on growth and product.'
  }
];

export default function StartupsPage() {
  return (
    <MarketingLayout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950/20 dark:via-gray-950 dark:to-blue-950/20 py-24">
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 px-6 py-3 text-base font-medium" style={{ backgroundColor: '#e6e8ff', color: '#0015ff' }}>
                Startups & Emerging Business Accounting Services
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                Big-Firm Financial Expertise for Startups, On Your Terms
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Launching and growing a startup is hard enough – let QuantiFi&apos;s tech-savvy accountants and fractional CFOs handle the finances. We&apos;ll keep your books investor-ready, monitor your burn rate, and help you plan for funding rounds, all at a startup-friendly cost.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookCallButton className="text-lg px-10 py-6 text-white font-semibold !bg-[#0015ff] hover:!bg-[#0012cc]">
                  Schedule a Free Startup Consultation
                  <ArrowRight className="h-5 w-5" />
                </BookCallButton>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-gray-300 hover:bg-gray-50">
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
                <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#0015ff' }}></div>
              </div>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  Many startups run lean and fast, which often means founders juggling product development, customer acquisition, and bookkeeping. The result? Financial chaos – or worse, running out of cash unexpectedly. In fact, poor cash flow management and financial planning contribute to failure in nearly 1 out of 6 startups. As the U.S. Chamber of Commerce notes, founders who try to do everything themselves can easily mismanage finances, and bringing in help (like a fractional CFO) can significantly improve outcomes.
                </p>
                
                <p className="text-lg leading-relaxed">
                  QuantiFi exists to prevent those problems and empower founders with clarity. We provide startups with CFO-level financial support and rigorous accounting without the full-time cost. Think of us as your on-demand finance department – keeping your books accurate, ensuring you&apos;re compliant with taxes and regulations, and delivering insights that drive smarter decisions. We understand startup dynamics: volatile revenues, fast-paced pivots, investor scrutiny, and the need for agile planning. Our services scale as you scale – from basic bookkeeping when you&apos;re pre-seed, up to strategic CFO guidance when you&apos;re raising Series A or beyond.
                </p>
                
                <p className="text-lg leading-relaxed">
                  We&apos;ve helped tech startups, SaaS companies, ecommerce ventures, and more establish solid financial foundations. Whether you&apos;re burning through R&D funds or starting to generate revenue, QuantiFi adapts to your stage. We integrate seamlessly with your existing tools (billing systems, expense apps, cap table software) and use cloud accounting platforms to give you real-time visibility. The outcome? You stay investor-ready and in control of your runway. With QuantiFi handling the numbers, you can focus on building your product and growing your user base, confident that your finances are handled by professionals who get the startup journey.
                </p>
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
                QuantiFi offers a full suite of services to support startups at every phase, from initial setup to high growth. Here are 10 key services we provide to emerging businesses:
              </p>
            </div>

            <StackingCards projects={startupServices} />
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
                Startup founders choose QuantiFi because we deliver exactly what fast-growing companies need from a finance partner — a balance of precision, flexibility, and strategic insight. We understand how quickly startups evolve and structure our services to grow with you, from seed stage to Series A and beyond.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
                At QuantiFi, your accounting isn&apos;t just compliance — it&apos;s a foundation for growth. We transform your financial operations into a strategic advantage: organized, investor-ready, and built to scale confidently.
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

            {/* Why It Matters Section */}
            <div className="mt-16 text-center">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Why It Matters
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At QuantiFi, we believe great startups deserve great financial foundations. When your books are accurate, your cash flow is predictable, and your reports are investor-ready, you operate with confidence. You make faster decisions, negotiate better deals, and attract stronger investors because your financials reflect your professionalism.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  That&apos;s why startups partner with QuantiFi — not just to outsource accounting, but to build long-term financial clarity, control, and credibility. We turn accounting into a growth strategy, ensuring your startup is ready for whatever comes next.
                </p>
              </div>
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
        <section className="py-24 text-white" style={{ backgroundColor: '#0015ff' }}>
          <div className="container-standard section-gutter text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Supercharge Your Startup&apos;s Finances?
              </h2>
              <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
                Don&apos;t let financial growing pains stall your momentum. With QuantiFi as your partner, you gain clarity, strategy, and confidence in every stage of growth – without the overhead. Free up your time to innovate, while our experts handle the books and guide your financial decisions. Schedule your free startup consultation today ➜ and let&apos;s build your unicorn on a solid financial foundation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <BookCallButton className="text-xl px-12 py-8 bg-white hover:bg-gray-100 font-bold !text-[#0015ff]">
                  Schedule a Free Startup Consultation
                  <ArrowRight className="h-6 w-6" />
                </BookCallButton>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="text-xl px-8 py-8 border-2 border-white bg-transparent !text-white hover:bg-white hover:!text-[#0015ff] transition-colors">
                    Contact Us Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}

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
  Target,
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
    description: 'We manage your day-to-day bookkeeping, recording all sales and expenses from your property management system (PMS) or point-of-sale (POS) systems. Each night\'s revenue reports (room charges, food & beverage sales, etc.) are reconciled against bank deposits and credit card batches, ensuring accuracy. By tracking every transaction – from hotel room bookings to restaurant checks – we provide a clear audit trail and up-to-date books. This frees you from tedious data entry and catches discrepancies quickly.',
    color: '#0015ff',
    href: '/services/outsourced-accounting',
  },
  {
    title: 'Chargeback Monitoring & Response Management',
    description: 'Time is money, especially when it comes to chargebacks. We track and flag all chargeback notices from your payment processors and respond within the required 72-hour window to dispute illegitimate claims and protect your revenue. Our team prepares documentation, reconciles transaction history, and liaises with merchant providers to reduce losses and preserve your margins. By proactively managing chargebacks, we help hotels and restaurants avoid unnecessary deductions and maintain a healthy bottom line.',
    color: '#0015ff',
    href: '/services/outsourced-accounting',
  },
  {
    title: 'Accounts Payable & Vendor Management',
    description: 'Never miss a payment or overpay a vendor. We handle the entire accounts payable process for your hotel or restaurant – coding and entering vendor bills (for supplies, utilities, food inventory, etc.), scheduling payments to optimize cash flow, and making sure you capitalize on any early-payment discounts. We\'ll also manage vendor relationships by resolving billing issues and ensuring accurate records of what\'s owed. With QuantiFi, your chefs, front desk, and operations managers can focus on service while we keep the bills in order.',
    link: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2070&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/outsourced-accounting',
  },
  {
    title: 'Payroll Processing and Compliance',
    description: 'At QuantiFi, we simplify hospitality payroll management for hotels, restaurants, and resorts. Our team supports payroll for your entire staff including front desk, housekeeping, servers, and kitchen teams, ensuring wages, hours, and overtime are entered and reconciled accurately. We work directly within your in-house payroll system such as Gusto, ADP, QuickBooks, or Paychex to manage data entry, reviews, and reconciliations with precision. While we do not calculate or file payroll taxes, we provide CPA-ready payroll reports and maintain accurate, compliant records that help your payroll provider or CPA process filings seamlessly.',
    link: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/payroll-hr',
  },
  {
    title: 'Financial Reporting & Multi-Property Consolidation',
    description: 'Get the financial clarity you need to run a successful hospitality operation. We prepare detailed monthly financial statements, including Profit & Loss by department (rooms, F&B, etc.), Balance Sheets, and cash flow statements. If you operate multiple hotels or restaurant locations, we consolidate reports so you can compare performance across properties and see the big picture. We also customize dashboards with key indicators like occupancy %, RevPAR (revenue per available room), average daily rate, food cost %, and labor as a % of sales.',
    link: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/financial-analytics',
  },
  {
    title: 'Sales, Occupancy & Liquor Tax Compliance',
    description: 'Hospitality businesses face a web of tax obligations – sales tax on food and beverage, occupancy/accommodations tax on rooms, tourism levies, and possibly liquor taxes. QuantiFi ensures you never fall behind. We track taxable sales, prepare and file all required monthly/quarterly tax returns, and reconcile tax payments to your books. For hotels, we handle city and county occupancy tax filings and franchise fee reports. By entrusting us with tax compliance, you avoid costly penalties and audits, and gain confidence that all taxes (from sales to occupancy) are accurately calculated and remitted on time.',
    link: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/tax-preparation-compliance',
  },
  {
    title: 'Inventory & Cost of Goods Sold Management',
    description: 'For restaurants and hotel F&B operations, controlling food and beverage costs is crucial. We implement systems to track inventory purchases and usage, so your accounting reflects an accurate cost of goods sold (COGS) each period. Our team will help set up inventory counts and integrate with your accounting software to record inventory adjustments. We also monitor key metrics like food cost percentage and inventory turnover. By identifying shrinkage or waste (like lost inventory or spoilage), we help improve your margins.',
    color: '#0015ff',
    href: '/services/outsourced-accounting',
  },
  {
    title: 'Budgeting, Forecasting & Cash Flow Planning',
    description: 'Seasonality and events can make hospitality revenue swing widely. QuantiFi assists in creating budgets and forecasts that anticipate these fluctuations. We\'ll work with you to project revenue and expenses for upcoming quarters – factoring in high seasons, slow periods, and one-time events. We forecast cash flows to ensure you have enough liquidity during off-peak months (for example, budgeting for a resort\'s low winter season or a restaurant\'s post-holiday lull). With ongoing budget vs. actual analysis, we help you adjust in real time.',
    link: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/cfo-controller',
  },
  {
    title: 'Franchise & Brand Compliance Reporting',
    description: 'If you\'re a franchised hotel or part of a branded chain, we manage the additional accounting work that comes with it. QuantiFi prepares required franchise reports, calculates royalties and marketing fund contributions, and ensures fees are paid correctly. We reconcile franchise statements (for things like reservation system fees or loyalty program charges) with your books. Our team is familiar with major hotel brand standards and accounting systems (e.g. Marriott, Hilton, IHG, etc.) and will make sure your financial reporting aligns with brand requirements.',
    link: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2070&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/financial-analytics',
  },
  {
    title: 'Technology Integration & Cloud Accounting',
    description: 'QuantiFi leverages technology to streamline hospitality accounting. We can integrate your front-end systems – whether it\'s a hotel PMS like Opera, M3 or Cloudbeds, or a restaurant POS like Toast or Square – directly with your accounting software to reduce manual data entry. Our team is experienced with popular hospitality tech, including expense management tools and invoice automation (like Plate IQ for AP automation in restaurants). We\'ll set up a cloud-based accounting platform (such as QuickBooks Online or Sage Intacct) accessible to you 24/7.',
    link: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/systems-integration',
  },
  {
    title: 'Fractional CFO & Advisory Services',
    description: 'We provide fractional CFO support designed specifically for hotels, restaurants, and multi-location hospitality groups — giving you executive-level financial expertise without the full-time overhead. Our advisors work as an extension of your leadership team to analyze profit margins, assess performance KPIs (like GOPPAR, RevPAR, labor-to-sales ratios, and table turnover), and uncover opportunities to boost profitability. Thinking about expanding, renovating, or preparing for a sale or capital raise? We conduct detailed feasibility studies, build cash flow projections, and develop investor-ready financial models that speak the language of franchisors, lenders, and stakeholders.',
    link: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/cfo-controller',
  }
];

const whyChooseQuantiFi = [
  {
    title: 'Outsourced Flexibility, In-House Feel',
    description: 'We adapt to your needs – acting as your fully outsourced accounting department or working alongside your existing finance staff. Whether you need us to handle everything or just fill in gaps, our team scales with you. This liaison support model means you get help where you need it most without losing control. We become an extension of your team, available whenever you need us, just as if we were down the hall.',
    icon: Users
  },
  {
    title: 'Cost-Effective Expertise',
    description: 'With QuantiFi, you gain top-notch hospitality accounting expertise without the overhead of full-time hires. Hiring an experienced hotel accountant or controller can be costly; instead, we provide that expertise at a fraction of the cost. You pay only for the services you require – saving on salaries, benefits, and training. It\'s an efficient way to strengthen your financial oversight while keeping expenses lean (an important factor in an industry with tight margins).',
    icon: DollarSign
  },
  {
    title: 'Hospitality Industry Know-How',
    description: 'Our team knows the hospitality sector inside and out. From understanding nightly PMS reports and credit card batching to knowing how to account for gift cards, loyalty programs, or franchise royalties – we speak your language. We\'re versed in metrics like occupancy rates, RevPAR, and food cost ratios. This industry-specific knowledge means we hit the ground running; you won\'t have to educate us on why occupancy tax is different from sales tax, or how a banquet event order flows to the books. We bring proven practices from working with hotels and restaurants nationwide, helping you avoid common pitfalls and stay ahead of financial trends.',
    icon: Bed
  },
  {
    title: 'Real-Time Data & 24/7 Access',
    description: 'In hospitality, things change daily – that\'s why we leverage cloud-based systems to give you real-time access to your financial data. QuantiFi sets you up with modern, technology-driven processes: for example, daily sales and expense dashboards, automated reports delivered to your inbox, and an online portal where you can view financials anytime. Need to check yesterday\'s revenue or this month\'s labor cost from your phone? It\'s at your fingertips. Our commitment to transparency means you\'re never in the dark; you can monitor your business\'s financial health in real time, even while you\'re busy managing operations.',
    icon: Smartphone
  },
  {
    title: 'Multi-Property & Growth Support',
    description: 'As your hospitality business grows – adding new locations, new revenue streams (like catering or events), or even new franchises – QuantiFi grows with you. We are experienced in multi-property consolidation and reporting, so if you operate several hotels or restaurants, we\'ll provide both individual property reports and consolidated overviews. Planning to expand? We\'ll assist with forecasting and even with setting up the accounting for your new venture. Our support is completely scalable: ramping up services when complexity increases, or streamlining when things are quieter. This flexibility ensures you\'re never paying for more than you need, yet never lacking support when you need it most.',
    icon: Globe
  },
  {
    title: 'Proactive Guidance & Trusted Partner',
    description: 'QuantiFi goes beyond number-crunching. We care about your success and provide proactive advice to improve your bottom line. For example, we might identify that your food cost percentage is trending high and suggest a review of vendors or menu pricing. Or we\'ll alert you if your labor costs spike outside of your normal range. Clients trust us because we\'ve demonstrated results – whether it\'s helping a hotel chain reduce overhead by centralizing accounting, or assisting a restaurant in improving cash flow by better managing inventory. Our existing hospitality clients, from independent eateries to multi-state hotel groups, attest to our reliability and impact. We pride ourselves on being responsive (you\'ll get prompt answers when you have questions) and on bringing peace of mind – knowing that a CPA-led team is keeping your financial house in order.',
    icon: Target
  }
];

const faqData = [
  {
    question: 'What makes hospitality accounting different from regular accounting?',
    answer: 'Hospitality accounting involves unique challenges like daily revenue reconciliation, managing large volumes of small transactions (hotel stays, restaurant checks), and handling industry-specific taxes (like occupancy taxes on rooms and sales taxes on meals). There are also sector-specific metrics and reports (e.g. RevPAR for hotels, menu item profitability for restaurants) that generalist accountants might not track. QuantiFi\'s team specializes in these areas – we understand seasonality, tipping and payroll nuances, and the importance of cost controls on food and labor. By using an accounting team that knows hospitality, you get financial reports and advice tailored to the realities of running a hotel or restaurant, rather than generic statements that might overlook key details.'
  },
  {
    question: 'Can QuantiFi work with my hotel\'s or restaurant\'s software (PMS, POS, etc.)?',
    answer: 'Absolutely. We are well-versed in hospitality systems. For hotels, we can integrate with Property Management Systems like Opera, Cloudbeds, or Maestro to pull nightly audit data into the accounting records. For restaurants, we work with POS systems such as Toast, Square, or Clover, as well as reservation or delivery platforms. We\'ll adapt to whatever you\'re using – and if you don\'t have a system we consider essential (for example, a modern POS or an invoice management tool), we can recommend and help implement one. Our goal is a seamless flow of data from your front-end systems to your books, reducing manual work and errors.'
  },
  {
    question: 'Do you handle occupancy taxes, sales taxes, and other compliance for multiple jurisdictions?',
    answer: 'Yes, we take care of all those tax compliance needs. Hotels often have city, county, and state occupancy taxes – we calculate and file those returns on schedule, making sure exemptions (e.g. long-term stays or government guests) are handled correctly. Restaurants need to file sales tax (and in some areas, separate food & beverage or liquor taxes); we prepare those filings accurately based on your sales reports. If your business spans multiple jurisdictions (for example, restaurants in different states or a hotel that sells packaged goods requiring sales tax), we\'ll ensure each location\'s taxes are registered, collected, and remitted properly. Essentially, QuantiFi shields you from the headache of tax compliance, so you won\'t need to worry about notices or audits for missing a filing.'
  },
  {
    question: 'We operate several locations – can QuantiFi provide reporting for each property and the whole portfolio?',
    answer: 'Yes, multi-unit reporting is a core part of our service. We maintain bookkeeping for each location or property separately so you can see its individual performance (income, expenses, KPIs). We\'ll produce property-specific P&Ls and other reports, which is great for general managers or unit managers to review. At the same time, we can roll everything up into consolidated financial statements that give owners a bird\'s-eye view of the entire portfolio. This way, you can compare metrics across locations (for example, seeing one restaurant\'s food cost vs. another\'s, or one hotel\'s occupancy vs. others) and also track the overall profitability of your group. Our consolidation process also handles any inter-company transactions or management fees cleanly, so the reports remain accurate and useful.'
  },
  {
    question: 'How will working with an outsourced accounting team affect my day-to-day operations?',
    answer: 'Our goal is to make your day-to-day easier. When you onboard with QuantiFi, we\'ll establish a clear workflow with you. For example, you might scan and upload invoices to a shared folder or software, and we\'ll take it from there – coding and entering them into the system. We\'ll set a schedule for deliverables: perhaps daily sales flash reports every morning, weekly cash flow updates, and monthly financial statements by the 10th of each month. We communicate regularly (via email, calls, or a messaging app – whatever you prefer) to gather any information we need and to keep you updated. Far from losing control, many clients feel more in control because they have a dedicated team ensuring everything is handled. You\'ll always have access to your financial data; nothing is hidden. Essentially, working with us is like having a professional accounting department on call – you get timely information and expert advice, while freeing up your time to interact with guests and staff. We are responsive to questions (be it a quick "What\'s our cash position today?" or "Can you analyze the profit on last week\'s event?") and strive to deliver insights proactively. In short, your operations continue smoothly – except now you have better financial visibility and fewer back-office distractions.'
  }
];

export default function HospitalityPage() {
  return (
    <MarketingLayout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950/20 dark:via-gray-950 dark:to-blue-950/20 py-24">
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 px-6 py-3 text-base font-medium" style={{ backgroundColor: '#e6e8ff', color: '#0015ff' }}>
                Hospitality & Restaurant Accounting Services
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                Focus on Your Guests, Not Your Books
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                QuantiFi&apos;s hospitality bookkeeping and accounting services keep your hotel or restaurant financially healthy behind the scenes. From nightly revenue reconciliations to payroll and occupancy tax filings, we handle the numbers so you can deliver five-star experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookCallButton className="text-lg px-10 py-6 text-white font-semibold !bg-[#0015ff] hover:!bg-[#0012cc]">
                  Schedule a Free Consultation
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
                  Serving Up Financial Clarity
                </h2>
                <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#0015ff' }}></div>
              </div>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  Running a hotel or restaurant is fast-paced and margin-tight. Between daily sales tallies, inventory management, and ever-changing occupancy rates, hospitality accounting can get complicated. In fact, the average restaurant profit margin is only about 3–5%, so even small accounting errors or cost leaks can eat into profits. Many hospitality businesses struggle with complex financial tasks – like reconciling property management system (PMS) reports, handling nightly cash-outs, or calculating occupancy and liquor taxes – that generic bookkeepers may not handle well.
                </p>
                
                <p className="text-lg leading-relaxed">
                  QuantiFi brings hotel and restaurant-specific accounting expertise to solve these challenges. We understand metrics like RevPAR, ADR, and food cost percentages that drive your industry. Whether it&apos;s a boutique hotel, a multi-property franchise, or a local bistro, we provide tailored bookkeeping and CFO support. We&apos;ll reconcile your front-of-house systems (PMS or POS) with your books, ensure compliance with lodging and sales taxes, and deliver real-time financial reports that make sense for hospitality. The result? Owners and managers get full visibility into their operations&apos; performance – and more time to focus on guest satisfaction, not spreadsheets.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Our team can operate as your outsourced finance department or seamlessly work with your on-site staff. We have experience serving hospitality businesses nationwide, from resorts in California to restaurants in New York. With cloud-based tools, you&apos;ll have 24/7 access to your financial data. QuantiFi offers the peace of mind that your back-office is handled by professionals who know hospitality inside and out, giving you confidence to make data-driven decisions on pricing, staffing, and growth.
                </p>
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
                QuantiFi provides a full suite of accounting and financial services designed for the hospitality industry. Our key services for hotels, restaurants, and other hospitality groups include:
              </p>
            </div>

            <StackingCards projects={hospitalityServices} />
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
                Hospitality and restaurant owners choose QuantiFi as their accounting partner because we offer a unique blend of industry-specific expertise, flexibility, and technology. Here are six reasons to trust QuantiFi with your hotel or restaurant&apos;s financial management:
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
        <section className="py-24 text-white" style={{ backgroundColor: '#0015ff' }}>
          <div className="container-standard section-gutter text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Elevate Your Hospitality Finances?
              </h2>
              <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
                Don&apos;t let bookkeeping headaches or tax worries detract from your guest experience. Let QuantiFi handle the financial details while you focus on delighting guests and growing your business. We bring clarity, confidence, and control to your hotel or restaurant&apos;s finances.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <BookCallButton className="text-xl px-12 py-8 bg-white hover:bg-gray-100 font-bold !text-[#0015ff]">
                  Schedule a Free Consultation
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

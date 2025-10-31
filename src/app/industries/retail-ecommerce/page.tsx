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
  Clock, 
  Target,
  Store,
  Globe,
  Smartphone
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Retail & E-Commerce Accounting Services | QuantiFi',
  description: 'Outsourced retail accounting and e-commerce bookkeeping to manage inventory, sales tax, and cash flow. Optimize your store\'s finances and online sales metrics with QuantiFi\'s expert team – get a free consultation.',
};

const retailServices = [
  {
    title: 'Bookkeeping & Daily Sales Reconciliation',
    description: 'We take the day-to-day number crunching off your plate. Our team records all your sales and expenses, reconciling daily register/POS totals and online payment reports to your bank deposits. Whether you have a cash register in a boutique or receive dozens of PayPal/Stripe transactions from an online store, we ensure every sale is captured. We also reconcile credit card statements and platform payouts (like Shopify or Amazon disbursements) to verify you received what you\'re owed. This vigilant bookkeeping means your financial records are always up to date and accurate.',
    link: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/outsourced-accounting',
  },
  {
    title: 'Inventory Tracking & Cost of Goods Sold (COGS)',
    description: 'Inventory is the heart of retail. We implement systems to track your inventory purchases, usage, and shrinkage. When you buy merchandise or stock, we record it properly; as you sell items, we adjust inventory and calculate COGS. For e-commerce, we can sync with your platform to automatically update inventory levels and valuation. We\'ll also help identify and account for shrinkage – losses due to theft, damage, or errors – so you truly understand your product costs. By accurately calculating COGS, you\'ll know your gross margins on each product line, enabling smarter pricing and purchasing decisions.',
    link: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/outsourced-accounting',
  },
  {
    title: 'Accounts Payable & Supplier Management',
    description: 'QuantiFi handles your payables so you maintain great supplier relationships and avoid late fees. We manage the entire bill pay process: receiving vendor bills (stock purchases, utilities, rent, shipping fees, etc.), coding them to the correct expense or inventory accounts, and scheduling payments. We optimize payment timing to aid cash flow – for instance, taking advantage of early pay discounts from wholesalers or making sure critical inventory vendors are paid promptly to avoid supply disruptions. You\'ll always know what\'s due and when, and we\'ll provide cash requirements forecasts so there are no surprises.',
    link: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2070&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/outsourced-accounting',
  },
  {
    title: 'Payroll & Labor Cost Management',
    description: 'In the world of retail, staff scheduling and wages directly impact your bottom line. We process payroll for your store employees or fulfillment team accurately and on time. Whether you have salaried managers, hourly sales associates, or seasonal/temp staff, we handle all wage calculations, withholdings, and payroll tax filings. Importantly, we also track your labor costs as a percentage of sales and can help implement controls (like alerts if weekly hours exceed a threshold). This ensures you\'re not overspending on staffing relative to your revenue. We\'ll also manage sales commissions or bonus calculations if you have them for your sales team.',
    link: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/payroll-hr',
  },
  {
    title: 'Sales Tax Compliance (Multi-State)',
    description: 'Selling products means navigating sales tax, which can be especially tricky for e-commerce. Different states (and countries) have different rules about when you need to collect tax (nexus) and how to file. QuantiFi monitors your sales by state and advises where you have tax obligations. We handle obtaining any necessary sales tax permits, calculating the tax on each sale (in-store or online), and filing the required sales tax returns in each jurisdiction on time. This includes handling state-specific quirks, like threshold-based filings or local district taxes. By entrusting sales tax to us, you avoid the nightmare of audits and penalties, and ensure compliance even as laws (like economic nexus rules) evolve.',
    link: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2070&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/tax-preparation-compliance',
  },
  {
    title: 'Financial Reporting & Multi-Store Consolidation',
    description: 'Get a clear view of your business performance with our tailored financial reports. We produce monthly financial statements (P&L, Balance Sheet, Cash Flow) and also create segment reports if needed – for example, separate P&Ls for your retail storefront vs. your e-commerce operations, or by location if you have multiple stores. We then consolidate these so you can see the overall picture. Our reports highlight key retail metrics: gross margin, inventory turnover, same-store sales growth, online vs. offline sales mix, etc. We\'ll review these numbers with you, translating accounting talk into plain English. With this insight, you can quickly spot trends, like a drop in one category\'s sales or an improvement in one store\'s performance, and act accordingly.',
    link: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/financial-analytics',
  },
  {
    title: 'Cash Flow Forecasting & Budgeting',
    description: 'Cash is king in retail. We help you project and manage your cash flow so you\'re not caught off guard. Our team will work with you to create a budget for revenues and expenses, often broken down by month and by category (merchandise, rent, marketing, etc.). We factor in seasonal trends – e.g., higher sales and stock purchasing before holidays, or slow periods where cash might dip. Additionally, we prepare rolling cash flow forecasts that look ahead 8–12 weeks, predicting inflows (sales, tax refunds, etc.) and outflows (payroll, inventory purchases, loan payments). We\'ll alert you if we foresee a cash crunch and advise on strategies (like adjusting inventory orders or securing short-term financing).',
    link: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/cfo-controller',
  },
  {
    title: 'Systems Integration & E-Commerce Automation',
    description: 'QuantiFi is tech-forward – we make sure your various systems talk to each other to reduce manual work. We can help you integrate your e-commerce platforms (Shopify, WooCommerce, Amazon Marketplace, Etsy, etc.) and payment processors (Stripe, PayPal, Square) with your accounting software. Daily sales, fees, and payouts can be imported automatically. We\'ll also integrate POS systems from your physical store and any third-party apps like expense tracking (Expensify) or bill payments. If you don\'t have an accounting system in place, we\'ll set up a robust cloud accounting platform (like QuickBooks Online or Xero) for you. Our goal is to create a unified, real-time financial dashboard for your business.',
    link: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/systems-integration',
  },
  {
    title: 'Benchmarking & KPI Dashboard',
    description: 'We help you understand how your business stacks up and where to improve. QuantiFi can establish key performance indicators (KPIs) for your retail or e-commerce business – like conversion rate (for online), average transaction value, customer acquisition cost, and inventory sell-through rate. We\'ll then track these KPIs and even compare them to retail industry benchmarks when available. For example, if the industry average gross margin in your niche is 45% and you\'re at 38%, that\'s a flag we\'ll raise with suggestions (maybe renegotiate vendor costs or adjust pricing). Or if your online store\'s cart abandonment is high, we\'ll highlight that so you can investigate marketing or site improvements. We present this info in a simple dashboard that you can view anytime.',
    link: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/financial-analytics',
  },
  {
    title: 'Fractional CFO Advisory & Growth Planning',
    description: 'When it\'s time to level up your business, our fractional CFO services are here to guide you. For growing retailers and startups, we provide high-level financial advice on strategic decisions. Considering opening a new store or expanding your product line? We\'ll analyze the financial feasibility and help build a business case. Preparing to approach a bank or investor for funding? We make sure your financial model and statements are pitch-ready and we can even join conversations with lenders/investors to answer questions. We help with pricing strategy (ensuring your markups cover all overhead), profitability analysis by product/category, and cost reduction strategies. If you\'re an e-commerce startup, we can assist with metrics that investors scrutinize (CAC, LTV, monthly burn, etc.).',
    link: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    color: '#0015ff',
    href: '/services/cfo-controller',
  }
];

const whyChooseQuantiFi = [
  {
    title: 'Retail-Focused Expertise',
    description: 'We have hands-on experience across the retail spectrum – from brick-and-mortar shops to online sellers. This means we\'re familiar with industry specifics like managing inventory shrinkage, tracking SKU-level profitability, handling seasonal swings, and integrating POS/e-commerce systems. We also understand niche retail segments; whether you sell fashion, electronics, fuel, or groceries, we grasp the particular margins and challenges involved. Our expertise ensures your accounting is done right and reflects the realities of your business (for instance, we know to separate sales by category, to account for gift card liabilities, or to manage layaway transactions properly). You won\'t have to teach us – we\'re ready to hit the ground running and offer insights from day one.',
    icon: Store
  },
  {
    title: 'Cost Savings & Efficiency',
    description: 'QuantiFi provides professional accounting at a fraction of the cost of hiring full-time staff. For many retailers, especially small businesses or startups, employing an in-house accountant or CFO isn\'t feasible. We give you that level of skill without the salary burden. Moreover, our efficient processes and automations often reduce administrative overhead. By outsourcing, you also save the hidden costs of turnover and training – no more worrying about your bookkeeper quitting right before year-end close. We\'re consistently there, and you pay only for what you need. This efficiency means more resources can be directed to front-of-house operations or marketing, where you see direct returns.',
    icon: DollarSign
  },
  {
    title: 'Integrated Systems & Tech-Savvy Processes',
    description: 'Modern retail requires modern tools. QuantiFi is highly technology-driven, and we ensure your accounting is seamlessly integrated with your sales platforms. Many bookkeeping firms might input data manually once a month; we strive to set up real-time data flows. Our comfort with retail tech (QuickBooks Point of Sale, Shopify, Vend, Lightspeed, Amazon Seller Central reports, etc.) means we can quickly connect and configure these systems. You\'ll benefit from automation (less human error, faster close times) and have a better overall view of your business. We also keep data secure and accessible – using trusted cloud solutions so you can review performance anytime, anywhere.',
    icon: Smartphone
  },
  {
    title: 'Multichannel Insight in One Place',
    description: 'If you\'re selling both in-store and online, it can be challenging to consolidate information. One of QuantiFi\'s strengths is providing omni-channel visibility. We\'ll show you how your web store is performing relative to your physical store, or how one sales channel is subsidizing another. This insight helps you strategize (maybe doubling down on the more profitable channel, or bringing the lagging one up to speed). We break down silos in your data: no more separate reports that you have to manually combine – we do it for you. With all your financial info in one place, decisions become clearer. Retailers with multiple locations or multiple online marketplaces especially love that we bring coherence to what was once a tangle of reports.',
    icon: Globe
  },
  {
    title: 'Consistency and Reliability',
    description: 'In retail, timing is everything – and we make sure your financial routine is rock-solid. We close your books on a dependable schedule, deliver reports when promised, and keep your compliance filings on time. You won\'t have to chase us; rather, we\'ll often be the ones reminding you of deadlines or asking for info ahead of time. We understand that promotions, holidays, and end-of-season clearances are hectic times for you, so we plan around them to get what we need with minimal disruption. Our team approach also means there\'s redundancy – your accounting doesn\'t pause if someone\'s on vacation. This consistent, reliable service frees you from back-office anxiety and builds trust – you know that every week and month, you\'ll have a clear view of your finances.',
    icon: Clock
  },
  {
    title: 'Scalable Support for Growth',
    description: 'Today you might run one boutique or a small online shop; in a year, you could be managing three locations or a booming e-commerce brand. QuantiFi is a partner that scales with you. We can start with basic bookkeeping and tax services and easily expand to more complex offerings (like fractional CFO advisory or international tax handling if you start selling abroad). Because we document and streamline processes, adding a new store or channel becomes a smoother endeavor – we can clone the accounting setup and controls we established for you to new parts of your business. Additionally, our advisory input grows as you grow: the bigger you get, the more strategic insight we provide (like helping to evaluate new markets or major capital investments). You\'ll never outgrow QuantiFi\'s capabilities; instead, we adapt and marshal more resources to support your journey from startup to established retailer.',
    icon: Target
  }
];

const faqData = [
  {
    question: 'How will you help me manage my inventory accounting and prevent losses?',
    answer: 'We set up robust inventory accounting practices tailored to your business. This includes tracking every product from purchase to sale. We\'ll implement periodic inventory counts (or work with your existing count schedule) and reconcile any differences – which pinpoints shrinkage. By recording inventory in your books at cost and then computing the cost of goods sold with each sale, we ensure your gross profit calculations are accurate. If we notice high shrinkage or product margin issues, we\'ll alert you. For example, if one category consistently shows losses, it could indicate theft or pricing problems – insights we\'ll bring to your attention. We can also help establish controls, like SKU-level tracking or better purchasing practices, to minimize inventory losses. In short, we not only account for your inventory, but also provide analysis to help you optimize it.'
  },
  {
    question: 'Can QuantiFi integrate with my POS system or online shopping cart?',
    answer: 'Yes, integration is one of our specialties. We have experience connecting many point-of-sale (POS) and e-commerce systems to accounting software. If you use a POS like Square, Clover, or Lightspeed in-store, or an e-commerce platform like Shopify, Magento, Etsy, or Amazon for online sales, we\'ll link them up. This typically means daily sales data flows into the books automatically, broken down by category or any classification you need. We\'ll also integrate payment processors (Stripe, PayPal) so fees and payouts are accounted for. If direct integration isn\'t available, we use reliable import tools or develop a process to regularly get the data in (for instance, downloading a sales report from Shopify each week and importing). The goal is no (or minimal) manual data entry. This not only saves time, but it ensures accuracy – your sales and revenue numbers in accounting will always match what you see on your sales channels.'
  },
  {
    question: 'My business sells in multiple states online – can you handle all the different sales tax requirements?',
    answer: 'Definitely. We know multi-state sales tax can be a headache, especially after regulations like Wayfair expanded tax obligations for online sellers. Our team will help determine where you have nexus (the requirement to collect tax). We\'ll track your sales by state and even by city/county when needed. For each jurisdiction where you cross the threshold, we\'ll register your business and start collecting the correct tax on your platforms (we can help configure your Shopify or other cart to charge the right rates). Then we\'ll prepare and file all those sales tax returns (monthly, quarterly, annually – as required by each state). We stay up-to-date on rate changes and new rules. Additionally, we manage use tax or any specific obligations (for example, some states have different rules for clothing or food which we account for). With QuantiFi handling this, you won\'t dread the maze of sales tax – we\'ll ensure you\'re compliant everywhere you need to be, and we\'ll keep documentation organized in case of any inquiries.'
  },
  {
    question: 'We have two stores and an online shop – will your reporting show each separately?',
    answer: 'Yes, we will tailor our reporting to give you the clarity you need. We can maintain class or location tracking in the accounting system, so each store\'s financial activity is tagged, and online sales are tagged as their own "location." Each month, we\'ll provide an income statement for Store A, Store B, and Online, as well as a combined one for the total business. This way, you can compare performance: maybe Store A is doing more revenue but Store B has better margins, or the online channel has lower overhead. We\'ll also standardize the reporting format for easy side-by-side comparison. If you allocate certain expenses across stores (like a shared marketing spend), we\'ll handle those allocations so the profitability of each segment is fairly represented. Overall, you\'ll gain insight into each part of your operation and can make location-specific decisions (like adjusting hours, staffing, or promotions) with data to back them.'
  },
  {
    question: 'What does day-to-day collaboration with QuantiFi look like for a retailer? Will I still have control over my finances?',
    answer: 'Collaboration is straightforward and designed to keep you in control while offloading the heavy lifting to us. On a daily basis, if something needs your attention (say, an unclear transaction or a cash register discrepancy), we\'ll reach out promptly. We often establish a shared folder or use software where you can easily drop documents (like vendor invoices or receipts) – we then process those without you having to enter data. We\'ll likely set up a short check-in (maybe biweekly or monthly) to go over results and any issues. You\'ll receive regular updates – for instance, an email each week noting "all sales and bank transactions are reconciled through Sunday – here are the week\'s key figures..." Many clients find this proactive communication gives them more control: they know exactly what\'s happening financially, without having to chase down the info. Importantly, you always have access to your accounting file and bank accounts – we operate transparently. Think of us as your backstage crew: we handle the technical stuff, while you set the direction and strategy. And whenever you have a question ("Can I afford to buy more inventory now?" or "How are we doing versus last month?"), we\'re a phone call or email away with answers. We adapt to your style – if you prefer quick texts, scheduled Zoom meetings, or in-person visits (if local) – we\'ll communicate in the way that works best for you. Ultimately, you maintain decision-making power; we just arm you with accurate data and advice to make those decisions confidently.'
  }
];

export default function RetailEcommercePage() {
  return (
    <MarketingLayout>
      <div className="md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950/20 dark:via-gray-950 dark:to-blue-950/20 py-24">
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Badge className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium" style={{ backgroundColor: '#e6e8ff', color: '#0015ff' }}>
                  Retail & E-Commerce Accounting Services
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                Retail & E-Commerce Accounting, Simplified
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Whether you run a local shop or a global online store, QuantiFi&apos;s specialized accounting services help you stay on top of inventory, sales tax, and cash flow. We handle your bookkeeping and financial planning so you can focus on selling and growing – online and off.
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
                  Driving Profits in a Dynamic Market
                </h2>
                <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#0015ff' }}></div>
              </div>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  Retailers today face razor-thin margins, seasonal swings, and the complexities of selling across multiple channels. A mismanaged inventory or a missed sales tax filing can quickly hurt cash flow. Retail and e-commerce accounting requires juggling a lot of moving parts – tracking stock levels, syncing online sales data, handling multi-state taxes, and more. For example, inventory shrink (loss) alone averaged about 1.6% of sales for retailers recently, representing billions in losses industry-wide. Without solid accounting systems, issues like shrinkage, unrecorded sales, or inaccurate cost calculations can quietly erode your profits.
                </p>
                
                <p className="text-lg leading-relaxed">
                  QuantiFi understands these challenges. We bring experience from working with brick-and-mortar stores, gas stations, liquor shops, and online sellers. Our approach is to streamline and integrate your financial processes so that every sale, return, and expense is accurately recorded and analyzed. We act as your retail accounting department, ensuring you always know which products are profitable, which expenses are eating into margins, and where you can save. From reconciling daily POS reports to managing the complexities of e-commerce payment fees and marketplace sales, we&apos;ve got you covered.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Whether you&apos;re a boutique retailer with one location, a multi-store operation, or an e-commerce entrepreneur selling nationwide, QuantiFi adapts to your needs. We can handle accounting for hybrid businesses (storefront + online) seamlessly. Our cloud-based tools connect to your systems (like Shopify, Amazon, or point-of-sale software), giving you real-time insights. With our support, you&apos;ll have clear financial visibility and expert guidance - so you can optimize pricing, reduce costs, and confidently plan expansions, rather than getting bogged down in spreadsheets.
                </p>
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
                Our comprehensive services help retail and e-commerce businesses maintain financial health and compliance. Here are 10 key services QuantiFi provides, tailored to retailers and online merchants:
              </p>
            </div>

            <StackingCards projects={retailServices} />
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
                Retail and e-commerce businesses partner with QuantiFi because we deliver exactly what they need: specialized expertise, flexibility, and tools to thrive in a competitive market. Here are six reasons to work with QuantiFi for your retail accounting:
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

        {/* Final CTA Card */}
        <section className="py-24 bg-background">
          <div className="container-standard section-gutter">
            <Card className="bg-[#0015ff] text-white border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-12 md:p-16">
                <div className="text-center max-w-4xl mx-auto">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Ready to Boost Your Retail Profits?
                  </h2>
                  <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
                    Don&apos;t let accounting challenges slow down your business. With QuantiFi handling your books, inventory tracking, and financial strategy, you can devote your energy to sales and customer service. We help retail and e-commerce companies of all sizes increase clarity and control over their finances.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link href="/contact" className="w-full sm:w-auto flex justify-center">
                      <BookCallButton className="!text-base !px-8 !py-6 !bg-white hover:!bg-gray-100 !font-bold !text-[#0015ff] !w-full sm:!w-[360px] !h-[64px] !rounded-xl !shadow-lg !border-0 from-white to-white hover:from-gray-100 hover:to-gray-100 whitespace-nowrap">
                        Book a Free Consultation
                        <ArrowRight className="h-5 w-5" />
                      </BookCallButton>
                    </Link>
                    <Link href="/contact" className="w-full sm:w-auto flex justify-center">
                      <Button size="lg" variant="outline" className="text-lg px-10 py-6 !w-full sm:!w-[280px] !h-[64px] border-2 border-white bg-transparent !text-white hover:bg-white hover:!text-[#0015ff] transition-colors">
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

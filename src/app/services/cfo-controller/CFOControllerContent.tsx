'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  ArrowRight, 
  BarChart3, 
  TrendingUp, 
  DollarSign,
  FileText,
  Shield,
  Calculator,
  Target,
  Lightbulb,
  Settings,
  ChevronRight,
  Building2,
  CheckCircle2,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Service data
const cfoServices = [
  {
    icon: BarChart3,
    title: 'Financial Management & Oversight',
    description: 'We deliver comprehensive financial supervision, ensuring every transaction and report aligns with your goals. From reconciliations to management reporting, our team keeps your financial operations accurate, compliant, and forward-focused.',
    color: 'from-[#0015ff] to-[#0012cc]'
  },
  {
    icon: TrendingUp,
    title: 'Financial Planning & Forecasting',
    description: 'Our CFOs develop data-driven forecasts and rolling budgets that anticipate trends, strengthen resource allocation, and guide strategic growth. You\'ll always have the insight to make confident, informed decisions.',
    color: 'from-[#0015ff] to-[#0012cc]'
  },
  {
    icon: FileText,
    title: 'Accounting Oversight & Reporting',
    description: 'We provide full controller-level management, reviewing reconciliations, journal entries, and financial statements to ensure GAAP compliance and reporting precision every month.',
    color: 'from-[#0015ff] to-[#0012cc]'
  },
  {
    icon: DollarSign,
    title: 'Cash Flow & Treasury Management',
    description: 'We monitor liquidity and manage working capital to prevent cash shortages and improve operational efficiency. We manage cash flow and treasury operations to support strategic financial decision-making, helping you plan payments, collections, and investments effectively.',
    color: 'from-[#0015ff] to-[#0012cc]'
  },
  {
    icon: Calculator,
    title: 'Budgeting & Cost Analysis',
    description: 'We create customized budgets and analyze actual results against targets to uncover inefficiencies and identify opportunities for improvement. This insight helps you drive profitability and streamline operations.',
    color: 'from-[#0015ff] to-[#0012cc]'
  },
  {
    icon: Shield,
    title: 'Tax Planning & Compliance Oversight',
    description: 'Our team collaborates with your CPA to ensure all filings are accurate and tax positions are optimized. We oversee sales tax, multi-state compliance, and annual reviews, minimizing liability while maintaining full compliance.',
    color: 'from-[#0015ff] to-[#0012cc]'
  },
  {
    icon: Building2,
    title: 'Debt & Capital Management',
    description: 'We help you evaluate financing options, manage debt structures, and plan for capital needs. Whether raising funds or restructuring obligations, we ensure you maintain financial stability and sustainable leverage.',
    color: 'from-[#0015ff] to-[#0012cc]'
  },
  {
    icon: Settings,
    title: 'Internal Controls & Risk Mitigation',
    description: 'We strengthen your financial infrastructure with tailored internal controls that prevent errors, reduce fraud risk, and ensure long-term regulatory compliance.',
    color: 'from-[#0015ff] to-[#0012cc]'
  }
];

const benefits = [
  {
    icon: Lightbulb,
    title: 'Expert Guidance',
    description: 'Access seasoned financial leaders who\'ve scaled businesses across industries.'
  },
  {
    icon: Zap,
    title: 'Streamlined Operations',
    description: 'Automated workflows and monthly closes you can rely on.'
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective Leadership',
    description: 'CFO and controller expertise without the expense of full-time staff.'
  },
  {
    icon: BarChart3,
    title: 'Actionable Insights',
    description: 'Transparent dashboards and reports designed for smarter decision-making.'
  }
];

const faqs = [
  {
    question: 'How does a virtual CFO differ from hiring a full-time CFO?',
    answer: 'You get senior-level expertise on a flexible schedule (weekly, monthly, or as needed) without paying a full-time salary.'
  },
  {
    question: 'Can you manage our existing accounting systems and team?',
    answer: 'Absolutely. We can either oversee your current team or act as your complete outsourced finance department.'
  },
  {
    question: 'What industries do you serve?',
    answer: 'We specialize in construction, healthcare, retail, startups, hospitality, and professional services.'
  },
  {
    question: 'Can you help prepare for fundraising or audits?',
    answer: 'Yes, we create investor-ready reports, due diligence packages, and financial models that simplify both processes.'
  },
  {
    question: 'Will we still own our data?',
    answer: 'Yes. You maintain full ownership and control. Our access is secure, documented, and limited to what\'s needed for service delivery.'
  }
];

export default function CFOControllerContent() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-white dark:from-black dark:to-black">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 21, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container-standard section-gutter relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3, ease: "easeOut" }}
            >
              <Badge className="mb-6 px-4 py-2 text-sm font-semibold bg-[#0015ff] text-white dark:bg-[#0015ff] dark:text-white">
                Fractional CFO & Controller Services
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight mb-6">
                Greater Financial Visibility with Fractional CFO & Controller Services for Smarter Businesses
              </h1>
              
              <p className="text-xl md:text-2xl text-black/70 dark:text-white/70 mb-6 leading-relaxed">
                Empowering business owners with expert analysis, strategic guidance, and financial clarity without the overhead of a full-time executive.
              </p>
              
              <p className="text-lg text-black/70 dark:text-white/70 mb-8 leading-relaxed">
                QuantiFi delivers Fractional CFO-level insight and controller-level precision, giving you control over your numbers and confidence in every decision.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-[#0015ff] hover:bg-[#0012cc] text-white text-lg px-8 py-6">
                  <Link href="/contact">
                    Inquire Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 text-black border-black hover:bg-black hover:text-white">
                  <Link href="/contact">
                    Schedule a Call
                  </Link>
                </Button>
              </div>

              {/* Trust Bar */}
              <div className="mt-12 pt-8 border-t border-black/20 dark:border-white/20">
                <div className="flex items-center justify-center gap-8 text-sm text-black/70 dark:text-white/70">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black dark:text-white">15+</div>
                    <div>Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black dark:text-white">100+</div>
                    <div>Clients Nationwide</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black dark:text-white">99%</div>
                    <div>Client Retention Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
            >
              <div className="relative w-full max-w-lg">
                <div className="relative bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-black/20 dark:border-white/20">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-black dark:bg-white rounded-full"></div>
                      <div className="w-3 h-3 bg-black dark:bg-white rounded-full"></div>
                      <div className="w-3 h-3 bg-black dark:bg-white rounded-full"></div>
                    </div>
                    <div className="text-xs font-medium text-black/70 dark:text-white/70 bg-white/50 dark:bg-black/50 px-3 py-1 rounded-full border border-black/10 dark:border-white/10">
                      Fractional CFO Dashboard
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-[#0015ff]/10 to-[#0015ff]/20 dark:from-[#0015ff]/30 dark:to-[#0015ff]/20 rounded-xl p-4 border border-[#0015ff]">
                      <div className="flex items-center gap-3 mb-2">
                        <TrendingUp className="h-5 w-5 text-[#0015ff]" />
                        <span className="text-sm font-semibold text-black dark:text-white">Cash Flow</span>
                      </div>
                      <div className="text-lg font-bold text-[#0015ff]">+15.2%</div>
                      <div className="text-xs text-black dark:text-white">Month over month</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-[#0015ff]/10 to-[#0015ff]/20 dark:from-[#0015ff]/30 dark:to-[#0015ff]/20 rounded-xl p-4 border border-[#0015ff]">
                      <div className="flex items-center gap-3 mb-2">
                        <BarChart3 className="h-5 w-5 text-[#0015ff]" />
                        <span className="text-sm font-semibold text-black dark:text-white">Profit Margin</span>
                      </div>
                      <div className="text-lg font-bold text-[#0015ff]">22.8%</div>
                      <div className="text-xs text-black dark:text-white">Above target</div>
                    </div>

                    <div className="bg-gradient-to-br from-[#0015ff]/10 to-[#0015ff]/20 dark:from-[#0015ff]/30 dark:to-[#0015ff]/20 rounded-xl p-4 border border-[#0015ff]">
                      <div className="flex items-center gap-3 mb-2">
                        <Target className="h-5 w-5 text-[#0015ff]" />
                        <span className="text-sm font-semibold text-black dark:text-white">KPIs</span>
                      </div>
                      <div className="text-lg font-bold text-[#0015ff]">8/10</div>
                      <div className="text-xs text-black dark:text-white">On track</div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-black/20 dark:border-white/20">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#0015ff] rounded-full animate-pulse"></div>
                      <span className="text-xs text-black/70 dark:text-white/70">All metrics updated</span>
                    </div>
                    <span className="text-xs text-black/70 dark:text-white/70">Updated 1 min ago</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container-standard section-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight mb-6">
                Streamline Your Finances with Our Experts
              </h2>
              <p className="text-lg text-black/70 dark:text-white/70 mb-6 leading-relaxed">
                Want to improve your cash flow and profitability? Let us help you.
              </p>
              <p className="text-lg text-black/70 dark:text-white/70 mb-6 leading-relaxed">
                Our experienced finance professionals design clear, actionable strategies that simplify your financial operations and strengthen your decision-making.
              </p>
              <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed">
                Instead of hiring a full-time CFO or controller, partner with QuantiFi to gain high-level financial leadership on demand. You&apos;ll save significantly while gaining deep insight, structured reporting, and peace of mind.
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full max-w-md">
                <div className="bg-[#0015ff]/5 dark:bg-[#0015ff]/10 rounded-2xl p-8 border border-[#0015ff]/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#0015ff] rounded-xl flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black dark:text-white">Financial Clarity</h3>
                      <p className="text-sm text-black/70 dark:text-white/70">Expert insights delivered</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0015ff]" />
                      <span className="text-sm text-black dark:text-white">Strategic planning</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0015ff]" />
                      <span className="text-sm text-black dark:text-white">Cash flow optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0015ff]" />
                      <span className="text-sm text-black dark:text-white">Risk mitigation</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container-standard section-gutter">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight mb-6">
              Top-Tier Fractional CFO and Controller Services
            </h2>
            <p className="text-xl text-black/70 dark:text-white/70 max-w-4xl mx-auto leading-relaxed">
              At QuantiFi, we combine the foresight of a CFO with the discipline of a Controller. Our integrated financial leadership model ensures your books are clean, your reports are meaningful, and your strategy is future-focused.
            </p>
            <p className="text-lg text-black/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed mt-4">
              We help small and mid-sized businesses across the U.S. gain the financial structure and insights once reserved for large corporations at a fraction of the cost.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's Included: Our CFO & Controller Services */}
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container-standard section-gutter">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight mb-6">
              What&apos;s Included: Our Fractional CFO & Controller Services
            </h2>
            <p className="text-xl text-black/70 dark:text-white/70 max-w-4xl mx-auto leading-relaxed">
              QuantiFi&apos;s Fractional CFO & Controller Services bring executive-level financial leadership to your business without the full-time cost. Our experts oversee every financial function, from forecasting and cash flow to tax strategy and capital management, giving you the clarity and control needed to scale confidently.
            </p>
            <p className="text-lg text-black/70 dark:text-white/70 max-w-4xl mx-auto leading-relaxed mt-6">
              We combine the foresight of a CFO with the precision of a Controller to deliver strategic insight, disciplined execution, and actionable financial strategy and advisory the kind of financial leadership for growing businesses that turns data into decisions and momentum into business growth guidance.
            </p>
            <p className="text-lg text-black/70 dark:text-white/70 max-w-4xl mx-auto leading-relaxed mt-6">
              Our virtual CFO services provide executive-level leadership on a flexible basis, while our outsourced controller solutions ensure accuracy, compliance, and efficiency across your finance function. With QuantiFi as your strategic partner, you gain the clarity, control, and confidence to scale successfully.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cfoServices.map((service, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white dark:bg-black hover:shadow-xl transition-all duration-300 border border-black/10 dark:border-white/10 shadow-lg group-hover:border-[#0015ff]">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-4 group-hover:text-[#0015ff] dark:group-hover:text-[#0015ff] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-black/70 dark:text-white/70 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button asChild size="lg" className="bg-[#0015ff] hover:bg-[#0012cc] text-white text-lg px-8 py-6">
              <Link href="/contact">
                Gain Clarity with Executive-Level Financial Guidance
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose QuantiFi */}
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container-standard section-gutter">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight mb-6">
              Why Businesses Choose QuantiFi for CFO & Controller Support
            </h2>
            <p className="text-xl text-black/70 dark:text-white/70 max-w-4xl mx-auto leading-relaxed">
              We don&apos;t just provide reports. We provide clarity, strategy, and partnership.
            </p>
            <p className="text-lg text-black/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed mt-4">
              Our clients trust us because we operate as an extension of their leadership team, offering insights that drive smarter, faster decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-black rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group text-center border border-black/10 dark:border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#0015ff] to-[#0012cc] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-black/70 dark:text-white/70 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Stats Bar */}
      <section className="py-16 bg-[#0015ff] text-white">
        <div className="container-standard section-gutter">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold mb-2 text-white">15+</div>
              <div className="text-sm opacity-90 text-white">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold mb-2 text-white">100+</div>
              <div className="text-sm opacity-90 text-white">Clients Nationwide</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold mb-2 text-white">99%</div>
              <div className="text-sm opacity-90 text-white">Client Retention Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container-standard section-gutter">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight mb-6">
              FAQs About Our CFO & Controller Services
            </h2>
            <p className="text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
              Get answers to the most common questions about our virtual CFO and controller services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white dark:bg-black rounded-xl border border-black/20 dark:border-white/20 px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-lg font-semibold text-black dark:text-white pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-black/70 dark:text-white/70 leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 text-black border-black hover:bg-black hover:text-white">
              <Link href="/contact">
                Still Have Questions? Contact QuantiFi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Card */}
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container-standard section-gutter">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#0015ff] text-white border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-12 md:p-16 relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="h-full w-full" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                  }} />
                </div>

                <div className="text-center relative z-10">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                    Let&apos;s Simplify Your Finances and Strengthen Your Strategy
                  </h2>
                  <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed text-white">
                    Ready to make your financial operations clear, compliant, and growth-focused?
                    Partner with QuantiFi for virtual CFO and Controller services that bring clarity and confidence to every decision.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-white text-[#0015ff] hover:bg-white/90 text-lg px-8 py-6">
                      <Link href="/contact">
                        Book a Free Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0015ff] text-lg px-8 py-6">
                      <Link href="/contact">
                        Request a Sample CFO Report
                      </Link>
                    </Button>
                  </div>

                  {/* Internal Links */}
                  <div className="mt-16 pt-8 border-t border-white/20">
                    <p className="text-sm opacity-75 mb-4 text-white">Explore our related services:</p>
                    <div className="flex flex-wrap justify-center gap-6">
                      <Link href="/services/outsourced-accounting" className="text-sm text-white hover:text-white/70 transition-colors flex items-center gap-1">
                        Outsourced Accounting <ChevronRight className="h-3 w-3" />
                      </Link>
                      <Link href="/services/tax-preparation-compliance" className="text-sm text-white hover:text-white/70 transition-colors flex items-center gap-1">
                        Tax Preparation & Compliance <ChevronRight className="h-3 w-3" />
                      </Link>
                      <Link href="/services/payroll-hr" className="text-sm text-white hover:text-white/70 transition-colors flex items-center gap-1">
                        Payroll & HR Support <ChevronRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

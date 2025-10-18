'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  ArrowRight, 
  BarChart3, 
  TrendingUp, 
  Brain,
  Target,
  ChevronRight,
  Users,
  Shield,
  PieChart,
  LineChart
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const benefits = [
  {
    icon: Brain,
    title: 'Human-Driven Analysis',
    description: 'Every report is prepared and reviewed by experienced accountants — not auto-generated.'
  },
  {
    icon: BarChart3,
    title: 'Clarity Without Complexity',
    description: 'Simple, visual reports that explain what your numbers mean — without overwhelming dashboards.'
  },
  {
    icon: Target,
    title: 'Business-Specific Insights',
    description: 'Reports customized to your industry, goals, and operational model.'
  },
  {
    icon: Users,
    title: 'Collaborative Reviews',
    description: 'Monthly or quarterly discussions to interpret results and set goals.'
  },
  {
    icon: Shield,
    title: 'Accurate, Verified Data',
    description: 'CPA-reviewed numbers ensure your analysis is reliable and audit-ready.'
  },
  {
    icon: TrendingUp,
    title: 'Strategic Growth Focus',
    description: 'Financial insights that align with your long-term strategy.'
  }
];

const faqs = [
  {
    question: 'Do You Build or Automate Dashboards?',
    answer: 'We don\'t build custom BI dashboards. Instead, we manually prepare CPA-reviewed reports and analyses that ensure accuracy and actionable insight.'
  },
  {
    question: 'How Do You Deliver Reports?',
    answer: 'Reports are shared monthly or quarterly via secure cloud access (PDF, Excel, or platform dashboards).'
  },
  {
    question: 'Can You Analyze Our Existing Reports?',
    answer: 'Yes — we can review your internal reports, verify accuracy, and provide variance and trend analysis commentary.'
  },
  {
    question: 'What Is Variance Analysis?',
    answer: 'It compares actual results to forecasts, helping identify why your business performed above or below expectations.'
  },
  {
    question: 'Do You Handle Multi-Location Analysis?',
    answer: 'Absolutely. We break down results by project, department, or location for clearer financial visibility.'
  },
  {
    question: 'Can You Integrate Our Data with Accounting Systems?',
    answer: 'Yes. We work with your existing software (QuickBooks, Xero, NetSuite) to ensure clean data for consistent reporting.'
  }
];

export default function FinancialAnalyticsContent() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/50 dark:from-slate-900 dark:via-blue-950/20 dark:to-cyan-950/30">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
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
              <Badge className="mb-6 px-4 py-2 text-sm font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                Financial Analytics & Reporting
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                See Beyond the Numbers — Turn Financial Data into Strategic Insight
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                QuantiFi transforms your accounting data into meaningful analysis that drives better decisions. From cash flow and profitability tracking to variance and trend analysis, we help you understand not just what happened — but why.
              </p>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                We bridge the gap between bookkeeping and business strategy. Our analysts interpret your numbers, highlight trends, and uncover actionable insights — empowering smarter, data-driven growth without the need for complex dashboards or BI tools.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-quantifi-primary hover:bg-quantifi-primary/90 text-lg px-8 py-6">
                  <Link href="/contact">
                    See Your Financial Story
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link href="/contact">
                    Schedule a Review
                  </Link>
                </Button>
              </div>

              {/* Trust Bar */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-center gap-8 text-sm text-slate-600 dark:text-slate-400">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">15%</div>
                    <div>Average Efficiency Gain</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">CPA</div>
                    <div>Reviewed Analysis</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">100%</div>
                    <div>Manual Reports</div>
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
                <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-800/20">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-xs font-medium text-muted-foreground bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                      Financial Analytics
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center gap-3 mb-2">
                        <TrendingUp className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Revenue Growth</span>
                      </div>
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">+23.5%</div>
                      <div className="text-xs text-blue-700 dark:text-blue-300">Month over month</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-xl p-4 border border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-3 mb-2">
                        <PieChart className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-semibold text-green-700 dark:text-green-300">Profit Margin</span>
                      </div>
                      <div className="text-lg font-bold text-green-600 dark:text-green-400">18.2%</div>
                      <div className="text-xs text-green-700 dark:text-green-300">Above target</div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl p-4 border border-purple-200 dark:border-purple-800">
                      <div className="flex items-center gap-3 mb-2">
                        <LineChart className="h-5 w-5 text-purple-600" />
                        <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">Cash Flow</span>
                      </div>
                      <div className="text-lg font-bold text-purple-600 dark:text-purple-400">$47K</div>
                      <div className="text-xs text-purple-700 dark:text-purple-300">Positive trend</div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">Analysis complete</span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Updated 1 min ago</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview / Value Statement */}
      <section className="py-32 md:py-40 bg-slate-50 dark:bg-slate-900/50">
        <div className="container-standard section-gutter">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Transform Financial Data into Decisions That Drive Growth
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Numbers alone don&apos;t tell the whole story. Our financial analytics and reporting services go beyond traditional bookkeeping — delivering practical insights into profitability, cash flow, and performance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you need monthly variance analysis, cost tracking, or executive summary reports, our team helps you measure performance and identify opportunities. Each analysis is CPA-reviewed, manual, and tailored to your business — ensuring accuracy, clarity, and context in every report.
            </p>
          </motion.div>

          {/* Stat Box */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-800/50 max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-semibold text-blue-800 dark:text-blue-200">
              15% Average Efficiency Gain Through Insight-Driven Decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Businesses Choose QuantiFi */}
      <section className="py-32 md:py-40 bg-gradient-to-br from-blue-50/30 via-white to-cyan-50/30 dark:from-blue-950/20 dark:via-slate-900 dark:to-cyan-950/20">
        <div className="container-standard section-gutter">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Your Financial Story — Interpreted with Accuracy, Not Automation
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At QuantiFi, we don&apos;t just send dashboards — we deliver meaning. Every report we produce is manually analyzed, contextually explained, and tied directly to your business goals.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
              Our accounting professionals translate complex financial data into plain language, empowering leaders to take action with confidence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
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
            <Button asChild size="lg" className="bg-quantifi-primary hover:bg-quantifi-primary/90 text-lg px-8 py-6">
              <Link href="/contact">
                See Your Numbers Clearly
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 md:py-40 bg-slate-50 dark:bg-slate-900/50">
        <div className="container-standard section-gutter">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Financial Analytics FAQs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get answers to the most common questions about our financial analytics and reporting services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-gray-700 px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-lg font-semibold text-foreground pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
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
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link href="/contact">
                Still Have Questions? Contact QuantiFi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-32 md:py-40 bg-gradient-to-br from-cyan-600 via-cyan-700 to-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container-standard section-gutter text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to See Your Financials in a Whole New Light?
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
              From variance analysis to cash flow clarity, QuantiFi delivers reports that reveal what your numbers are really saying.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 text-lg px-8 py-6">
                <Link href="/contact">
                  Request a Financial Review
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-cyan-600 text-lg px-8 py-6">
                <Link href="/contact">
                  Schedule a Consultation
                </Link>
              </Button>
            </div>

            {/* Internal Links */}
            <div className="mt-16 pt-8 border-t border-white/20">
              <p className="text-sm opacity-75 mb-4">Explore our related services:</p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/services/outsourced-accounting" className="text-sm hover:text-cyan-300 transition-colors flex items-center gap-1">
                  Outsourced Accounting <ChevronRight className="h-3 w-3" />
                </Link>
                <Link href="/services/cfo-controller" className="text-sm hover:text-cyan-300 transition-colors flex items-center gap-1">
                  Controller & CFO Services <ChevronRight className="h-3 w-3" />
                </Link>
                <Link href="/services/systems-integration" className="text-sm hover:text-cyan-300 transition-colors flex items-center gap-1">
                  Systems Integration <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

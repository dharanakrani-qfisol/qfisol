'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  ArrowRight, 
  FileText, 
  Building2,
  Receipt, 
  Calendar,
  Shield,
  TrendingUp,
  Zap,
  Scale,
  Globe,
  ChevronRight,
  BarChart3,
  Clock,
  FileCheck,
  Lightbulb,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Service data
const taxServices = [
  {
    icon: Lightbulb,
    title: 'Tax Planning & Advisory',
    description: 'We develop forward-thinking tax strategies that reduce liabilities and improve cash flow. Every plan is designed to align with your business structure and growth goals.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Building2,
    title: 'Corporate & Personal Tax Review',
    description: 'We review both business and personal returns to ensure all entries are accurate, deductions are maximized, and everything is ready for CPA submission.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Receipt,
    title: 'Sales & Use Tax Compliance',
    description: 'From registration to reporting, we handle multi-state compliance, rate calculations, and documentation with precision.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: FileText,
    title: 'Quarterly & Annual Filings',
    description: 'We prepare quarterly estimates, annual reports, and 1099s — ensuring consistency and alignment with your accounting data.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Shield,
    title: 'IRS Correspondence & Audit Support',
    description: 'We assist with audit preparation, respond to IRS or state inquiries, and organize documentation for clarity and compliance.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: BarChart3,
    title: 'Year-Round Tax Readiness',
    description: 'With continuously reconciled books, you\'re always prepared for filing — no missing entries or last-minute stress.',
    color: 'from-indigo-500 to-indigo-600'
  }
];

const benefits = [
  {
    icon: CheckCircle2,
    title: 'CPA-Reviewed Accuracy',
    description: 'Every tax review is double-checked for compliance and accuracy, reducing filing risks.'
  },
  {
    icon: Zap,
    title: 'Streamlined Process',
    description: 'Automated systems connect bookkeeping and tax review for consistency and speed.'
  },
  {
    icon: Clock,
    title: 'Year-Round Readiness',
    description: 'We keep your books tax-ready so deadlines never sneak up.'
  },
  {
    icon: TrendingUp,
    title: 'Strategic Planning',
    description: 'Gain insights that minimize liabilities and identify optimization opportunities.'
  },
  {
    icon: Globe,
    title: 'Multi-State & Sales Tax Compliance',
    description: 'Seamless registration and reporting for businesses operating across state lines.'
  },
  {
    icon: Scale,
    title: 'Scalable Partnership',
    description: 'Whether you\'re a startup or multi-entity corporation, our support grows with you.'
  }
];

const faqs = [
  {
    question: 'Which businesses benefit most from your tax prep services?',
    answer: 'From startups to established corporations, any business that values accuracy and compliance can benefit. We support industries including healthcare, real estate, retail, and construction.'
  },
  {
    question: 'What documents are needed for tax preparation?',
    answer: 'You\'ll need your financial statements, payroll reports, prior-year returns, and expense records. Our team provides a checklist to make collection simple.'
  },
  {
    question: 'Do you review individual tax returns too?',
    answer: 'Yes — we review both business and individual returns for accuracy, consistency, and potential savings before your CPA files.'
  },
  {
    question: 'Can business losses be deducted?',
    answer: 'In most cases, yes. We help identify eligible losses that can offset income or reduce future liabilities.'
  },
  {
    question: 'What\'s the difference between federal and state tax prep?',
    answer: 'Federal taxes are national; state taxes vary by location. We handle both to ensure consistency across jurisdictions.'
  },
  {
    question: 'Do you handle sales and use tax compliance?',
    answer: 'Absolutely. We manage registration, reporting, and remittance for multi-state operations.'
  },
  {
    question: 'What if my books aren\'t tax-ready yet?',
    answer: 'No problem — we\'ll clean, reconcile, and organize your books to make them compliant and audit-ready.'
  },
  {
    question: 'How do you work with CPAs?',
    answer: 'We act as your liaison — reviewing your data, preparing reports, and coordinating directly with your CPA for final filing.'
  }
];

export default function TaxPreparationContent() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 dark:from-slate-900 dark:via-blue-950/20 dark:to-indigo-950/30">
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
              <Badge className="mb-6 px-4 py-2 text-sm font-semibold bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300">
                Tax Preparation & Compliance
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                Stay Compliant, Minimize Liability, and Plan Ahead
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Tax season doesn&apos;t have to be stressful. QuantiFi&apos;s tax preparation and compliance services keep your business organized, compliant, and optimized for financial success.
              </p>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                We review corporate and personal tax returns, manage multi-state sales and use tax filings, and work directly with your CPA — ensuring accuracy and peace of mind.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-6">
                  <Link href="/contact">
                    Start Your Tax Review
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-gray-900">
                  <Link href="/contact">
                    Inquire Now
                  </Link>
                </Button>
              </div>

              {/* Trust Bar */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-center gap-8 text-sm text-slate-600 dark:text-slate-400">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">50+</div>
                    <div>Businesses Supported</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">100%</div>
                    <div>Compliance Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">15+</div>
                    <div>Years Experience</div>
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
                      Tax Dashboard
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 rounded-xl p-4 border border-orange-200 dark:border-orange-800">
                      <div className="flex items-center gap-3 mb-2">
                        <FileCheck className="h-5 w-5 text-orange-600" />
                        <span className="text-sm font-semibold text-orange-700 dark:text-orange-300">Tax Review Status</span>
                      </div>
                      <div className="text-lg font-bold text-orange-600 dark:text-orange-400">Complete</div>
                      <div className="text-xs text-orange-700 dark:text-orange-300">Ready for CPA filing</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center gap-3 mb-2">
                        <Receipt className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Sales Tax</span>
                      </div>
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">5 States</div>
                      <div className="text-xs text-blue-700 dark:text-blue-300">Multi-state compliance</div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-xl p-4 border border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-semibold text-green-700 dark:text-green-300">Deadline</span>
                      </div>
                      <div className="text-lg font-bold text-green-600 dark:text-green-400">On Track</div>
                      <div className="text-xs text-green-700 dark:text-green-300">All filings current</div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">All returns reviewed</span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Updated 2 min ago</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
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
              We Make Tax Season Stress-Free — Year-Round
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              At QuantiFi, tax preparation isn&apos;t a once-a-year panic — it&apos;s a year-round process of organization, accuracy, and readiness.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We don&apos;t file returns directly; instead, our experts review, reconcile, and prepare both corporate and personal tax documentation so your CPA can file with complete confidence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From multi-state sales and use taxes to quarterly filings and audit preparation, we ensure your financials remain compliant and ready for any review. With QuantiFi, you get more than just preparation — you get strategy.
            </p>
          </motion.div>

          {/* Pro Tip Box */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-800/50 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Pro Tip</h3>
                <p className="text-lg text-muted-foreground">
                  Organized books = smoother tax filings = better financial outcomes.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Accent Box */}
          <motion.div
            className="mt-12 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 rounded-2xl p-6 border border-teal-200/50 dark:border-teal-800/50 max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-semibold text-teal-800 dark:text-teal-200">
              Year-Round Compliance & Peace of Mind
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Tax Preparation & Compliance Services */}
      <section className="py-32 md:py-40 bg-white dark:bg-slate-900">
        <div className="container-standard section-gutter">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Comprehensive Tax Review & Compliance Support
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We deliver end-to-end tax support — from planning and document preparation to compliance reviews and CPA coordination. Each service ensures your filings are accurate, compliant, and optimized for growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {taxServices.map((service, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full transition-all duration-300 border-0 shadow-lg group-hover:shadow-xl group-hover:border-teal-200 dark:group-hover:border-teal-800 ${
                  index % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-800/50'
                }`}>
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner with QuantiFi */}
      <section className="py-32 md:py-40 bg-gradient-to-br from-teal-50/30 via-blue-50/20 to-white dark:from-teal-950/20 dark:via-blue-950/10 dark:to-slate-900">
        <div className="container-standard section-gutter">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Why Businesses Trust QuantiFi for Tax Preparation & Compliance
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Tax compliance is more than filing returns — it&apos;s about strategic accuracy and proactive control.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
              At QuantiFi, we bridge the gap between your bookkeeping and your CPA, transforming complex data into clean, actionable insights. From federal filings to multi-state sales tax, we ensure your business remains compliant, optimized, and confident — all year long.
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
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
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
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-6">
              <Link href="/contact">
                Make This Your Easiest Tax Season Yet
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
              Tax Preparation FAQs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Still have questions? Here are some of the most common ones our clients ask before getting started.
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
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-gray-900">
              <Link href="/contact">
                Still Have Questions? Contact QuantiFi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-32 md:py-40 bg-gradient-to-br from-teal-600 via-teal-700 to-slate-900 text-white relative overflow-hidden">
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
              File Smarter, Not Harder
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Simplify your tax season with organized, accurate, and CPA-ready books — backed by experts who care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-6">
                <Link href="/contact">
                  Schedule a Tax Review
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-teal-600 text-lg px-8 py-6">
                <Link href="/contact">
                  Talk to a Specialist
                </Link>
              </Button>
            </div>

            {/* Internal Links */}
            <div className="mt-16 pt-8 border-t border-white/20">
              <p className="text-sm opacity-75 mb-4">Explore our related services:</p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/services/outsourced-accounting" className="text-sm hover:text-teal-300 transition-colors flex items-center gap-1">
                  Outsourced Accounting <ChevronRight className="h-3 w-3" />
                </Link>
                <Link href="/services/cfo-controller" className="text-sm hover:text-teal-300 transition-colors flex items-center gap-1">
                  Controller & CFO <ChevronRight className="h-3 w-3" />
                </Link>
                <Link href="/services/payroll-hr" className="text-sm hover:text-teal-300 transition-colors flex items-center gap-1">
                  Payroll & HR <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  ArrowRight, 
  FileText, 
  CreditCard, 
  TrendingUp, 
  Banknote,
  BarChart3,
  DollarSign,
  Calendar,
  Settings,
  Users,
  Shield,
  Zap,
  Target,
  Eye,
  Scale,
  Globe,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Service data
const bookkeepingServices = [
  {
    icon: FileText,
    title: 'General Ledger Maintenance',
    description: 'Our team records and classifies every transaction — sales, expenses, and payments — ensuring your ledger always reflects accurate, real-time data. We regularly review and reconcile entries to maintain clean, compliant books that support sound financial decisions.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: CreditCard,
    title: 'Accounts Payable',
    description: 'We manage your outgoing payments with precision. From vendor invoices to due-date tracking, we ensure timely payments and proper documentation, helping you maintain strong supplier relationships and avoid late fees.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: TrendingUp,
    title: 'Accounts Receivable',
    description: 'Our accountants stay on top of billing and collections to keep your cash flow steady. We send invoices promptly, track payments, and follow up professionally to minimize delays and maintain reliable incoming revenue.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Banknote,
    title: 'Bank Reconciliation',
    description: 'We verify that your internal financial records align with bank statements, identifying and correcting any discrepancies quickly. This ensures your financial position remains accurate and helps prevent errors or potential fraud.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: BarChart3,
    title: 'Financial Statement Preparation',
    description: 'Each month, we prepare accurate Balance Sheets, Income Statements, and Cash Flow Reports. These GAAP-compliant financials give you a clear, organized view of your company\'s performance and simplify tax filing and compliance.',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: DollarSign,
    title: 'Cash Flow Management',
    description: 'We monitor and analyze your cash inflows and outflows to help you anticipate shortfalls and plan ahead. Our proactive cash flow strategies ensure you always have enough liquidity to cover operations and fuel growth.',
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: Calendar,
    title: 'Budgeting & Forecasting',
    description: 'Our financial experts develop practical budgets and forecasts tailored to your business goals. By using real data and trend analysis, we help you plan confidently, allocate resources wisely, and avoid financial surprises.',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Settings,
    title: 'Back-Office Accounting Support',
    description: 'We act as your full-service virtual accounting department — managing reconciliations, reporting, documentation, and process improvement. Our streamlined workflows keep your operations efficient, compliant, and ready for growth.',
    color: 'from-slate-500 to-slate-600'
  }
];

const benefits = [
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Gain access to experienced CPAs who translate complex financial data into meaningful insights.'
  },
  {
    icon: Zap,
    title: 'Streamlined Operations',
    description: 'Automate workflows to reduce manual tasks and ensure your books are always current.'
  },
  {
    icon: Shield,
    title: 'Accurate & Compliant',
    description: 'GAAP-compliant, audit-ready reports every month.'
  },
  {
    icon: Eye,
    title: 'Timely Insights',
    description: 'Monthly dashboards track performance, expenses, and cash flow in real time.'
  },
  {
    icon: Target,
    title: 'Financial Efficiency',
    description: 'Reduce redundancy, improve reporting speed, and boost productivity.'
  },
  {
    icon: TrendingUp,
    title: 'Sustained Growth',
    description: 'Clear visibility enables confident, strategic decisions that scale with your business.'
  }
];

const advantages = [
  {
    icon: DollarSign,
    title: 'Save up to 50% on Costs',
    description: 'Reduce overhead without compromising quality or accuracy.'
  },
  {
    icon: Users,
    title: 'Access Experienced CPAs',
    description: 'Get expert insights and strategic advice — without full-time costs.'
  },
  {
    icon: Eye,
    title: 'Real-Time Financial Visibility',
    description: 'Access live dashboards and monthly analytics anytime.'
  },
  {
    icon: Shield,
    title: 'GAAP-Compliant Financials',
    description: 'Every report is CPA-reviewed and audit-ready.'
  },
  {
    icon: Globe,
    title: 'Nationwide Virtual Collaboration',
    description: 'We serve clients coast to coast through secure cloud platforms.'
  },
  {
    icon: Scale,
    title: 'Scalable Partnership',
    description: 'As your business grows, our support scales seamlessly with it.'
  }
];

const faqs = [
  {
    question: 'What is outsourced bookkeeping and how does it work?',
    answer: 'Outsourced bookkeeping is when you hire an external accounting firm to handle your day-to-day financial operations. At QuantiFi, we use secure cloud-based platforms to access your financial data, record transactions, reconcile accounts, and provide monthly financial statements. Our virtual team integrates seamlessly with your business operations.'
  },
  {
    question: 'How much does outsourced bookkeeping cost?',
    answer: 'Our pricing varies based on your business size, transaction volume, and specific needs. Most clients save 30-50% compared to hiring in-house staff. We offer transparent, flat-rate pricing starting at $500/month for small businesses. Contact us for a customized quote based on your requirements.'
  },
  {
    question: 'Is my financial data secure with outsourced bookkeeping?',
    answer: 'Absolutely. We use bank-level encryption, secure cloud platforms, and strict access controls. All our team members are background-checked and sign confidentiality agreements. We\'re SOC 2 compliant and follow industry best practices for data security and privacy.'
  },
  {
    question: 'How quickly can you get started with my bookkeeping?',
    answer: 'We can typically begin bookkeeping services within 1-2 weeks of onboarding. This includes setting up secure access to your accounts, understanding your business processes, and establishing our workflow. For urgent needs, we can expedite the process.'
  },
  {
    question: 'What accounting software do you use?',
    answer: 'We work with all major accounting platforms including QuickBooks, Xero, Sage, and industry-specific software. We can also help you choose the best platform for your business if you don\'t currently have one. Our team is certified in multiple accounting systems.'
  },
  {
    question: 'Will I still have access to my financial data?',
    answer: 'Yes, you\'ll have 24/7 access to your financial data through our secure client portal. You can view real-time reports, download statements, and access your books anytime. We also provide monthly financial packages and are available for questions or consultations.'
  },
  {
    question: 'What happens if I need to switch back to in-house accounting?',
    answer: 'While we hope you\'ll stay with us long-term, we make transitions easy. We\'ll provide all your financial records, documentation, and help train your in-house team. There are no long-term contracts, so you can make changes as your business needs evolve.'
  },
  {
    question: 'Do you handle tax preparation and filing?',
    answer: 'While our primary focus is bookkeeping and monthly financial management, we work closely with your tax preparer to ensure accurate, timely records. We can also refer you to qualified tax professionals in our network who can handle your tax preparation and filing needs.'
  }
];

export default function OutsourcedAccountingContent() {
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
              <Badge className="mb-6 px-4 py-2 text-sm font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                Nationwide Virtual Accounting
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                Get Real-Time Bookkeeping & Accounting Support — Anywhere in the U.S.
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                QuantiFi is your trusted virtual accounting partner providing seamless, accurate, and reliable bookkeeping services for businesses across California, Georgia, North Carolina, Iowa, and nationwide. We simplify your financial operations so you can focus on growing your business.
              </p>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Welcome to your one-stop virtual solution for complete financial clarity. Our accountants handle everything — from daily transactions and reconciliations to monthly reports and forecasts — giving you real-time accuracy and confidence in every decision.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-quantifi-primary hover:bg-quantifi-primary/90 text-lg px-8 py-6">
                  <Link href="/contact">
                    Inquire Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-gray-900">
                  <Link href="/contact">
                    Schedule a Call
                  </Link>
                </Button>
              </div>

              {/* Trust Bar */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-center gap-8 text-sm text-slate-600 dark:text-slate-400">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">50+</div>
                    <div>Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">15+</div>
                    <div>Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">99%</div>
                    <div>Accuracy</div>
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
                      Financial Dashboard
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">$125K</div>
                      <div className="text-xs text-blue-700 dark:text-blue-300">Monthly Revenue</div>
                      <div className="text-xs text-green-600 font-semibold">+18.2% ↗</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-xl p-4 border border-green-200 dark:border-green-800">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">$45K</div>
                      <div className="text-xs text-green-700 dark:text-green-300">Net Profit</div>
                      <div className="text-xs text-green-600 font-semibold">+12.4% ↗</div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl p-4 border border-purple-200 dark:border-purple-800">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">$89K</div>
                      <div className="text-xs text-purple-700 dark:text-purple-300">Cash Flow</div>
                      <div className="text-xs text-green-600 font-semibold">+8.1% ↗</div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">All accounts reconciled</span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Updated 5 min ago</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Statement */}
      <section className="py-32 md:py-40 bg-slate-50 dark:bg-slate-900/50">
        <div className="container-standard section-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Your Accounting, Simplified — Expert Support Tailored to Your Business
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Every business is unique, and so are its financial needs. QuantiFi&apos;s accounting specialists deliver flexible, high-quality support designed around your goals — not a one-size-fits-all template.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you need ongoing monthly bookkeeping or complete back-office support, we ensure accuracy, timeliness, and total transparency. Our virtual team integrates seamlessly with your systems to provide real-time reporting and financial clarity.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <BarChart3 className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Reports</h3>
                <p className="text-sm text-muted-foreground">Monthly financial statements and analytics</p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <DollarSign className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Cash Flow</h3>
                <p className="text-sm text-muted-foreground">Real-time cash flow monitoring and analysis</p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Calendar className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Forecast</h3>
                <p className="text-sm text-muted-foreground">Strategic budgeting and financial planning</p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Shield className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Compliance</h3>
                <p className="text-sm text-muted-foreground">GAAP-compliant, audit-ready records</p>
              </div>
            </motion.div>
          </div>

          {/* Accent Box */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-800/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Proven Results</h3>
                <p className="text-lg text-muted-foreground">
                  Clients see an average 15% profit increase within their first year with QuantiFi.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Bookkeeping Services Do We Offer */}
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
              Comprehensive Bookkeeping Services Built for Clarity and Control
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              We manage every aspect of your financial operations — from daily transaction recording and reconciliations to budgeting and forecasting — so you can focus on strategy, not spreadsheets.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At QuantiFi, our outsourced bookkeeping and accounting services bring accuracy, transparency, and peace of mind to your finances. Our virtual accounting team keeps your books organized, compliant, and always ready for confident decision-making.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bookkeepingServices.map((service, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white dark:bg-slate-800 hover:shadow-xl transition-all duration-300 border-0 shadow-lg group-hover:border-blue-200 dark:group-hover:border-blue-800">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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

      {/* Why Outsourced Bookkeeping Matters */}
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
              Why Outsourced Bookkeeping & Monthly Accounting Matter for Business Growth
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Outsourcing your bookkeeping isn&apos;t just a cost-saving choice — it&apos;s a strategic investment. At QuantiFi, we blend accounting expertise with advanced automation to give you accuracy, insight, and freedom to focus on what matters most: growing your business.
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
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
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
        </div>
      </section>

      {/* Why Partner with QuantiFi */}
      <section className="py-32 md:py-40 bg-white dark:bg-slate-900">
        <div className="container-standard section-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Your Accounting Partner — Not Just Your Service Provider
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                With QuantiFi, you don&apos;t just outsource your books — you gain a partner. Our Liaison Accounting Partnership (LAP) model turns your accounting into a growth advantage. We act as your virtual finance department, combining CPA oversight, automation, and proactive communication for complete financial clarity.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              {advantages.map((advantage, index) => (
                <Card key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200/50 dark:border-blue-800/50 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                      <advantage.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
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
                Schedule a Consultation
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We believe in transparency. Here are answers to the most common questions about our outsourced bookkeeping and accounting services.
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
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-32 md:py-40 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
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
              Ready to Gain Clarity and Control Over Your Finances?
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Partner with QuantiFi — your trusted virtual accounting team for smarter, simpler, and scalable financial management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-gray-100 text-lg px-8 py-6">
                <Link href="/contact">
                  Schedule a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>

            {/* Internal Links */}
            <div className="mt-16 pt-8 border-t border-white/20">
              <p className="text-sm opacity-75 mb-4">Explore our other services:</p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/services/payroll-hr" className="text-sm hover:text-blue-300 transition-colors flex items-center gap-1">
                  Payroll & HR <ChevronRight className="h-3 w-3" />
                </Link>
                <Link href="/services/tax" className="text-sm hover:text-blue-300 transition-colors flex items-center gap-1">
                  Tax & Compliance <ChevronRight className="h-3 w-3" />
                </Link>
                <Link href="/services/cfo-controller" className="text-sm hover:text-blue-300 transition-colors flex items-center gap-1">
                  Controller & CFO <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

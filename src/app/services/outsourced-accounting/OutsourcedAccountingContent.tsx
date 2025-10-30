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
    description: 'Our team records and classifies every transaction (sales, expenses, and payments), ensuring your ledger always reflects accurate, real-time data. We regularly review and reconcile entries to maintain clean, compliant books that support sound financial decisions.',
    color: 'from-[#0015ff] to-[#0012cc]'
  },
  {
    icon: CreditCard,
    title: 'Accounts Payable',
    description: 'We manage your outgoing payments with precision. From vendor invoices to due-date tracking, we ensure timely payments and proper documentation, helping you maintain strong supplier relationships and avoid late fees.',
    color: 'from-[#0015ff] to-[#0012cc]'
  },
  {
    icon: TrendingUp,
    title: 'Accounts Receivable',
    description: 'Our accountants stay on top of billing and collections to keep your cash flow steady. We send invoices promptly, track payments, and follow up professionally to minimize delays and maintain reliable incoming revenue.',
    color: 'from-[#0015ff] to-[#0012cc]'
  },
  {
    icon: Banknote,
    title: 'Bank Reconciliation',
    description: 'We verify that your internal financial records align with bank statements, identifying and correcting any discrepancies quickly. This ensures your financial position remains accurate and helps prevent errors or potential fraud.',
    color: 'from-[#0015ff] to-[#0012cc]'
  },
  {
    icon: BarChart3,
    title: 'Financial Statement Preparation',
    description: 'Each month, we prepare accurate Balance Sheets, Income Statements, and Cash Flow Reports. These GAAP-compliant financials give you a clear, organized view of your company\'s performance and simplify tax filing and compliance.',
    color: 'from-[#0015ff] to-[#0012cc]'
  },
  {
    icon: DollarSign,
    title: 'Cash Flow Management',
    description: 'We monitor and analyze your cash inflows and outflows to help you anticipate shortfalls and plan ahead. Our proactive cash flow strategies ensure you always have enough liquidity to cover operations and fuel growth.',
    color: 'from-[#0015ff] to-[#0012cc]'
  },
  {
    icon: Calendar,
    title: 'Budgeting & Forecasting',
    description: 'Our financial experts develop practical budgets and forecasts tailored to your business goals. By using real data and trend analysis, we help you plan confidently, allocate resources wisely, and avoid financial surprises.',
    color: 'from-[#0015ff] to-[#0012cc]'
  },
  {
    icon: Settings,
    title: 'Back-Office Accounting Support',
    description: 'We act as your full-service virtual accounting department, managing reconciliations, reporting, documentation, and process improvement. Our streamlined workflows keep your operations efficient, compliant, and ready for growth.',
    color: 'from-[#0015ff] to-[#0012cc]'
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
    description: 'Get expert insights and strategic advice without full-time costs.'
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
    <div className="pt-16 md:pt-20">
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
                Nationwide Virtual Accounting
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight mb-6">
                Get Real-Time Bookkeeping & Accounting Support Anywhere in the U.S.
              </h1>
              
              <p className="text-xl md:text-2xl text-black/70 dark:text-white/70 mb-8 leading-relaxed">
                Every business is unique and so are its financial needs. QuantiFi provides virtual bookkeeping and small business accounting (SMB accounting) services nationwide, delivering flexible, high-quality support tailored to your goals.
              </p>
              
              <p className="text-lg text-black/70 dark:text-white/70 mb-8 leading-relaxed">
                Whether you need monthly bookkeeping or complete outsourced accounting, we ensure accurate, GAAP-compliant, and audit-ready financial records. Our virtual team integrates seamlessly with your systems to provide real-time reporting, clear insights, and total transparency so you can focus on growing your business with confidence.
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
                    <div className="text-2xl font-bold text-black dark:text-white">100+</div>
                    <div>Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black dark:text-white">15+</div>
                    <div>Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black dark:text-white">99%</div>
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
                <div className="relative bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-black/20 dark:border-white/20">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-black dark:bg-white rounded-full"></div>
                      <div className="w-3 h-3 bg-black dark:bg-white rounded-full"></div>
                      <div className="w-3 h-3 bg-black dark:bg-white rounded-full"></div>
                    </div>
                    <div className="text-xs font-medium text-black/70 dark:text-white/70 bg-white/50 dark:bg-black/50 px-3 py-1 rounded-full border border-black/10 dark:border-white/10">
                      Financial Dashboard
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-[#0015ff]/10 to-[#0015ff]/20 dark:from-[#0015ff]/30 dark:to-[#0015ff]/20 rounded-xl p-4 border border-[#0015ff]">
                      <div className="text-2xl font-bold text-[#0015ff] dark:text-[#0015ff] mb-1">$125K</div>
                      <div className="text-xs text-black dark:text-white">Monthly Revenue</div>
                      <div className="text-xs text-black dark:text-white font-semibold">+18.2% ↗</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-[#0015ff]/10 to-[#0015ff]/20 dark:from-[#0015ff]/30 dark:to-[#0015ff]/20 rounded-xl p-4 border border-[#0015ff]">
                      <div className="text-2xl font-bold text-[#0015ff] dark:text-[#0015ff] mb-1">$45K</div>
                      <div className="text-xs text-black dark:text-white">Net Profit</div>
                      <div className="text-xs text-black dark:text-white font-semibold">+12.4% ↗</div>
                    </div>

                    <div className="bg-gradient-to-br from-[#0015ff]/10 to-[#0015ff]/20 dark:from-[#0015ff]/30 dark:to-[#0015ff]/20 rounded-xl p-4 border border-[#0015ff]">
                      <div className="text-2xl font-bold text-[#0015ff] dark:text-[#0015ff] mb-1">$89K</div>
                      <div className="text-xs text-black dark:text-white">Cash Flow</div>
                      <div className="text-xs text-black dark:text-white font-semibold">+8.1% ↗</div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-black/20 dark:border-white/20">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#0015ff] rounded-full animate-pulse"></div>
                      <span className="text-xs text-black/70 dark:text-white/70">All accounts reconciled</span>
                    </div>
                    <span className="text-xs text-black/70 dark:text-white/70">Updated 5 min ago</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Statement */}
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container-standard section-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight mb-6">
                Your Accounting, Simplified. Expert Support Tailored to Your Business
              </h2>
              <p className="text-lg text-black/70 dark:text-white/70 mb-6 leading-relaxed">
                Every business is unique, and so are its financial needs. QuantiFi&apos;s accounting specialists deliver flexible, high-quality support designed around your goals, not a one-size-fits-all template.
              </p>
              <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed">
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
              <div className="bg-white dark:bg-black rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-black/10 dark:border-white/10">
                <BarChart3 className="h-12 w-12 text-[#0015ff] mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Reports</h3>
                <p className="text-sm text-black/70 dark:text-white/70">Monthly financial statements and analytics</p>
              </div>
              <div className="bg-white dark:bg-black rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-black/10 dark:border-white/10">
                <DollarSign className="h-12 w-12 text-[#0015ff] mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Cash Flow</h3>
                <p className="text-sm text-black/70 dark:text-white/70">Real-time cash flow monitoring and analysis</p>
              </div>
              <div className="bg-white dark:bg-black rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-black/10 dark:border-white/10">
                <Calendar className="h-12 w-12 text-[#0015ff] mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Forecast</h3>
                <p className="text-sm text-black/70 dark:text-white/70">Strategic budgeting and financial planning</p>
              </div>
              <div className="bg-white dark:bg-black rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-black/10 dark:border-white/10">
                <Shield className="h-12 w-12 text-[#0015ff] mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Compliance</h3>
                <p className="text-sm text-black/70 dark:text-white/70">GAAP-compliant, audit-ready records</p>
              </div>
            </motion.div>
          </div>

          {/* Accent Box */}
          <motion.div
            className="mt-16 bg-[#0015ff]/5 dark:bg-[#0015ff]/10 rounded-2xl p-8 border border-[#0015ff]/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0015ff] rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">Proven Results</h3>
                <p className="text-lg text-black/70 dark:text-white/70">
                  Clients see an average 15% profit increase within their first year with QuantiFi.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Bookkeeping Services Do We Offer */}
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
              Comprehensive Bookkeeping Services Built for Clarity and Control
            </h2>
            <p className="text-xl text-black/70 dark:text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">
              We manage every aspect of your financial operations, from daily transaction recording and reconciliations to budgeting and forecasting, so you can focus on strategy, not spreadsheets.
            </p>
            <p className="text-lg text-black/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
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
        </div>
      </section>

      {/* Why Outsourced Bookkeeping Matters */}
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
              Why Outsourced Bookkeeping & Monthly Accounting Matter for Business Growth
            </h2>
            <p className="text-xl text-black/70 dark:text-white/70 max-w-4xl mx-auto leading-relaxed">
              Outsourcing your bookkeeping isn&apos;t just a cost-saving choice. It&apos;s a strategic investment. At QuantiFi, we blend accounting expertise with advanced automation to give you accuracy, insight, and freedom to focus on what matters most: growing your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-black rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-black/10 dark:border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#0015ff] to-[#0012cc] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
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

      {/* Why Partner with QuantiFi */}
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container-standard section-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight mb-6">
                Your Accounting Partner, Not Just Your Service Provider
              </h2>
              <p className="text-xl text-black/70 dark:text-white/70 leading-relaxed">
                With QuantiFi, you don&apos;t just outsource your books, you gain a partner. Our Liaison Accounting Partnership (LAP) model turns your accounting into a growth advantage. We act as your virtual finance department, combining CPA oversight, automation, and proactive communication for complete financial clarity.
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
                <Card key={index} className="bg-[#0015ff]/5 dark:bg-[#0015ff]/10 border-[#0015ff]/20 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0015ff] to-[#0012cc] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                      <advantage.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-sm text-black/70 dark:text-white/70">
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
            <Button asChild size="lg" className="bg-[#0015ff] hover:bg-[#0012cc] text-white text-lg px-8 py-6">
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
              We believe in transparency. Here are answers to the most common questions about our outsourced bookkeeping and accounting services.
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
                    Ready to Gain Clarity and Control Over Your Finances?
                  </h2>
                  <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed text-white">
                    Partner with QuantiFi, your trusted virtual accounting team for smarter, simpler, and scalable financial management.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-white text-[#0015ff] hover:bg-white/90 text-lg px-8 py-6">
                      <Link href="/contact">
                        Schedule a Free Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0015ff] text-lg px-8 py-6">
                      <Link href="/contact">
                        Contact Us
                      </Link>
                    </Button>
                  </div>

                  {/* Internal Links */}
                  <div className="mt-16 pt-8 border-t border-white/20">
                    <p className="text-sm opacity-75 mb-4 text-white">Explore our other services:</p>
                    <div className="flex flex-wrap justify-center gap-6">
                      {[
                        { href: '/services/payroll-hr', label: 'Payroll & HR' },
                        { href: '/services/tax-preparation-compliance', label: 'Tax & Compliance' },
                        { href: '/services/cfo-controller', label: 'Controller & CFO' },
                        { href: '/services/financial-analytics', label: 'Financial Analytics' },
                        { href: '/services/systems-integration', label: 'Systems Integration' }
                      ].filter((service) => service.href !== '/services/outsourced-accounting').map((service) => (
                        <Link key={service.href} href={service.href} className="text-sm text-white hover:text-white/70 transition-colors flex items-center gap-1">
                          {service.label} <ChevronRight className="h-3 w-3" />
                        </Link>
                      ))}
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

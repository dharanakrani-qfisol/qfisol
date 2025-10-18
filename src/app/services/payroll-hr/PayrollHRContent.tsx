'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  ArrowRight, 
  Users, 
  Shield,
  Calculator,
  BarChart3,
  Calendar,
  Settings,
  ChevronRight,
  CheckCircle2,
  Clock,
  DollarSign,
  Zap,
  UserCheck,
  CreditCard,
  TrendingUp
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Service data
const payrollServices = [
  {
    icon: Calculator,
    title: 'Payroll Processing',
    description: 'We manage all payroll activities — from time tracking to salary disbursement — ensuring accuracy, confidentiality, and timeliness every pay period.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Users,
    title: 'Employee Record Management',
    description: 'Maintain organized, compliant HR records, including onboarding documents, benefits data, and employment history.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Shield,
    title: 'Compliance & Tax Support',
    description: 'We ensure payroll deductions, filings, and records meet federal and state regulations. Partner systems like Gusto and ADP handle final submissions seamlessly.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: CreditCard,
    title: 'Benefits & Deductions Tracking',
    description: 'Our experts monitor health, retirement, and deduction changes to maintain accuracy and prevent compliance issues.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: BarChart3,
    title: 'Payroll Reporting & Reconciliation',
    description: 'Generate detailed payroll summaries and reconcile wage, tax, and benefits data for error-free audits.',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Calendar,
    title: 'Year-End Processing',
    description: 'Prepare and review W-2s, 1099s, and other filings for accuracy before your CPA submits them.',
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: UserCheck,
    title: 'Onboarding & Offboarding Support',
    description: 'Smooth transitions for new hires and exiting employees with proper documentation and compliance checks.',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Settings,
    title: 'Payroll Technology Integration',
    description: 'Integrate payroll data with your accounting and HR systems — ensuring real-time updates and fewer manual entries.',
    color: 'from-slate-500 to-slate-600'
  }
];

const benefits = [
  {
    icon: CheckCircle2,
    title: 'CPA-Reviewed Accuracy',
    description: 'Every payroll is reviewed for compliance and consistency with federal and state requirements.'
  },
  {
    icon: Zap,
    title: 'Automated & Streamlined',
    description: 'We integrate leading payroll systems like Gusto, ADP, and QuickBooks for smooth operations.'
  },
  {
    icon: Shield,
    title: 'Confidential & Secure',
    description: 'Data encryption and role-based access ensure employee data stays private and protected.'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Visibility',
    description: 'Access live payroll summaries, tax deductions, and HR metrics from one dashboard.'
  },
  {
    icon: Clock,
    title: 'On-Time Every Time',
    description: 'We manage all pay runs, filings, and adjustments — ensuring consistent accuracy.'
  },
  {
    icon: TrendingUp,
    title: 'Scalable for Growth',
    description: 'Whether you\'re hiring your first team or expanding to multiple states, we scale with you.'
  }
];

const faqs = [
  {
    question: 'Which Businesses Benefit from Payroll Outsourcing?',
    answer: 'Businesses of all sizes benefit — especially those without in-house HR teams or growing across multiple states.'
  },
  {
    question: 'Do You File Payroll Taxes?',
    answer: 'We prepare and review all payroll tax data and coordinate with systems like Gusto or ADP, which handle final filing and remittance.'
  },
  {
    question: 'Can You Manage Multi-State Payroll?',
    answer: 'Yes, we manage compliance and tax requirements across multiple states.'
  },
  {
    question: 'What Payroll Platforms Do You Support?',
    answer: 'We work seamlessly with Gusto, ADP, QuickBooks, Paychex, and other major payroll providers.'
  },
  {
    question: 'Do You Handle Employee Benefits?',
    answer: 'Yes, we manage benefits setup, deductions, and coordination with third-party providers.'
  },
  {
    question: 'Is My Payroll Data Secure?',
    answer: 'Absolutely. All payroll data is stored securely in encrypted systems with controlled access.'
  },
  {
    question: 'How Can You Improve My Payroll Process?',
    answer: 'We identify inefficiencies in your current payroll workflows and implement automation, system integration, and compliance checks to make payroll faster, more accurate, and error-free. Our goal is to eliminate manual steps, reduce errors, and give you complete visibility over payroll performance.'
  }
];

export default function PayrollHRContent() {
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
              <Badge className="mb-6 px-4 py-2 text-sm font-semibold bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                Payroll & HR Support
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                Reliable Payroll & HR Support That Scales With You
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                QuantiFi provides seamless, accurate, and confidential payroll management for businesses across California, Georgia, North Carolina, Iowa, and nationwide — ensuring your team gets paid on time, every time.
              </p>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                From processing payrolls and managing employee data to ensuring tax compliance, we handle every aspect of your payroll and HR operations. Whether you run payroll in-house or through a third-party provider, our team ensures accuracy, compliance, and peace of mind — every cycle.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-quantifi-primary hover:bg-quantifi-primary/90 text-lg px-8 py-6">
                  <Link href="/contact">
                    Simplify Payroll With QuantiFi
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link href="/contact">
                    Schedule a Free Consultation
                  </Link>
                </Button>
              </div>

              {/* Trust Bar */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-center gap-8 text-sm text-slate-600 dark:text-slate-400">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">99%</div>
                    <div>Accuracy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">4</div>
                    <div>States Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">24/7</div>
                    <div>Support Available</div>
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
                      Payroll Dashboard
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-xl p-4 border border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-3 mb-2">
                        <Users className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-semibold text-green-700 dark:text-green-300">Employees</span>
                      </div>
                      <div className="text-lg font-bold text-green-600 dark:text-green-400">24</div>
                      <div className="text-xs text-green-700 dark:text-green-300">Active payroll</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center gap-3 mb-2">
                        <DollarSign className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Payroll Total</span>
                      </div>
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">$47,250</div>
                      <div className="text-xs text-blue-700 dark:text-blue-300">This period</div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl p-4 border border-purple-200 dark:border-purple-800">
                      <div className="flex items-center gap-3 mb-2">
                        <Shield className="h-5 w-5 text-purple-600" />
                        <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">Compliance</span>
                      </div>
                      <div className="text-lg font-bold text-purple-600 dark:text-purple-400">100%</div>
                      <div className="text-xs text-purple-700 dark:text-purple-300">Tax compliant</div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">Payroll processed</span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Updated 5 min ago</span>
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
              Your Payroll, Simplified — Precision, Compliance, and Control
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Paying your team accurately and on time isn&apos;t just an obligation — it&apos;s a reflection of your company&apos;s reliability. QuantiFi&apos;s Payroll & HR Support services combine automation, compliance, and expert oversight to deliver error-free payroll runs and reliable reporting.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We manage everything behind the scenes — from employee setup to tax reconciliation — so your HR operations remain smooth, compliant, and future-ready.
            </p>
          </motion.div>

          {/* Stat Box */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 rounded-2xl p-8 border border-green-200/50 dark:border-green-800/50 max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-semibold text-green-800 dark:text-green-200">
              Trusted by businesses across 4 states, serving 99% payroll accuracy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Payroll & HR Services We Offer */}
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
              Payroll & HR Services We Offer
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We tailor our payroll and HR support to your unique business needs — managing every detail with precision and care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {payrollServices.map((service, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full transition-all duration-300 border-0 shadow-lg group-hover:shadow-xl group-hover:border-green-200 dark:group-hover:border-green-800 ${
                  index % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-800/50'
                }`}>
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
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

      {/* Why Businesses Choose QuantiFi */}
      <section className="py-32 md:py-40 bg-gradient-to-br from-green-50/30 via-blue-50/20 to-white dark:from-green-950/20 dark:via-blue-950/10 dark:to-slate-900">
        <div className="container-standard section-gutter">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Why Companies Nationwide Trust QuantiFi for Payroll & HR Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Payroll isn&apos;t just about numbers — it&apos;s about trust, compliance, and care for your team.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
              At QuantiFi, we combine expert oversight with modern automation tools to eliminate errors, streamline compliance, and keep your employees satisfied and confident in every paycheck.
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
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
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
                Simplify Payroll with QuantiFi
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
              Payroll & HR Support FAQs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get answers to the most common questions about our payroll and HR support services.
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
      <section className="py-32 md:py-40 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white relative overflow-hidden">
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
              Ready to Simplify Payroll and HR?
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Let QuantiFi handle your payroll and compliance, so you can focus on your people and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-slate-700 hover:bg-gray-100 text-lg px-8 py-6">
                <Link href="/contact">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-700 text-lg px-8 py-6">
                <Link href="/contact">
                  Talk to an Expert
                </Link>
              </Button>
            </div>

            {/* Internal Links */}
            <div className="mt-16 pt-8 border-t border-white/20">
              <p className="text-sm opacity-75 mb-4">Explore our related services:</p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/services/tax-preparation-compliance" className="text-sm hover:text-slate-300 transition-colors flex items-center gap-1">
                  Tax Preparation & Compliance <ChevronRight className="h-3 w-3" />
                </Link>
                <Link href="/services/cfo-controller" className="text-sm hover:text-slate-300 transition-colors flex items-center gap-1">
                  Controller & CFO Services <ChevronRight className="h-3 w-3" />
                </Link>
                <Link href="/services/outsourced-accounting" className="text-sm hover:text-slate-300 transition-colors flex items-center gap-1">
                  Outsourced Accounting <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

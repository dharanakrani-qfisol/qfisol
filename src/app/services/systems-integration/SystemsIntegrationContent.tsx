'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  ArrowRight, 
  Settings, 
  Database, 
  CheckCircle2,
  Zap,
  Users,
  ChevronRight,
  Target,
  Lightbulb,
  BarChart3,
  Link as LinkIcon,
  Server,
  Wrench,
  Play
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Service data
const integrationServices = [
  {
    icon: Settings,
    title: 'System Implementation Support',
    description: 'We help you evaluate, configure, and deploy QuickBooks, Xero, or NetSuite systems that best fit your business operations.',
    color: 'from-[#0015ff] to-[#0015ff]'
  },
  {
    icon: Database,
    title: 'Data Migration & Cleanup',
    description: 'We prepare, validate, and load your historical financial data into the new platform, ensuring accuracy and consistency.',
    color: 'from-[#0015ff] to-[#0015ff]'
  },
  {
    icon: CheckCircle2,
    title: 'Testing & Validation',
    description: 'Before go-live, we help you run simulations in a test environment to confirm that every number, report, and workflow works as expected.',
    color: 'from-[#0015ff] to-[#0015ff]'
  },
  {
    icon: LinkIcon,
    title: 'Integration Setup',
    description: 'We guide you in connecting financial tools and APIs such as Ramp, Bill.com, Gusto, or Shopify to your accounting platform. We coordinate with vendors to ensure smooth integration and accurate data mapping, without building custom APIs.',
    color: 'from-[#0015ff] to-[#0015ff]'
  },
  {
    icon: Zap,
    title: 'Workflow Optimization',
    description: 'Our experts identify redundant steps and automate processes to save time and reduce manual entries.',
    color: 'from-[#0015ff] to-[#0015ff]'
  },
  {
    icon: Users,
    title: 'Training & User Support',
    description: 'We conduct end-user walkthroughs and provide guidance for smoother system adoption post-launch.',
    color: 'from-[#0015ff] to-[#0015ff]'
  },
  {
    icon: Wrench,
    title: 'Ongoing Technical Coordination',
    description: 'We collaborate with your software vendors during updates or transitions to maintain system performance and data integrity.',
    color: 'from-[#0015ff] to-[#0015ff]'
  },
  {
    icon: Play,
    title: 'Go-Live Readiness',
    description: 'From demo to deployment, we ensure you\'re fully prepared for launch with clean data, tested systems, and documented workflows.',
    color: 'from-[#0015ff] to-[#0015ff]'
  }
];

const benefits = [
  {
    icon: Lightbulb,
    title: 'End-to-End Support',
    description: 'From demo to go-live, we guide your team through every phase: planning, testing, migration, and training.'
  },
  {
    icon: Database,
    title: 'Seamless Data Migration',
    description: 'Clean, validated financial data ensures an accurate, complete transfer between systems.'
  },
  {
    icon: Settings,
    title: 'Expert System Knowledge',
    description: 'Experienced with QuickBooks, Xero, NetSuite, and Sage Intacct, we know how to make them work together.'
  },
  {
    icon: Target,
    title: 'Proactive Problem Solving',
    description: 'We anticipate integration issues before they happen, saving you downtime and frustration.'
  },
  {
    icon: Play,
    title: 'Go-Live Confidence',
    description: 'With our structured testing and validation, you can launch your new system fully prepared.'
  },
  {
    icon: BarChart3,
    title: 'Improved Efficiency',
    description: 'Connected systems eliminate duplication, giving you faster reporting and clearer financial insight.'
  }
];

const faqs = [
  {
    question: 'Do You Build Custom Integrations?',
    answer: 'No, we specialize in implementing and connecting existing accounting platforms. Our focus is on setup, configuration, and process alignment.'
  },
  {
    question: 'Which Systems Do You Work With?',
    answer: 'We support QuickBooks Online, Xero, NetSuite, and Sage Intacct, as well as integration tools like Bill.com, Gusto, Shopify, and Stripe.'
  },
  {
    question: 'Can You Help With Data Cleanup Before Migration?',
    answer: 'Absolutely. We help review, clean, and structure historical data to ensure a smooth transition to your new system.'
  },
  {
    question: 'What Happens During the Testing Phase?',
    answer: 'We work with your team to run test imports, verify balances, and simulate transactions to confirm accuracy before going live.'
  },
  {
    question: 'Do You Provide Training After Migration?',
    answer: 'Yes, we train your team on new workflows, reporting tools, and integrations so they can confidently operate post-launch.'
  },
  {
    question: 'Can You Coordinate With My Software Vendor?',
    answer: 'Definitely. We communicate directly with your software provider to handle migration files, test setups, and support tickets.'
  }
];

export default function SystemsIntegrationContent() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-white via-blue-50/20 to-blue-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
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
              <Badge className="mb-6 px-4 py-2 text-sm font-semibold bg-blue-100 text-[#0015ff] dark:bg-blue-950 dark:text-blue-300">
                Systems Integration & Tech Consulting
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                Modernize Your Financial Operations with Seamless Systems Integration
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                QuantiFi helps businesses migrate, integrate, and optimize their accounting and ERP systems, ensuring a smooth transition from demo to go-live without data loss or disruption.
              </p>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Our team supports you every step of the way, from platform selection and data migration to user testing and launch. With experience in QuickBooks, Xero, NetSuite, and Sage Intacct, we help you streamline workflows and gain complete visibility into your financial performance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-quantifi-primary hover:bg-quantifi-primary/90 text-lg px-8 py-6">
                  <Link href="/contact">
                    Schedule a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-gray-900">
                  <Link href="/contact">
                    Talk to an Integration Expert
                  </Link>
                </Button>
              </div>

              {/* Trust Bar */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-center gap-8 text-sm text-slate-600 dark:text-slate-400">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">100%</div>
                    <div>Migration Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">Certified</div>
                    <div>QuickBooks ProAdvisor</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">4+</div>
                    <div>Platforms Supported</div>
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
                      <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                      <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                      <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                    </div>
                    <div className="text-xs font-medium text-muted-foreground bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                      System Integration
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center gap-3 mb-2">
                        <Server className="h-5 w-5 text-[#0015ff]" />
                        <span className="text-sm font-semibold text-[#0015ff] dark:text-blue-300">QuickBooks</span>
                      </div>
                      <div className="text-lg font-bold text-[#0015ff] dark:text-blue-400">Connected</div>
                      <div className="text-xs text-[#0015ff] dark:text-blue-300">Data synced</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center gap-3 mb-2">
                        <LinkIcon className="h-5 w-5 text-[#0015ff]" />
                        <span className="text-sm font-semibold text-[#0015ff] dark:text-blue-300">Integrations</span>
                      </div>
                      <div className="text-lg font-bold text-[#0015ff] dark:text-blue-400">8 Active</div>
                      <div className="text-xs text-[#0015ff] dark:text-blue-300">APIs connected</div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center gap-3 mb-2">
                        <CheckCircle2 className="h-5 w-5 text-[#0015ff]" />
                        <span className="text-sm font-semibold text-[#0015ff] dark:text-blue-300">Migration</span>
                      </div>
                      <div className="text-lg font-bold text-[#0015ff] dark:text-blue-400">Complete</div>
                      <div className="text-xs text-[#0015ff] dark:text-blue-300">Ready for go-live</div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#0015ff] rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">All systems operational</span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Updated 3 min ago</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview / Value Statement */}
      <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container-standard section-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Implementation. Migration. Go-Live. We&apos;re With You Every Step.
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Technology should make accounting easier, not more complicated. At QuantiFi, we guide businesses through the entire integration process, ensuring accuracy, efficiency, and minimal downtime.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We don&apos;t build systems, we make sure yours works perfectly. From data migration and test environments to final validation before go-live, we ensure your financial systems talk to each other seamlessly.
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
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-800/50">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#0015ff] rounded-xl flex items-center justify-center">
                      <Settings className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">System Integration</h3>
                      <p className="text-sm text-muted-foreground">Seamless connections</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0015ff]" />
                      <span className="text-sm text-foreground">Data migration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0015ff]" />
                      <span className="text-sm text-foreground">API integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0015ff]" />
                      <span className="text-sm text-foreground">Testing & validation</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stat Box */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-800/50 max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-semibold text-[#0015ff] dark:text-blue-200">
              100% Migration Accuracy in Test-to-Live Transitions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Integration & Migration Services */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-900">
        <div className="container-standard section-gutter">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Our Integration & Migration Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We help you get the most out of your accounting technology by connecting platforms, cleaning data, and creating reliable financial visibility across systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationServices.map((service, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full transition-all duration-300 border-0 shadow-lg group-hover:shadow-xl group-hover:border-blue-200 dark:group-hover:border-blue-800 ${
                  index % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-800/50'
                }`}>
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-[#0015ff] dark:group-hover:text-blue-400 transition-colors">
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50/30 via-blue-50/20 to-white dark:from-blue-950/20 dark:via-blue-950/10 dark:to-slate-900">
        <div className="container-standard section-gutter">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Why Companies Trust QuantiFi for Seamless Accounting System Integration
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Migrating to a new accounting system can be stressful, but with the right partner, it doesn&apos;t have to be.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
              QuantiFi ensures every integration and migration is handled with precision, communication, and confidence. Our experts work alongside your team and vendors to deliver smooth, compliant transitions that save time and prevent data errors.
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
                <div className="w-12 h-12 bg-gradient-to-br from-[#0015ff] to-[#0015ff] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
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
                Upgrade Your Accounting Systems
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container-standard section-gutter">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Systems Integration FAQs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get answers to the most common questions about our systems integration and migration services.
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

      {/* Final CTA Card */}
      <section className="py-20 md:py-28 bg-white dark:bg-slate-900">
        <div className="container-standard section-gutter">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Card className="bg-quantifi-primary text-white border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-12 md:p-16 relative">
                <div className="text-center relative z-10">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Ready to Streamline Your Accounting Technology?
                  </h2>
                  <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
                    From demo to deployment, we&apos;ll help you implement the right systems accurately, efficiently, and confidently.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-white text-quantifi-primary hover:bg-white/90 text-lg px-8 py-6">
                      <Link href="/contact">
                        Schedule a Demo
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-quantifi-primary text-lg px-8 py-6">
                      <Link href="/contact">
                        Talk to Our Integration Specialist
                      </Link>
                    </Button>
                  </div>

                  {/* Internal Links */}
                  <div className="mt-16 pt-8 border-t border-white/20">
                    <p className="text-sm opacity-75 mb-4 text-white">Explore our other services:</p>
                    <div className="flex flex-wrap justify-center gap-6">
                      {[
                        { href: '/services/outsourced-accounting', label: 'Outsourced Accounting' },
                        { href: '/services/payroll-hr', label: 'Payroll & HR' },
                        { href: '/services/tax-preparation-compliance', label: 'Tax & Compliance' },
                        { href: '/services/cfo-controller', label: 'Controller & CFO' },
                        { href: '/services/financial-analytics', label: 'Financial Analytics' }
                      ].filter((service) => service.href !== '/services/systems-integration').map((service) => (
                        <Link key={service.href} href={service.href} className="text-sm text-white hover:text-white/80 transition-colors flex items-center gap-1">
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

import { Metadata } from 'next';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookCallButton } from '@/components/ui/book-call-button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  CheckCircle, 
  Calculator, 
  FileText, 
  BarChart, 
  ArrowRight, 
  Users, 
  Shield, 
  TrendingUp, 
  Building2, 
  Clock, 
  Zap,
  Target,
  Award,
  CreditCard,
  Receipt,
  Stethoscope,
  Pill,
  Syringe,
  Activity,
  PieChart,
  Lock
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Healthcare Accounting Services – Medical, Dental, Pharmacy | QuantiFi',
  description: 'Outsourced accounting for medical practices, dental offices, and pharmacies. We handle bookkeeping, medical payroll, insurance reconciliation, and tax compliance, so you can focus on patient care. Schedule a free consultation.',
};

const healthcareServices = [
  {
    title: 'Bookkeeping & Financial Statement Preparation',
    description: 'We handle all your day-to-day bookkeeping tasks to ensure your accounting records are accurate and up-to-date. This includes recording expenses, tracking revenue, and reconciling bank accounts monthly.',
    icon: Calculator,
    features: ['Monthly book closing', 'Professional financial statements', 'Bank reconciliation', 'Expense categorization']
  },
  {
    title: 'Practice Management System (PMS) Reconciliation',
    description: 'We reconcile the data from your specialized systems (EMR/EHR, dental practice management, pharmacy systems) with your accounting software to ensure nothing falls through the cracks.',
    icon: Activity,
    features: ['EMR/EHR integration', 'Daily billing reconciliation', 'System data matching', 'Discrepancy detection']
  },
  {
    title: 'Insurance Billing & Revenue Cycle Management (RCM) Support',
    description: 'One of the biggest headaches in healthcare is managing insurance receivables. We support your revenue cycle by ensuring insurance payments and patient payments are properly posted.',
    icon: CreditCard,
    features: ['Accounts receivable tracking', 'Claims monitoring', 'Collection rate analysis', 'Billing process optimization']
  },
  {
    title: 'Accounts Receivable Management & Collections',
    description: 'We implement processes to monitor patient accounts receivable. We generate aging reports and help coordinate with collection agencies for seriously overdue accounts.',
    icon: Receipt,
    features: ['Patient AR aging', 'Payment plan management', 'Collection agency coordination', 'Revenue leakage prevention']
  },
  {
    title: 'Payroll & Compensation Management',
    description: 'We manage payroll for your healthcare staff — including hourly employees, salaried professionals, nurses, hygienists, and providers — ensuring everyone is paid accurately and on schedule.',
    icon: Users,
    features: ['Multi-staff payroll', 'Provider compensation', 'Productivity-based pay', '401(k) and HSA management']
  },
  {
    title: 'Tax Compliance & Planning',
    description: 'We help healthcare and dental practices stay fully compliant and financially optimized by preparing CPA-ready tax records and providing strategic guidance on entity structure.',
    icon: Shield,
    features: ['CPA-ready records', 'Entity structure guidance', 'Equipment depreciation', 'Healthcare tax credits']
  },
  {
    title: 'Cash Flow Management & Budgeting',
    description: 'We help healthcare practices avoid cash crunches by forecasting inflows and outflows. We know that insurance reimbursements can lag weeks after services.',
    icon: TrendingUp,
    features: ['Cash flow forecasting', 'Budget creation', 'Insurance payment tracking', 'Emergency reserve planning']
  },
  {
    title: 'Accounts Payable & Expense Management',
    description: 'We handle your accounts payable process to keep your vendors happy and your costs under control. We categorize expenses and prepare payments efficiently.',
    icon: FileText,
    features: ['Vendor bill processing', 'Expense categorization', 'Payment scheduling', 'Spending analysis']
  },
  {
    title: 'Financial Reporting & KPI Tracking',
    description: 'We deliver tailored financial reports that help you run your practice more effectively. We prepare physician/dentist-specific metrics and dashboards.',
    icon: PieChart,
    features: ['Practice-specific KPIs', 'Provider performance reports', 'Overhead analysis', 'Benchmark comparisons']
  },
  {
    title: 'Outsourced CFO Advisory for Healthcare Growth',
    description: 'As your practice grows or faces big decisions, our outsourced CFO services are there to guide you. We model financial implications and perform ROI analysis.',
    icon: Building2,
    features: ['Expansion planning', 'Equipment ROI analysis', 'Succession planning', 'Strategic financial guidance']
  }
];

const whyChooseQuantiFi = [
  {
    title: 'Specialized Healthcare Expertise',
    description: 'We understand the healthcare industry\'s intricacies. Our team is experienced with medical billing cycles, dental office workflows, and pharmacy inventory systems.',
    icon: Stethoscope
  },
  {
    title: 'Audit-Ready Accuracy & Compliance',
    description: 'In healthcare, regulatory compliance is paramount. We implement strong internal controls and maintain audit-ready books with meticulous documentation.',
    icon: Shield
  },
  {
    title: 'Time Savings & Focus on Patient Care',
    description: 'Perhaps the biggest benefit our clients feel is the significant time freed up from administrative burdens. You can focus on patient care and clinical excellence.',
    icon: Clock
  },
  {
    title: 'Secure & Confidential Handling',
    description: 'We take confidentiality and data security extremely seriously. All systems are secure and compliant; we\'re comfortable signing Business Associate Agreements (BAA).',
    icon: Lock
  },
  {
    title: 'Technology Integration & 24/7 Access',
    description: 'We leverage technology to give you real-time, anywhere access to your financial information. We integrate with medical software and use cloud accounting solutions.',
    icon: Zap
  },
  {
    title: 'Comprehensive Support Through Industry Changes',
    description: 'The healthcare industry is always evolving. We stay on top of relevant policy shifts and help you navigate their financial impact.',
    icon: Target
  }
];

const faqData = [
  {
    question: 'What types of healthcare practices does QuantiFi work with?',
    answer: 'We work with a wide range of healthcare providers including solo and group medical practices (family medicine, specialties, surgical centers), dental practices (general dentists, orthodontists, oral surgeons), independent pharmacies, physical therapy clinics, urgent care centers, and veterinary clinics. We adapt to provide the right level of support for practices of any size.'
  },
  {
    question: 'Why do I need a healthcare-specific accountant? Can\'t my regular CPA handle it?',
    answer: 'While any qualified CPA can handle general bookkeeping, a healthcare-specific accountant brings crucial added value. Healthcare finances involve unique elements like insurance reimbursements, healthcare regulations compliance, high transaction volumes, and complex provider compensation structures. We ensure accurate financials that reflect the realities of a practice and avoid common pitfalls that generalist accountants might miss.'
  },
  {
    question: 'Can you work with my practice management and billing software?',
    answer: 'Yes. We have experience integrating with all kinds of practice management systems including Dentrix, Eaglesoft, Kareo, AdvancedMD, eClinicalWorks, NextGen, Athenahealth, DrChrono, PioneerRx, Computer-Rx, and Liberty. We establish routines to get financial data from your system and reconcile it with your accounting records, adapting to whatever software you use.'
  },
  {
    question: 'Do you assist with managing insurance reimbursements and tracking denied claims?',
    answer: 'We assist indirectly as part of our accounting and advisory role. We keep detailed records of what was billed versus what was paid, generate reports of denials or underpayments, and flag issues like insurers consistently denying certain codes. While we don\'t directly submit claims, we provide tracking, reporting, and advice to help maximize your reimbursements.'
  },
  {
    question: 'How do you ensure patient data and financial information remain confidential and secure?',
    answer: 'Confidentiality and security are top priorities. We implement multiple layers of security with encrypted software and access controls, use secure portals for document sharing, and are willing to sign Business Associate Agreements (BAAs). Our team is trained on HIPAA guidelines, and we practice need-to-know access with regular data backups and disaster recovery plans.'
  },
  {
    question: 'Can QuantiFi help my practice grow or improve profitability?',
    answer: 'Yes, that\'s a big part of our value proposition. Through our fractional CFO/advisory role, we analyze your financial data for improvement opportunities, help with expansion planning, perform ROI analysis for equipment purchases, and ensure you\'re taking advantage of financial programs. We provide data-driven insight to help shape your practice\'s financial future.'
  }
];

export default function HealthcarePage() {
  return (
    <MarketingLayout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-blue-50 to-teal-50 dark:from-green-950/20 dark:via-blue-950/20 dark:to-teal-950/20 py-24">
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 px-6 py-3 text-base font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Healthcare & Medical Practice Accounting Services
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                Caring for Your Finances, So You Can Care for Patients
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                QuantiFi specializes in accounting for healthcare practices – medical, dental, and pharmacy. From insurance reimbursements and medical payroll to inventory and compliance, we handle the financial side of your practice with surgical precision. Focus on delivering quality care while we keep your books healthy and up-to-date.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <BookCallButton className="text-lg px-10 py-6 bg-green-600 hover:bg-green-700 text-white font-semibold">
                        Schedule a Free Consultation
                        <ArrowRight className="h-5 w-5" />
                      </BookCallButton>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-gray-900">
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
                  Healthy Financials for Healthcare Providers
                </h2>
                <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
              </div>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  Doctors, dentists, and pharmacists train to care for people – not to spend hours on bookkeeping or chasing insurance payments. Yet the financial side of healthcare can be incredibly complex and time-consuming. Between managing reimbursements from insurers, tracking claims denials, handling payroll for clinical staff, and complying with regulations, it's easy for practice owners to feel overwhelmed.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Studies show that as many as 80% of medical bills contain errors, illustrating how common and costly financial mistakes can be in the healthcare field. Without specialized accounting support, healthcare professionals risk lost revenue, compliance issues, and stress that distracts from patient care.
                </p>
                
                <p className="text-lg leading-relaxed">
                  QuantiFi provides the cure for these financial headaches. We bring deep expertise in healthcare accounting to simplify and streamline your practice's finances. Whether you run a physician clinic, a dental office, or an independent pharmacy, we understand your world and tailor our approach to each healthcare niche.
                </p>
                
                <div className="bg-green-50 dark:bg-green-950/20 p-8 rounded-2xl border-l-4 border-green-500 mt-8">
                  <p className="text-lg font-medium text-foreground mb-0">
                    <strong>With QuantiFi as your partner, you get clarity in your numbers and confidence in your decisions</strong> — the same way your patients have confidence in you as their caregiver.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare Accounting Services */}
        <section className="py-20 bg-muted/30">
          <div className="container-standard section-gutter">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Healthcare Accounting Services for Medical, Dental & Pharmacy
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                QuantiFi offers a comprehensive range of accounting and consulting services tailored to healthcare businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {healthcareServices.map((service, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-900">
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                        <service.icon className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Healthcare Providers Choose QuantiFi */}
        <section className="py-20 bg-background">
          <div className="container-standard section-gutter">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Healthcare Providers Choose QuantiFi
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Healthcare professionals trust QuantiFi with their accounting because we offer a rare combination of financial expertise, industry knowledge, and personal support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseQuantiFi.map((reason, index) => (
                <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                  <CardHeader className="pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-2xl">
                        <reason.icon className="h-10 w-10 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground mb-3">
                      {reason.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
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
                  Healthcare Accounting FAQs
                </h2>
                <p className="text-xl text-muted-foreground">
                  We know entrusting your practice's finances to an outside partner is a big decision. Here are answers to common questions healthcare professionals ask us:
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
        <section className="py-24 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 text-white">
          <div className="container-standard section-gutter text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Prescribe a Healthier Financial Future for Your Practice?
              </h2>
              <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
                Don't let complex accounting or insurance headaches pull you away from what you do best – caring for patients. QuantiFi is here to manage and optimize your practice's finances, giving you clarity, stability, and peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <BookCallButton className="text-xl px-12 py-8 bg-white text-green-600 hover:bg-gray-100 font-bold">
                  Schedule a Free Consultation
                  <ArrowRight className="h-6 w-6" />
                </BookCallButton>
                <Button asChild size="lg" variant="outline" className="text-xl px-8 py-8 border-white text-white hover:bg-white hover:text-green-600">
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}

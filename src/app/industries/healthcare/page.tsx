import React from 'react';
import { Metadata } from 'next';
import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookCallButton } from '@/components/ui/book-call-button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { 
  CheckCircle, 
  Calculator, 
  ArrowRight, 
  Users, 
  Shield, 
  TrendingUp, 
  Building2, 
  Clock, 
  Zap,
  Target,
  CreditCard,
  Receipt,
  Stethoscope,
  Activity,
  PieChart,
  Lock,
  FileText
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Healthcare Accounting Services – Medical, Dental, Pharmacy | QuantiFi',
  description: 'Outsourced accounting for medical practices, dental offices, and pharmacies. We handle bookkeeping, medical payroll, insurance reconciliation, and tax compliance, so you can focus on patient care. Schedule a free consultation.',
};

const healthcareServices = [
  {
    title: 'Bookkeeping & Financial Statement Preparation',
    description: 'We handle all your day-to-day bookkeeping tasks to ensure your accounting records are accurate and up-to-date. This includes recording expenses (supplies, lab fees, medications), tracking revenue (patient payments, insurance reimbursements), and reconciling bank accounts and credit card statements every month. We close the books on a monthly or quarterly basis and prepare professional financial statements (Income Statement, Balance Sheet, Cash Flow) that reflect your practice\'s performance. With clean books, you\'ll always know where you stand financially and be ready for lenders or investors if needed.',
    icon: Calculator,
    features: ['Monthly book closing', 'Professional financial statements', 'Bank reconciliation', 'Expense categorization']
  },
  {
    title: 'Practice Management System (PMS) Reconciliation',
    description: 'Healthcare practices often use specialized systems – whether it\'s an Electronic Medical Records system (EMR/EHR) with billing features, a dental practice management software, or a pharmacy management system. We reconcile the data from these systems with your accounting software to ensure nothing falls through the cracks. For example, we\'ll tie out daily patient billings from your EMR to deposits in the bank, or match the prescriptions filled in your pharmacy system to recorded sales. By doing so, we catch discrepancies (like missed charges or unpaid copays) and provide assurance that your operational system and financial books are in sync.',
    icon: Activity,
    features: ['EMR/EHR integration', 'Daily billing reconciliation', 'System data matching', 'Discrepancy detection']
  },
  {
    title: 'Insurance Billing & Revenue Cycle Management (RCM) Support',
    description: 'One of the biggest headaches in healthcare is managing insurance receivables. QuantiFi supports your revenue cycle by working with your billing team (or service) to ensure that insurance payments and patient payments are properly posted and accounted for. We track accounts receivable aging – identifying old claims that haven\'t been paid – and flag high-dollar outstanding amounts. If needed, we can coordinate with your billing personnel to re-follow-up on denials or pending claims. Our accounting also distinguishes between gross charges, insurance adjustments/write-offs, and actual collections, giving you a clear picture of collection rates. In short, we make sure the revenue you earn for your services actually makes it into your bank account and books, and we provide reports to pinpoint issues in your billing process.',
    icon: CreditCard,
    features: ['Accounts receivable tracking', 'Claims monitoring', 'Collection rate analysis', 'Billing process optimization']
  },
  {
    title: 'Accounts Receivable Management & Collections',
    description: 'Beyond insurance, many healthcare practices have to manage what patients owe (deductibles, co-insurances, cash services). We implement processes to monitor patient accounts receivable. For instance, we\'ll generate aging reports that show which patients or payers owe money for over 30, 60, 90 days, etc. If your practice sends statements or payment reminders, we can integrate those into the workflow or help coordinate with collection agencies for seriously overdue accounts. By keeping a close eye on receivables, we help you maintain healthy cash inflows and avoid revenue leakage. You\'ll know exactly how much money is tied up in outstanding invoices and we\'ll advise on when something may need special attention (like offering payment plans or writing off uncollectible amounts).',
    icon: Receipt,
    features: ['Patient AR aging', 'Payment plan management', 'Collection agency coordination', 'Revenue leakage prevention']
  },
  {
    title: 'Payroll & Compensation Management',
    description: 'We manage payroll for your healthcare staff — including hourly employees, salaried professionals, nurses, hygienists, administrative staff, and providers — ensuring everyone is paid accurately and on schedule. While we don\'t process or file payroll taxes, we coordinate with your in-house or third-party payroll system (such as ADP, Gusto, or Paychex) to review data, reconcile reports, and record payroll entries correctly in your books. For physician or dentist owners, we help facilitate owner draws or custom compensation structures, and we incorporate productivity-based pay like RVU or procedure-based bonuses. We also account for 401(k), SIMPLE IRA, and HSA/FSA contributions, giving you clear visibility into total labor costs. Our payroll accounting oversight ensures your financial records remain accurate, compliant, and audit-ready — reducing administrative workload and maintaining full confidentiality.',
    icon: Users,
    features: ['Multi-staff payroll', 'Provider compensation', 'Productivity-based pay', '401(k) and HSA management']
  },
  {
    title: 'Tax Compliance & Planning',
    description: 'We help healthcare and dental practices stay fully compliant and financially optimized by preparing CPA-ready tax records — but we do not file income or payroll taxes ourselves. Our team organizes all the financial details your CPA or tax preparer needs, including reconciled books, categorized deductions, and accurate 1099s from your payroll system. We also provide strategic guidance on entity structure, equipment depreciation, and potential credits such as the Qualified Small Business Healthcare Tax Credit to help reduce liabilities. For practices that sell products or operate in multiple states, we track sales tax obligations and ensure everything is clearly documented for filing. Our proactive oversight keeps your financials organized, your reports compliant, and your CPA filings seamless.',
    icon: Shield,
    features: ['CPA-ready records', 'Entity structure guidance', 'Equipment depreciation', 'Healthcare tax credits']
  },
  {
    title: 'Cash Flow Management & Budgeting',
    description: 'We help healthcare practices avoid cash crunches by forecasting inflows and outflows. We know that insurance reimbursements can lag weeks after services, which can create strain. Our team projects your expected cash receipts based on billing and historical payment patterns, and balances that against upcoming expenses (like payroll, rent, malpractice insurance, quarterly taxes). We\'ll create a budget for your practice that sets monthly targets for revenue and expenses, helping you plan around things like anticipated hiring of a new assistant or buying a new piece of equipment. We also advise on maintaining an appropriate cash reserve for emergencies (for instance, if insurance payments slow down). With a solid budget and cash flow plan, you can make operational decisions (like whether you can afford an expansion or an additional staff member) with confidence and not get blindsided by a dry spell in collections.',
    icon: TrendingUp,
    features: ['Cash flow forecasting', 'Budget creation', 'Insurance payment tracking', 'Emergency reserve planning']
  },
  {
    title: 'Accounts Payable & Expense Management',
    description: 'Just like any business, medical practices and pharmacies have bills to pay – medical supplies, lab fees, office rent, vaccines, utility bills, and more. We handle your accounts payable process to keep your vendors happy and your costs under control. You or your office manager can forward invoices to us, and we\'ll enter them into the accounting system, categorize them (medical supplies vs. office expense vs. lab services, etc.), and prepare payments. We often set up a routine (weekly or bi-weekly) to process payments, and can utilize online bill pay or software to streamline approvals. By managing this, we ensure you never miss a critical payment (e.g., to a medical supplier or drug wholesaler) that could disrupt operations. We also provide spending reports, so you can see where your money is going – for example, tracking how supply costs change month-to-month or flagging if your utility costs spike unexpectedly.',
    icon: FileText,
    features: ['Vendor bill processing', 'Expense categorization', 'Payment scheduling', 'Spending analysis']
  },
  {
    title: 'Financial Reporting & KPI Tracking',
    description: 'We deliver tailored financial reports that help you run your practice more effectively. Beyond standard financial statements, QuantiFi can prepare physician/dentist-specific metrics and dashboards. For example, we can report on KPIs such as: revenue per patient visit, overhead ratio (operating expenses as a percentage of collections), treatment acceptance rate (for dental plans presented vs. accepted), or pharmacy inventory turnover. We\'ll highlight trends like increasing supply costs or staff costs as a percentage of revenue. If you\'re a multi-provider clinic, we can create profit center reports for each provider or department. These insights let you identify areas for improvement – maybe your staffing costs are higher than industry benchmarks, or your collections rate on billed services could improve. We\'ll discuss these in our meetings, translating the numbers into actionable recommendations. Essentially, we turn your financial data into a tool for continuous improvement of your practice\'s financial health.',
    icon: PieChart,
    features: ['Practice-specific KPIs', 'Provider performance reports', 'Overhead analysis', 'Benchmark comparisons']
  },
  {
    title: 'Outsourced CFO Advisory for Healthcare Growth',
    description: 'As your practice grows or faces big decisions, our outsourced CFO services are there to guide you. Thinking of expanding your clinic, adding a new location, or bringing on another partner? We\'ll model the financial implications – how many more patients you\'d need, what the break-even point is, etc. Considering investing in expensive new equipment (like an MRI machine or digital X-ray or a new compounding lab)? We\'ll perform ROI analysis and even help explore financing options. For pharmacies, we can assist with inventory optimization and cash management strategies, given the thin margins on reimbursements. If you\'re planning for succession or sale of the practice, we help get the financials in order and can liaise with valuation experts. We also offer strategic planning, like setting financial goals (e.g., improve net income margin by X% next year) and outlining steps to get there. In short, we become your strategic financial partner, much like a CFO, bringing perspective from working with many healthcare businesses. You get high-level advice on demand, without the full-time cost.',
    icon: Building2,
    features: ['Expansion planning', 'Equipment ROI analysis', 'Succession planning', 'Strategic financial guidance']
  }
];

const whyChooseQuantiFi = [
  {
    title: 'Specialized Healthcare Expertise',
    description: 'We understand the healthcare industry\'s intricacies. Our team is experienced with medical billing cycles, dental office workflows, and pharmacy inventory systems. This means we already speak the language of CPT codes, EOBs, write-offs, and MAC reimbursements. We know what a day sheet from Dentrix is and how it should match your deposits, or how a pharmacy\'s third-party reconciliation works. That specialized knowledge allows us to anticipate issues and proactively manage them. With QuantiFi, you\'re not getting a generic accountant – you\'re getting a team that\'s trained in the financial quirks of healthcare, from handling HIPAA-compliant data processes to understanding the timing of insurance payments. We keep up with industry changes, whether it\'s new 340B pharmacy rules or changes in Medicare reimbursement, and adjust our approach accordingly.',
    icon: Stethoscope
  },
  {
    title: 'Audit-Ready Accuracy & Compliance',
    description: 'In healthcare, regulatory compliance is paramount – and that extends to your finances too. QuantiFi prides itself on maintaining audit-ready books and documentation. We implement strong internal controls (segregation of duties, approval workflows for expenses, etc.) so your financial records are trustworthy. We also keep meticulous documentation for every number on your books – so if an auditor (or a potential buyer, or a bank) asks for support on a revenue or expense item, we can produce it quickly. Moreover, we ensure compliance with tax laws and healthcare-specific financial regulations. For example, pharmacies often need to track certain costs for state reporting, or dental practices might have sales tax on cosmetic products – we handle that. Our thoroughness means you can face audits or inspections confidently, knowing everything reconciles and every dollar is accounted for properly.',
    icon: Shield
  },
  {
    title: 'Time Savings & Focus on Patient Care',
    description: 'Perhaps the biggest benefit our clients feel is the significant time freed up from administrative burdens. As a doctor, dentist, or pharmacist, your time is far more valuable when spent with patients or growing your practice. By outsourcing bookkeeping, payroll, and financial management to QuantiFi, you reclaim hours every week. No more staying late to sort out QuickBooks or confusion over an unexplained bank charge – we\'ve got it under control. Many healthcare providers tell us they feel a weight lifted, as they can finally focus on patient care and clinical excellence rather than invoicing or bill paying. Plus, you gain peace of mind: while you\'re in surgery or consulting patients, you\'re not worrying about whether payroll got processed or if a bill was missed. We handle it all reliably in the background.',
    icon: Clock
  },
  {
    title: 'Secure & Confidential Handling',
    description: 'We take confidentiality and data security extremely seriously – as you do with patient information. All of our systems are secure and compliant; we\'re comfortable signing Business Associate Agreements (BAA) when needed because we understand HIPAA considerations. Financial data for your practice is kept under strict privacy. If we work with PHI (Protected Health Information) during reconciliations, we ensure it\'s handled in compliance with regulations. Our communication channels can be encrypted or use secure portals if we\'re exchanging sensitive documents. Essentially, you can trust that your financial information – and any overlapping patient details within it – are safe with us. We treat your confidentiality with the same care you treat your patients\' privacy.',
    icon: Lock
  },
  {
    title: 'Technology Integration & 24/7 Access',
    description: 'QuantiFi leverages technology to give you real-time, anywhere access to your financial information. We integrate with medical software and use cloud accounting solutions, as mentioned, so you can check your financial dashboard any time. Want to see how this month is trending on revenue while you\'re at a conference? Log in and it\'s there. We set up user-friendly reports and even mobile access so key metrics are at your fingertips. Also, we continuously evaluate new tools (like expense management apps or improved reporting plugins) that can benefit your practice – bringing you suggestions to further streamline things. Our tech-forward approach means your accounting isn\'t stuck in the stone age; it\'s as modern and efficient as the latest medical equipment, giving you a competitive edge and ease of use.',
    icon: Zap
  },
  {
    title: 'Comprehensive Support Through Industry Changes',
    description: 'The healthcare industry is always evolving – new insurance rules, new tax laws for medical businesses, or sudden crises (like how practices had to adapt financially during COVID-19). QuantiFi acts as your steady financial partner through all these changes. We stay on top of relevant policy shifts (for instance, updates to Medicare physician fee schedules or changes in deductible laws that affect how much patients owe) and help you navigate their financial impact. We also bring best practices from across our healthcare client base: if we find a great way to handle, say, telehealth billing record-keeping or managing a surge in patient volume, we share that knowledge. Our goal is to not just do your books, but to add value by advising you based on broad experience. This comprehensive, consultative approach is why many of our healthcare clients stick with us for the long term – we\'re not just their accountants; we\'re advisors invested in the growth and financial health of their practice.',
    icon: Target
  }
];

const faqData = [
  {
    question: 'What types of healthcare practices does QuantiFi work with?',
    answer: 'We work with a wide range of healthcare providers. Our client list includes solo and group medical practices (family medicine, specialties like cardiology or dermatology, surgical centers), dental practices (general dentists, orthodontists, oral surgeons, multi-location dental groups), and independent pharmacies (community pharmacies, specialty pharmacies). We also service other healthcare-related businesses such as physical therapy clinics, urgent care centers, and even veterinary clinics (while not human healthcare, many accounting principles overlap). This breadth means we likely have experience with your type of practice, and we tailor our approach accordingly. No matter the size – from a single-provider office to a multi-site healthcare company – we adapt to provide the right level of support.'
  },
  {
    question: 'Why do I need a healthcare-specific accountant? Can\'t my regular CPA handle it?',
    answer: 'While any qualified CPA can handle general bookkeeping, a healthcare-specific accountant brings crucial added value. Healthcare finances involve unique elements: dealing with insurance reimbursements and denials, maintaining compliance with healthcare regulations, managing high volume of transactions (especially in insurance billing and adjustments), and often complex compensation structures for providers. A generalist CPA might not know, for example, how to reconcile an EHR report to a bank deposit or how to classify a Medicare adjustment versus a true bad debt. We\'ve seen instances where well-meaning general accountants misclassify or overlook important items (like recording gross billings as revenue instead of net collections, which overstates income). QuantiFi\'s healthcare accounting team ensures these pitfalls are avoided. We provide accurate financials that reflect the realities of a practice – and we ensure things like payer mix, clinic production, and provider payouts are accounted for correctly. In short, using a healthcare-savvy accountant means fewer errors, better insight into your practice, and often more money in your pocket due to optimized billing and tax strategies.'
  },
  {
    question: 'Can you work with my practice management and billing software (e.g., Dentrix, Kareo, Athenahealth, or pharmacy systems)?',
    answer: 'Yes. We have experience integrating and extracting data from all kinds of practice management systems (PMS) and electronic health record (EHR) systems. For dental, we commonly work with Dentrix and Eaglesoft; for medical, systems like Kareo, AdvancedMD, eClinicalWorks, NextGen, Athenahealth, DrChrono, etc.; for pharmacies, we handle PioneerRx, Computer-Rx, Liberty, and others. We will adapt to whatever you use. Typically, we\'ll establish a routine to get financial data from your system – whether it\'s running end-of-day reports, or pulling weekly summary reports of charges, payments, and adjustments. We then reconcile those with your accounting records. If your software has export or integration capabilities, we\'ll utilize them to automate the data flow into accounting. In cases where your system is older or very proprietary, we\'ll still find a way – even if it means manually using reports you print. We\'re also happy to advise if an upgrade or change of system could save you time/money; but that\'s up to you. Rest assured, we won\'t force you to change software – our job is to adapt to your workflow and make the numbers align.'
  },
  {
    question: 'Do you assist with managing insurance reimbursements and tracking denied claims?',
    answer: 'We do assist indirectly as part of our accounting and advisory role. Here\'s how: as we record revenues, we keep detailed records of what was billed versus what was paid, and by whom. This allows us to generate reports of denials or underpayments. For instance, if we see that an insurer consistently denies a certain code or is paying less than contracted rates, we\'ll flag that for you. We help set up your accounting system to mirror your revenue cycle – meaning every dollar of charge either becomes a payment or an adjustment/write-off. If something is sitting unpaid (a pending insurance claim or patient bill), it will show in accounts receivable until resolved. While we are not a billing company (we don\'t directly submit your claims or work claim-by-claim denials with insurers), our service complements that function: we shine a light on areas where collections might be falling short. Many clients without a dedicated billing staff appreciate this oversight, as it alerts them to issues like an increase in denial rates or slowdowns in payments by certain payers. In summary, we provide the tracking, reporting, and advice – and either your in-house team or billing service uses that intel to take action on getting claims paid. It\'s a team effort to maximize your reimbursements, and we play the financial tracking and strategy role in that team.'
  },
  {
    question: 'How do you ensure patient data and financial information remain confidential and secure?',
    answer: 'Confidentiality and security are top priorities for us, especially in healthcare. We implement multiple layers of security: all of our accounting software and cloud tools are secured with strong encryption and access controls. If we share documents, we use secure portals or encrypted email – the same kind of technology your practice might use for patient info. We\'re willing to sign Business Associate Agreements (BAAs) since, in serving you, we might incidentally handle Protected Health Information (PHI) (for example, a patient name or ID on an EOB). Our team is trained on HIPAA guidelines relevant to our work. Internally, we practice need-to-know access – only team members assigned to your account work with your data. Financial data is sensitive beyond just HIPAA – things like your revenues, profits, and owner compensation are private – and we treat it as such. We will never share your information with any outside party unless explicitly authorized by you (for example, collaborating with your tax preparer or banker with your permission). Additionally, we perform regular data backups and have disaster recovery plans for our systems, to prevent any data loss. In short, we handle your information with the same level of care and confidentiality that you handle your patients\' information. You can trust that your practice\'s financial secrets are safe with us.'
  },
  {
    question: 'Can QuantiFi help my practice grow or improve profitability?',
    answer: 'Yes, that\'s a big part of our value proposition. Beyond keeping the books, we actively look for ways to help your practice financially thrive. Through our fractional CFO/advisory role, we analyze your financial data for improvement opportunities. Maybe we notice your overhead is higher than typical benchmarks for your specialty – we\'d investigate and suggest ways to trim costs. Or we might see that one provider\'s schedule is under-booked and show you how that affects profitability, prompting a discussion on marketing or schedule optimization. If you\'re aiming to expand (adding a new operatory, another location, or a new service line), we\'ll do forecasting to see what investment you can afford and what return to expect. We also ensure you\'re taking advantage of any financial programs – for example, if there are grants or relief funds (as we saw with COVID-19 programs), we\'d alert you. For dental practices, we can analyze procedure mix profitability; for pharmacies, we examine reimbursement rates vs. drug costs to advise on pricing and purchasing; for medical practices, we look at payer mix and visit volume to optimize scheduling or contracting. Many of our clients treat us as an ongoing part of their strategy team – calling us before big decisions like buying expensive equipment, hiring a new associate, or changing their business model. Our goal is always to provide data-driven insight so you can make the best choice for growth and profitability. In essence, we\'re not just about recording history; we\'re here to help shape your practice\'s financial future.'
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
                  Doctors, dentists, and pharmacists train to care for people – not to spend hours on bookkeeping or chasing insurance payments. Yet the financial side of healthcare can be incredibly complex and time-consuming. Between managing reimbursements from insurers, tracking claims denials, handling payroll for clinical staff, and complying with regulations, it&apos;s easy for practice owners to feel overwhelmed. Studies show that as many as 80% of medical bills contain errors, illustrating how common and costly financial mistakes can be in the healthcare field. Without specialized accounting support, healthcare professionals risk lost revenue, compliance issues, and stress that distracts from patient care.
                </p>
                
                <p className="text-lg leading-relaxed">
                  QuantiFi provides the cure for these financial headaches. We bring deep expertise in healthcare accounting to simplify and streamline your practice&apos;s finances. Whether you run a physician clinic, a dental office, or an independent pharmacy, we understand your world: we know how insurance reimbursements work, how to reconcile patient management systems with accounting records, and how to maintain compliance with healthcare regulations and tax laws. Our team effectively becomes your practice&apos;s financial department, ensuring your books are accurate, your cash flow stays positive, and every dollar earned is properly accounted for.
                </p>
                
                <p className="text-lg leading-relaxed">
                  We tailor our approach to each healthcare niche. For medical practices, we focus on issues like revenue cycle management and physician compensation tracking. For dental offices, we&apos;re adept at integrating dental practice management software (Dentrix, Eaglesoft) and handling the nuances of patient co-pays and insurance write-offs. For pharmacies, we tackle inventory cost tracking, third-party insurance receivables, and regulatory compliance. In every case, QuantiFi&apos;s goal is to give you peace of mind and more time: peace of mind that your finances are in expert hands, and more time for you to focus on treating patients and growing your practice. With QuantiFi as your partner, you get clarity in your numbers and confidence in your decisions – the same way your patients have confidence in you as their caregiver.
                </p>
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
                QuantiFi offers a comprehensive range of accounting and consulting services tailored to healthcare businesses, including medical practices, dental clinics, and independent pharmacies. Our key services include:
              </p>
            </div>

            <BentoGrid className="max-w-7xl mx-auto">
              {/* Featured Services - Larger Cards */}
              <BentoGridItem
                title={healthcareServices[0].title}
                description={healthcareServices[0].description}
                header={
                  <div className="flex items-center mb-2">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                      {React.createElement(healthcareServices[0].icon, { className: "h-8 w-8 text-green-600 dark:text-green-400" })}
                    </div>
                  </div>
                }
                className="md:col-span-2 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border-green-200 dark:border-green-800"
              >
                <div className="space-y-1 mt-2">
                  {healthcareServices[0].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                      <span className="text-xs font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </BentoGridItem>

              <BentoGridItem
                title={healthcareServices[1].title}
                description={healthcareServices[1].description}
                header={
                  <div className="flex items-center mb-2">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                      {React.createElement(healthcareServices[1].icon, { className: "h-8 w-8 text-blue-600 dark:text-blue-400" })}
                    </div>
                  </div>
                }
                className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border-blue-200 dark:border-blue-800"
              >
                <div className="space-y-1 mt-2">
                  {healthcareServices[1].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                      <span className="text-xs font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </BentoGridItem>

              {/* Second Row */}
              <BentoGridItem
                title={healthcareServices[2].title}
                description={healthcareServices[2].description}
                header={
                  <div className="flex items-center mb-2">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                      {React.createElement(healthcareServices[2].icon, { className: "h-8 w-8 text-purple-600 dark:text-purple-400" })}
                    </div>
                  </div>
                }
                className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 border-purple-200 dark:border-purple-800"
              >
                <div className="space-y-1 mt-2">
                  {healthcareServices[2].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                      <span className="text-xs font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </BentoGridItem>

              <BentoGridItem
                title={healthcareServices[3].title}
                description={healthcareServices[3].description}
                header={
                  <div className="flex items-center mb-2">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
                      {React.createElement(healthcareServices[3].icon, { className: "h-8 w-8 text-orange-600 dark:text-orange-400" })}
                    </div>
                  </div>
                }
                className="md:col-span-2 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 border-orange-200 dark:border-orange-800"
              >
                <div className="space-y-1 mt-2">
                  {healthcareServices[3].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                      <span className="text-xs font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </BentoGridItem>

              {/* Third Row */}
              <BentoGridItem
                title={healthcareServices[4].title}
                description={healthcareServices[4].description}
                header={
                  <div className="flex items-center mb-2">
                    <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl">
                      {React.createElement(healthcareServices[4].icon, { className: "h-8 w-8 text-red-600 dark:text-red-400" })}
                    </div>
                  </div>
                }
                className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 border-red-200 dark:border-red-800"
              >
                <div className="space-y-1 mt-2">
                  {healthcareServices[4].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                      <span className="text-xs font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </BentoGridItem>

              <BentoGridItem
                title={healthcareServices[5].title}
                description={healthcareServices[5].description}
                header={
                  <div className="flex items-center mb-2">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl">
                      {React.createElement(healthcareServices[5].icon, { className: "h-8 w-8 text-indigo-600 dark:text-indigo-400" })}
                    </div>
                  </div>
                }
                className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/20 dark:to-indigo-900/20 border-indigo-200 dark:border-indigo-800"
              >
                <div className="space-y-1 mt-2">
                  {healthcareServices[5].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                      <span className="text-xs font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </BentoGridItem>

              <BentoGridItem
                title={healthcareServices[6].title}
                description={healthcareServices[6].description}
                header={
                  <div className="flex items-center mb-2">
                    <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl">
                      {React.createElement(healthcareServices[6].icon, { className: "h-8 w-8 text-teal-600 dark:text-teal-400" })}
                    </div>
                  </div>
                }
                className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950/20 dark:to-teal-900/20 border-teal-200 dark:border-teal-800"
              >
                <div className="space-y-1 mt-2">
                  {healthcareServices[6].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                      <span className="text-xs font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </BentoGridItem>

              {/* Fourth Row */}
              <BentoGridItem
                title={healthcareServices[7].title}
                description={healthcareServices[7].description}
                header={
                  <div className="flex items-center mb-2">
                    <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl">
                      {React.createElement(healthcareServices[7].icon, { className: "h-8 w-8 text-yellow-600 dark:text-yellow-400" })}
                    </div>
                  </div>
                }
                className="md:col-span-2 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950/20 dark:to-yellow-900/20 border-yellow-200 dark:border-yellow-800"
              >
                <div className="space-y-1 mt-2">
                  {healthcareServices[7].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                      <span className="text-xs font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </BentoGridItem>

              <BentoGridItem
                title={healthcareServices[8].title}
                description={healthcareServices[8].description}
                header={
                  <div className="flex items-center mb-2">
                    <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-xl">
                      {React.createElement(healthcareServices[8].icon, { className: "h-8 w-8 text-pink-600 dark:text-pink-400" })}
                    </div>
                  </div>
                }
                className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/20 dark:to-pink-900/20 border-pink-200 dark:border-pink-800"
              >
                <div className="space-y-1 mt-2">
                  {healthcareServices[8].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                      <span className="text-xs font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </BentoGridItem>

              {/* Fifth Row */}
              <BentoGridItem
                title={healthcareServices[9].title}
                description={healthcareServices[9].description}
                header={
                  <div className="flex items-center mb-2">
                    <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl">
                      {React.createElement(healthcareServices[9].icon, { className: "h-8 w-8 text-cyan-600 dark:text-cyan-400" })}
                    </div>
                  </div>
                }
                className="md:col-span-3 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950/20 dark:to-cyan-900/20 border-cyan-200 dark:border-cyan-800"
              >
                <div className="space-y-1 mt-2">
                  {healthcareServices[9].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                      <span className="text-xs font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </BentoGridItem>
            </BentoGrid>
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
                Healthcare professionals trust QuantiFi with their accounting because we offer a rare combination of financial expertise, industry knowledge, and personal support. Here are six reasons medical, dental, and pharmacy businesses partner with us:
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
                  We know entrusting your practice&apos;s finances to an outside partner is a big decision. Here are answers to common questions healthcare professionals ask us:
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
                Don&apos;t let complex accounting or insurance headaches pull you away from what you do best – caring for patients. QuantiFi is here to manage and optimize your practice&apos;s finances, giving you clarity, stability, and peace of mind. Let us handle the books, so you can focus on providing excellent care.
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
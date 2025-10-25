'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';

export default function FAQSection() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'How does QuantiFi keep my business and financial data confidential?',
      answer: 'We take confidentiality and data security extremely seriously. All client records are handled under strict NDAs and stored in encrypted, access-controlled systems. Every file, login, and workflow follows industry-grade protection protocols — ensuring your financial data is safe, private, and fully compliant at all times.',
    },
    {
      id: 'item-2',
      question: 'What if I prefer working with a local accountant instead of a virtual team?',
      answer: 'That\'s a common concern — and we completely understand. While our team operates virtually, we provide flexible support that aligns with your time zone and business hours, ensuring responsiveness and personal connection. You\'ll have a dedicated accounting lead and regular video or phone check-ins, so it feels like working with a local partner — just with more consistency and reach.',
    },
    {
      id: 'item-3',
      question: 'How do virtual accounting services actually work?',
      answer: 'Our virtual model combines secure cloud platforms with real human expertise. You\'ll collaborate with your QuantiFi team through tools like QuickBooks Online, Bill.com, and Gusto, sharing data securely while we handle reconciliations, reporting, and analysis. You get real-time access to financials and reports — anytime, anywhere.',
    },
    {
      id: 'item-4',
      question: 'What size or type of businesses do you typically work with?',
      answer: 'We support small and mid-sized businesses across industries including construction, healthcare, hospitality, real estate, and professional services. Whether you\'re managing a growing startup or a multi-entity operation, our flexible structure scales with your business needs.',
    },
    {
      id: 'item-5',
      question: 'Can you coordinate with my CPA or in-house finance team?',
      answer: 'Absolutely. We collaborate directly with your CPA, tax preparer, or in-house staff to streamline workflows and ensure compliance. QuantiFi can serve as your daily finance team, keeping books, managing cash flow, and preparing reports — while your CPA handles tax filings and advisory work.',
    },
    {
      id: 'item-6',
      question: 'What makes QuantiFi different from other virtual accounting providers?',
      answer: 'We\'re more than an outsourced service — we operate as part of your business. Through our Liaison Accounting Partnership (LAP) model, we integrate into your tools, processes, and decision-making. The result is CPA-level accuracy, proactive insights, and consistent communication that drive smarter financial outcomes.',
    },
  ];

  return (
    <section className="pt-32 md:pt-40 bg-white dark:bg-slate-900">
      <div className="container-standard section-gutter">
        <div className="grid gap-8 md:grid-cols-5 md:gap-12">
          <div className="md:col-span-2">
            <h2 className="text-foreground text-4xl font-semibold">FAQs</h2>
            <p className="text-muted-foreground mt-4 text-balance text-lg">Your questions answered</p>
            <p className="text-muted-foreground mt-6 hidden md:block">
              Can&apos;t find what you&apos;re looking for? Contact our{' '}
              <Link
                href="/contact"
                className="text-quantifi-primary font-medium hover:underline">
                customer support team
              </Link>
            </p>
          </div>

          <div className="md:col-span-3">
            <Accordion
              type="single"
              collapsible>
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-gray-200 dark:border-gray-700">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground leading-relaxed">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <p className="text-muted-foreground mt-6 md:hidden">
            Can&apos;t find what you&apos;re looking for? Contact our{' '}
            <Link
              href="/contact"
              className="text-quantifi-primary font-medium hover:underline">
              customer support team
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

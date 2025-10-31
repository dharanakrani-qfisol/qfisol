'use client';

import { MarketingLayout } from '@/components/layout/MarketingLayout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  HardHat, 
  Hotel, 
  Rocket, 
  Settings, 
  Activity, 
  HeartPulse, 
  Pill, 
  UtensilsCrossed, 
  Building2,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Shield,
  Star
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface CaseStudy {
  title: string;
  subtitle: string;
  icon: typeof HardHat;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  highlights: string[];
  bgColor: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Construction Company',
    subtitle: '67% Faster Close | 28% Higher Job Profitability Visibility',
    icon: HardHat,
    industry: 'Construction',
    challenge: 'Month-end close stretched over two weeks with fragmented WIP tracking, inconsistent job costing, and delayed decision-making.',
    solution: 'Deployed an integrated job-costing module with automated WIP reconciliation, project profitability dashboards, and real-time AP/AR sync through Acumatica.',
    results: [
      'Close time reduced from 15 → 5 days',
      'Job margin variance accuracy improved by 28%',
      '$1.2M in project overruns prevented'
    ],
    highlights: [
      'Real-time job profitability dashboards',
      'Automated retainage & subcontractor reconciliation',
      'Streamlined project-level reporting'
    ],
    bgColor: 'bg-white'
  },
  {
    title: 'Hospitality Group',
    subtitle: '50% Faster Reporting | Unified Multi-Property Visibility',
    icon: Hotel,
    industry: 'Hospitality',
    challenge: 'Hotels operated on disconnected systems, requiring manual consolidation and creating inconsistent financials.',
    solution: 'Centralized multi-property accounting under a unified cloud ERP with automated reporting, KPI dashboards, and labor-cost optimization analytics.',
    results: [
      'Reporting time reduced by 50%',
      'Labor-to-revenue ratio improved by 6%',
      'Group-wide P&L available in real time'
    ],
    highlights: [
      'Consolidated property-level dashboards',
      'Real-time RevPAR & GOP metrics',
      'Automated cash-flow forecasting'
    ],
    bgColor: 'bg-gray-50'
  },
  {
    title: 'Startup (Technology/SaaS)',
    subtitle: 'Reduced Burn by 22% | 3x Faster Investor Reporting',
    icon: Rocket,
    industry: 'Technology',
    challenge: 'The startup lacked reliable financial visibility, slowing investor updates and budgeting decisions.',
    solution: 'Implemented GAAP-compliant accounting, KPI forecasting dashboards, and automated expense management integrated with Stripe and Ramp.',
    results: [
      'Cash burn reduced by 22%',
      'Monthly close shortened from 20 → 6 days',
      'Investor forecasts delivered in 48 hours'
    ],
    highlights: [
      'Automated expense & revenue tracking',
      'KPI dashboards (MRR, churn, CAC, LTV)',
      'Fundraising-ready financial models'
    ],
    bgColor: 'bg-white'
  },
  {
    title: 'Manufacturing (Plastic Products)',
    subtitle: '8% Margin Lift | 60% Faster Cost Reconciliation',
    icon: Settings,
    industry: 'Manufacturing',
    challenge: 'Inaccurate product costing led to mispricing and margin erosion across product lines.',
    solution: 'Integrated ERP and accounting to automate cost-of-goods tracking and SKU-level profitability analysis.',
    results: [
      'COGS accuracy improved by 95%',
      'Margins increased by 8%',
      'Close cycle reduced from 18 → 7 days'
    ],
    highlights: [
      'SKU-level margin tracking',
      'Real-time inventory costing',
      'Automated reconciliation and variance reports'
    ],
    bgColor: 'bg-gray-50'
  },
  {
    title: 'Dental Practice',
    subtitle: '40% Increase in Net Margin | 99% Claim Accuracy',
    icon: Activity,
    industry: 'Healthcare',
    challenge: 'Delayed reimbursements and manual claim management limited profitability and visibility.',
    solution: 'Built predictive analytics dashboards for insurance optimization and fee schedule tracking.',
    results: [
      'Net margin up 40%',
      'Claims accuracy improved to 99%',
      'A/R days dropped from 35 → 22'
    ],
    highlights: [
      'Predictive revenue analytics',
      'Automated insurance reconciliation',
      'Optimized fee scheduling'
    ],
    bgColor: 'bg-white'
  },
  {
    title: 'Medical Practice',
    subtitle: 'Cash Flow Up 30% | Revenue Leakage Recovered',
    icon: HeartPulse,
    industry: 'Healthcare',
    challenge: 'A multi-provider clinic suffered delayed claims, inconsistent collections, and poor cash-flow visibility.',
    solution: 'Automated EOB reconciliation, built payer-mix dashboards, and standardized month-end reports.',
    results: [
      'Cash inflows improved by 30%',
      'Days in A/R down by 12',
      '$150K annual revenue leakage recovered'
    ],
    highlights: [
      'Claims tracking automation',
      'Real-time payer profitability',
      'Physician dashboard integration'
    ],
    bgColor: 'bg-gray-50'
  },
  {
    title: 'Pharmacy Chain',
    subtitle: 'Reconciliation Time Cut by 60% | Shrinkage Down 25%',
    icon: Pill,
    industry: 'Retail',
    challenge: 'Inaccurate supplier reconciliation and untracked shrinkage caused profitability gaps.',
    solution: 'Integrated POS-to-GL automation, supplier invoice matching, and centralized multi-store dashboards.',
    results: [
      'Inventory reconciliation 60% faster',
      'Shrinkage reduced by 25%',
      'Inventory accuracy improved to 98%'
    ],
    highlights: [
      'Automated supplier reconciliation',
      'POS-to-accounting integration',
      'Multi-store performance tracking'
    ],
    bgColor: 'bg-white'
  },
  {
    title: 'Franchise (Quick-Service Restaurant)',
    subtitle: '45% Faster Reporting | 18% Margin Growth',
    icon: UtensilsCrossed,
    industry: 'Food Service',
    challenge: 'Franchisee lacked standardized reporting and had poor store-level visibility.',
    solution: 'Implemented unified COA, automated royalty tracking, and franchise-level financial benchmarking.',
    results: [
      'Reporting accuracy improved by 45%',
      'Gross margins up 18%',
      'Royalty fee automation reduced admin time by 80%'
    ],
    highlights: [
      'Multi-unit financial dashboards',
      'Royalty & marketing fee tracking',
      'Real-time store profitability'
    ],
    bgColor: 'bg-gray-50'
  },
  {
    title: 'Real Estate & Property Management',
    subtitle: '90% Faster Consolidation | 35% Boost in Portfolio ROI Visibility',
    icon: Building2,
    industry: 'Real Estate',
    challenge: 'Property managers handled multiple LLCs with inconsistent ledgers, manual reconciliations, and limited investor reporting.',
    solution: 'Consolidated all entities under one accounting platform with automated rent roll imports, expense allocations, and investor dashboards.',
    results: [
      'Financial consolidation time reduced from 10 days → 1',
      'Improved portfolio ROI tracking by 35%',
      'Rent collection accuracy reached 99%'
    ],
    highlights: [
      'Entity-level and consolidated financials',
      'Automated rent roll reporting',
      'Investor-ready dashboards'
    ],
    bgColor: 'bg-white'
  }
];

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 100);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [index]);

  const Icon = study.icon;

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Card className={`${study.bgColor} border-2 border-black dark:border-white h-full hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group overflow-hidden`}>
        <div className="p-8 space-y-6">
          {/* Header with Icon */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <Badge className="mb-3 bg-[#0015ff] text-white hover:bg-[#0015ff]/90">
                {study.industry}
              </Badge>
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-[#0015ff] transition-colors">
                {study.title}
              </h3>
              <p className="text-sm font-semibold text-[#0015ff]">
                {study.subtitle}
              </p>
            </div>
            <div className="flex-shrink-0 p-3 bg-[#0015ff] rounded-2xl group-hover:scale-105 transition-transform duration-300">
              <Icon className="h-7 w-7 text-white" />
            </div>
          </div>

          {/* Challenge */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Challenge</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {study.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-2 p-4 bg-[#0015ff]/5 dark:bg-[#0015ff]/10 rounded-xl border-l-4 border-[#0015ff]">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Solution</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {study.solution}
            </p>
          </div>

          {/* Results */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center">
              <TrendingUp className="h-4 w-4 mr-2 text-[#0015ff]" />
              Results
            </h4>
            <div className="space-y-2">
              {study.results.map((result, idx) => (
                <div key={idx} className="flex items-start space-x-2 group/item">
                  <CheckCircle2 className="h-5 w-5 text-[#0015ff] flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform" />
                  <span className="text-sm font-medium text-foreground">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-3 pt-4 border-t-2 border-black/10 dark:border-white/10">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center">
              <Star className="h-4 w-4 mr-2 text-[#0015ff]" />
              Highlights
            </h4>
            <div className="space-y-2">
              {study.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#0015ff] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function CaseStudiesPage() {
  return (
    <MarketingLayout>
      <div className="md:pt-20">
        {/* Hero Section */}
        <section className="bg-white dark:bg-black py-24 border-b-2 border-black dark:border-white">
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#0015ff] rounded-2xl">
                  <Shield className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                Client Success Stories
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Due to confidentiality, client names are withheld. Each success story reflects measurable results achieved through QuantiFi&apos;s accounting, controller, and virtual CFO expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-white dark:bg-black">
          <div className="container-standard section-gutter">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((study, index) => (
                  <CaseStudyCard key={index} study={study} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#0015ff] text-white">
          <div className="container-standard section-gutter">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to Create Your Own Success Story?
              </h2>
              <p className="text-xl opacity-90 leading-relaxed">
                Empower your business with data-driven financial clarity.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 text-lg px-10 py-6 bg-white text-[#0015ff] hover:bg-black hover:text-white font-bold rounded-lg transition-all duration-300"
                >
                  <span>Schedule a Consultation</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 text-lg px-10 py-6 border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#0015ff] font-semibold rounded-lg transition-all duration-300"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}

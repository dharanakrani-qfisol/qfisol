'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Search, Handshake, FileCheck, Settings, TrendingUp, Calendar, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Understanding',
    description: 'We begin by getting to know your business your goals, systems, and challenges.',
    details: 'This deep dive helps us assess your current financial landscape, identify gaps, and design a tailored accounting strategy that aligns with your long-term vision.',
    goal: 'Gain complete clarity on where you are today and where you want to go.',
    keywords: 'outsourced accounting services, business accounting analysis, financial clarity',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
    darkBgColor: 'from-blue-950/20 to-blue-900/20'
  },
  {
    number: '02',
    icon: Handshake,
    title: 'Kickoff & Alignment',
    description: 'Once we move forward, we ensure a seamless start.',
    details: 'Our team securely gathers access, organizes your documentation, and introduces your dedicated QuantiFi specialists. Together, we set up deliverables, timelines, and a reporting rhythm that keeps everyone aligned from day one.',
    goal: 'Build a transparent, structured workflow that sets the tone for long-term success.',
    keywords: 'accounting onboarding, outsourced bookkeeping setup, virtual CFO implementation',
    color: 'from-teal-500 to-teal-600',
    bgColor: 'from-teal-50 to-teal-100',
    darkBgColor: 'from-teal-950/20 to-teal-900/20'
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Cleanup & Reconciliation',
    description: 'We bring your books fully up to date identifying discrepancies, correcting errors, and aligning everything with GAAP standards.',
    details: 'You\'ll gain accurate, compliant, and audit-ready financials that restore confidence and consistency.',
    goal: 'Establish a clean, dependable foundation for accurate reporting and smart decision-making.',
    keywords: 'GAAP compliance, bookkeeping and reconciliation, audit-ready accounting services',
    color: 'from-green-500 to-green-600',
    bgColor: 'from-green-50 to-green-100',
    darkBgColor: 'from-green-950/20 to-green-900/20'
  },
  {
    number: '04',
    icon: Settings,
    title: 'Process Enhancement & Automation',
    description: 'Next, we focus on efficiency and scalability.',
    details: 'By simplifying workflows, integrating technology, and automating repetitive tasks, we give you real-time visibility across your financial processes. Our approach turns accounting into a streamlined, growth-ready system.',
    goal: 'Create efficient, automated accounting operations that scale with your business.',
    keywords: 'accounting automation, financial systems integration, real-time reporting',
    color: 'from-navy-500 to-navy-600',
    bgColor: 'from-slate-50 to-slate-100',
    darkBgColor: 'from-slate-950/20 to-slate-900/20'
  },
  {
    number: '05',
    icon: TrendingUp,
    title: 'Continuous Support & Insights',
    description: 'We stay with you not just as accountants, but as your strategic financial partners.',
    details: 'Through monthly bookkeeping, data-driven reports, and proactive CFO advisory, we help you make confident business decisions with ongoing clarity and control.',
    goal: 'Deliver clarity, consistency, and confidence every month, year-round.',
    keywords: 'virtual CFO advisory, ongoing bookkeeping support, outsourced accounting partnership',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'from-indigo-50 to-indigo-100',
    darkBgColor: 'from-indigo-950/20 to-indigo-900/20'
  }
];

interface StackingStepCardProps {
  step: typeof steps[0];
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const StackingStepCard = ({ step, index, progress, range, targetScale }: StackingStepCardProps) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const Icon = step.icon;

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0'
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] h-auto min-h-[400px] w-[95%] md:w-[85%] lg:w-[70%] rounded-3xl p-8 md:p-10 origin-top
          bg-gradient-to-br ${step.bgColor} dark:${step.darkBgColor}
          backdrop-blur-xl 
          border border-white/20 dark:border-gray-700/30
          shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]
          dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden`}
      >
        {/* Step Number Badge */}
        <div className="flex items-start justify-between mb-6">
          <span className="text-5xl md:text-6xl font-light text-muted-foreground/40 tracking-wider">{step.number}</span>
          <div className="w-14 h-14 md:w-16 md:h-16 bg-quantifi-primary rounded-2xl flex items-center justify-center shadow-lg">
            <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
          </div>
        </div>

        {/* Title */}
        <h3 className='text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight'>
          {step.title}
        </h3>

        {/* Description */}
        <p className='text-base md:text-lg text-muted-foreground mb-4 leading-relaxed'>
          {step.description}
        </p>

        {/* Details */}
        <p className='text-sm md:text-base text-muted-foreground mb-6 leading-relaxed'>
          {step.details}
        </p>

        {/* Goal */}
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-4 border border-white/50 dark:border-slate-700/50">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">Goal:</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.goal}</p>
            </div>
          </div>
        </div>

        {/* SEO Keywords (hidden but accessible) */}
        <div className="sr-only">
          <p>Keywords: {step.keywords}</p>
        </div>

        {/* Bottom gradient accent */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-quantifi-primary"></div>
      </motion.div>
    </div>
  );
};

export function HowWeWorkEnhanced() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <>
      {/* Header Section */}
      <motion.section
        className="relative pt-16 md:pt-20 pb-8 overflow-hidden bg-white dark:bg-gray-950"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[300px] sm:h-[450px] md:h-[600px] bg-gradient-radial from-blue-500/3 via-indigo-500/2 to-transparent rounded-full"></div>
        </div>

        <div className="container-standard relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full border border-blue-200/50 dark:border-blue-800/50 mb-6">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                How We Work Our 5-Step Process
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 max-w-4xl mx-auto">
              Strategic. Seamless. Scalable.
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our process combines strategic analysis, seamless implementation, and continuous optimization to transform your financial operations delivering measurable business results with clarity and confidence.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stacking Cards Section */}
      <section ref={container} className="relative bg-white dark:bg-gray-950">
        {steps.map((step, i) => {
          const targetScale = 1 - (steps.length - i) * 0.05;
          return (
            <StackingStepCard
              key={`step_${i}`}
              step={step}
              index={i}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>

      {/* CTA Section */}
      <motion.section className="relative bg-white dark:bg-gray-950 pb-16">
        <div className="container-standard relative z-10">
          <motion.div
            className="text-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950/30 rounded-3xl p-12 md:p-16 border border-slate-200/50 dark:border-slate-700/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Simplify Your Accounting?
              </h3>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Outsourcing your accounting isn&apos;t just about saving time it&apos;s a growth strategy.
                <br />
                Let&apos;s build a financial system that gives you confidence, control, and clarity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-800 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label="Schedule a consultation with QuantiFi Accounting"
                >
                  <a href="/contact">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book a Free Consultation
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                  aria-label="Talk to an expert at QuantiFi Accounting"
                >
                  <a href="tel:+13016595995">
                    <Phone className="w-5 h-5 mr-2" />
                    Talk to an Expert
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Schema.org HowTo structured data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "HowTo",
                "name": "How We Work Our 5-Step Process",
                "description": "QuantiFi's comprehensive 5-step process for outsourced accounting services",
                "step": steps.map((step, index) => ({
                  "@type": "HowToStep",
                  "position": index + 1,
                  "name": step.title,
                  "text": step.description,
                  "url": `#step-${index + 1}`
                }))
              })
            }}
          />
        </div>
      </motion.section>
    </>
  );
}

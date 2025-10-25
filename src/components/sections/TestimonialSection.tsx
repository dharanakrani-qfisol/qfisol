'use client';

import { motion } from 'framer-motion';
import { TestimonialsColumn } from '@/components/ui/testimonials-columns-1';

const testimonials = [
  {
    text: "QuantiFi transformed our financial clarity and gave us the confidence to scale strategically. Their industry expertise saved us months of setup time.",
    name: "Jennifer Davis",
    role: "CEO, Construction",
    gender: 'female' as const,
  },
  {
    text: "Working with QuantiFi has been a game-changer for our practice. Their seamless CPA collaboration and accurate reporting have streamlined our entire tax season workflow.",
    name: "Michael Chen",
    role: "Managing Partner, CPA/Accounting",
    gender: 'male' as const,
  },
  {
    text: "The controller services from QuantiFi gave us executive-level financial insights without the executive-level price tag. Their dashboards and forecasting have been invaluable for our growth.",
    name: "Sarah Martinez",
    role: "CFO, Healthcare",
    gender: 'female' as const,
  },
  {
    text: "QuantiFi's expertise in multi-location accounting and their deep understanding of hospitality operations has been instrumental in managing our portfolio of properties efficiently.",
    name: "David Thompson",
    role: "Operations Director, Hospitality",
    gender: 'male' as const,
  },
  {
    text: "The payroll and compliance services have been a lifesaver. QuantiFi handles everything from multi-state reporting to certified payroll, allowing us to focus on patient care instead of paperwork.",
    name: "Dr. Patricia Williams",
    role: "Practice Owner, Healthcare",
    gender: 'female' as const,
  },
  {
    text: "Their ERP migration expertise was invaluable. Moving from QuickBooks to NetSuite was seamless, with zero downtime and perfect data integrity. Couldn't have done it without them.",
    name: "Robert Anderson",
    role: "VP of Finance, Technology",
    gender: 'male' as const,
  },
  {
    text: "As a growing manufacturing business, we needed sophisticated financial reporting without hiring a full finance team. QuantiFi's controller services provide exactly what we need at the right price point.",
    name: "Maria Rodriguez",
    role: "President, Manufacturing",
    gender: 'female' as const,
  },
  {
    text: "The automation and reporting capabilities they've implemented have transformed how we make business decisions. Real-time dashboards and Power BI integration give us insights we never had before.",
    name: "James Kim",
    role: "CEO, Retail",
    gender: 'male' as const,
  },
  {
    text: "Working with multiple restaurants across three states was a nightmare until QuantiFi stepped in. Their understanding of restaurant accounting and multi-location management has been phenomenal.",
    name: "Anthony Russo",
    role: "Owner, Restaurant/Hospitality",
    gender: 'male' as const,
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialSection() {
  return (
    <motion.section 
      className="bg-background pt-20 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.3, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container-standard section-gutter relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter text-center">
          See what our Clients have to say about us.
          </h2>
          <p className="text-center mt-5 opacity-75">
            
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </motion.section>
  );
}

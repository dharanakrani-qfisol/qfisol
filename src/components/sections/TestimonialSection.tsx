'use client';

import { motion } from 'framer-motion';
import { TestimonialsColumn } from '@/components/ui/testimonials-columns-1';

const testimonials = [
  {
    text: "Partnering with QuantiFi has completely transformed how we manage client accounting work. Their back-end team handles everything from reconciliations to report automation — seamlessly, accurately, and always ahead of deadlines. It's like having an entire in-house department, without the overhead.",
    name: "Richard Patterson",
    role: "CPA Firm – Managing Partner | Atlanta, GA",
    gender: 'male' as const,
  },
  {
    text: "We rely on QuantiFi as our behind-the-scenes engine. They support our bookkeeping, cleanup, and migration projects flawlessly, allowing our CPAs to focus on advisory work and client relationships. Their reliability and depth of industry knowledge are unmatched.",
    name: "David Morrison",
    role: "CPA Firm – Managing Partner | San Diego, CA",
    gender: 'male' as const,
  },
  {
    text: "Our partnership with QuantiFi feels effortless. Their team manages multi-entity cleanups, WIP analysis, and payroll reconciliations for several of our clients — with consistency, precision, and excellent communication. They're the extension of our firm we always needed.",
    name: "Jennifer Walsh",
    role: "CPA Firm – Partner | Los Angeles, CA",
    gender: 'female' as const,
  },
  {
    text: "Before QuantiFi, our month-end close was chaos. Now, everything — from job costing to retainage and WIP tracking — runs smoothly. Their team feels like part of our internal finance department, and the visibility we have today is incredible.",
    name: "Michael Roberts",
    role: "General Contractor – CFO | Atlanta, GA",
    gender: 'male' as const,
  },
  {
    text: "QuantiFi helped us clean up years of backlog, implemented job-cost dashboards, and gave us confidence in our numbers. Our CPA and bank both noticed the improvement — we finally have financials we can rely on.",
    name: "Carlos Martinez",
    role: "General Contractor – Owner | Los Angeles, CA",
    gender: 'male' as const,
  },
  {
    text: "Our medical group was overwhelmed with billing and reconciliation issues. QuantiFi streamlined everything — from patient receipts to insurance reimbursements. Their structure and responsiveness helped us stabilize cash flow and stay focused on patient care.",
    name: "Dr. Rachel Cohen",
    role: "Medical Practice – Administrator | Baltimore, MD",
    gender: 'female' as const,
  },
  {
    text: "We struggled for years to get accurate financial visibility across our clinics. QuantiFi gave us a system that actually works — daily dashboards, claim tracking, and forecasting we can trust. Their insight has helped us grow confidently.",
    name: "Dr. Sarah Patel",
    role: "Dental Group – Operations Director | Newark, NJ",
    gender: 'female' as const,
  },
  {
    text: "Managing multiple hotel entities used to mean endless spreadsheets. QuantiFi consolidated our systems into one view — now I can see performance across every property in real time. Their reporting precision and proactive communication are top-notch.",
    name: "James Anderson",
    role: "Hospitality Group – CFO | Iowa",
    gender: 'male' as const,
  },
  {
    text: "The QuantiFi team understands hospitality better than any outsourced accounting group we've worked with. They bring CFO-level thinking to our monthly reports and catch revenue or charge discrepancies before they snowball. I can finally trust every number.",
    name: "Maria Rodriguez",
    role: "Hospitality Group – Controller | San Diego, CA",
    gender: 'female' as const,
  },
  {
    text: "Chargebacks were draining our time and cash flow. QuantiFi built a process that flags disputed transactions instantly and reconciles them before they hit the bottom line. Their chargeback management and reporting have saved us thousands every month.",
    name: "Thomas Bennett",
    role: "Hospitality Group – Director of Finance | Austin, TX",
    gender: 'male' as const,
  },
  {
    text: "As a startup, we needed financial clarity fast. QuantiFi built a forecasting model, automated our accounting, and gave investors the transparency they needed. We couldn't have scaled this confidently without them.",
    name: "Alex Chen",
    role: "Startup Founder | Austin, TX",
    gender: 'male' as const,
  },
  {
    text: "Working with QuantiFi feels like having an internal finance team without the full-time cost. Their precision and startup-savvy approach helped us secure funding and stay lean.",
    name: "Emily Foster",
    role: "Startup CEO | San Francisco, CA",
    gender: 'female' as const,
  },
  {
    text: "We were constantly battling margin errors and production cost overruns. QuantiFi implemented real-time cost tracking and SKU-level profitability reporting that completely changed our decision-making. Their precision helped us increase profit margins and reduce material waste.",
    name: "Robert Kim",
    role: "Plastic Manufacturer – Managing Director | Los Angeles, CA",
    gender: 'male' as const,
  },
];

const firstColumn = testimonials.slice(0, 5);
const secondColumn = testimonials.slice(5, 9);
const thirdColumn = testimonials.slice(9, 13);

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

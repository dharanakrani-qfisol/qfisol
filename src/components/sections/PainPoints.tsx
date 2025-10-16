'use client';

import React, { useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Link2, Briefcase, FileCheck } from 'lucide-react';

// Company logos
const ICONS_ROW1 = [
  "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-xero-is-a-new-zealand-public-technology-company-logo-color-tal-revivo.png", // Xero
  "https://www.pennylaneaccountants.co.uk/wp-content/uploads/2025/01/quickbooks-logo-e1736435247548.webp", // Quickbooks
  "https://upload.wikimedia.org/wikipedia/commons/9/94/Sage-logo_svg.svg", // Sage
  "https://operto.com/nitropack_static/JOMuwRwANzxNdSPgiZLHYjtQVRKnFseX/assets/images/optimized/rev-b5242f5/operto.com/wp-content/uploads/2023/03/opera.png", // Opera
  "https://cdn.cookielaw.org/logos/89a08876-0cfe-468a-9315-983a09be0523/64f4b5ea-a777-4270-919b-15ea14a2c424/d6e90807-c9ac-4a05-831b-d21c91c639fb/Procore_Logo_FC_Black_RGB.png", // Procore
  "https://www.acumatica.com/content/plugins/ac-marketplace/uploads/ACUMATICAESIGNINTEGRATION/ISV-Solutions-4128-14ISV-Solutions3511-14acumatica-logo-stacked-2024-dark.png", // Acumatica
  "https://logos-world.net/wp-content/uploads/2021/09/NetSuite-Symbol.png", // Salesforce
  "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg", // SAP
  "https://e7.pngegg.com/pngimages/245/8/png-clipart-smartsheet-logo-icon-tech-companies.png", //Smartsheet
  "https://cdn.prod.website-files.com/63e3da3df35cd62f54751985/649488c838360d22ac08b864_bill-logo.svg", // Bill.com
  "https://tipalti.com/wp-content/themes/Tipalti-Synergy/resources/logos/header-logo.svg", // Tipalti
  "https://mma.prnewswire.com/media/1769845/Ramp_Logo.jpg", // Ramp
  "https://1000logos.net/wp-content/uploads/2021/04/Dentrix-logo.png", // Dentrix
  "https://www.m3as.com/wp-content/uploads/2025/06/M3_RGB_NoTag_tm-2-1024x279.png", // M3
  "https://www.rooferscoffeeshop.com/uploads/media/2024/07/foundation-software-overall-logo.png", // Foundation Software
  "https://www.3ds.com/assets/3ds-navigation/3DS_corporate-logo_solidworks.svg", // Solidworks
  "https://www.adp.com/-/media/adp2025/ui/logo-adp.svg", // ADP
  "https://prod.gusto-assets.com/assets/svg/header/gusto-logo-bfed4fde4bd2b5dd364ab0e58f77fc90aeefa2f1ecdb7fff524279642e23f9c2.svg", // Gusto
];

// Utility to repeat icons enough times
const repeatedIcons = (icons: string[], repeat = 4) => Array.from({ length: repeat }).flatMap(() => icons);

const differentiators = [
  {
    icon: Link2,
    title: 'Liaison Model',
    description: 'We act as your in-house financial bridge.',
    gradientFrom: 'from-blue-400',
    gradientVia: 'via-blue-500',
    gradientTo: 'to-blue-600',
  },
  {
    icon: Briefcase,
    title: 'Fully Outsourced Option',
    description: 'No accounting team? We become one.',
    gradientFrom: 'from-blue-400',
    gradientVia: 'via-blue-500',
    gradientTo: 'to-blue-600',
  },
  {
    icon: FileCheck,
    title: 'CPA-Ready Accuracy',
    description: 'Every report, audit-ready and verified.',
    gradientFrom: 'from-blue-400',
    gradientVia: 'via-blue-500',
    gradientTo: 'to-blue-600',
  },
];

export function PainPoints() {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Auto-scroll animation when not dragging
  useAnimationFrame(() => {
    if (!isDragging.current && containerRef.current) {
      const contentWidth = containerRef.current.scrollWidth / 2;
      const currentX = x.get();
      
      // Move left slowly
      const newX = currentX - 0.5;
      
      // Loop seamlessly
      if (Math.abs(newX) >= contentWidth) {
        x.set(0);
      } else {
        x.set(newX);
      }
    }
  });

  return (
    <motion.section 
      id="differentiators" 
      className="relative py-32 md:py-40 overflow-hidden bg-[linear-gradient(to_bottom,#fff,#f8f9fa_30%,#f1f3f5_98%)] dark:bg-[linear-gradient(to_bottom,#000_10%,#0a0a0a_30%,#0f0f0f_98%)]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.3, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >

      <div className="container-standard section-gutter relative z-10">
        {/* Section Header */}
        <div className="text-center pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="text-sm font-semibold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
              How We&apos;re Different
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6 text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto font-bold tracking-tighter p-4 bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground/90 to-foreground/70"
          >
            Not Outsourced. Not Detached.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
              Integrated.
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-3xl"
          >
            <div className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed space-y-2">
              <p>Traditional accounting firms work <span className="text-foreground font-semibold">outside</span> your business. We work <span className="text-foreground font-semibold">inside</span> it.</p>
              <p className="mt-4 text-base md:text-lg">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 font-bold">Liaison accounting and advisory integrated with your team, built for growth.</span>
              </p>
              <p className="mt-2 text-base md:text-lg text-muted-foreground italic">
                We integrate with your existing ERP and tools — no retraining required.
              </p>
            </div>

            {/* Logo Slider */}
            <div className="mt-8 overflow-hidden relative pb-2 cursor-grab active:cursor-grabbing">
              <motion.div 
                ref={containerRef}
                className="flex gap-10 whitespace-nowrap"
                style={{ x }}
                drag="x"
                dragConstraints={{ left: -2000, right: 0 }}
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
                onDragStart={() => { isDragging.current = true; }}
                onDragEnd={() => { isDragging.current = false; }}
              >
                {repeatedIcons(ICONS_ROW1, 4).map((src, i) => (
                  <div key={i} className="h-16 w-16 flex-shrink-0 rounded-full bg-background dark:bg-gray-300 shadow-md flex items-center justify-center border border-border">
                    <img src={src} alt="company logo" className="h-10 w-10 object-contain pointer-events-none" />
                  </div>
                ))}
              </motion.div>

              {/* Fade overlays */}
              <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#f8f9fa] dark:from-[#0a0a0a] to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#f8f9fa] dark:from-[#0a0a0a] to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Three Columns with Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16 relative">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              viewport={{ once: true }}
            >
              <Card
                className="group relative p-6 h-full backdrop-blur-xl bg-white/60 dark:bg-black/40 border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-700 overflow-hidden rounded-3xl"
              >
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradientFrom} ${item.gradientVia} ${item.gradientTo} opacity-60`} />

                {/* Icon with animated gradient */}
                <div className="relative mb-6">
                  <div 
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl bg-gradient-to-br ${item.gradientFrom} ${item.gradientVia} ${item.gradientTo} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <item.icon className="h-8 w-8 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                  {item.description}
                </p>

                {/* Animated gradient bar */}
                <div className="mt-6 overflow-hidden rounded-full">
                  <div 
                    className={`h-1.5 w-0 group-hover:w-full bg-gradient-to-r ${item.gradientFrom} ${item.gradientVia} ${item.gradientTo} transition-all duration-1000 ease-out rounded-full`}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 text-sm font-medium">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-muted-foreground via-foreground to-muted-foreground">
              Experience the integrated difference
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

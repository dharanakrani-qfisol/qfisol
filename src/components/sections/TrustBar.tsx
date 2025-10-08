'use client';

import React from "react";
import { motion } from 'framer-motion';
import { BlurredStagger } from '@/components/ui/blurred-stagger-text';

// Company logos - using placeholder URLs for now, you can replace with actual logos
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
];


// Utility to repeat icons enough times
const repeatedIcons = (icons: string[], repeat = 4) => Array.from({ length: repeat }).flatMap(() => icons);

export function TrustBar() {
  return (
    <section className="relative py-32 overflow-hidden bg-background">
      {/* Light grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 mb-4 text-sm rounded-full border border-border bg-background text-foreground"
        >
          ⚡ Trusted Partners
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
        >
          <BlurredStagger text="We work with the tools you already use" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto"
        >
          <BlurredStagger text="We integrate seamlessly with the tools you already use to streamline your accounting workflow." />
        </motion.div>

        {/* Carousel */}
        <div className="mt-12 overflow-hidden relative pb-2">
          {/* Row 1 */}
          <div className="flex gap-10 whitespace-nowrap animate-scroll-left">
            {repeatedIcons(ICONS_ROW1, 4).map((src, i) => (
              <div key={i} className="h-16 w-16 flex-shrink-0 rounded-full bg-background dark:bg-gray-300 shadow-md flex items-center justify-center border border-border">
                <img src={src} alt="company logo" className="h-10 w-10 object-contain" />
              </div>
            ))}
          </div>

          {/* Fade overlays */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>

    </section>
  );
}

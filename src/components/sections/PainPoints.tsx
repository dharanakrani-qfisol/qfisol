'use client';

import React, { useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';

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
    <>

    {/* New Section: Who We Are And How We're Different */}
    <motion.section 
      className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-slate-900 dark:via-blue-950/20 dark:to-indigo-950/30"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.3, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Subtle geometric background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/3 via-indigo-500/2 to-transparent rounded-full"></div>
      </div>

      <div className="container-standard section-gutter relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full border border-blue-200/50 dark:border-blue-800/50 mb-6">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Who We Are and How We&apos;re Different
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 max-w-4xl mx-auto">
            Not Outsourced. Not Detached.
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Integrated.
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your Modern Virtual Accounting Partner.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column - Content Cards */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Content Card 1 */}
            <motion.div
              className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🏢</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Modern Partnership</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    QuantiFi is a modern outsourced accounting and virtual CFO partner for small and mid-sized businesses across the U.S.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Content Card 2 */}
            <motion.div
              className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">CPA-Level Expertise</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We combine CPA-level expertise, technology, and personalized strategy to deliver clarity, control, and confidence over your finances.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Content Card 3 */}
            <motion.div
              className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🔗</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">LAP Integration Model</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Through our <strong className="text-foreground">Liaison Accounting Partnership (LAP) model</strong>, we integrate directly with your operations functioning as your in-house accounting and finance team, not a distant vendor.
                  </p>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column - Enhanced Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Main Visual Container */}
            <div className="relative">
              {/* Background glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
              
              {/* Main card */}
              <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 dark:border-slate-700/50">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs font-medium text-muted-foreground bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                    Monthly Review Call
                  </div>
                </div>

                {/* Participants */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl">👨‍💼</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Sarah Chen</p>
                      <p className="text-sm text-muted-foreground">Business Owner</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl">👩‍💻</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Dhara N.</p>
                      <p className="text-sm text-muted-foreground">QuantiFi Partner</p>
                    </div>
                  </div>
                </div>

                {/* Dashboard mockup */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg">📊</span>
                    <span className="font-semibold text-foreground">Q4 Financial Dashboard</span>
                  </div>
                  
                  {/* Mini charts */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600 mb-1">+15%</div>
                      <div className="text-xs text-muted-foreground">Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">99%</div>
                      <div className="text-xs text-muted-foreground">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600 mb-1">24h</div>
                      <div className="text-xs text-muted-foreground">Response</div>
                    </div>
                  </div>
                </div>

                {/* Floating notifications */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  ✅ Books Reconciled
                </div>
                <div className="absolute -bottom-3 -left-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  📊 Revenue ↑15%
                </div>
                <div className="absolute top-1/2 -right-12 bg-white dark:bg-slate-800 text-foreground px-4 py-3 rounded-xl text-sm shadow-xl border border-slate-200 dark:border-slate-700">
                  💬 &quot;Monthly Report Ready&quot;
                </div>
              </div>
            </div>

            {/* Trust Signals Card */}
            <motion.div
              className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">✅</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">Trusted Nationwide</h3>
              </div>
              <p className="text-base font-semibold text-foreground mb-3">
                Trusted by 100+ businesses nationwide.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  CPA-led expertise
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  Transparent pricing
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  99% client retention
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Industry Trust Bar */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full border border-slate-200/50 dark:border-slate-700/50 mb-4">
              <span className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                Trusted Across Industries
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { icon: "🏗️", label: "Construction", color: "from-orange-500 to-orange-600" },
              { icon: "🩺", label: "Healthcare", color: "from-emerald-500 to-emerald-600" },
              { icon: "🏨", label: "Hospitality", color: "from-blue-500 to-blue-600" },
              { icon: "🏠", label: "Real Estate", color: "from-purple-500 to-purple-600" },
              { icon: "💻", label: "Startups", color: "from-indigo-500 to-indigo-600" },
              { icon: "🏭", label: "Manufacturing", color: "from-slate-500 to-slate-600" }
            ].map((industry, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200`}>
                    <span className="text-2xl">{industry.icon}</span>
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {industry.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Divider */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-500"></div>
          </div>
        </motion.div>
      </div>
    </motion.section>

    {/* Enhanced Section: Seamless Integration with Your Tools */}
    <motion.section
      className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50/50 dark:from-blue-950/30 dark:via-slate-900 dark:to-indigo-950/20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Enhanced geometric background with animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 rounded-full blur-3xl"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 rounded-full blur-3xl"
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 via-indigo-500/3 to-transparent rounded-full"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="container-standard section-gutter relative z-10">
        {/* Enhanced Header Section with Badge */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full border border-blue-200/50 dark:border-blue-800/50 shadow-lg mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Integration Excellence
            </span>
          </motion.div>

          {/* Main Title with Enhanced Typography */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
              Seamless Integration
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
              with Your Tools
            </span>
          </motion.h2>

          {/* Enhanced Subtitle */}
          <motion.div
            className="space-y-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
              We work within your existing financial ecosystem connecting with the tools you already use.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-950/30 rounded-full border border-green-200/50 dark:border-green-800/50">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-lg font-semibold text-green-700 dark:text-green-400">
                No retraining. No disruption. Just smoother accounting.
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Supporting Line with Visual Elements */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed relative z-10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/50 dark:border-slate-700/50">
              From ERP and payroll systems to project management and POS platforms, QuantiFi integrates directly into your operations bridging data, people, and performance.
            </p>
          </div>
        </motion.div>

        {/* Enhanced Logo Slider with Better Visual Design */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Slider Container with Enhanced Styling */}
          <div className="relative overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 dark:border-slate-700/50 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">Trusted Integration Partners</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto"></div>
            </div>

            {/* Enhanced Logo Slider */}
            <div className="relative">
              <motion.div
                className="flex gap-10 items-center"
                style={{ x }}
                animate={{ x: [0, -100 * ICONS_ROW1.length] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
                drag="x"
                dragConstraints={{ left: -100 * ICONS_ROW1.length, right: 0 }}
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
                onDragStart={() => { isDragging.current = true; }}
                onDragEnd={() => { isDragging.current = false; }}
              >
                {repeatedIcons(ICONS_ROW1, 4).map((src, i) => (
                  <motion.div
                    key={i}
                    className="h-20 w-20 flex-shrink-0 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-slate-700 dark:to-slate-600 shadow-lg hover:shadow-xl flex items-center justify-center border border-gray-200/50 dark:border-slate-600/50 hover:scale-110 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img src={src} alt="company logo" className="h-12 w-12 object-contain pointer-events-none" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced Fade Overlays */}
              <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white/90 dark:from-slate-800/90 to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white/90 dark:from-slate-800/90 to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* Enhanced Mini Tagline with Better Visual Design */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
            
            {/* Main Tagline Container */}
            <div className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 backdrop-blur-sm rounded-2xl border border-blue-200/50 dark:border-blue-800/50 shadow-xl">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                Your systems stay the same. Your financial clarity improves.
              </span>
              <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Divider with Animated Elements */}
        <motion.div
          className="mt-24 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-6">
            <motion.div
              className="h-px w-20 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="h-px w-20 bg-gradient-to-l from-transparent via-indigo-500 to-transparent"
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
    </>
  );
}


'use client';

import { motion } from 'framer-motion';
import { TrueFocus } from '@/components/ui/true-focus';
import { ArrowDown, TrendingUp, CheckCircle, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with masked gradient and floating shapes */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-blue-950 dark:via-navy-950 dark:to-indigo-950" />
        
        {/* Floating shapes with parallax */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-xl"
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-3/4 right-1/4 w-32 h-32 bg-indigo-200/20 dark:bg-indigo-800/20 rounded-full blur-lg"
            animate={{
              y: [10, -10, 10],
              x: [5, -5, 5],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-48 h-48 bg-purple-200/15 dark:bg-purple-800/15 rounded-full blur-2xl"
            animate={{
              y: [-5, 15, -5],
              x: [10, -10, 10],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-indigo-600/5" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container-standard section-gutter pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
          >
            {/* Main headline with True Focus animation */}
            <div className="mb-8">
              <TrueFocus
                sentence="Clarity in Numbers, Confidence in Decisions."
                manualMode={false}
                blurAmount={3}
                borderColor="rgb(59 130 246)"
                glowColor="rgba(59, 130, 246, 0.6)"
                animationDuration={1.2}
                pauseBetweenAnimations={2}
              />
            </div>

            {/* H2 Subhead */}
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Your Virtual Accounting & CFO Team Nationwide.
            </motion.h2>

            {/* Body/Supporting line */}
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              Outsourced accounting, bookkeeping, and virtual CFO services for small businesses led by experienced CPAs who simplify finances, ensure compliance, and drive profitable growth.
            </motion.p>


          </motion.div>

          {/* Right Column - Enhanced Dashboard Visual */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-full max-w-lg">
              {/* Enhanced Dashboard Visual */}
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                {/* Floating notification elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    y: [-3, 3, -3],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <CheckCircle className="h-6 w-6 text-white" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-6 -left-6 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    y: [3, -3, 3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <TrendingUp className="h-5 w-5 text-white" />
                </motion.div>
                
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Financial Dashboard</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Real-time insights</p>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Key Metrics Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <motion.div
                    className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-4 border border-blue-200 dark:border-blue-800"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">$847K</div>
                    <div className="text-xs text-blue-700 dark:text-blue-300">Monthly Revenue</div>
                    <div className="text-xs text-green-600 font-semibold">+12.5% ↗</div>
                  </motion.div>
                  
                  <motion.div
                    className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-xl p-4 border border-green-200 dark:border-green-800"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">94.2%</div>
                    <div className="text-xs text-green-700 dark:text-green-300">Accuracy Rate</div>
                    <div className="text-xs text-green-600 font-semibold">+2.1% ↗</div>
                  </motion.div>
                </div>
                
                {/* Profit Growth Chart */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Profit Growth Trend</h4>
                    <span className="text-xs text-green-600 font-semibold">+28.4%</span>
                  </div>
                  
                  {/* Animated chart bars */}
                  <div className="flex items-end space-x-2 h-20">
                    {[
                      { height: 12, color: "bg-blue-400", delay: 0.8 },
                      { height: 20, color: "bg-blue-500", delay: 1.0 },
                      { height: 28, color: "bg-blue-600", delay: 1.2 },
                      { height: 35, color: "bg-blue-700", delay: 1.4 },
                      { height: 42, color: "bg-green-500", delay: 1.6 },
                      { height: 48, color: "bg-green-600", delay: 1.8 },
                    ].map((bar, index) => (
                      <motion.div
                        key={index}
                        className={`flex-1 ${bar.color} rounded-t-sm`}
                        initial={{ height: 0 }}
                        animate={{ height: `${bar.height * 2}px` }}
                        transition={{ duration: 1, delay: bar.delay, ease: "easeOut" }}
                      />
                    ))}
                  </div>
                  
                  {/* Chart labels */}
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>
                
                {/* Bottom status */}
                <motion.div
                  className="mt-6 flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 2 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">All systems operational</span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Updated 2 min ago</span>
                </motion.div>
              </div>

              {/* Trust signals below the dashboard */}
              <motion.div
                className="mt-8 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
              >
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    100% virtual. Serving clients across Los Angeles, Dallas, Atlanta, and nationwide.
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    We handle your books, reporting, and tax strategy so you can focus on growth.
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Trusted by 100+ businesses across construction, hospitality, healthcare, real estate & more.
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}


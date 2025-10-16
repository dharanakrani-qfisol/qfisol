'use client';

import { motion } from 'framer-motion';
import { TrueFocus } from '@/components/ui/true-focus';
import { ArrowDown, Target, Clock, Calendar, Users } from 'lucide-react';

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
          >
            {/* Main headline */}
            <div className="mb-6">
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

            {/* Subhead */}
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Professional outsourced accounting and advisory services that transform your financial management into a strategic advantage.
            </motion.p>

            {/* Trust indicators */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">200+</div>
                  <div className="text-sm text-muted-foreground">Businesses Served</div>
                </div>
              </motion.div>
              
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <Calendar className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">15</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </motion.div>
              
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
              </motion.div>
              
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                  <Target className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">99.5%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Animated Visual */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-full max-w-lg">
              {/* Animated Dashboard/Chart Visual */}
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"
                  animate={{
                    y: [-5, 5, -5],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-500 rounded-full"
                  animate={{
                    y: [5, -5, 5],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
                
                {/* Chart/Graph representation */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Financial Overview</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Animated bars */}
                  <div className="space-y-4">
                    {[
                      { height: "h-16", color: "bg-blue-500", label: "Revenue", delay: 0 },
                      { height: "h-12", color: "bg-green-500", label: "Growth", delay: 0.2 },
                      { height: "h-20", color: "bg-purple-500", label: "Profit", delay: 0.4 },
                      { height: "h-14", color: "bg-indigo-500", label: "Assets", delay: 0.6 },
                    ].map((bar, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: bar.delay }}
                      >
                        <div className="w-16 text-sm text-gray-600 dark:text-gray-400">{bar.label}</div>
                        <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`${bar.height} ${bar.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, delay: bar.delay + 0.5, ease: "easeOut" }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Animated numbers */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                    >
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">$2.4M</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Revenue</div>
                    </motion.div>
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.4 }}
                    >
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">+24%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Growth</div>
                    </motion.div>
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.6 }}
                    >
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">98%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Accuracy</div>
                    </motion.div>
                  </div>
                </div>
              </div>
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


'use client';

import { motion } from 'framer-motion';

export function TrustedNationwide() {
  return (
    <motion.section 
      className="relative pt-16 md:pt-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-slate-900 dark:via-blue-950/20 dark:to-indigo-950/30"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.3, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-standard section-gutter relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full border border-blue-200/50 dark:border-blue-800/50 mb-6">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Trusted Nationwide
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 max-w-4xl mx-auto">
            Trusted Nationwide Across Industries & States
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We deliver outsourced accounting, bookkeeping for small businesses, and virtual CFO services to clients across the U.S. with industry-specific expertise and local compliance know-how.
          </p>
        </motion.div>

        {/* States Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">States We Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { 
                state: "California", 
                abbreviation: "CA",
                cities: "Los Angeles, Bay Area, San Diego",
                href: "/locations/california-accounting",
                alt: "Virtual accounting services in California"
              },
              { 
                state: "Texas", 
                abbreviation: "TX",
                cities: "Dallas, Austin, Houston",
                href: "/locations/texas-accounting",
                alt: "Virtual accounting services in Texas"
              },
              { 
                state: "Georgia", 
                abbreviation: "GA",
                cities: "Atlanta, Savannah",
                href: "/locations/georgia-accounting",
                alt: "Virtual accounting services in Georgia"
              },
              { 
                state: "North Carolina", 
                abbreviation: "NC",
                cities: "Charlotte, Raleigh",
                href: "/locations/north-carolina-accounting",
                alt: "Virtual accounting services in North Carolina"
              },
              { 
                state: "New York", 
                abbreviation: "NY",
                cities: "NYC",
                href: "/locations/new-york-accounting",
                alt: "Virtual accounting services in New York"
              },
              { 
                state: "Florida", 
                abbreviation: "FL",
                cities: "Miami, Orlando, Tampa",
                href: "/locations/florida-accounting",
                alt: "Virtual accounting services in Florida"
              },
              { 
                state: "Arizona", 
                abbreviation: "AZ",
                cities: "Phoenix",
                href: "/locations/arizona-accounting",
                alt: "Virtual accounting services in Arizona"
              },
              { 
                state: "Washington", 
                abbreviation: "WA",
                cities: "Seattle",
                href: "/locations/washington-accounting",
                alt: "Virtual accounting services in Washington"
              },
              { 
                state: "Maryland", 
                abbreviation: "MD",
                cities: "Baltimore",
                href: "/locations/maryland-accounting",
                alt: "Virtual accounting services in Maryland"
              },
              { 
                state: "New Jersey", 
                abbreviation: "NJ",
                cities: "Jersey City, Newark",
                href: "/locations/new-jersey-accounting",
                alt: "Virtual accounting services in New Jersey"
              }
            ].map((state, index) => (
              <motion.div
                key={index}
                className="group block"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05, type: "spring", stiffness: 300 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-5 border border-gray-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all duration-300 text-center h-full">
                  {/* State Abbreviation Badge */}
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200">
                    <span className="text-white font-bold text-lg">
                      {state.abbreviation}
                    </span>
                  </div>
                  
                  {/* State Name */}
                  <h4 className="text-base font-semibold text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {state.state}
                  </h4>
                  
                  {/* Cities */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {state.cities}
                  </p>
                  
                  {/* Subtle hover indicator */}
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-0.5 bg-blue-500 mx-auto rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer line */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground font-medium">
            100% virtual. We securely serve clients nationwide, wherever your business grows.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BlurredStagger } from '@/components/ui/blurred-stagger-text';

const industries = [
  {
    id: 1,
    title: 'Construction & Contracting',
    description: 'Job costing, WIP (work-in-progress) tracking, certified payroll reporting, and project-based accounting that keeps you profitable from bid to build.',
    href: '/industries/construction',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    id: 2,
    title: 'Hospitality & Restaurants',
    description: 'Daily sales and POS reconciliation, chargeback follow-up and dispute management, tip reporting, and multi-location payroll that streamline your operations and protect your margins.',
    href: '/industries/hospitality',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    id: 3,
    title: 'Retail & E-Commerce',
    description: 'Simplified sales tax across states, inventory tracking, and multi-channel bookkeeping for Shopify, Amazon, brick-and-mortar and more – ensuring your online and retail sales data all align.',
    href: '/industries/retail-ecommerce',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    id: 4,
    title: 'Healthcare (Medical, Dental & Pharmacy)',
    description: 'HIPAA-aware accounting for healthcare practices. We handle insurance billing reconciliation, regulatory compliance, and precise bookkeeping so you can focus on patient care.',
    href: '/industries/healthcare',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 5,
    title: 'Startups & Tech',
    description: 'Burn rate monitoring, runway forecasting, R&D cost tracking, and investor-ready financial statements for startups. Fractional CFO support helps you navigate growth milestones without the overhead.',
    href: '/industries/startups',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-indigo-500 to-purple-600',
  },
  {
    id: 6,
    title: 'Real Estate',
    description: 'Property accounting with cost segregation, rent roll management, investor reporting, and cash flow analysis for each property. We bring clarity and compliance from acquisition to depreciation.',
    href: '/industries/real-estate',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop',
    gradient: 'from-blue-500 to-indigo-600',
  },
];

// Accordion Item Component
interface AccordionItemProps {
  item: {
    id: number;
    title: string;
    description: string;
    href: string;
    imageUrl: string;
    gradient: string;
  };
  isActive: boolean;
  onMouseEnter: () => void;
}

const AccordionItem = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  return (
    <Link
      href={item.href}
      className={`
        relative h-[450px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer block
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[300px] md:w-[400px]' : 'w-[80px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
        style={{ transform: isActive ? 'scale(1.1)' : 'scale(1)' }}
      />
      
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-40 mix-blend-multiply`}></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content overlay with gradient */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-60'}`}></div>

      {/* Title Text */}
      <div
        className={`
          absolute text-white font-bold z-10
          transition-all duration-500 ease-in-out
          ${
            isActive
              ? 'top-6 left-8 right-8' // Active: positioned at top
              : 'bottom-32 left-1/2 -translate-x-1/2' // Inactive: vertical, centered
          }
        `}
      >
        <h3 
          className={`
            ${['Healthcare (Medical, Dental & Pharmacy)', 'Construction & Contracting', 'Hospitality & Restaurants', 'Retail & E-Commerce'].includes(item.title) && isActive ? '' : 'whitespace-nowrap'}
            transition-all duration-500 ease-in-out
            ${
              isActive
                ? 'text-xl md:text-2xl rotate-0 tracking-tight' // Active: horizontal, consistent size
                : 'rotate-90 text-xs tracking-wide' // Inactive: vertical, consistent small size for all
            }
          `}
        >
          {item.title}
        </h3>
      </div>

      {/* Description - only visible when active */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isActive ? 1 : 0,
          y: isActive ? 0 : 20
        }}
        transition={{ duration: 0.4, delay: isActive ? 0.2 : 0 }}
        className="absolute bottom-8 left-8 right-8 z-10"
      >
        <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4">
          {item.description}
        </p>
        <div className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-3 transition-all duration-300 group">
          Learn More
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </motion.div>

      {/* Decorative corner accent */}
      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity duration-500 ${isActive ? 'opacity-30' : 'opacity-0'}`}
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
      />
    </Link>
  );
};

export function IndustriesGrid() {
  const [activeIndex, setActiveIndex] = useState(3);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <motion.section 
      id="industries" 
      className="bg-background pt-16 md:pt-24 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.3, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Side: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="lg:col-span-5 text-center lg:text-left pr-6 relative z-10"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 mb-4"
            >
              Who We Serve
            </motion.span>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-2"
            >
              <BlurredStagger text="Industries We Serve" className="inline-block" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-muted-foreground mb-6"
            >
              Expertise That Understands Your Business
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-[560px] mx-auto lg:mx-0"
            >
              <p className="whitespace-normal break-words">
                Every industry operates differently and so should your accounting.
                <br />
                At QuantiFi, we deliver outsourced accounting, bookkeeping, and CFO-level insight tailored to your field from construction and hospitality to healthcare, real estate, and beyond.
                <br />
                Our CPA-led team understands the challenges unique to each industry and builds financial systems designed for precision, compliance, and growth.
              </p>
            </motion.div>
            
          </motion.div>

          {/* Right Side: Image Accordion */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 overflow-hidden relative z-0 lg:ml-2 xl:ml-4"
          >
            <div className="flex flex-row items-center justify-center lg:justify-start gap-3 md:gap-4 overflow-x-auto p-4 lg:pl-10 xl:pl-12 scrollbar-hide">
              {industries.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-sm border border-gray-200 dark:border-gray-700 mt-16 mb-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
              Don&apos;t see your industry listed?
            </h3>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              We&apos;ve supported hundreds of businesses across dozens of sectors and we can tailor an accounting solution for yours too.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

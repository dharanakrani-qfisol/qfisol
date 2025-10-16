'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BlurredStagger } from '@/components/ui/blurred-stagger-text';

const industries = [
  {
    id: 1,
    title: 'Construction',
    description: 'Accurate job costing and WIP reporting for growing contractors.',
    href: '/industries/construction',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    id: 2,
    title: 'CPA Firms',
    description: 'Seasonal capacity and specialized workflow support.',
    href: '/industries/cpa-firms',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: 3,
    title: 'Healthcare',
    description: 'Comprehensive financial management for medical practices and healthcare facilities.',
    href: '/industries/healthcare',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 4,
    title: 'Hospitality',
    description: 'Revenue management and comprehensive reporting for hotels.',
    href: '/industries/hospitality',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    id: 5,
    title: 'Professional Services',
    description: 'Project-based accounting and resource allocation for technology and staffing firms.',
    href: '/industries/it-staffing',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-indigo-500 to-purple-600',
  },
  {
    id: 6,
    title: 'Manufacturing/Retail',
    description: 'Optimize supply chains and retail operations with comprehensive inventory tracking, cost management, and multi-location financial reporting.',
    href: '/industries/retail',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-pink-500 to-rose-600',
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
    <div
      className={`
        relative h-[450px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer
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
              ? `${item.title === 'Manufacturing/Retail' ? 'bottom-64' : ['Healthcare','Professional Services'].includes(item.title) ? 'bottom-44' : 'bottom-40'} left-8 right-8` // Extra space for Manufacturing/Retail, Healthcare & Professional Services
              : 'bottom-32 left-1/2 -translate-x-1/2' // Inactive: vertical, centered
          }
        `}
      >
        <h3 
          className={`
            ${['Manufacturing/Retail', 'Professional Services'].includes(item.title) && isActive ? '' : 'whitespace-nowrap'}
            transition-all duration-500 ease-in-out
            ${
              isActive
                ? `${['Manufacturing/Retail', 'Professional Services'].includes(item.title) ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'} rotate-0 tracking-tight` // Active: horizontal, smaller for long titles
                : 'rotate-90 text-lg tracking-wide' // Inactive: vertical
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
        className={`absolute ${['Healthcare','Professional Services','Manufacturing/Retail'].includes(item.title) ? 'bottom-8 mt-4' : 'bottom-8'} left-8 right-8 z-10`}
      >
        <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4">
          {item.description}
        </p>
        <Link 
          href={item.href}
          className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-3 transition-all duration-300 group"
        >
          Learn More
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      {/* Decorative corner accent */}
      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity duration-500 ${isActive ? 'opacity-30' : 'opacity-0'}`}
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
      />
    </div>
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
      className="bg-background py-16 md:py-24 overflow-hidden"
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6"
            >
              <BlurredStagger text="Industries We Serve" className="inline-block" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-[560px] mx-auto lg:mx-0"
            >
              <p className="whitespace-normal break-words">
                Specialized accounting solutions tailored to your industry&apos;s unique challenges and opportunities.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 bg-foreground hover:bg-gradient-to-r hover:from-blue-400 hover:via-blue-500 hover:to-blue-600 text-background font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                View All Industries
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
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
      </div>
    </motion.section>
  );
}

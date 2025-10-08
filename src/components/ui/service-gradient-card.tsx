'use client';

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "relative flex flex-col justify-between h-full w-full overflow-hidden rounded-2xl p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg bg-white dark:bg-slate-900",
  {
    variants: {
      gradient: {
        blue: "",
        purple: "",
        green: "",
        orange: "",
        pink: "",
        gray: "",
      },
    },
    defaultVariants: {
      gradient: "blue",
    },
  }
);

export interface ServiceGradientCardProps 
  extends React.HTMLAttributes<HTMLDivElement>, 
  VariantProps<typeof cardVariants> {
  badgeText?: string;
  badgeColor?: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  icon?: React.ComponentType<{ className?: string }>;
  imageUrl?: string;
}

const ServiceGradientCard = React.forwardRef<HTMLDivElement, ServiceGradientCardProps>(
  ({ 
    className, 
    gradient, 
    badgeText, 
    badgeColor = "#3B82F6", 
    title, 
    description, 
    ctaText = "Learn More", 
    ctaHref = "#", 
    icon: Icon,
    imageUrl,
    ...props 
  }, ref) => {
    
    const cardAnimation = {
      rest: { scale: 1, y: 0 },
      hover: { scale: 1.03, y: -4 },
    };

    const imageAnimation = {
      rest: { scale: 1, rotate: 0 },
      hover: { scale: 1.1, rotate: 3 },
    };

    return (
      <motion.div
        variants={cardAnimation}
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="h-full"
        ref={ref}
      >
        <div
          className={cn(cardVariants({ gradient }), className)}
          {...props}
        >
          {/* Decorative image or icon with animation */}
          {imageUrl ? (
            <motion.img
              src={imageUrl}
              alt={`${title} illustration`}
              variants={imageAnimation}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="absolute -right-8 -bottom-8 w-48 h-48 object-contain opacity-60 pointer-events-none dark:opacity-40"
            />
          ) : Icon ? (
            <motion.div
              variants={imageAnimation}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="absolute -right-8 -bottom-8 opacity-20 pointer-events-none dark:opacity-10"
            >
              <Icon className="h-48 w-48" />
            </motion.div>
          ) : null}

          {/* Card Content */}
          <div className="z-10 flex flex-col h-full">
            {/* Optional Badge */}
            {badgeText && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-background/50 px-3 py-1 text-sm font-medium text-foreground/80 backdrop-blur-sm w-fit">
                <span 
                  className="h-2 w-2 rounded-full" 
                  style={{ backgroundColor: badgeColor }}
                />
                {badgeText}
              </div>
            )}

            {/* Title and Description */}
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
              <p className="text-foreground/70 leading-relaxed">{description}</p>
            </div>
            
            {/* Call to Action Link */}
            {ctaHref && (
              <a
                href={ctaHref}
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                {ctaText}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    );
  }
);
ServiceGradientCard.displayName = "ServiceGradientCard";

export { ServiceGradientCard, cardVariants };


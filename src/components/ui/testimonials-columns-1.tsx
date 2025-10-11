"use client";
import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  gender: 'male' | 'female';
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role, gender }, i) => {
                const initials = name.split(' ').map(n => n[0]).join('');
                const bgColor = gender === 'male' ? 'bg-blue-500' : 'bg-black dark:bg-gray-800';
                
                return (
                  <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
                    <div className="text-muted-foreground leading-relaxed">{text}</div>
                    <div className="flex items-center gap-3 mt-6 pt-4 border-t">
                      <div className={`${bgColor} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                        {initials}
                      </div>
                      <div>
                        <div className="font-semibold tracking-tight leading-5">{name}</div>
                        <div className="text-sm leading-5 opacity-60 tracking-tight mt-1">{role}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};


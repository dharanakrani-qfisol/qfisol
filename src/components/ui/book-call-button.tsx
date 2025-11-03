"use client"

import { Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState } from "react"

interface BookCallButtonProps {
  className?: string
  onClick?: () => void
  children?: React.ReactNode
}

export function BookCallButton({ className, onClick, children = "Book a Call" }: BookCallButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative overflow-hidden",
        "px-4 py-2 rounded-lg",
        "bg-gradient-to-r from-gray-900 to-black",
        "hover:from-black hover:to-gray-800",
        "text-white font-medium text-sm",
        "shadow-md hover:shadow-lg",
        "transition-all duration-300 ease-out",
        "transform active:scale-95",
        "border border-gray-700/30",
        "focus:outline-none focus:ring-2 focus:ring-gray-500/50",
        "w-full sm:w-auto",
        className,
      )}
    >
      <div className="relative flex items-center justify-center gap-2">
        <span className="relative hidden sm:flex items-center justify-center" style={{ width: 16, height: 16 }}>
          <motion.span
            initial={false}
            animate={isHovered ? { y: -16, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            style={{ position: "absolute", left: 0, right: 0 }}
          >
            <Calendar className="w-4 h-4 text-white" />
          </motion.span>
          <motion.span
            initial={false}
            animate={isHovered ? { y: 0, opacity: 1 } : { y: 16, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            style={{ position: "absolute", left: 0, right: 0 }}
          >
            <Calendar className="w-4 h-4 text-white" />
          </motion.span>
        </span>

        {/* Text with subtle shift */}
        <span className="transition-transform duration-300 ease-out group-hover:translate-x-1 flex items-center gap-2">
          {children}
        </span>
      </div>

      {/* Subtle shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                        transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                        transition-transform duration-1000 ease-out"
        />
      </div>
    </button>
  )
}


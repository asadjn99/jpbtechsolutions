"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, LucideIcon } from "lucide-react";

interface HeroProps {
  badge?: string;
  title: string;
  description: string;
  imageSrc: string;
  icon?: LucideIcon;
}

export default function Hero({ 
  badge = "Legal", 
  title, 
  description, 
  imageSrc,
  icon: Icon = Lock
}: HeroProps) {
  return (
    <section className="relative w-full pt-36 pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-[#3b5d50]">
      
      {/* ... Background Layers ... */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-[#3e6053] rounded-bl-[200px] -z-10 hidden lg:block" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* LEFT: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-[#f9bf29]/20 border border-[#f9bf29] text-[#f9bf29] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                {badge}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title} <span className="text-[#f9bf29]">.</span>
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {description}
            </p>
          </motion.div>

          {/* RIGHT: Image/Icon */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative w-full max-w-md lg:max-w-full flex justify-center lg:justify-end"
          >
             <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-[#f9bf29] rounded-full opacity-20 blur-3xl" />
                
                <div className="relative w-full h-full rounded-full border-8 border-white/10 overflow-hidden shadow-2xl">
                   <div className="absolute inset-0 bg-[#3b5d50]/80 z-10" />
                   <Image 
                     src={imageSrc} 
                     alt={title} 
                     fill 
                     className="object-cover"
                   />
                   
                   {/* Icon Overlay - Dynamic */}
                   <div className="absolute inset-0 flex items-center justify-center z-20">
                      <Icon className="w-24 h-24 text-white opacity-80" />
                   </div>
                </div>

                <div className="absolute -top-4 right-10 w-4 h-4 bg-[#f9bf29] rounded-full animate-ping" />
                <div className="absolute bottom-10 -left-4 w-6 h-6 bg-white/20 rounded-full" />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
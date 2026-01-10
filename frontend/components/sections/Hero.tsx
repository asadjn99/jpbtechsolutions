'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface HeroProps {
  badge?: string;
  title: string;
  description: string;
  imageSrc: string;
}

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/hero.jpg" 
          alt="Software Development Workspace"
          fill
          className="object-cover object-center"
          priority
        />
        
        {/* FIXED OVERLAY: */}
        <div className="absolute inset-0 bg-linear-to-r from-[#284238] via-[#3b5d50]/90 to-[#3b5d50]/60" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="flex ml-1 h-2 w-2 rounded-full bg-[#f9bf29] animate-pulse" />
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 drop-shadow-lg"
          >
            Bespoke Software <br />
            <span className="text-[#f9bf29]">
              That Ensures Growth.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl drop-shadow-md"
          >
            We transform complex business ideas into user-friendly digital solutions. 
            From mobile apps to enterprise platforms, we build technology that drives revenue.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link 
              href="/contact"
              className="group bg-[#f9bf29] text-[#3b5d50] font-bold text-lg px-8 py-4 rounded-lg transition-all hover:bg-[#f9bf29]/90 flex items-center justify-center gap-2 shadow-lg"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              
            </Link>
            
            <Link 
              href="/projects"
              className="group bg-white/10 border border-white/20 text-white font-medium text-lg px-8 py-4 rounded-lg transition-all hover:bg-white/20 flex items-center justify-center backdrop-blur-sm"
            >
              View Case Studies
            </Link>
          </motion.div>

          {/* Trust Points */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-row sm:flex-wrap gap-x-2 sm:gap-y-4 sm:gap-x-8 text-sm font-medium text-gray-200 border-t border-white/20 pt-8"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#f9bf29]" />
              <span>Certified Developers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#f9bf29]" />
              <span>Agile Methodology</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#f9bf29]" />
              <span>On-Time Delivery</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
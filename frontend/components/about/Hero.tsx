"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Plus, TrendingUp } from "lucide-react";

interface PageHeroProps {
  badge?: string;
  title: string;
  description: string;
  imageSrc: string;
}

export default function PageHero({ 
  badge = "Welcome", 
  title, 
  description, 
  imageSrc 
}: PageHeroProps) {
  return (
    <section className="relative w-full pt-36 pb-24 lg:pt-32 lg:pb-20 overflow-hidden bg-[#3b5d50]">
      
      {/* ================= DECORATIVE BACKGROUND LAYERS ================= */}
      
      {/* 1. The Green Curve */}
      <div className="absolute top-0 left-0 w-full h-137.5 bg-[#3e6053] rounded-br-[150px] z-2 lg:w-[60%] lg:rounded-br-[250px]" />

      {/* 2. Triangle Dots Pattern */}
      <div className="absolute top-32 right-2/6 translate-x-40 hidden lg:flex flex-col items-end gap-3 opacity-20 z-100">
         {/* construction of a triangle shape */}
         <div className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#ffffff]"/><div className="w-1.5 h-1.5 rounded-full bg-[#ffffff]"/><div className="w-1.5 h-1.5 rounded-full bg-[#ffffff]"/><div className="w-1.5 h-1.5 rounded-full bg-[#ffffff]"/></div>
         <div className="flex gap-3 mr-2"><div className="w-1.5 h-1.5 rounded-full bg-[#ffffff]"/><div className="w-1.5 h-1.5 rounded-full bg-[#fdfdfd]"/><div className="w-1.5 h-1.5 rounded-full bg-[#ffffff]"/></div>
         <div className="flex gap-3 mr-4.5"><div className="w-1.5 h-1.5 rounded-full bg-[#ffffff]"/><div className="w-1.5 h-1.5 rounded-full bg-[#ffffff]"/></div>
         <div className="flex gap-3 mr-7"><div className="w-1.5 h-1.5 rounded-full bg-[#ffffff]"/></div>
      </div>

      {/* 3. Corner Circles & Shapes */}
      <div className="absolute top-100 right-2/6 translate-x-120 w-64 h-64 bg-[#f9bf29]/70 rounded-full blur-xl z-1" />
      {/* Bottom Right outlined ring */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 border-10 border-[#f9bf29]/90 opacity-15 rounded-full z-1" />
      {/* Center-Left plus signs */}
      <Plus className="absolute top-74 left-2/6 -translate-x-92 text-white/30 w-8 h-8 z-10 animate-spin-slow" />
      <Plus className="absolute bottom-1/3 left-[40%] text-[#3b5d50]/20 w-6 h-6 z-10" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-16">
          
          {/* ================= LEFT CONTENT ================= */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge & Squiggle */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <span className="inline-block px-4 py-2 rounded-full bg-[#f9bf29] text-[#3b5d50] font-bold text-xs uppercase tracking-widest">
                {badge}
                </span>
                <TrendingUp className="w-6 h-6 text-[#f9bf29] hidden lg:block" />
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] mb-8 text-white">
              {title.split(" ").slice(0, 3).join(" ")} <br className="hidden lg:block" />
              <span className="text-[#f9bf29] relative inline-block">
                 {title.split(" ").slice(3).join(" ")}
                 {/* Underline decoration */}
                 <svg className="absolute -bottom-2 left-0 w-full text-[#f9bf29]/50" height="10" viewBox="0 0 200 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 8C45 2 135 2 198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                 </svg>
              </span>
            </h1>

            <p className="text-lg text-gray-100 mb-10 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Link 
                href="/contact"
                className="relative group bg-white text-[#3b5d50] font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">Start Project</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                {/* Hover fill effect */}
                <div className="absolute inset-0 bg-gray-100 translate-y-full group-hover:translate-y-0 transition-transform z-0" />
              </Link>
              <Link 
                href="/projects"
                className="group border-2 border-white/40 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                View Work
              </Link>
            </div>
            
            {/* Trust Indicator */}
            <div className="mt-14 flex items-center justify-center lg:justify-start gap-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
               <div className="flex -space-x-4">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-11 h-11 rounded-full border-[3px] border-[#3b5d50] bg-gray-200 relative overflow-hidden shadow-sm">
                       {/* Placeholder avatars */}
                       <div className="w-full h-full bg-linear-to-br from-gray-300 to-gray-400" />
                    </div>
                  ))}
               </div>
               <div>
                 <div className="flex items-center gap-1 text-[#f9bf29]">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="text-white font-bold text-lg">4.9/5</span>
                 </div>
                 <p className="text-gray-200 text-sm font-medium">Over 500+ Happy Clients</p>
               </div>
            </div>

          </motion.div>

          {/* ================= RIGHT IMAGE AREA ================= */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1 relative w-full max-w-md lg:max-w-full perspective-1000"
          >
             {/* Offset Yellow Background Block */}
            <div className="absolute top-8 left-4 w-full h-full bg-[#f9bf29] rounded-4xl -z-10 transform rotate-3 shadow-lg" />

            {/* Main Image Frame */}
            <div className="relative h-100 lg:h-90 w-full rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(59,93,80,0.3)] border-[6px] border-white bg-transparent transform -rotate-2 hover:rotate-0 transition-all duration-500 ease-out group">
              <Image 
                src={imageSrc} 
                alt="Hero Image" 
                fill 
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-1 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl z-20 animate-float">
               <ArrowRight className="w-6 h-6 text-[#3b5d50] -rotate-45" />
            </div>
            
            {/* Bottom Left Stats Badge */}
            <div className="absolute bottom-10 -left-2 sm:-left-10 bg-white p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] z-20 animate-float-delayed">
               <div className="flex items-center gap-3 mb-2">
                   <div className="p-2 bg-[#3b5d50]/10 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-[#3b5d50]" />
                   </div>
                   <p className="text-[#3b5d50] font-extrabold text-4xl">98%</p>
               </div>
               <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">Success Rate</p>
            </div>

            {/* Small decorative plus signs around image */}
            <Plus className="absolute -top-5 left-10 text-[#f9bf29] w-8 h-8 z-20 animate-spin-slow" />
            <Plus className="absolute bottom-20 right-5 text-[#3b5d50] w-6 h-6 z-20" />

          </motion.div>

        </div>
      </div>
    </section>
  );
}
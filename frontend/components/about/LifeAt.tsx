"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function LifeAt() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#f9bf29] font-bold uppercase tracking-wider text-sm">Culture & Vibe</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#3b5d50] mt-3 mb-6">
              How is Life at <span className="text-[#f9bf29]">JPBTech?</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We believe that a happy team builds the best software. Life at JPBTech is about more than just deadlines; it&apos;s about creativity, collaboration, and continuous learning.
            </p>
            
            <div className="space-y-4">
              {["Open Communication", "Personal Growth", "Fun Work Environment"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#f9bf29]" />
                  <span className="text-[#3b5d50] font-bold text-lg">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Image Collage */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative h-125 w-full"
          >
             {/* Main Large Image */}
             <div className="absolute top-0 right-0 w-[85%] h-[80%] rounded-2xl overflow-hidden shadow-2xl z-10">
                <div className="w-full h-full bg-gray-200 relative">
                   {/* Add 'life-1.jpg' to public folder */}
                   <Image src="/life-1.jpg" alt="Office Life" fill className="object-cover" />
                </div>
             </div>

             {/* Small Overlapping Image */}
             <div className="absolute bottom-0 left-0 w-[50%] h-[45%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20">
                <div className="w-full h-full bg-gray-300 relative">
                   {/* Add 'life-2.jpg' to public folder */}
                   <Image src="/life-2.jpg" alt="Team Meeting" fill className="object-cover" />
                </div>
             </div>

             {/* Decor Dots */}
             <div className="absolute top-10 left-0 w-20 h-20 opacity-20 hidden md:block">
                 <div className="grid grid-cols-4 gap-2">
                    {[...Array(16)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-[#3b5d50] rounded-full" />)}
                 </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
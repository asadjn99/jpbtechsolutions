"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side - Merged Look */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-125 w-full rounded-lg overflow-hidden"
          >
             {/* You need an image named 'about-story.jpg' in public/ */}
            <Image 
              src="/hero.jpg" 
              alt="Our Story" 
              fill 
              className="object-cover" 
            />
            {/* Inner Shadow for Depth */}
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)]" />
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#f9bf29] font-bold tracking-wider uppercase text-sm">Our Journey</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#3b5d50] mt-2 mb-6">
              From a Small Room to <span className="text-[#f9bf29]">Global Solutions.</span>
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                JPBtech Solutions started with a simple idea: that software shouldn&apos;t just work; it should drive growth. What began as a small team of passionate developers has grown into a full-service software house serving clients worldwide.
              </p>
              <p>
                We believe in the power of &quot;Bespoke&quot; - custom-tailored solutions. We don&apos;t believe in one-size-fits-all. Every line of code we write is crafted to solve a specific business problem for our clients.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
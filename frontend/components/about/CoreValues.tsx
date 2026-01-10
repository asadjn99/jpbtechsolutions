"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Heart } from "lucide-react";

const values = [
  { title: "Innovation", icon: Lightbulb, desc: "We constantly challenge the status quo to find better ways." },
  { title: "Transparency", icon: Target, desc: "No hidden costs, no jargon. We keep you in the loop always." },
  { title: "Teamwork", icon: Users, desc: "We believe the best solutions come from collaborative minds." },
  { title: "Passion", icon: Heart, desc: "We love what we do, and that energy reflects in our products." }
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-[#f9bf29] font-bold uppercase tracking-wider text-sm">Our DNA</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3b5d50] mt-2">The Values That Drive Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-xl border border-gray-100 flex flex-col items-center text-center hover:border-[#f9bf29]/50 transition-colors"
            >
              <div className="w-14 h-14 bg-[#3b5d50]/10 rounded-full flex items-center justify-center mb-6">
                <val.icon className="w-7 h-7 text-[#3b5d50]" />
              </div>
              <h3 className="text-xl font-bold text-[#3b5d50] mb-3">{val.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
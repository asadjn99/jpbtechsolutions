"use client";

import { motion } from "framer-motion";
import { Users, Heart, RefreshCw } from "lucide-react";

const values = [
  {
    title: "Client Centric",
    icon: Heart,
    text: "Our client-centric approach always prioritizes our clients and their needs. We make sure that every decision, process, and strategy we follow aligns with the goals of our client and delivers results that surpass their expectations."
  },
  {
    title: "Team Work",
    icon: Users,
    text: "With a healthy work environment that encourages open communication and opportunities for personal and professional growth, we strive to keep all team members content. Our team is what makes us good to the core!"
  },
  {
    title: "Agile Process",
    icon: RefreshCw,
    text: "Our agile development process is designed to ensure efficiency and maximum value. Our flexible process allows us to swiftly adapt to changes in our client’s requirements so that projects are delivered rapidly and reliably."
  }
];

export default function Values() {
  return (
    <section className="py-16 bg-[#3b5d50] relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f9bf29_1px,transparent_1px)] bg-size-[20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#f9bf29] font-bold uppercase tracking-wider text-sm"
          >
            Our Philosophy
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-white mt-3"
          >
            What We <span className="text-[#f9bf29]">Value.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              <div className="w-14 h-14 bg-[#f9bf29] rounded-xl flex items-center justify-center mb-6">
                <val.icon className="w-7 h-7 text-[#3b5d50]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{val.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                {val.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
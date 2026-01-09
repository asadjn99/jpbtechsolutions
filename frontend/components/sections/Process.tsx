"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  PenTool, 
  Code, 
  Rocket 
} from "lucide-react";

const processSteps = [
  {
    id: "01",
    title: "Discovery & Strategy",
    icon: Search,
    description: "We start by diving deep into your business goals. We analyze requirements, identify bottlenecks, and create a strategic roadmap to ensure the final product solves real problems.",
  },
  {
    id: "02",
    title: "Design & Prototyping",
    icon: PenTool,
    description: "Before a single line of code is written, we visualize the solution. Our UI/UX experts create interactive prototypes to ensure the look and feel matches your vision perfectly.",
  },
  {
    id: "03",
    title: "Agile Development",
    icon: Code,
    description: "Our developers build your software in two-week sprints. This allows you to see progress regularly and provides the flexibility to adapt to changes quickly without delays.",
  },
  {
    id: "04",
    title: "Launch & Support",
    icon: Rocket,
    description: "We handle the complete deployment process to cloud servers. After launch, we provide 24/7 maintenance to ensure your software stays secure and runs smoothly.",
  },
];

export default function Process() {
  return (
    <section className="py-16 bg-[#3b5d50] text-white relative overflow-hidden">
      
      {/* Background Pattern (Subtle circles) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-30 border-white" />
        <div className="absolute top-1/2 -left-24 w-64 h-64 rounded-full border-20 border-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#f9bf29] font-bold tracking-wider uppercase text-sm"
          >
            How We Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mt-3 mb-6"
          >
            Our Approach to <br />
            <span className="text-[#f9bf29]">Solving Problems.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 leading-relaxed max-w-2xl"
          >
            Transparency and efficiency are at the core of our process. We keep you in the loop at every stage, from the first meeting to the final launch.
          </motion.p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Step Number */}
              <div className="text-6xl font-bold text-white/10 mb-4 select-none group-hover:text-white/20 transition-colors">
                {step.id}
              </div>

              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#f9bf29] rounded-lg text-[#3b5d50]">
                  <step.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-[#f9bf29]/30 pl-4">
                {step.description}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
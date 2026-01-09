"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  Layout, 
  Server, 
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web App Development",
    description: "High-performance web applications using MERN Stack and Next.js. We build scalable, SEO-optimized platforms that handle millions of users.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native-feel iOS and Android apps built with React Native. Smooth animations, offline capabilities, and perfect user experience.",
  },
  {
    icon: Database,
    title: "Custom SaaS Solutions",
    description: "Tailor-made software for your unique business needs. CRM, ERP, and internal tools that streamline your operations and reduce costs.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "User-centric design that converts. We prototype, test, and design beautiful interfaces that users love to interact with.",
  },
  {
    icon: Server,
    title: "Cloud & DevOps",
    description: "Secure and scalable infrastructure on AWS/Azure. We handle deployment, CI/CD pipelines, and server management so you don't have to.",
  },
  {
    icon: Code2,
    title: "API Integration",
    description: "Seamlessly connect your software with third-party tools like Stripe, Google Maps, OpenAI, and payment gateways.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 bg-white relative overflow-hidden" id="services">
      
      {/* Background Decor (Subtle Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#f9bf29] font-bold tracking-wider uppercase text-sm"
          >
            Our Expertise
          </motion.span>
          
          {/* MAIN HEADING: */}
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-[#3b5d50] mt-3 mb-6"
          >
            Engineering <br />
            <span className="text-[#f9bf29]">Digital Excellence.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed max-w-2xl"
          >
            We don&apos;t just write code; we architect solutions. Our team leverages cutting-edge technologies to build software that is robust, secure, and future-proof.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              // Card Container
              className="relative bg-gray-50/50 border border-gray-100 p-8 rounded-xl flex flex-col items-start min-h-70 overflow-hidden"
            >
              
              {/* 1. Icon */}
              <div className="absolute top-6 right-6 p-3 bg-white rounded-lg shadow-xs z-20">
                <service.icon className="w-6 h-6 text-[#3b5d50]" />
              </div>

              {/* 2. Content Wrapper */}
              <div className="relative w-full z-10 mt-8">
                
                {/* THE BIG NUMBER behind the heading */}
                <span className="absolute -top-14 -left-2 text-[6rem] font-bold text-gray-200/60 select-none leading-none z-0 pointer-events-none">
                  {(idx + 1).toString().padStart(2, '0')}.
                </span>

                {/* 3. Title */}
                <h3 className="relative z-10 text-2xl font-extrabold text-[#3b5d50] mb-4 uppercase tracking-tight leading-tight pt-4">
                  {service.title}
                </h3>

                {/* 4. Description */}
                <p className="relative z-10 text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
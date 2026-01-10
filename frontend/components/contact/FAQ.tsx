"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do you estimate the cost of a project?",
    answer: "We break down projects into detailed milestones. Our pricing depends on the scope, technology stack, and timeline. We offer both fixed-price for well-defined projects and hourly models for agile development."
  },
  {
    question: "Do you sign a Non-Disclosure Agreement (NDA)?",
    answer: "Absolutely. We respect your intellectual property. We sign an NDA before entering any discussion to ensure your idea and data remain 100% confidential."
  },
  {
    question: "What is your standard support period after launch?",
    answer: "We provide 3 months of free dedicated support after the final deployment to ensure everything runs smoothly. After that, we offer flexible maintenance packages."
  },
  {
    question: "Can you take over an existing project?",
    answer: "Yes, we specialize in code rescue and project takeovers. We perform a code audit first to understand the current state and then propose a roadmap for improvement."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#f9bf29] font-bold uppercase tracking-wider text-sm">Common Questions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3b5d50] mt-3">
            Before You <span className="text-[#f9bf29]">Reach Out.</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`text-lg font-bold transition-colors ${activeIndex === idx ? "text-[#3b5d50]" : "text-gray-700"}`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-colors ${activeIndex === idx ? "bg-[#f9bf29] text-[#3b5d50]" : "bg-gray-100 text-gray-500"}`}>
                  {activeIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
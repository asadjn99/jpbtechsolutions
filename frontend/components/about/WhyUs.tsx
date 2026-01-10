"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    id: "01",
    title: "Time & Budget",
    text: "Our up-to-date development process with agile methodology ensures timely delivery within a feasible budget."
  },
  {
    id: "02",
    title: "Discover Phase",
    text: "In order to shape your idea into a well-defined prototype, we offer comprehensive 1-2 week discovery services."
  },
  {
    id: "03",
    title: "MVP Development",
    text: "We follow a Minimum Viable Product (MVP) centric approach for timely launch to avoid lengthy and unnecessary work."
  },
  {
    id: "04",
    title: "Tailored For You",
    text: "We are trusted and recommended by top-notch national and international organizations, startups, and enterprises."
  },
  {
    id: "05",
    title: "IP Protection",
    text: "Intellectual Property for the software we develop for you will belong to you. Period. You own your code."
  },
  {
    id: "06",
    title: "Dedicated Support",
    text: "We believe in transparency and uniqueness. We provide ongoing support to ensure your software remains robust."
  }
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-[#f9bf29] font-bold uppercase tracking-wider text-sm">Why Choose Us?</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#3b5d50] mt-3 max-w-3xl mx-auto">
             Peace of Mind with the Best Bespoke <span className="text-[#f9bf29]">Software Development.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-xs transition-shadow border border-gray-100 relative group overflow-hidden"
            >
              {/* Large Number Background */}
              <span className="absolute -right-4 -top-4 text-8xl font-bold text-gray-100/50 group-hover:text-[#f9bf29]/10 transition-colors select-none">
                {item.id}
              </span>

              <div className="relative z-10">
                <span className="text-[#f9bf29] font-bold text-xl mb-2 block">{item.id}</span>
                <h3 className="text-xl font-bold text-[#3b5d50] mb-3 uppercase">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
              
              {/* Bottom Line Accents */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f9bf29] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
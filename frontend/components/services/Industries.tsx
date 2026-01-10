"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Stethoscope, GraduationCap, Building2, Plane, Briefcase } from "lucide-react";

const industries = [
  { title: "E-Commerce", icon: ShoppingBag, desc: "Online stores, marketplaces, and inventory management." },
  { title: "Healthcare", icon: Stethoscope, desc: "Telemedicine apps, patient portals, and HIPAA compliance." },
  { title: "EdTech", icon: GraduationCap, desc: "LMS platforms, virtual classrooms, and student portals." },
  { title: "Real Estate", icon: Building2, desc: "Property listings, CRM systems, and virtual tours." },
  { title: "Travel & Hospitality", icon: Plane, desc: "Booking engines, travel guides, and hotel management." },
  { title: "FinTech", icon: Briefcase, desc: "Secure payment gateways, wallets, and financial dashboards." },
];

export default function Industries() {
  return (
    <section className="py-24 bg-[#3b5d50] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f9bf29]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f9bf29]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <span className="text-[#f9bf29] font-bold uppercase tracking-wider text-sm">Experience</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Industries We <span className="text-[#f9bf29]">Serve.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 bg-[#f9bf29]/20 rounded-lg flex items-center justify-center mb-6 text-[#f9bf29] group-hover:bg-[#f9bf29] group-hover:text-[#3b5d50] transition-colors">
                <ind.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{ind.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {ind.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
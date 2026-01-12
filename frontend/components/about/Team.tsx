"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Ifti Ahmad",
    role: "CEO & Founder",
    image: "/", 
    bio: "Visionary leader with 10+ years in software architecture.",
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Sarah Jenkins",
    role: "Lead UI/UX Designer",
    image: "/team2.jpg",
    bio: "Creating intuitive digital experiences that users love.",
    socials: { linkedin: "#", dribbble: "#" }
  },
  {
    name: "David Chen",
    role: "Senior Full Stack Dev",
    image: "/team3.jpg",
    bio: "Master of the MERN stack and cloud infrastructure.",
    socials: { linkedin: "#", github: "#" }
  },
  {
    name: "Emily R.",
    role: "Project Manager",
    image: "/team4.jpg",
    bio: "Ensuring on-time delivery and agile workflow efficiency.",
    socials: { linkedin: "#", mail: "#" }
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Geometric Decor: Dots Pattern (Top Left) */}
      <div className="absolute top-10 left-10 opacity-10 hidden lg:block">
        <div className="grid grid-cols-6 gap-2">
           {[...Array(24)].map((_, i) => (
             <div key={i} className="w-1 h-1 rounded-full bg-[#3b5d50]" />
           ))}
        </div>
      </div>

      {/* Geometric Decor: Circle (Bottom Right) */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 border-40 border-[#f9bf29]/10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#f9bf29] font-bold uppercase tracking-wider text-sm"
          >
            The Squad
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-[#3b5d50] mt-3"
          >
            Meet the <span className="text-[#f9bf29]">Minds.</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-slate-500 mt-4 max-w-2xl mx-auto"
          >
            A collective of dreamers, thinkers, and doers dedicated to your success.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-gray-100  group-hover:shadow-xl transition-all duration-500">
                 {/* Image Placeholder */}
                 <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-gray-400 font-bold">
                    <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    Image {idx + 1}
                 </div>
                 
                 {/* Gradient Overlay (Hidden by default, shows on hover) */}
                 <div className="absolute inset-0 bg-linear-to-t from-[#3b5d50]/90 via-[#3b5d50]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                 {/* Social Links (Slide up on hover) */}
                 <div className="absolute bottom-0 left-0 w-full p-6 flex justify-center gap-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    <button className="p-2 bg-white rounded-full text-[#3b5d50] hover:bg-[#f9bf29] transition-colors"><Linkedin className="w-4 h-4" /></button>
                    <button className="p-2 bg-white rounded-full text-[#3b5d50] hover:bg-[#f9bf29] transition-colors"><Twitter className="w-4 h-4" /></button>
                 </div>
              </div>

              {/* Text Info */}
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-[#3b5d50] group-hover:text-[#f9bf29] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-2">
                  {member.role}
                </p>
                {/* Decorative Line */}
                <div className="w-8 h-1 bg-[#f9bf29] mx-auto rounded-full group-hover:w-16 transition-all duration-300" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
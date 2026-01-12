"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Arsalan Ahmad",
    role: "CEO, Dropo",
    image: "/",
    content: "A reliable and skilled team that truly understands modern software development. Their commitment to quality, scalability, and real business outcomes makes them a strong technology partner.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Chen",
    role: "Founder, HealthFlow",
    image: "/user2.jpg",
    content: "The mobile app they built for us has a 4.9-star rating on the App Store. The team's understanding of UI/UX is phenomenal. They didn't just build an app; they built a brand experience.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Roberts",
    role: "Director, E-Mart Solutions",
    image: "/user3.jpg",
    content: "We hired them for a custom ERP solution. The communication was transparent, the delivery was on time, and the code quality was top-notch. Highly recommended for complex projects.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#3b5d50] relative overflow-hidden" id="testimonials">
      

      {/* Background and */}
      {/* Background Pattern circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-30 border-white" />
        <div className="absolute top-1/2 -left-24 w-64 h-64 rounded-full border-20 border-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">


        
        {/* Header */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#f9bf29] font-bold tracking-wider uppercase text-sm"
          >
            Client Feedback
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mt-3"
          >
            Trusted by <span className="text-[#f9bf29]">Visionaries.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 leading-relaxed max-w-2xl mt-4"
          >
            Our code powers businesses around the world. Here is what founders and CTOs have to say about working with JPBtech Solutions.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col h-full backdrop-blur-sm"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-[#f9bf29]/20 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#f9bf29] text-[#f9bf29]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-200 leading-relaxed mb-8 grow">
                &quot;{item.content}&quot;
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gray-600 overflow-hidden relative border border-white/20">
                   <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    className="object-cover"
                   /> 
                  
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{item.name}</h4>
                  <p className="text-[#f9bf29] text-xs uppercase tracking-wide">{item.role}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
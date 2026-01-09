"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "FinTech Dashboard",
    category: "Web Application",
    description: "A comprehensive financial analytics platform allowing users to track assets, analyze market trends, and manage portfolios in real-time with bank-grade security.",
    image: "/project.png",
    tags: ["Next.js", "Tailwind", "Node.js"],
  },
  {
    id: 2,
    title: "MediCare Mobile App",
    category: "Mobile Development",
    description: "A patient-centric mobile application connecting doctors with patients. Features include video consultations, prescription management, and appointment booking.",
    image: "/project1.png",
    tags: ["React Native", "Firebase", "iOS/Android"],
  },
  {
    id: 3,
    title: "E-Commerce Ecosystem",
    category: "Custom Software",
    description: "A multi-vendor marketplace solution built for high traffic. Includes inventory management, automated shipping calculations, and a custom payment gateway integration.",
    image: "/project2.png",
    tags: ["MERN Stack", "AWS", "Stripe"],
  },
];

export default function Projects() {
  return (
    <section className="py-16 bg-white relative overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#f9bf29] font-bold tracking-wider uppercase text-sm"
          >
            Our Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-[#3b5d50] mt-3"
          >
            Featured <span className="text-[#f9bf29]">Case Studies.</span>
          </motion.h2>
          
          {/* Added description for consistency */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed max-w-2xl mt-4"
          >
            We take pride in delivering high-quality software solutions. Explore how we have helped businesses transform their ideas into powerful digital products.
          </motion.p>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-20">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-16 items-center`}
            >
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative h-75 sm:h-100 rounded-2xl overflow-hidden bg-gray-100 group">
                
                <div className="absolute inset-0 bg-slate-200">
                   <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Overlay (Subtle) */}
                <div className="absolute inset-0 bg-[#3b5d50]/10 mix-blend-multiply" />
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col items-start">
                <span className="text-[#f9bf29] font-bold tracking-wide text-sm mb-2 uppercase">
                  {project.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-[#3b5d50] mb-4">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-[#3b5d50] text-sm font-medium rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <Link 
                  href="/projects" 
                  className="flex items-center gap-2 text-[#3b5d50] font-bold border-b-2 border-[#f9bf29] pb-1 hover:text-[#f9bf29] transition-colors"
                >
                  View Case Study
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-20 text-center">
             <Link 
              href="/projects"
              className="inline-block bg-[#3b5d50] text-white font-bold text-lg px-10 py-4 rounded-lg hover:bg-[#2d463c] transition-colors shadow-lg"
            >
              View All Projects
            </Link>
        </div>

      </div>
    </section>
  );
}
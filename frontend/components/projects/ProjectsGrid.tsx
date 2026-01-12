"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Updated Project Data with AI and IoT
const projects = [
  {
    id: 1,
    title: "FinTrack Dashboard",
    category: "Web App",
    image: "/projects/proj-1.webp", 
    description: "A comprehensive financial analytics dashboard for enterprise clients.",
  },
  {
    id: 2,
    title: "MediCare Mobile",
    category: "Mobile App",
    image: "/projects/proj-2.png",
    description: "Patient management and telemedicine app for IOS and Android.",
  },
  {
    id: 3,
    title: "EcoShop E-Commerce",
    category: "E-Commerce",
    image: "/project-3.jpg",
    description: "Sustainable fashion marketplace with advanced inventory management.",
  },
  {
    id: 4,
    title: "EduLearn Platform",
    category: "Web App",
    image: "/project-4.jpg",
    description: "Interactive learning management system for universities.",
  },
  {
    id: 5,
    title: "RealEstate Pro",
    category: "Web App",
    image: "/project-5.jpg",
    description: "Property listing and virtual tour platform for real estate agencies.",
  },
  {
    id: 6,
    title: "FitLife Tracker",
    category: "Mobile App",
    image: "/project-6.jpg",
    description: "Fitness tracking application with wearable device integration.",
  },
  // --- AI PROJECTS ---
  {
    id: 7,
    title: "VisionAI Security",
    category: "AI & ML",
    image: "/project-ai-1.jpg", // Add this image
    description: "Computer vision system for automated security and threat detection.",
  },
  {
    id: 8,
    title: "ChatGenius Bot",
    category: "AI & ML",
    image: "/project-ai-2.jpg", // Add this image
    description: "NLP-powered customer support agent capable of handling complex queries.",
  },
  // --- NEW IoT PROJECTS ---
  {
    id: 9,
    title: "AgriSmart Sensors",
    category: "IoT",
    image: "/project-iot-1.jpg", // Add this image
    description: "Smart farming ecosystem with soil moisture monitoring and automated irrigation.",
  },
  {
    id: 10,
    title: "FactorySync IIoT",
    category: "IoT",
    image: "/project-iot-2.jpg", // Add this image
    description: "Industrial IoT solution for real-time machine health monitoring and predictive maintenance.",
  }
];

// Added new categories to the filter list
const categories = ["All", "Web App", "Mobile App", "E-Commerce", "AI & ML", "IoT"];

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#3b5d50] text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 transition-all duration-500"
              >
                {/* Image Area */}
                <div className="relative h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                    {/* Placeholder Text if image missing */}
                    <span className="font-bold text-xs">{project.title}</span>
                  </div>
                  {/* Actual Image */}
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#3b5d50]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <Link 
                       href={`/projects/${project.id}`} 
                       className="bg-white text-[#3b5d50] p-4 rounded-full hover:bg-[#f9bf29] transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                     >
                       <ArrowUpRight className="w-6 h-6" />
                     </Link>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <span className="text-[#f9bf29] text-xs font-bold uppercase tracking-wider mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#3b5d50] mb-2 group-hover:text-[#f9bf29] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
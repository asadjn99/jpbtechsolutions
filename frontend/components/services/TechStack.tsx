"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Layout, 
  Server,
  Bot, // For AI
  Cpu  // For IoT
} from "lucide-react";

const categories = [
  { id: "frontend", label: "Frontend", icon: Layout },
  { id: "backend", label: "Backend", icon: Server },
  { id: "mobile", label: "Mobile", icon: Smartphone },
  { id: "database", label: "Database", icon: Database },
  { id: "cloud", label: "Cloud & DevOps", icon: Cloud },
  { id: "ai", label: "AI & ML", icon: Bot }, // Added AI
  { id: "iot", label: "IoT", icon: Cpu },    // Added IoT
];

const technologies = {
  frontend: ["React.js", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript", "Redux"],
  backend: ["Node.js", "Express", "Python", "Django", "NestJS", "Go"],
  mobile: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"],
  database: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
  cloud: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Vercel"],
  ai: ["TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Scikit-Learn"], // AI Tech
  iot: ["Raspberry Pi", "Arduino", "MQTT", "Zigbee", "ESP32"] // IoT Tech
};

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <span className="text-[#f9bf29] font-bold uppercase tracking-wider text-sm">Our Tools</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3b5d50] mt-3">
            Technologies We <span className="text-[#f9bf29]">Master.</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl">
            We use the latest and most robust tools to build scalable, secure, and future-proof solutions.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                activeTab === cat.id 
                  ? "bg-[#3b5d50] text-white shadow-lg scale-105" 
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 min-h-75">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {technologies[activeTab as keyof typeof technologies].map((tech, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-[#3b5d50] font-bold text-lg hover:border-[#f9bf29] hover:shadow-md transition-all group"
                >
                  <Code2 className="w-5 h-5 mr-3 text-gray-300 group-hover:text-[#f9bf29] transition-colors" />
                  {tech}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
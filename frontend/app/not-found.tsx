"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative w-full h-[calc(100vh-5px)] bg-[#3b5d50] overflow-hidden flex items-center justify-center text-white">
      
      {/* --- Background Geometry --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
         {/* Big Ring */}
         <div className="absolute -right-20 -bottom-20 w-125 h-125 rounded-full border-20 border-[#f9bf29]" />
         {/* Small Dots Grid */}
         <div className="absolute top-20 left-20 grid grid-cols-4 gap-4">
            {[...Array(16)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-white rounded-full" />
            ))}
         </div>
      </div>

      <div className="text-center relative z-10 px-4">
        {/* Animated 404 Text */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <motion.span 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-9xl font-extrabold text-[#f9bf29]"
          >
            4
          </motion.span>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="w-24 h-24 bg-white/10 rounded-full border-4 border-white flex items-center justify-center"
          >
            <div className="w-4 h-4 bg-[#f9bf29] rounded-full animate-ping" />
          </motion.div>
          <motion.span 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-9xl font-extrabold text-[#f9bf29]"
          >
            4
          </motion.span>
        </div>

        <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-3xl font-bold mb-4"
        >
            Page Not Found
        </motion.h2>
        
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-300 max-w-md mx-auto mb-10 text-lg"
        >
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>

        {/* Buttons */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link 
            href="/"
            className="px-8 py-3 bg-[#f9bf29] text-[#3b5d50] font-bold rounded-full hover:bg-white transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="px-8 py-3 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
}
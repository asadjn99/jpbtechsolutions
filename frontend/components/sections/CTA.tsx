"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function CTA() {
  return (
    <section className="w-full bg-[#f9bf29] py-16 relative overflow-hidden">
      
      {/* Background Pattern (Subtle Diagonal Lines) */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'repeating-linear-gradient(45deg, #3b5d50 0, #3b5d50 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-[#3b5d50] leading-tight mb-2"
            >
              Ready to transform your digital presence?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#3b5d50]/80 text-lg font-medium"
            >
              Let&apos;s discuss how we can engineer growth for your business today.
            </motion.p>
          </div>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 shrink-0"
          >
            <Link 
              href="/contact"
              className="bg-[#3b5d50] text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#2d463c] transition-colors shadow-xl flex items-center justify-center gap-2"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link 
              href="https://wa.me/1234567890"
              className="bg-white/20 border-2 border-[#3b5d50] text-[#3b5d50] font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/30 transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Chat Now
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}




















// "use client";

// import Link from "next/link";
// import Image from "next/image"; // Import Image
// import { motion } from "framer-motion";
// import { ArrowRight, MessageSquare } from "lucide-react";

// export default function CTA() {
//   return (
//     <section className="w-full py-16 relative overflow-hidden">
      
//       {/* ================= BACKGROUND IMAGE & OVERLAY ================= */}
//       <div className="absolute inset-0 w-full h-full z-0">
//         <Image
//           src="/cta.png"  // Make sure to add this image to your public folder
//           alt="Office background"
//           fill
//           className="object-cover object-center"
//         />
        
//         {/* HEAVY YELLOW OVERLAY:    */}
//         <div className="absolute inset-0 bg-[#f9bf29]/95 mix-blend-multiply" />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
//           {/* Text Content */}
//           <div className="max-w-2xl">
//             <motion.h2 
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               // Added drop-shadow-sm to make text pop against the image texture
//               className="text-3xl md:text-4xl font-extrabold text-[#3b5d50] leading-tight mb-2 drop-shadow-sm"
//             >
//               Ready to transform your digital presence?
//             </motion.h2>
//             <motion.p 
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//               className="text-[#3b5d50] text-lg font-medium"
//             >
//               Let&apos;s discuss how we can engineer growth for your business today.
//             </motion.p>
//           </div>

//           {/* Buttons */}
//           <motion.div 
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="flex flex-col sm:flex-row gap-4 shrink-0"
//           >
//             <Link 
//               href="/contact"
//               className="bg-[#3b5d50] text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#2d463c] transition-colors shadow-xl flex items-center justify-center gap-2"
//             >
//               Get a Quote
//               <ArrowRight className="w-5 h-5" />
//             </Link>
            
//             <Link 
//               href="https://wa.me/1234567890" 
//               className="bg-white/20 border-2 border-[#3b5d50] text-[#3b5d50] font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/30 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm"
//             >
//               <MessageSquare className="w-5 h-5" />
//               Chat Now
//             </Link>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }
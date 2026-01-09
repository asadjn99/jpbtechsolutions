"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone,  Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16 bg-white relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE: Text & Info */}
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#f9bf29] font-bold tracking-wider uppercase text-sm"
            >
              Get in Touch
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-[#3b5d50] mt-3 mb-6"
            >
              Have a Project in Mind? <br />
              <span className="text-[#f9bf29]">Let&apos;s Build It.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 leading-relaxed mb-12"
            >
              Whether you need a custom web app, a mobile solution, or digital transformation consulting, our team is ready to help you achieve your goals.
            </motion.p>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-gray-50 rounded-lg">
                    <Mail className="w-6 h-6 text-[#3b5d50]" />
                </div>
                <div>
                  <h4 className="text-[#3b5d50] font-bold text-lg">Email Us</h4>
                  <p className="text-slate-500">hello@jpbtechsolutions.com</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-gray-50 rounded-lg">
                    <Phone className="w-6 h-6 text-[#3b5d50]" />
                </div>
                <div>
                  <h4 className="text-[#3b5d50] font-bold text-lg">Call Us</h4>
                  <p className="text-slate-500">+44 20 1234 5678</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-gray-50 rounded-lg">
                    <MapPin className="w-6 h-6 text-[#3b5d50]" />
                </div>
                <div>
                  <h4 className="text-[#3b5d50] font-bold text-lg">Visit Us</h4>
                  <p className="text-slate-500">123 Tech Avenue, London, UK</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT SIDE: The Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gray-50/50 p-8 md:p-10 rounded-2xl border border-gray-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#3b5d50]">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#f9bf29] focus:ring-1 focus:ring-[#f9bf29] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#3b5d50]">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#f9bf29] focus:ring-1 focus:ring-[#f9bf29] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#3b5d50]">Subject</label>
                <input 
                    type="text" 
                    placeholder="Write a service"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#f9bf29] focus:ring-1 focus:ring-[#f9bf29] transition-all"
                  />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#3b5d50]">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#f9bf29] focus:ring-1 focus:ring-[#f9bf29] transition-all resize-none"
                />
              </div>

              <button className="w-full bg-[#3b5d50] text-white font-bold py-4 rounded-lg hover:bg-[#2d463c] transition-colors shadow-lg flex items-center justify-center gap-2 group">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
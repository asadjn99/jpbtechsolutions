"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 relative overflow-hidden">
      
      {/* Background Decor (Subtle Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-linear-to-r from-transparent via-[#f9bf29]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Socials */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
               {/* Adjust width/height as needed for your logo */}
               <div className="relative h-10 w-32">
                  <Image 
                    src="/logow.png" // Use a WHITE version of your logo here if you have it, or the standard one
                    alt="JPBtech Solutions"
                    fill
                    className="object-contain object-left"
                  />
               </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering businesses with bespoke software solutions. We engineer digital products that drive growth, efficiency, and innovation.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <Link 
                  key={idx} 
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#f9bf29] hover:text-[#3b5d50] transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {["Home", "About Us", "Our Process", "Case Studies", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-slate-400 hover:text-[#f9bf29] hover:pl-2 transition-all duration-300 flex items-center gap-2 text-sm"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 hover:opacity-100" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              {["Web Development", "Mobile Apps", "UI/UX Design", "Cloud Solutions", "API Integration"].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-slate-400 hover:text-[#f9bf29] hover:pl-2 transition-all duration-300 flex items-center gap-2 text-sm"
                  >
                     <ArrowRight className="w-3 h-3 opacity-0 hover:opacity-100" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#f9bf29] shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  123 Tech Avenue, Innovation Park,<br />London, UK SW1A 1AA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#f9bf29] shrink-0" />
                <span className="text-slate-400 text-sm">+44 20 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#f9bf29] shrink-0" />
                <span className="text-slate-400 text-sm">hello@jpbtech.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} JPBtech Solutions. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
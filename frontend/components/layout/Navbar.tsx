"use client";

import { useState, useEffect } from "react";
// 1. Correct Import for the Next.js Image Component
import Image from "next/image"; 
import Link from "next/link";
import { usePathname } from "next/navigation";

// 2. Correct Import for Icons
import { Menu, X } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#3b5d50]  shadow-md py-3"  // Scrolled: primary
          : "bg-transparent py-5"      // Top: Transparent
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* 1. Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-12 w-40">
                <Image
                src="/logow.png"
                alt="JPBtech Solutions"
                fill
                className="object-contain object-left transition-transform group-hover:scale-105 duration-300"
                priority
                />
            </div>
          </Link>

          {/* 2. Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative font-medium text-[15px] transition-colors duration-300 group ${
                    isActive ? "text-white" : "text-white/70 hover:text-white "
                  }`}
                >
                  {link.name}
                  
                  {/* The Yellow Animated Underline */}
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#f9bf29] rounded-full transition-all duration-300 ease-in-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`} 
                  />
                </Link>
              );
            })}
          </div>

          {/* 3. Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2 relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className="relative w-6 h-6"
              >
                <motion.span
                  variants={{
                    closed: { opacity: 1, rotate: 0, scale: 1 },
                    open: { opacity: 0, rotate: 90, scale: 0 }
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Menu className="w-7 h-7" />
                </motion.span>
                
                <motion.span
                  variants={{
                    closed: { opacity: 0, rotate: -90, scale: 0 },
                    open: { opacity: 1, rotate: 0, scale: 1 }
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <X className="w-7 h-7 text-[#f9bf29]" />
                </motion.span>
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* 4. Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-lg font-medium transition-colors ${
                      pathname === link.href
                        ? "text-primary pl-2 border-l-4 border-[#f9bf29]"
                        : "text-gray-600 hover:text-primary hover:pl-2 hover:border-l-4 hover:border-gray-200"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
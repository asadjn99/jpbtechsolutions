"use client";

import Hero from "@/components/privacy/Hero";

import { ScrollText } from "lucide-react"; 

export default function TermsPage() {
  return (
    <main className="bg-white">
      <Hero 
        badge="Legal & Compliance"
        title="Terms of Service"
        description="Please read these terms and conditions carefully before using our services."
        imageSrc="/about-hero.jpg"
        icon={ScrollText}
      />
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-slate text-slate-600 max-w-none">
          <p className="text-sm text-gray-400 mb-8">Last Updated: January 1, 2026</p>

          <h3 className="text-[#3b5d50] font-bold text-2xl mb-4">1. Agreement to Terms</h3>
          <p className="mb-6">
            By accessing or using our website and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the Service.
          </p>
         
           <h3 className="text-[#3b5d50] font-bold text-2xl mb-4">2. Intellectual Property</h3>
           <p className="mb-6">
            The Service and its original content, features, and functionality are and will remain the exclusive property of JPBTech Solutions and its licensors.
           </p>
           {/* ... ... */}
        </div>
      </section>
    </main>
  );
}
"use client";

import FAQ from "@/components/contact/FAQ";
import Hero from "@/components/contact/Hero";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section*/}
      <Hero 
        badge="Contact Us"
        title="Let's Build Something Extraordinary."
        description="Whether you have a question about features, pricing, or need a demo, our team is ready to answer all your questions."
        imageSrc="/contact-hero.avif"
      />

      {/* Contact Section */}
      <div id="form">
        <Contact />
      </div>

      <FAQ />
      {/* Optional: Map Section (Full Width) */}
      <div className="w-full h-100 bg-slate-200 grayscale hover:grayscale-0 transition-all duration-500">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.2323871234!2d-118.332!3d34.001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAwJzA2LjAiTiAxMTjCsDE5JzU1LjIiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <CTA />


    </main>
  );
}
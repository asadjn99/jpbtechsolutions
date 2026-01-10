"use client";

import Hero from "@/components/services/Hero"; 
import CTA from "@/components/sections/CTA";
import Services from "@/components/sections/Services"; 
import Process from "@/components/sections/Process";   
import TechStack from "@/components/services/TechStack";
import Industries from "@/components/services/Industries";

export default function ServicesPage() {
  return (
    <main>
      <Hero 
        badge="Our Expertise"
        title="Engineering Digital Excellence for Your Business"
        description="From custom web applications to enterprise-grade software, we deliver scalable, and innovative solutions."
        imageSrc="/life-1.jpg"
      />

      {/* Services List */}
      <Services />

       {/* Industries */}
      <Industries />

      {/* Technologies */}
      <TechStack />



      {/* How We Work */}
      <Process />

      {/* Call to Action */}
      <CTA />
    </main>
  );
}
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      
      <Hero />
      <Services />
      <Process />
      <Projects />
      <CTA />
      <Testimonials />
      <Contact />
      
    </main>
  );
}
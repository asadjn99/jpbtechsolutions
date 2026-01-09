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
      
      {/*  */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="text-gray-600 mt-4">More content coming soon...</p>
        </div>
      </section>
      
    </main>
  );
}


import PageHero from "@/components/about/Hero";
import LifeAt from "@/components/about/LifeAt";
import OurStory from "@/components/about/OurStory";
import Team from "@/components/about/Team";
import Values from "@/components/about/Values";
import WhyUs from "@/components/about/WhyUs";
import CTA from "@/components/sections/CTA";

export default function AboutPage() {
  return (
    <main>

      {/* Custom Image & Text */}
      <PageHero
        title="More Than Just Code"
        description="We are a team of visionaries, engineers, and strategists dedicated to redefining how businesses interact with the digital world."
        imageSrc="/hero-about.jpg"
      />
      <OurStory />
      <Values  />
      <LifeAt />
      <WhyUs />
      <Team />
      <CTA />

    </main>
  );
}
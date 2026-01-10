"use client";

import Hero from "@/components/projects/Hero"; 
import ProjectGrid from "@/components/projects/ProjectsGrid";
import CTA from "@/components/sections/CTA";

export default function ProjectsPage() {
  return (
    <main>
      <Hero 
        badge="Our Portfolio"
        title="Showcasing Our Digital Masterpieces"
        description="Explore a curated selection of our successful projects. From startups to enterprises, we've delivered excellence across industries."
        imageSrc="/projects-hero.jpg"
      />

      
      <ProjectGrid />

      <CTA />
    </main>
  );
}
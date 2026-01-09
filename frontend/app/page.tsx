import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      
      {/* Temporary Placeholder for next sections so you can see scrolling effect */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="text-gray-600 mt-4">More content coming soon...</p>
        </div>
      </section>
    </main>
  );
}
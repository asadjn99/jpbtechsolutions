"use client";

import Hero from "@/components/privacy/Hero";
export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <Hero 
        badge="Legal & Compliance"
        title="Privacy Policy"
        description="We believe in transparency. Learn how we collect, safeguard, and use your personal information."
        imageSrc="/about-hero.jpg" 
      />
      
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-slate text-slate-600 max-w-none">
          <p className="text-sm text-gray-400 mb-8 border-b border-gray-100 pb-8">
            Last Updated: <span className="font-bold text-[#3b5d50]">January 1, 2026</span>
          </p>

          <h3 className="text-[#3b5d50] font-bold text-2xl mb-4">1. Introduction</h3>
          <p className="mb-6">
            Welcome to JPBTech Solutions. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>

          <h3 className="text-[#3b5d50] font-bold text-2xl mb-4">2. Information We Collect</h3>
          <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 marker:text-[#f9bf29]">
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
          </ul>

          <h3 className="text-[#3b5d50] font-bold text-2xl mb-4">3. How We Use Your Data</h3>
          <p className="mb-6">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#3b5d50] mb-6">
             <ul className="space-y-2">
                <li>• Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>• Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
             </ul>
          </div>

          <h3 className="text-[#3b5d50] font-bold text-2xl mb-4">4. Data Security</h3>
          <p className="mb-6">
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
          </p>

          <h3 className="text-[#3b5d50] font-bold text-2xl mb-4">5. Contact Us</h3>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:privacy@jpbtechsolutions.com" className="font-bold text-[#3b5d50] hover:text-[#f9bf29] transition-colors">privacy@jpbtechsolutions.com</a>
          </p>
        </div>
      </section>
      
    </main>
  );
}
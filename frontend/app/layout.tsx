import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "JPBtech Solutions | Transforming Ideas into Digital Reality",
  description: "Leading software house providing web development, app solutions, and IT consultancy.",
  
  // 1. Browser Tab Icon (Favicon)
  icons: {
    icon: "/icon-1.png", 
    apple: "/logo.png",
  },

  // 2. WhatsApp & Social Media
  openGraph: {
    title: "JPBtech Solutions | Transforming Ideas into Digital Reality",
    description: "Leading software house providing web development, app solutions, and IT consultancy.",
    // url: "https://jpbtechsolutions.com",
    url: "https://jpbtechsolutions.netlify.app",
    siteName: "JPBtech Solutions",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "JPBtech Solutions Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-gray-50 text-gray-900`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
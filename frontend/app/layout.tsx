import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using a clean tech font
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "JPBtech Solutions | Transforming Ideas into Digital Reality",
  description: "Leading software house providing web development, app solutions, and IT consultancy.",
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
      </body>
    </html>
  );
}
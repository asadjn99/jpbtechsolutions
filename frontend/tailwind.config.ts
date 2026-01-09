import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // NOTICE: No "src/" here because your folders are in the root
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Just in case you add this later
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b5d50", // Deep Green
        accent: "#f9bf29",  // Focus Yellow
        dark: "#2b2b2b",    // Dark Text
        light: "#f7f7f7",   // Light Background
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
export default config;
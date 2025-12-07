import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Custom EES Brand Colors from your screenshots
        ees: {
          50: '#fff1f2',
          100: '#ffe4e6', // Very light red (for hover backgrounds)
          500: '#f43f5e',
          700: '#be123c', // THE BRAND RED (used in navbar)
          800: '#9f1239', 
          900: '#881337', // DEEP RED (used in Footer)
        }
      },
    },
  },
  plugins: [],
};
export default config;
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#34d399", // emerald-400
          emerald: "#34d399",
          cyan: "#22d3ee", // cyan-400
        },
      },
      boxShadow: {
        glow: "0 0 22px -2px rgba(52, 211, 153, 0.45)",
        "glow-lg": "0 0 48px -4px rgba(52, 211, 153, 0.55)",
        "glow-cyan": "0 0 26px -2px rgba(34, 211, 238, 0.45)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.37)",
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(135deg, #34d399 0%, #22d3ee 100%)",
        "radial-fade":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(52,211,153,0.16), transparent 60%)",
        "grid-fade":
          "linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px -4px rgba(52,211,153,0.5)" },
          "50%": { boxShadow: "0 0 38px 0px rgba(34,211,238,0.7)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "pulse-glow": "pulse-glow 3.5s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

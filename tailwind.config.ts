import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#04060B",
          secondary: "#0A0F1A",
          elevated: "#0E1626",
        },
        surface: {
          light: "#EDEFF3",
          panel: "#E2E5EB",
          border: "rgba(16, 23, 34, 0.10)",
        },
        brand: {
          blue: "#1F6BFF",
          "blue-hover": "#0E54D6",
          cyan: "#2BC4FF",
          ice: "#A8D5FF",
        },
        text: {
          primary: "#F6F8FB",
          muted: "#9CA8BB",
          dark: "#0B1120",
          darkMuted: "#4E5A6E",
        },
        line: {
          dark: "rgba(255, 255, 255, 0.08)",
          "dark-strong": "rgba(255, 255, 255, 0.18)",
          light: "rgba(11, 17, 32, 0.08)",
        },
      },
      fontFamily: {
        condensed: ["var(--font-anton)", "var(--font-barlow-condensed)", "Impact", "sans-serif"],
        display: ["var(--font-barlow-condensed)", "Impact", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        signature: ["var(--font-caveat)", "cursive"],
      },
      letterSpacing: {
        ultra: "-0.045em",
        wider: "0.18em",
        widest: "0.32em",
      },
      boxShadow: {
        glow: "0 0 80px rgba(31, 107, 255, 0.45)",
        "glow-cyan": "0 0 90px rgba(43, 196, 255, 0.40)",
        "glow-soft": "0 0 50px rgba(31, 107, 255, 0.20)",
      },
      animation: {
        "pulse-slow": "pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-up": "fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        "soft-ping": "softPing 2.6s cubic-bezier(0, 0, 0.2, 1) infinite",
        "shimmer": "shimmer 3s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        softPing: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "75%, 100%": { transform: "scale(2.4)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

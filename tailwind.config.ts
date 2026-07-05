import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "var(--brand-blue)",
          green: "var(--brand-green)",
          yellow: "var(--brand-yellow)",
          red: "var(--brand-red)",
          orange: "var(--brand-orange)",
          mint: "var(--brand-mint)",
          primary: "var(--brand-primary)",
          secondary: "var(--brand-secondary)",
          accent: {
            pink: "var(--brand-accent-pink)",
            orange: "var(--brand-accent-orange)"
          },
          success: "var(--brand-success)",
          warning: "var(--brand-warning)",
          error: "var(--brand-error)",
          background: "var(--brand-background)",
          surface: "var(--brand-surface)",
          border: "var(--brand-border)",
          text: "var(--brand-text)",
          body: "var(--brand-body)",
          logo: {
            s: "var(--brand-s)",
            a: "var(--brand-a)",
            i: "var(--brand-i)",
            t: "var(--brand-t)",
            o: "var(--brand-o)",
            u: "var(--brand-u)",
            r: "var(--brand-r)"
          }
        },
        navy: "#0F172A",
        paper: "#F5F7FA",
        body: "#333333"
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 10px 28px rgba(15, 23, 42, 0.06)"
      }
    }
  },
  plugins: []
};

export default config;

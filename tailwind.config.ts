import type { Config } from "tailwindcss"

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: { "2xl": "1200px" }
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" }
        },
        "shine": {
          "0%": { transform: "translateX(-60%)" },
          "100%": { transform: "translateX(160%)" }
        }
      },
      animation: {
        "fade-up": "fade-up 600ms ease-out both",
        "shine": "shine 1400ms ease-in-out infinite"
      }
    }
  },
  plugins: []
} satisfies Config

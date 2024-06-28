import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffe601",
      },

      spacing: {
        "13": "13.3px",
      },

      keyframes: {
        "logo-carousel": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - 2rem))" },
        },
      },
      animation: {
        "logo-carousel": "logo-carousel 64s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

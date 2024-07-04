import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    screens: {
      xl: { max: "1000px" },
      md: { max: "767px" },
      sm: { max: "550px" },
      xs: { max: "550px" },
    },
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
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "slide-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(0)",
          },
          "5%": {
            opacity: "0",
            transform: "translateX(1.2rem)",
          },
          "80%": {
            opacity: "0.4",
            transform: "translateX(1.2rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(1.5rem)",
          },
        },
        "slide-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(1.5rem)",
          },
          "5%": {
            opacity: "0",
            transform: "translateX(0.3rem)",
          },
          "80%": {
            opacity: "0.4",
            transform: "translateX(1.2rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "logo-carousel": "logo-carousel 64s linear infinite",
        "slide-right": "slide-right 0.1s ease-in both",
        "slide-left": "slide-left 0.1s ease-in both",
        appear: "appear 0.1s ease-in both",
      },
    },
  },
  plugins: [],
};
export default config;

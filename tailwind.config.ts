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
    },
  },
  plugins: [],
};
export default config;

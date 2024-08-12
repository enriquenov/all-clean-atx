import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "brand-cream": "#F6EDD9",
        "brand-green": "#3BB54B",
        "brand-light-green": "#E5F7E5",
      },
      boxShadow: {
        standard: "0px 10px 36px rgba(18, 78, 120, 0.12)",
      },
    },
  },
  plugins: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
};
export default config;

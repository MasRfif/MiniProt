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
      fontFamily: {
        "fira-sans": ['"Fira Sans"', "sans-serif"],
      },
      screens: {
        xl: "1440px",
        // => @media (min-width: 1440px) { ... }

        lg: "1280px",
        // => @media (min-width: 1280px) { ... }

        md: "1024px",
        // => @media (min-width: 1024px) { ... }

        sm: "768px",
        // => @media (min-width: 768px) { ... }

        xs: "360px",
        // => @media (min-width: 360px) { ... }
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;

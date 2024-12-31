/** @type {import('tailwindcss').Config} */
import rippleui from "rippleui"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      vsm: "420px",
      // => @media (min-width: 500px) { ... }

      rsm: "500px",
      // => @media (min-width: 500px) { ... }

      sm: "600px",
      // => @media (min-width: 640px) { ... }

      md: "750px",
      // => @media (min-width: 768px) { ... }

      rmd: "900px",
      // => @media (min-width: 768px) { ... }

      lg: "1000px",
      // => @media (min-width: 1024px) { ... }

      xl: "1300px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [rippleui]
};

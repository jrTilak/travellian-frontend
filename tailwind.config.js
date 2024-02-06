import tailwindcssAnimated from "tailwindcss-animated";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF7757",
        secondary: {
          white: "#FFFFFF",
          black: "#000000",
        },
      },
      screens: {
        xs: "320px",
        "2xl": "1440px",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [tailwindcssAnimated],
};

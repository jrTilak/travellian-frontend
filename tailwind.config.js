import tailwindcssAnimated from "tailwindcss-animated";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF7757",
      },
      screens: {
        xs: "320px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [tailwindcssAnimated],
};

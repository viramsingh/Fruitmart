/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#de2c40",
        secondary: "#fb923c",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        averia: ["Averia Serif Libre", "serif"],
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        slideInLeft: "slideInLeft 1s ease-in-out",
        slideInRight: "slideInRight 1s ease-in-out",
      },
    },
  },
  plugins: [],
};

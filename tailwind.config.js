/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serat: "Montserrat",
      },
      textColor: {
        hover: "#ea580c",
      },
    },
    screens: {
      xs: "400px",
      xd: "500px",
      sm: "640px",
      md: "780px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};

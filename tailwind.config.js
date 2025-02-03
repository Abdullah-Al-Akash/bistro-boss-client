/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Ensures manual dark mode control
  theme: {
    extend: {
      fontFamily: {
        display: 'Oswald, ui-serif', // Adds a new `font-display` class
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // Light mode as default
  },
};

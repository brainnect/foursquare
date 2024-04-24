/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#0F0E11',
        'secondary': '#1C1B1E',
        'accent': '#1C1B1E'
      }
    },
  },
  plugins: [require("daisyui")],
};
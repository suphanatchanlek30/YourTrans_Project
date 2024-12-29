/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      body1: ["Athiti", "sans-serif"],
      body2: ["Geist", "sans-serif"],
      body3: ["Rubik", "sans-serif"],
      body4: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
}


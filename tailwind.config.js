/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"], // Enable dark mode via class
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      figtree: ["Figtree", "sans-serif"],
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#42c8b7",
        secondary: "#007fbf",
        accent: "#9333ea",
        fondo: "#f4f8f9",
        alerta: "#f87171",
        success: "#10b981",
        text: {
          base: "#374151",
          light: "#9CA3AF"
        }
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        heading: ['"Montserrat"', 'sans-serif']
      }
    },
  },
  plugins: [],
};

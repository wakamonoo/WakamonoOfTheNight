/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b30000',   // Daredevil red
        secondary: '#1a1a1a', // Dark gray / black
        accent: '#ffd700',    // Optional gold for contrast
      },
    },
  },
  plugins: [],
}


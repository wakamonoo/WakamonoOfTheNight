/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b30000",    // Daredevil red
        dark: "#0d0d0d",       // Black background for mystery
        secondary: "#1a1a1a",  // Dark gray / black for panels
        light: "#f5f5f5",      // Light gray for text contrast
        accent: "#ffd700",     // Gold for highlights or CTAs
        blood: "#660000",      // Deeper red for hover/active states
      },
      fontFamily: {
        daredevil: ['Anton', 'sans-serif'],            // Bold, main headers
        daredevil1: ['"Bebas Neue"', 'sans-serif'],    // Secondary headers/buttons
        daredevil2: ['Oswald', 'sans-serif'],          // Subheaders, nav
        serifDark: ['"Playfair Display"', 'serif'],    // Elegant, mysterious serif
        body: ['"Roboto Condensed"', 'sans-serif'],    // Clean, readable body text
        heroic: ['Cinzel', 'serif'],                   // Dramatic, heroic headings
        gritty: ['VT323', 'monospace'],                // Gritty, retro typewriter style

        // Additional font options
        noir: ['"League Gothic"', 'sans-serif'],       // Bold, cinematic
        techno: ['"Orbitron"', 'sans-serif'],          // Futuristic tech
        vintage: ['"Abril Fatface"', 'cursive'],       // Bold vintage poster
        elegant: ['"Cormorant Garamond"', 'serif'],    // Serif elegance
        urban: ['"Russo One"', 'sans-serif'],          // Bold urban sans
        soft: ['"Poppins"', 'sans-serif'],             // Friendly and modern
      },
      fontSize: {
        '6xl': '4rem',   // 64px
        '7xl': '5rem',   // 80px
        '8xl': '6rem',   // 96px
        '9xl': '7rem',   // 112px
      },
    },
  },
  plugins: [],
};

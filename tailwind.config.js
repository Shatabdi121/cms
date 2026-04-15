/** @type {import('tailwindcss').Config} */
module.exports = {
  // Required for manual theme toggling via class
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom Neon Palette
        neon: {
          bg: '#f0fff4',      // Ultra-light green background
          text: '#004a1c',    // Deep forest green text
          primary: '#39ff14', // Classic Neon Green (highlights)
          accent: '#0aff99',  // Neon Mint (alt highlights)
          border: '#b3ffcc',  // Soft neon border
        },
      },
      keyframes: {
      typing: {
        "from": { width: "0" },
        "to": { width: "100%" }
      },
      blink: {
        "50%": { borderColor: "transparent" }
      },
      shimmer: {
  '100%': { transform: 'translateX(100%)' },
}
    },
    animation: {
      typing: "typing 3.5s steps(40) infinite, blink .7s step-end infinite",
      shimmer: 'shimmer 2s infinite',
    }
    },
  },
  plugins: [],
}
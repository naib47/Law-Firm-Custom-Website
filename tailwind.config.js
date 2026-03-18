/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Navbar Colors
        "nav-bg": "#e8832a",
        "nav-hover": "#c9711f",
        "nav-border": "rgba(255,255,255,0.2)",

        // Dark Theme
        navy: "#0a1628",
        "navy-light": "#0d1f3c",
        gold: "#c9a84c",
        "gold-dark": "#b8963e",

        // Light Theme
        "page-bg": "#f5f5f0",
        "card-bg": "#ffffff",
        "card-border": "#e5e5e5",

        // Text
        "text-primary": "#1a1a2e",
        "text-secondary": "#555555",
        "text-muted": "#888888",
      },
    },
  },
  plugins: [],
}
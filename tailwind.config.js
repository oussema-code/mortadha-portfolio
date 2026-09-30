/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#1b3a2d",
        pine: "#2e5c46",
        leaf: "#4c9a6a",
        mint: "#bfe3cd",
        sage: "#e6efe6",
        water: "#3e7cb1",
        sky: "#7fb3d8",
        cream: "#f7f4ec",
        sand: "#efeade",
        charcoal: "#22271f",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
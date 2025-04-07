export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}", "./public/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#1c1c1e",
        accent: "#4ade80", // soft green
        text: "#f1f1f1",
        muted: "#a1a1aa",
      },
    },
    fontFamily: {
      sans: ['"Inter"', "sans-serif"],
      serif: ['"Playfair Display"', "serif"],
    },
  },
  darkMode: 'class', // add if using Tailwind dark mode toggle   
  plugins: [],
};

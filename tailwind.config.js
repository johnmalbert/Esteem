export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}", "./public/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Roboto', 'sans-serif'], // 👈 add your custom font
        // You can add more like:
        // roboto: ['Roboto', 'sans-serif'],
        // montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

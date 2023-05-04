/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js,jsx}", "./components/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        robotoMono: "'Roboto Mono', monospace",
      },
    },
  },
  plugins: [],
};

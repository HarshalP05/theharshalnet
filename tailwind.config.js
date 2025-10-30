/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        pcbGreen: "#013220",
        traceGold: "#c0a000",
      },
    },
  },
  plugins: [],
};

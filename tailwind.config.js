/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#c4a545",
        dark: "#000000",
        navy: "#0f172a",
        grayDark: "#2b2b2b",
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "star-img": "url('./images/background/spaceBg.png')",
        "moon-img": "url('./images/hero/mainMoon.png')",
        "shadow-img": "url('./images/hero/shadow.png')"
      },
    },
  },
  plugins: [],
}

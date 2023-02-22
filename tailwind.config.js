/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: 
        {
          "pink": "var(--pink)",
          "dark-pink": "var(--dark-pink)",
          "nyellow": "var(--nyellow)",
          "cream": "var(--cream)",
          "dark-gray": "var(--dark-gray)",
          "syellow": "var(--syellow)"
        }
    },
  },
  plugins: [],
}

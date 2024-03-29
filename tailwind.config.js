/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'default': '#ffffff',
        'accent': '#FFBE1A',
        'muted': '#cfcfcf'
      },
      colors: {
        darkerBg: '#0F0F0F',
      }
    },
  },
  plugins: [],
}


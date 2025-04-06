/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // डार्क मोड के लिए क्लास रणनीति सक्षम करें
  theme: {
    extend: {
      colors: {
        'light-bg': '#F8F8F8',
        'dark-nav': '#2E8B57', // गहरा हरा
        'main-text': '#333333',
        'link-blue': '#007BFF',
        'card-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
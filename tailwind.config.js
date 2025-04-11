/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          playfair: ['Playfair Display', 'serif'],
        },
        colors: {
          'primary-color': '#23A6F0',
        },
      },
    },
    plugins: [],
  }
  
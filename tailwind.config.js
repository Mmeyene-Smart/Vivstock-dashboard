/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-dark': '#111111',
        'app-gray': '#1E1E1E',
      },
       backgroundImage: {
        'green-to-red': 'linear-gradient(to right, #22c55e 80%, red 20%)',
      },
    },
  },
  plugins: [],
}
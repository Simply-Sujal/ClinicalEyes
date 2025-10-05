/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Oxygen', 'sans-serif'],
        'oxygen': ['Oxygen', 'sans-serif'],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'bold': '700',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#0B0F19',
          light: '#E2E8F0',
          accent: '#00F0FF',
          secondary: '#7000FF',
          alert: '#FF003C'
        }
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        secondary: '#FF6600',
        tertiary: '#00FF00',
        quaternary: '#FF00FF',
        quinary: '#FFFF00',
      },
    },
  },
}

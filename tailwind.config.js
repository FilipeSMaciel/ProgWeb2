/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-fundo': '#CECEC8',
        'texto_branco': '#ffffff',
        'verde_principal': '#017c6a',
      },
    },
    fontFamily: {
      roboto: ['Roboto Mono', 'monospace'],
    },
  },
  plugins: [],
}
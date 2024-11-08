/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-fundo': '#242424',
        'texto_branco': '#ffffff',
        'verde_principal': '#017c6a',
        'fundo_card': '#C4C3C2',
        'bg_principal': '#017c6a',
        'adicionar_btn': '#61bef1',
        'adicionar_secBg': '#2f2f35',
      },
    },
    fontFamily: {
      roboto: ['Roboto Mono', 'monospace'],
    },
  },
  plugins: [],
}
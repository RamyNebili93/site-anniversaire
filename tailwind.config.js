/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        script: ['"Marck Script"', 'cursive'], // écriture fine, romantique
        sans: ['"Inter"', 'system-ui', 'sans-serif'], // texte lisible et moderne
      },
      colors: {
        primaryText: '#ffffffff',
      },
      borderRadius: {
        'xl2': '1.5rem',
      },
    },
  },
  plugins: [],
}

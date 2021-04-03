module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'black-dark': '#141414',
        'black-border': '#222224',
        'gray-dark': '#4a4a4c',
        'gray-text': '#f5f5f7',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

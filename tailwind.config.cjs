const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        sky: colors.sky,
      },
      zIndex: {
        negative: '-10',
      },
      fontFamily: {
        monserrat: ['Montserrat Alternates', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        bungee: ['Bungee', 'cursive'],
      },
    },
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'src/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
    ]
  }
};

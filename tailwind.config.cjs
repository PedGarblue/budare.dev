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
      },
    },
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'src/components/**/*.vue',
      'src/components/lib/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
    ]
  }
};

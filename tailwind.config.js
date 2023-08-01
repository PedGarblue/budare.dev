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
        'negative': '-10',
      },
    },
  },
  plugins: [],
};

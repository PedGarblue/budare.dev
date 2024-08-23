const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '30': '7.5rem',
      },
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
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-0.5deg)' },
          '50%': { transform: 'rotate(0.5deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'src/**/*.vue',
      'src/components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
    ]
  }
};

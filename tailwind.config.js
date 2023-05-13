const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundSize: {
        '200%': '200%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Roboto', ...fontFamily.sans],
        serif: ['Anton', ...fontFamily.serif],
        heading: ['Six Caps', ...fontFamily.serif],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "light": "#FAF5E5",
        "light-primary": "#FA007A",
        "light-secondary": "#201B19",

        "dark": "#000000",
        "dark-primary": "#F9DC4A",
        "dark-secondary": "#FFFFFF",

        "black": "#202124",
        "white": "#ffffff",
        "blue": "#35a7ff",
        "lapis": "#38618c",
        "crayola": "#ff5964",
        "maize": "#ffe74c",
      },
      keyframes: {
        'animation-scale': {
          'from': 'transform: scale(0)',
          'to': 'transform: scale(100%)',
        }
      },
      animation: {
        'scale': 'animation-scale'
      },
    },
  },
  plugins: [],
}

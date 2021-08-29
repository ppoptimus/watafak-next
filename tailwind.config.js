module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateX(-25%)' },
          '50%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

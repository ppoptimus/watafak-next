module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateX(20%)' },
          '50%': { transform: 'translateX(-70%)' },
        },
        
      },
      animation: {
        bounce: 'bounce 2s infinite',
       
      },
    },
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      25: 25,
      50: 50,
      75: 75,
      100: 100,
      999: 999,
      auto: 'auto',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

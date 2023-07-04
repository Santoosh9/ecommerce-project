/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'mobile': '20px',
      // => @media (min-width: 640px) { ... }

      'tablet': '640px',
      // => @media (min-width: 1024px) { ... }

      'laptop': '1020px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      margin: {
        'sidenav' : '893px',
        'sidenavplus' : '1110px',
        'sidenavh' : '350px'
      },
      width: {
        'playwindow' : '932px',
        'navwidth' : '100%'
      },
      height: {
        'playwindow' : '440px',
        'navheight' : '86px'
      },
      gap: {
        'navgap': '440px'
      }
    },
  },
  plugins: [],
};

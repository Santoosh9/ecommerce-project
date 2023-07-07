/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: '20px',
      // => @media (min-width: 640px) { ... }

      tablet: '640px',
      // => @media (min-width: 1024px) { ... }

      laptop: '1020px',
      // => @media (min-width: 1280px) { ... }
    },

    extend: {
      colors: {
        primary: { rbg: (0, 110, 185, 1) },
        secondary: { rgba: (0, 140, 236, 1) },
      },

      PaleOrang: {},

      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

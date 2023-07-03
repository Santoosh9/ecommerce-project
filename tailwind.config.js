/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
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

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      transitionProperty: {
        colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
      keyframes: {
    bounceDown: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(10px)' },
    },
  },
  animation: {
    bounceDown: 'bounceDown 1s infinite',
  },
}
  },
  plugins: [],
};

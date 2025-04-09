/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'star-movement-top': 'starMovementTop var(--star-duration, 6s) linear infinite',
        'star-movement-bottom': 'starMovementBottom var(--star-duration, 6s) linear infinite',
      },
      keyframes: {
        starMovementTop: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(250%)' },
        },
        starMovementBottom: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-250%)' },
        },
      },
    },
  },
  plugins: [],
};
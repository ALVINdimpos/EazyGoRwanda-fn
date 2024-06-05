/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      'colors': {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        floor: 'var(--floor)',
        light: 'var(--light)',
        dark: 'var(--dark)',
      },
      'small-italicized': ['1.875rem', { fontWeight: 800 }],
    },
  },
  plugins: [],
};

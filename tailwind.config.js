/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2196F3',
        secondary: '#4CAF50',
        accent: '#FF9800',
        neutral: '#F5F5F5',
      },
      scrollbar: {
        thin: 'thin',
        hide: 'none'
      },
      screens: {
        'xs': '375px',  // Extra small devices
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      fontSize: {
        'xs': '0.75rem',   // Extra small text
        'sm': '0.875rem',  // Small text
        'base': '1rem',    // Base text
        'lg': '1.125rem',  // Large text
        'xl': '1.25rem',   // Extra large text
      },
      padding: {
        'safe-t': 'env(safe-area-inset-top)',
        'safe-b': 'env(safe-area-inset-bottom)',
        'safe-l': 'env(safe-area-inset-left)',
        'safe-r': 'env(safe-area-inset-right)',
      }
    },
  },
  plugins: [],
}
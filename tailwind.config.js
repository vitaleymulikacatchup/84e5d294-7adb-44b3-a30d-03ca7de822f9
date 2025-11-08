/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'cf-blue': '#3b82f6',
        'cf-gray': '#6b7280',
        'cf-light-gray': '#f3f4f6',
        'cf-dark-gray': '#374151',
        'success-green': '#10b981',
        'error-red': '#ef4444'
      },
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
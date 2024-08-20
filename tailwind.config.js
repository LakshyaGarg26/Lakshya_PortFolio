module.exports = {
  darkMode: 'class', // Enable dark mode based on a class
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a192f', // Dark blue background
        secondary: '#8892b0', // Text color for dark mode
        accent: '#64ffda', // Accent color (similar to DeveloperFolio)
      },
    },
  },
  plugins: [],
};

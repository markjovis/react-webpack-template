module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Reference the same name as your @font-face declaration.
        nexa: ['"nexa"', 'sans-serif'],
      },
      backgroundImage: {
        // Create a named background image utility.
        'custom-bg': 'url("../images/background.jpg")',
      },
      colors: {
        'custom-link': '#8FD3F5',
        // You might register a named hover color instead of using an arbitrary value.
        'custom-link-hover': '#9ACD32', // an approximation of yellowgreen
      },
      spacing: {
        // If you’d rather avoid using arbitrary values for image sizes,
        // you can define custom widths/heights here.
        '800': '800px',
        '300': '300px',
        '900': '900px',
        '400': '400px',
      },
      fontSize: {
        '20px': '20px',
        '24px': '24px',
      }
    },
  },
  plugins: [],
};

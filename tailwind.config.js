const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    // preflight: false,
    // container: false,
  },
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  plugins: [
    // require('@tailwindcss/typography')
  ],
  theme: {
    extend: {
      fontFamily: {
        // AlimamaShuHeiTi: "'AlimamaShuHeiTi-Bold', 'AlimamaShuHeiTi', 'serif' ",
        mono: ["'DM Mono'", ...defaultTheme.fontFamily.mono]
      },
      colors: {
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" }
      },
      spacing: {
        list: '1.75rem', // You can customize the spacing as per your requirement
      },
    },
  },
  variants: {
    listStyleType: ['responsive', 'hover', 'focus'],
    listStylePosition: ['responsive', 'hover', 'focus'],
  },
  corePlugins: {
    preflight: false,
  }
};

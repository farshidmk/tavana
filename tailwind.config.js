/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: ["Vazirmatn", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        farshid: "#239ffe",
        tavana: {
          50: "#239ffe",
          100: "#239ffe",
          200: "#239ffe",
          300: "#239ffe",
          400: "#239ffe",
          500: "#239ffe",
          600: "#239ffe",
          700: "#239ffe",
          800: "#239ffe",
          900: "#239ffe",
        },
      },
    },
  },
  plugins: [],
};

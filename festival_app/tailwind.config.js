/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "logo-navbar": "url('/src/assets/logoOnly.svg')",
        "index-background":
          "linear-gradient(0deg, rgba(16,32,56,1) -20%, rgba(29,28,41,1) 100%), url(../components/svgs/background.png)",
      },
    },

    colors: {
      "color-black": "#1D1C29",
      "color-blue": "#102038",
      "color-white": "#F9F9F9",
      "color-green": "#00B88B",
      "color-purple": "#A836DA",
      "color-yellow": "#F9F01F",
      "color-orange": "#E4A74A",
    },
    fontFamily: {
      "font-display": ["Playfair Display", "serif"],
      "font-sans": ["Josefin Sans", "sans-serif"],
    },
  },
  plugins: [],
};

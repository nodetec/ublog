/** @type {import('tailwindcss').Config} */
const { themes, customThemes } = require("./ublog.config");
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-lato)", "Roboto", "sans-serif", ...fontFamily.sans],
    },
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "768px",
        },
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
    themes: [...themes, ...customThemes],
  },
};

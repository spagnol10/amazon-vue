/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
  screens: {
    xs: { max: "425px" },
    sm: { max: "768px" },
    md: { min: "769px" },
    lg: { min: "1440px" },
    xl: { min: "2560px" },
  },
};

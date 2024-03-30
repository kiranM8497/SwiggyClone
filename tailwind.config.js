/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        icomoon: ["Icomoon", "sans-serif"],
      },
      colors: {
        "custom-green": "#2ecc71",
      },
    },
  },
  plugins: [],
};

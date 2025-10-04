/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wedding: {
          cream: "#F5EFE6",
          beige: "#E8DFCA",
          blueLight: "#AEBDCA",
          blueDark: "#7895B2",
        },
      },
      fontFamily: {
        heading: ["'Alex Brush'", "cursive"],
        body: ["'Montserrat'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

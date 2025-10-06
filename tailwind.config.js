/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-alex-brush)'],
        body: ['var(--font-montserrat)'],
      },
      colors: {
        'wedding-cream': '#F5F5DC',
        'wedding-blueDark': '#003366',
        'bg': '#FAF9F6',
      }
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
    // colors: {
    //   anchor: '#0086FF'
    // }
  },
  plugins: [
    require('daisyui'),
  ],
}


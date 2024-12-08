import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        discord: "#7289da",
        primary: "#fae127",
        secondary: {
          '50': '#ecfffd',
          '100': '#cffefc',
          '200': '#a6fbf9',
          '300': '#68f8f6',
          '400': '#2beded',
          '500': '#08d0d2',
          '600': '#09a6b1',
          '700': '#0f848f',
          '800': '#166a74',
          '900': '#175862',
          '950': '#083b44',
          '1000': '#151c1f',
        },
      },
    },
  },
  plugins: [
    typography
  ],
}


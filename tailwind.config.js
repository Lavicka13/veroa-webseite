/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFAFA',
        primary: '#171717',
        secondary: '#525252',
        accent: '#2563EB',
        btn: '#000000',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        handwriting: ['"Caveat"', 'cursive'],
      },
    },
  },
  plugins: [],
}

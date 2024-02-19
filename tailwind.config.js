/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'sm': ['var(--font-size-sm)', { lineHeight: 1 }],
        'base': ['var(--font-size-base)', { lineHeight: 1 }],
        'lg': ['var(--font-size-lg)', { lineHeight: 1 }],
        'xl': ['var(--font-size-xl)', { lineHeight: 1 }],
        '2xl': ['var(--font-size-2xl)', { lineHeight: 1 }],
        '3xl': ['var(--font-size-3xl)', { lineHeight: 1 }],
        '4xl': ['var(--font-size-4xl)', { lineHeight: 1 }],
        '5xl': ['var(--font-size-5xl)', { lineHeight: 1 }],
        '6xl': ['var(--font-size-6xl)', { lineHeight: 1 }],
      }
    },
  },
  plugins: [],
}
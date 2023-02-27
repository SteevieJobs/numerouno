/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'c-white': '#f8f8f1',
            'c-black': '#161212',
            'c-red': '#d71d2d',
            'c-redorange': '#e95429',
            'c-orange': '#fb8b24'
        },
        boxShadow: {
            'tv': '0 6px 32px 11px rgba(22, 18, 18, 0.51)',
            'buttons': '5px 4px 4px rgba(22, 18, 18, 0.25);'
        },
    },
    plugins: [],
    }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Neon color palette from your design
        primary: "#00f2c3",
        secondary: "#00d2ff",
        "background-dark": "#020617",
        "surface-dark": "rgba(15, 23, 42, 0.4)",
      },
      fontFamily: {
        // Ensure Poppins is imported in your styles.css or index.html
        sans: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
      },
      backgroundImage: {
        'carbon-pattern': "url('https://www.transparenttextures.com')",
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

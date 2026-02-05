/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
       colors: {
                        "primary": "#00f2ff",
                        "secondary": "#00ff9d",
                        "background-dark": "#030708",
                    },
                    fontFamily: {
                        "poppins": ["Poppins", "sans-serif"]
                    },
    },
  },
  plugins: [],
}


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
        // Custom glow colors for your logos
        glow: {
          aws: "#FF9900",
          syspro: "#E21F26",
          azure: "#0089D6",
          discord: "#5865F2",
          meta: "#0668E1",
        }
      },
      fontFamily: {
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
        // --- Added Marquee Animation ---
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        // --- Added Marquee Keyframes ---
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],

  
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
      }
    },
  },
}



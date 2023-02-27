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
    screens: {
      'sm': '426px',
      // => @media (min-width: 640px) { ... }
      
      'smd': '605',

      'md': '769px',
      // => @media (min-width: 768px) { ... }

      'lg': '1025px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1281px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1537px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      keyframes:{
        slidein:{
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-25rem)',
          }
        }
      },
      animation:{
        slide_in:'slidein 300ms cubic-bezier(0.4, 0, 1, 1) '
      }
    },
    fontFamily:{
      mon:["Montserrat","sans-serif"],
      pop:["Poppins","sans-serif"],
    },
  },
  plugins: [],
}

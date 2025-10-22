/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./projects/**/*.{html,ts}"],
  plugins: [],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#00D2F9",
          60: "#00d1f9",
          80: "#1e3d7b",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          // 600: "#2563eb",
          600: "#1E3D7B",
          650: "#061A3A",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        secondary: {
          100: "#f4fafd",
        },
        black: {
          100: "#181818",
          200: "#131313",
        },
        categoryBorder: {
          100: "#00d1f9",
        },
        primaryGray: {
          100: "#8d8d8d",
          200 :'#D1D5DB'
        },
        primaryForm: {
          gray: "#efe7e2",
        },
        bgColor : {
          primary : '#f4fafd'
        },
        bgLocation : {
          primary : '#bad1ff'
        },
        starColor : {
          primary : '#ffba00'
        },
        bodyColor : {
          primary : '#111827'
        }
      },
    },
    screens: {
      xs: "200px",
      xxs: "320px",
      sm: "540px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1300px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1536px) { ... }
    },

    // fontFamily: {
    //   nunito : ['Nunito' ,'sans'],
    //   manrope : ['Manrope' ,'sans'],
    // },
    fontFamily: {
      "nunito-regular": ["Nunito-Regular", "sans-serif"],
      "nunito-medium": ["Nunito-Medium", "sans-serif"],
      "nunito-bold": ["Nunito-Bold", "sans-serif"],
      "manrope-regular": ["Manrope-Regular", "sans-serif"],
      "manrope-medium": ["Manrope-Medium", "sans-serif"],
      "manrope-bold": ["Manrope-Bold", "sans-serif"],
      "tajawal-regular": ["Tajawal-Regular", "sans-serif"],
      "tajawal-medium": ["Tajawal-Medium", "sans-serif"],
      "tajawal-bold": ["Tajawal-Bold", "sans-serif"],
    },
    boxShadow: {
      "3xl": "-3.7px 9.3px 30px 0 rgba(0, 0, 0, 0.1)",
    },
  },
};

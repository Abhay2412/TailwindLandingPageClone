/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: "490px",
      md: "770px",
      lg: "980px",
      xl: "140px"
    },
    extend: {
      colors: {
        brightRed: "#EE4B2B",
        brightRedLight: "#FF9999",
        brightRedSuperLight: "#FFE6E6",
        darkBlue: "000099",
        darkGreyishBlue: "#424952",
        veryDarkBlue: "#00004D",
        paleRed: "#D9544D",
        lightGrey: "#D3D3D3"

      }
    },
  },
  plugins: [],
}


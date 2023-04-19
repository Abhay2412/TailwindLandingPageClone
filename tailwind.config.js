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
        lightGrey: "#D3D3D3",
        // Color Scheme 1 for Camping
        deepMossGreen: "#3B6B35",
        fernGreen: "#637F42",
        middleLightFernGreen: "#829968",
        lightFernGreen: "#D0D9C6",
        darkFernGreen: "#324021",
        oliveDrab: "#4C4A41",
        bistreBrown: "#9F7B21",
        mistyMoss: "#BFAA72",
        antiqueBronze: "#645B16",
        veryLightPumpkin: "#FFF2E9",
        mediumPurple: "#CAB5F0",
        buttonBlue: "#16AEEF",
        classicRose: "#F8CBEE",
        lightSoap: "#F4F3FD",
        lightFulvous: "#F4C79A",
        rust: "#AF350A",
        brightRust: "#EFD7CE",
        // Color Scheme 2 for Camping
        sandyBrown: "#F8A668",
        sandyBrownLight: "#FCD3B4",
        milkChocolate: "#8D5733",
        rifleGreen: "#46483C",
        mossGreen: "#8C8E61",

      }
    },
  },
  plugins: [],
}


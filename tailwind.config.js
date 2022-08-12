const tailwind = require("@trustpair/design-system.themes.tailwind");
// delete tailwind.tailwindConfig.theme.fontFamily
module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      body: ["Inter", "sans-serif"],
      display: ["Inter", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  ...{
    ...tailwind.tailwindConfig,
    theme: {
      ...tailwind.tailwindConfig.theme,
      extend: {
        ...tailwind.tailwindConfig.theme.extend,
        screens: {
          "2xl": "1440px",
        },
        spacing: {
          ...tailwind.tailwindConfig.theme.extend.spacing,
          "1/10": "10%",
          18: "4.5rem",
          19: "4.75rem",
          26.5: "6.625rem",
          46: "11.5rem" /** 184px */,
          48: "12rem" /** 192px */,
          49: "12.25rem",
          50: "12.5rem" /** 200px */,
          55: "13.75rem",
          57: "14.25rem",
          60: "15rem",
          65: "16.25rem",
          70: "17.5rem",
          74: "18.5rem",
          86: "21.5rem" /** 394px */,
          87: "21.75rem" /** 394px */,
          98: "24.5rem" /** 394px */,
          98.5: "24.625rem" /** 394px */,
          100: "25rem",
          115: "28.75rem",
          124: "31rem",
          150: "37.5rem",
          200: "50rem",
          "layout-top": "40px",
          "0.5/10": "5%",
          "4.75/10": "47.5%",
          "7/10": "70%",
        },
        ringWidth: {
          20: "20px",
        },
        colors: {
          ...tailwind.tailwindConfig.theme.extend.colors,
          legacy: {
            bg: "#F7F7F7",
          },
          backdrop: "rgba(0, 0, 0, 0.2)",
        },
        maxWidth: {
          70: "17.5rem",
        },
      },
    },
  },
  // always place this line at the end
  purge: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@trustpair/design-system.ui*/*.{js,ts,jsx,tsx}",
  ],
};

import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      // light: {
      //   colors: {
      //     background: "#FFFFFF", // or DEFAULT
      //     foreground: "#11181C", // or 50 to 900 DEFAULT
      //     primary: {
      //       //... 50 to 900
      //       foreground: "#FFFFFF",
      //       DEFAULT: "#006FEE",
      //     },
      //     // ... rest of the colors
      //   },
      // },
      // dark: {
      //   colors: {
      //     background: "#000000", // or DEFAULT
      //     foreground: "#ECEDEE", // or 50 to 900 DEFAULT
      //     primary: {
      //       //... 50 to 900
      //       foreground: "#FFFFFF",
      //       DEFAULT: "#006FEE",
      //     },
      //   },
      //   // ... rest of the colors
      // },
     "greem-dark-pallet": {
          // extend: "dark", // <- inherit default values from dark theme
          colors: {
            background: "#0D001A",
            foreground: "#ffffff",
            primary: {
              50: "#052814",
              100: "#095028",
              200: "#0e793c",
              300: "#12a150",
              400: "#17c964",
              500: "#45d483",
              600: "#74dfa2",
              700: "#a2e9c1",
              800: "#d1f4e0",
              900: "#e8faf0",
              DEFAULT: "#12a150",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
    },
  }),],
}

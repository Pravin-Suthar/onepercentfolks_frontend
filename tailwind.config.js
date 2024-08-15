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
      light: {
        colors: {
          background: '#F8F9FA', // Light gray background
          foreground: '#333', // Dark text
          primary: {
            50: '#E8F6F3',
            100: '#C7E9DE',
            200: '#A6DBCA', // Light green accents
            300: '#85CBBA',
            400: '#64C6AB',
            500: '#43C19C',
            600: '#22BB8D',
            700: '#01B584',
            800: '#00AE7B',
            900: '#00A772',
            DEFAULT: '#43C19C', // Primary color
            foreground: '#F8F9FA', // Text on primary background
          },
          focus: '#A6DBCA', // Light green focus
        },
        // ... other light mode styles
      },
      dark: {
        colors: {
          background: '#101214', // Dark background
          foreground: '#fff', // Light text
          primary: {
            50: '#18181b',
            100: '#27272a',
            200: '#3f3f46',
            300: '#52525b',
            400: '#71717a',
            500: '#a1a1aa',
            600: '#d4d4d8',
            700: '#e4e4e7',
            800: '#f4f4f5',
            900: '#fafafa',
            DEFAULT: '#2a3132', // Primary color
            foreground: '#101214', // Text on primary background
          },
          focus: '#8C9BAB', // Light green focus for dark mode
        },
        // ... other dark mode styles
      },
    },
  })],
}

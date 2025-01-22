/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        progress:
          "progressAnimation 1.5s cubic-bezier(1, 0.2, 0.2, 1) forwards",
      },
      keyframes: {
        progressAnimation: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      colors: {
        background: {
          dark: "#1E1E1E",
          light: "#FFFFFF",
          gray: "#545454",
          darker: "#121212",
          lighter: "#F8F8F8",
        },
        text: {
          black: "#000000",
          white: "#FFFFFF",
          orange: "#FD6F00",
        },
      },
    },
  },
  plugins: [],
};

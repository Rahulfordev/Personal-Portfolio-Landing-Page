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

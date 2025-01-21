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

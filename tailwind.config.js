import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "purple",
      },
      backgroundImage: {
        "custom-bg": "url('/assets/images/test-image2.jpg')",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

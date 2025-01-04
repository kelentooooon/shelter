/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flyonui/dist/js/*.js",
    "./node_modules/flyonui/dist/js/accordion.js",
  ],
  theme: {
    extend: {fontFamily: {
      title:["oswald", "sans-serif"],
    }},

  },
  plugins: [
    require("flowbite/plugin"),
    require("flyonui"),
    require("flyonui/plugin"),
  ],
};

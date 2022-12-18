/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      main: ["Poppins"],
      brand: ["Cinzel Decorative", "Aboreto"],
      key: ["Noto Sans JP", "Noto Sans Sundanese"],
    },
  },
  plugins: [require("flowbite/plugin")],
};

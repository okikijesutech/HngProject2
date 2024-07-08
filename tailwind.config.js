/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SansSerifBookFLF: ["SansSerifBookFLF", "sans-serif"],
        SansSerifFLF: ['"SansSerifFLF"', "sans-serif"],
        HelveticaRounded: ['"Helvetica Rounded"', "sans-serif"],
        SansSerifBldFLF: ['"SansSerifBldFLF"', "sans-serif"],
        SansSerifExbFLF: ['"SansSerifExbFLF"', "sans-serif"],
        Helvetica: ['"Helvetica"', "sans-serif"],
      },
      fontWeight: {
        "custom-weight": "550px",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Martian: ["Martian Mono", "sans-serif"],
      },
      colors: {
        custom_blue: "#034efc",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        open: "Open 300ms ease 0s 1 normal forwards",
      },
      keyframes: {
        Open: {
          "0%": {
            opacity: 0,
            transform: "translateX(32px)",
            overflow: "hidden",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
            overflow: "hidden",
          },
        },
      },
    },
  },
  plugins: [],
};

import keyframes from "./tailwind/keyframes";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: "#f22e2e",
      },
      keyframes: {
        ...keyframes,
      },
      animation: {
        "fade-in": "fade-in 1s ease-in-out forwards",
        "scale-in": "scale-in 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};

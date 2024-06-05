/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        nav: "2vh",
      },
      fontSize: {
        about: "1.75vh",
        nav: "20%",
      },
      backgroundColor: {
        blackShadow: "rgb(0, 0, 0)",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        accent: "#1132f0",
        backgroundAccent: "#c3c6cb",
        imageAccent: "#e7e7e7",
      },
      fontFamily: {
        prompt: ['"VT323"', "monospace"],
      },
    },
    backgroundOpacity: {
      blackShadow: "0.5",
    },
  },
  plugins: [],
};

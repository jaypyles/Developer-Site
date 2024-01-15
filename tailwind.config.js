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
      },
      backgroundColor: {
        blackShadow: "rgb(0, 0, 0)",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        accent: "#3559E0",
        backgroundAccent: "#222222",
        testAccent: "#3D3B40",
      },
    },
    backgroundOpacity: {
      blackShadow: "0.5",
    },
  },
  plugins: [],
};

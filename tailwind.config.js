/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#b94700",
        bgColor: "#242424",
        secondBgColor: "#2c2c2c",
        textColor: "#fff",
        html: "#e44d26",
      },
      fontFamily: {
        nunito: ['"Nunito"', "sans-serif"],
      },
      boxShadow: {
        customOrange: "0 0 16px rgba(185, 71, 0, 1)",
        customOrange2: "0 0 25px rgba(185, 71, 0, 1)",
        bottomOrange: "0 .5px 12px rgba(185, 71, 0, .5)",
      },
      keyframes: {
        floatImage: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-2.4rem)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        floatImage: "floatImage 4s ease-in-out infinite",
      },
      scale: {
        102: "1.02",
      },
      screens: {
        xs: "350px",
      },
    },
  },
  plugins: [],
};

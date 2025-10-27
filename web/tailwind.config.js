module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        // Paleta de cores personalizada
        sage: {
          50: "#f7f8f0",
          100: "#eef0e0",
          200: "#dde1c1",
          300: "#c6cc9a",
          400: "#aab373",
          500: "#8f9a56",
          600: "#606c38", // Cor principal da paleta
          700: "#4a5329",
          800: "#3d4322",
          900: "#34381f",
        },
        forest: {
          50: "#f4f5f0",
          100: "#e8ebe0",
          200: "#d1d7c1",
          300: "#b4be9a",
          400: "#96a373",
          500: "#7a8a56",
          600: "#283618", // Cor principal da paleta
          700: "#1f2a12",
          800: "#1a220f",
          900: "#161d0d",
        },
        cream: {
          50: "#fefdf9",
          100: "#fefcf2",
          200: "#fdf8e5",
          300: "#fcf2d8",
          400: "#fbecb8",
          500: "#fefae0", // Cor principal da paleta
          600: "#e6d3a6",
          700: "#ccb68c",
          800: "#b39972",
          900: "#9a7c58",
        },
        bronze: {
          50: "#fdf7f0",
          100: "#fceee0",
          200: "#f9dcc1",
          300: "#f5c49a",
          400: "#f0ac73",
          500: "#dda15e", // Cor principal da paleta
          600: "#c78a4a",
          700: "#b1733c",
          800: "#9b5c2e",
          900: "#854520",
        },
        copper: {
          50: "#fdf4f0",
          100: "#fce8e0",
          200: "#f9dcc1",
          300: "#f5b49a",
          400: "#f09773",
          500: "#bc6c25", // Cor principal da paleta
          600: "#a85a1f",
          700: "#944819",
          800: "#803613",
          900: "#6c240d",
        },
      },
    },
  },
  plugins: [],
};

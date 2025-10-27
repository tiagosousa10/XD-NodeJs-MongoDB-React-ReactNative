import { StyleSheet } from "react-native";

// Configuração global de estilos usando a paleta de cores
export const globalStyles = StyleSheet.create({
  // Cores da paleta
  colors: {
    sage: {
      50: "#f7f8f0",
      100: "#eef0e0",
      200: "#dde1c1",
      300: "#c6cc9a",
      400: "#aab373",
      500: "#8f9a56",
      600: "#606c38",
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
      600: "#283618",
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
      500: "#fefae0",
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
      500: "#dda15e",
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
      500: "#bc6c25",
      600: "#a85a1f",
      700: "#944819",
      800: "#803613",
      900: "#6c240d",
    },
  },

  // Estilos de container
  container: {
    flex: 1,
    backgroundColor: "#fefae0", // cream-500
  },

  // Estilos de texto
  text: {
    primary: {
      color: "#283618", // forest-600
      fontSize: 16,
      fontWeight: "500",
    },
    secondary: {
      color: "#7a8a56", // forest-500
      fontSize: 14,
    },
    muted: {
      color: "#96a373", // forest-400
      fontSize: 12,
    },
  },

  // Estilos de botão
  button: {
    primary: {
      backgroundColor: "#606c38", // sage-600
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
    },
    secondary: {
      backgroundColor: "#dda15e", // bronze-500
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
    },
  },

  // Estilos de card
  card: {
    backgroundColor: "#fefcf2", // cream-100
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#dde1c1", // sage-200
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

import { StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: globalStyles.colors.forest[600], // forest-600
    borderTopWidth: 3,
    borderTopColor: globalStyles.colors.bronze[500], // bronze-500
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginBottom: 10,
    backgroundColor: globalStyles.colors.cream[50], // cream-50
    borderRadius: 40,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
  },
  text: {
    color: globalStyles.colors.cream[50], // cream-50
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default styles;

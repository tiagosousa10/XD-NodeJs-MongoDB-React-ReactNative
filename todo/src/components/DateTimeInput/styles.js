import { StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";

const styles = StyleSheet.create({
  inputContainer: {
    position: "relative",
    marginVertical: 16,
    marginHorizontal: 16,
  },
  input: {
    fontSize: 16,
    padding: 12,
    width: "100%",
    borderWidth: 1,
    borderColor: globalStyles.colors.sage[200], // sage-200
    borderRadius: 8,
    backgroundColor: globalStyles.colors.cream[100], // cream-100
    color: globalStyles.colors.forest[600], // forest-600
    paddingRight: 50, // Espaço para o ícone
  },
  iconTextInput: {
    position: "absolute",
    right: 12,
    top: 12,
    width: 24,
    height: 24,
    tintColor: globalStyles.colors.sage[600], // sage-600
    resizeMode: "contain",
  },
});

export default styles;

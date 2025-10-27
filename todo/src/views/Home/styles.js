import { StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.colors.cream[500], // cream-500 (gradient background)
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 120, // Espaço para o Footer
  },
  mainContent: {
    flex: 1,
    width: "100%",
  },
  filter: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    height: 70,
    alignItems: "center",
    backgroundColor: globalStyles.colors.cream[100], // cream-100
    marginHorizontal: 16,
    borderRadius: 12,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  filterTextActived: {
    fontWeight: "bold",
    fontSize: 16,
    color: globalStyles.colors.sage[600], // sage-600
    backgroundColor: globalStyles.colors.sage[100],
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  filterTextInatived: {
    color: globalStyles.colors.forest[500], // forest-500
    fontWeight: "500",
    fontSize: 16,
    opacity: 0.7,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  content: {
    width: "100%",
    marginTop: 10,
    paddingHorizontal: 16,
  },
  title: {
    width: "100%",
    borderBottomWidth: 2,
    borderColor: globalStyles.colors.sage[200], // sage-200
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  titleText: {
    color: globalStyles.colors.forest[600], // forest-600
    fontSize: 20,
    fontWeight: "600",
    backgroundColor: globalStyles.colors.cream[500], // cream-500
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default styles;

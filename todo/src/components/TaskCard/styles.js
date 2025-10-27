import { StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    width: "95%",
    minHeight: 80,
    marginVertical: 8,
    marginHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderRadius: 12,
    backgroundColor: globalStyles.colors.cream[100], // cream-100
    borderWidth: 1,
    borderColor: globalStyles.colors.sage[200], // sage-200
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 12,
  },
  typeActive: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: globalStyles.colors.cream[50], // cream-50
    padding: 4,
  },
  cardTitle: {
    marginLeft: 12,
    fontWeight: "600",
    fontSize: 16,
    color: globalStyles.colors.forest[600], // forest-600
    flex: 1,
    flexWrap: "wrap",
  },
  cardRight: {
    alignItems: "flex-end",
    justifyContent: "center",
    minWidth: 80,
  },
  cardDate: {
    color: globalStyles.colors.bronze[600], // bronze-600
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 2,
  },
  cardTime: {
    color: globalStyles.colors.forest[500], // forest-500
    fontSize: 12,
    fontWeight: "500",
  },
  cardDone: {
    opacity: 0.6,
    backgroundColor: globalStyles.colors.cream[200], // cream-200
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 100,
    backgroundColor: globalStyles.colors.forest[600], // forest-600
    borderBottomWidth: 3,
    borderBottomColor: globalStyles.colors.bronze[500], // bronze-500
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logo: {
    width: 120,
    height: 35,
    tintColor: globalStyles.colors.cream[50], // cream-50
  },
  notification: {
    position: "absolute",
    right: 20,
    bottom: 15,
    backgroundColor: globalStyles.colors.cream[50], // cream-50
    borderRadius: 20,
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
  notificationImage: {
    width: 24,
    height: 24,
    tintColor: globalStyles.colors.forest[600], // forest-600
  },
  notificationText: {
    fontWeight: "bold",
    color: globalStyles.colors.cream[50], // cream-50
    fontSize: 12,
  },
  circle: {
    width: 20,
    height: 20,
    backgroundColor: globalStyles.colors.bronze[500], // bronze-500
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 18,
    bottom: 18,
    borderWidth: 2,
    borderColor: globalStyles.colors.cream[50], // cream-50
  },
  leftIcon: {
    position: "absolute",
    left: 20,
    bottom: 15,
    backgroundColor: globalStyles.colors.cream[50], // cream-50
    borderRadius: 20,
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
  leftIconImage: {
    width: 24,
    height: 24,
    tintColor: globalStyles.colors.forest[600], // forest-600
  },
});

export default styles;

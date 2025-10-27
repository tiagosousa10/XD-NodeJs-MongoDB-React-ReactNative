import { StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: globalStyles.colors.cream[500], // cream-500
  },
  mainContent: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: 100,
    backgroundColor: globalStyles.colors.forest[600], // forest-600
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: globalStyles.colors.bronze[500], // bronze-500
    borderBottomWidth: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerText: {
    color: globalStyles.colors.cream[50], // cream-50
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 30,
    textAlign: "center",
  },
  containerButtons: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 20,
    backgroundColor: globalStyles.colors.forest[600], // forest-600
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
  buttonBack: {
    backgroundColor: globalStyles.colors.bronze[500], // bronze-500
    width: "45%",
    padding: 12,
    alignItems: "center",
    borderBottomLeftRadius: 12,
    borderTopLeftRadius: 12,
    marginRight: 2,
  },
  buttonScanActive: {
    backgroundColor: globalStyles.colors.sage[600], // sage-600
    width: "45%",
    padding: 12,
    alignItems: "center",
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
    opacity: 1,
    marginLeft: 2,
  },
  buttonScanInative: {
    backgroundColor: globalStyles.colors.forest[700], // forest-700
    width: "45%",
    padding: 12,
    alignItems: "center",
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
    opacity: 0.6,
    marginLeft: 2,
  },
  textButton: {
    color: globalStyles.colors.cream[50], // cream-50
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.colors.cream[500], // cream-500
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 120, // Espaço para o Footer
  },
  mainContent: {
    flex: 1,
    width: "100%",
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: globalStyles.colors.forest[600],
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  iconsContainer: {
    marginBottom: 8,
  },
  imageIconContainer: {
    marginHorizontal: 2,
  },
  imageIcon: {
    width: 56,
    height: 56,
    marginHorizontal: 6,
    borderRadius: 12,
    backgroundColor: globalStyles.colors.cream[100],
    padding: 8,
    borderWidth: 2,
    borderColor: "transparent",
  },
  imageIconActive: {
    borderColor: globalStyles.colors.sage[600],
    backgroundColor: globalStyles.colors.sage[100],
  },
  imageIconInactive: {
    opacity: 0.4,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    color: globalStyles.colors.forest[600],
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  input: {
    fontSize: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: globalStyles.colors.sage[200],
    borderRadius: 12,
    backgroundColor: globalStyles.colors.cream[100],
    color: globalStyles.colors.forest[600],
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  inputarea: {
    fontSize: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: globalStyles.colors.sage[200],
    borderRadius: 12,
    height: 120,
    textAlignVertical: "top",
    backgroundColor: globalStyles.colors.cream[100],
    color: globalStyles.colors.forest[600],
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  dateTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  dateTimeItem: {
    flex: 1,
    marginHorizontal: 4,
  },
  inLine: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: globalStyles.colors.cream[100],
    borderRadius: 12,
    borderWidth: 1,
    borderColor: globalStyles.colors.sage[200],
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  switchLabel: {
    fontWeight: "600",
    color: globalStyles.colors.sage[600],
    fontSize: 16,
    marginLeft: 12,
  },
  removeButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: globalStyles.colors.copper[100],
  },
  removeLabel: {
    fontWeight: "600",
    color: globalStyles.colors.copper[600],
    fontSize: 14,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;

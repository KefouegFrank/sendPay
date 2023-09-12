import { StyleSheet } from "react-native";

export default StyleSheet.create({
  backgroundImage: {
    flex: 1, // Cover the entire screen
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", //
    top: 0,
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#fff",
  },
});

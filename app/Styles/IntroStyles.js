import { StyleSheet } from "react-native";

export default StyleSheet.create({
  backgroundImage: {
    flex: 1, // Cover the entire screen
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Background color with transparency
  },
  image: {
    width: 150,
    height: 150,
  },
  logoContainer: {
    flexDirection: "row", // Display text elements in a row
    alignItems: "center",
  },
  logoText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#ffffff", // Text color
  },
  firstText: {
    marginRight: 2,
  },
});

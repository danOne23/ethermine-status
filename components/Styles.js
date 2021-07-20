import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Dimensions.get("window").height / 10.7,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
  },
  value: {
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    height: 40,
    width: Dimensions.get("window").width,
    textAlign: "center",
    color: "#808080",
  },
});

export { styles };

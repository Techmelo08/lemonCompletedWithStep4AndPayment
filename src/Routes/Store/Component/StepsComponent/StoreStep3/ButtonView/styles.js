import { StyleSheet, Dimensions } from "react-native";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  buttonContainer: {
    width: Width * 0.9,
    height: Height * 0.08,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "red",
    marginLeft: 20,
  },
  labelContainer: {
    color: "red",
  },
  totalViewContaier: {
    position: "relative",
    borderStyle: "dashed",
    borderColor: "red",
    borderRadius: 1,
    borderWidth: 1,
    padding: 20,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  totalListViewContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  totalList: {
    fontSize: 14,
    fontWeight: "bold",
  },
  totalItems: {
    color: "#6f6f6f",
    fontWeight: "bold",
  },
});

export default styles;

import { StyleSheet,Dimensions } from "react-native";
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  mainContainer: {
    height:Height*0.1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    
    fontFamily: "Roboto",
    fontStyle: "italic",
    fontSize: 16,
  },
});

export default styles;

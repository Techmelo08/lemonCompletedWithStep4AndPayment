import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: 200,
    marginBottom: 10,
  },
  renderSeparatorStyles: {
    height: 1,
    width: "100%",
  },
  renderItemStyles: {
    height: 100,
    borderColor: "#c4c4c4",
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    flexDirection: "row",
  },
  renderItemTextStyles: {
     alignSelf:'center',
     marginVertical:40
  },
  tinyLogo: {
    width: 50,
    height: 100,
  },
  imageViewContainer: {
    width: 100,
    height: 100,
  },
  cardCodeContainer:{
    width:150,
    height:100
  },
  cardCodeContainerChecked:{
    width:85,
    height:100,
  },
  imageSize:{
    width:80,
    height:100,
    resizeMode:'contain',
    marginHorizontal:10
  },
  cardCodeTextSize:{
    alignSelf:'center',
    marginVertical:40
  }
});

export default styles;

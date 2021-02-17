import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: 200,
    //margin: 5,
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#fafafa",
    padding: 20,
    marginVertical: 8,
    marginHorizontal:5,
    borderColor: "#9e9e9e",
    borderWidth: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    width: 120,
  },
  price: {
    width: 120,
  },
  finalPrice: {
    fontSize: 18,
    top:10
  },
  priceControlContainer: {
    width: 60,
    alignItems:'flex-end',
    top:5
  },
  counterClickTouchableButtonContainer: {
    borderColor: "#000",
    borderWidth: 1,
    width: 100,
    borderRadius:10
  },
  count: {
    top:25,
    left: 5,
  },

  counterClickTouchable: {
    alignSelf: "flex-end",
  },
  couterClickupButtonText: {
    fontSize:24,
    bottom: 15,
    right: 5,
  },
  couterClickDownButtonText: {
    alignItems: "flex-end",
    fontSize:24,
    bottom: 5,
    right: 5,
  },

  nameAndPriceCotainer: {
    flexDirection: "column",
    marginRight: 20,
    width: 100,
  },
  countContainer: {
    width: 100,
  },
});

export default styles;

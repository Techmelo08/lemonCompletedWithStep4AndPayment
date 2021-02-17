import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: 200,
    marginBottom: 10,
    flexDirection:'column'
  },
  imageSize:{
    width:100,
    height:100,
    resizeMode:'contain',
    alignSelf:'center'
  },
  paymentFaildContainer:{
    alignSelf:'center',
  },
  paymentFaildText:{
    fontWeight:'bold',
    fontSize:26,
    color:'#000'
  },
  orderCodeContainer:{
    alignSelf:'center',
  },
  orderPlacedCode:{
    color:'#d81b60',
    fontWeight:'bold'
  },
  orderCodenumberContainer:{
    alignSelf:'center'
  },
  orderCodenumber:{
    fontSize:16,
    fontWeight:'bold',
    color:'#000'
  },
  deliveryTextContainer:{
    justifyContent:'center',
    marginHorizontal:30
  },
  deliveryText:{
    fontSize:14,
    color:'#8c8c8c',
    textAlign: 'center'
  }
});

export default styles;

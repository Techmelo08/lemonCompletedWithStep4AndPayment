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
  orderPlacedContainer:{
    alignSelf:'center',
  },
  orderPlacedText:{
    fontWeight:'bold',
    fontSize:18,
    color:'#d81b60'
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

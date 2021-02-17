import styles from "./styles";
import React, { Component } from "react";
import { ScrollView, SafeAreaView } from "react-native";
import ListView from "./ListView/index";
import TextViewStoreStep2 from "./TextViewStoreStep2/index";
import ButtonView from "./ButtonView/index";

class index extends Component {
  componentDidMount = async () =>{
    console.log("totalPrice" ,this.props.totalPrice);
    console.log("totalCount" ,this.props.totalCount);
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <TextViewStoreStep2 />
          <ListView />

          <ButtonView label={"Step 2/3: confirm payment"} 
           onPress={() => this.props.showPaymentView()}
           totalCount ={this.props.totalCount}
           totalPrice ={this.props.totalPrice}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default index;

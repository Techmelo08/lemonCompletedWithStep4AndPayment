import styles from "./styles";
import React, { Component } from "react";
import { ScrollView, SafeAreaView } from "react-native";
import ListView from "./ListView/index";
import TextViewStoreStep3 from "./TextViewStoreStep3/index";
import ButtonView from "./ButtonView/index";

class index extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <TextViewStoreStep3 />
          <ListView />

          <ButtonView label={"Step 3/3: Done!"} 
           onPress={() => this.props.showPaymentViewOrderCompleted()}
           totalCount ={this.props.totalCount}
           totalPrice ={this.props.totalPrice}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default index;

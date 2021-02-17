import styles from "./styles";
import React, { Component } from "react";
import { ScrollView, SafeAreaView } from "react-native";
import ListView from "./ListView/index";
import TextViewStoreStep4 from "./TextViewStoreStep4/index";
import ButtonView from "./ButtonView/index";

class index extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <TextViewStoreStep4 />
          <ListView />

          <ButtonView label={"Step 3/3: Change Payment Method!"} 
           onPress={() => this.props.paymentFailed()}
           totalCount ={this.props.totalCount}
           totalPrice ={this.props.totalPrice}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default index;

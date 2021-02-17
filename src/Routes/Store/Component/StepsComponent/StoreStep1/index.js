import styles from "./styles";
import React, { Component } from "react";
import { ScrollView, SafeAreaView } from "react-native";
import ListView from "./ListView/index";
import TextViewStoreStep1 from "./TextViewStoreStep1/index";
import ButtonView from "./ButtonView/index";

class index extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <TextViewStoreStep1 />
          <ListView
            data={this.props.data}
            setCountStoreStep1={this.props.setCountStoreStep1}
            setCountDecrementStoreStep1={this.props.setCountDecrementStoreStep1}
          />
          <ButtonView
            data={this.props.data}
            label={"Step 1/3 to proceed payment"}
            totalCount={this.props.totalCount}
            totalPrice={this.props.totalPrice}
            onPress={() => this.props.storeData(1)}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default index;

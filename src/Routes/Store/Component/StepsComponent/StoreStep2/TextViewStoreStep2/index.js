import styles from "./styles";
import React, { Component } from "react";
import { View, Text } from "react-native";

export default class index extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.textStyle}>
         Select the payment method or add new to proceed to checkout!
        </Text>
      </View>
    );
  }
}

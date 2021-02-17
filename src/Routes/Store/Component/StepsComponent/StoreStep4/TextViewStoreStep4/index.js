import styles from "./styles";
import React, { Component } from "react";
import { View, Text } from "react-native";

export default class index extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.textStyle}>
         Your either don't have eough balance or your payment system is not allowing the transaction.
        </Text>
      </View>
    );
  }
}

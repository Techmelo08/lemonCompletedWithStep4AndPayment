import styles from "./styles";
import React, { Component } from "react";
import { View, Text } from "react-native";

export default class index extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.textStyle}>
          Order Placed! You can check your delivery process and expected arrival
          date
        </Text>
      </View>
    );
  }
}

import styles from "./styles";
import React, { Component } from "react";
import { View, Text } from "react-native";

export default class index extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.textStyle}>
          You can proceed to checkout after finilizing the products in your
          cart!
        </Text>
      </View>
    );
  }
}

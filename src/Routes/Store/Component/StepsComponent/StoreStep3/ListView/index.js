import styles from "./styles";
import React, { Component } from "react";
import { Text, View, Image, LogBox } from "react-native";

LogBox.ignoreAllLogs();

export default class index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View>
          <Image
            source={require("../../../../assets/images/checked.png")}
            style={styles.imageSize}
          />
        </View>
        <View style={styles.orderPlacedContainer}>
          <Text style={styles.orderPlacedText}>Order Placed</Text>
        </View>
        <View style={styles.orderCodeContainer}>
          <Text style={styles.orderPlacedCode}>Order code </Text>
        </View>
        <View style={styles.orderCodenumberContainer}>
          <Text style={styles.orderCodenumber}>08354 </Text>
        </View>
        <View style={styles.deliveryTextContainer}>
          <Text style={styles.deliveryText}>
            Your goods will be delivered to you by 9:30 AM 22nd Feb 2021
          </Text>
        </View>
      </View>
    );
  }
}

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
            source={require("../../../../assets/images/cross.png")}
            style={styles.imageSize}
          />
        </View>
        <View style={styles.paymentFaildContainer}>
          <Text style={styles.paymentFaildText}>Payment Faild</Text>
        </View>
      </View>
    );
  }
}

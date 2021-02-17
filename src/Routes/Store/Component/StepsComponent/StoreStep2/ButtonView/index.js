import styles from "./styles";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ButtonView = (props) => {
 console.log("data from button list", props.totalCount);
  return (
    <View>
      <View style={styles.totalViewContaier}>
        <View style={styles.totalListViewContainer}>
          <Text style={styles.totalList}>Total:</Text>
          <Text style={styles.totalItems}>{props.totalCount} Items</Text>
          <Text>{props.totalPrice}</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => props.onPress()}
        style={styles.buttonContainer}
      >
        <Text style={styles.labelContainer}>{props.label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonView;

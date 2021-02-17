import styles from "./styles";
import React, { Component } from "react";
import { Entypo } from "@expo/vector-icons";
import { Text, View, LogBox, FlatList, TouchableOpacity } from "react-native";
LogBox.ignoreAllLogs();

export default class index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <FlatList
          data={this.props.data}
          renderItem={({ item, index }) => (
            <View style={styles.item}>
              <View style={styles.nameAndPriceCotainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
              <View style={styles.counterClickTouchableButtonContainer}>
                <Text style={styles.count}>{item.count}</Text>
                <TouchableOpacity
                  style={styles.counterClickTouchable}
                  onPress={() => this.props.setCountStoreStep1(index)}
                >
                  <Entypo
                    name="chevron-up"
                    style={styles.couterClickupButtonText}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.counterClickTouchable}
                  onPress={() => this.props.setCountDecrementStoreStep1(index)}
                >
                  <Entypo
                    name="chevron-down"
                    style={styles.couterClickDownButtonText}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.priceControlContainer}>
                <Text style={styles.finalPrice}>{item.priceControl}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    );
  }
}

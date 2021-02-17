import styles from "./styles";
import React, { Component } from "react";
import { Text, View, Image, LogBox, FlatList } from "react-native";

LogBox.ignoreAllLogs();

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ key: "0" }, { key: "1" }],
    };
  }

  renderSeparator = () => {
    return <View style={styles.renderSeparatorStyles} />;
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <View style={styles.renderItemStyles}>
              <View style={styles.imageViewContainer}>
                <Image
                  source={require("../../../../assets/images/images.jpg")}
                  style={styles.imageSize}
                />
              </View>
              <View style={styles.cardCodeContainer}>
                <Text style={styles.cardCodeTextSize}>**** **** **** 1234</Text>
              </View>
              <View style={styles.cardCodeContainerChecked}>
                <Text style={styles.renderItemTextStyles}>{item.key}</Text>
              </View>
            </View>
          )}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

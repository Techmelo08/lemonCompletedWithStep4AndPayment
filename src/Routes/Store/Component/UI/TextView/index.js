import styles from "./styles";
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class index extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.textStyle}> Buy amazing product from our store! </Text>
            </View>
        )
    }
}

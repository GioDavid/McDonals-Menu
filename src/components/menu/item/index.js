import React, { Component } from 'react'
import { Image, Text, StyleSheet, View } from 'react-native'

export default class digimon extends Component {
    render() {
        const { item } = this.props;
        return (
            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: item.url,
                    }}
                />
                <View style={{ flexDirection: 'row' }}>
                <Text style={styles.textFields}>{item.name}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 200,
        height: 200,
    },
    container:{ flex: 1, backgroundColor: '#fafafa', margin: 4 },
    textFields:{ flex: 1, color: 'black', height: 180 }
})

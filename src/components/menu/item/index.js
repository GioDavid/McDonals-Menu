import React, { Component } from 'react'
import { Image, Text, StyleSheet, View } from 'react-native'

export default class index extends Component {
    render() {
        const { item } = this.props;
        return (
            <View style={styles.container}>
                <Image
                    style={styles.img}
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
    img: {
        width: 120,
        height: 80,
    },
    container:{ flex: 1, 
        padding: 8,
        paddingTop: 48,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'white', 
        borderWidth: 1, 
        borderColor: '#eeeeee', 
        margin: 12, 
        width: 140, 
        height: 190 },
    textFields:{ flex: 1, color: 'black', height: 60 }
})

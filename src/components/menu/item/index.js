import React, { Component } from 'react'
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default class index extends Component {
    render() {
        const { item, setSelectedItem } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={() =>{
                setSelectedItem(item);
            }}>
                <Image
                    style={styles.img}
                    source={{
                        uri: item.url,
                    }}
                />
                <View style={{ flexDirection: 'row' }}>
                <Text style={styles.textFields}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    img: {
        width: 120,
        height: 80,
        marginLeft: 'auto',
        marginRight: 'auto'
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
        width: 160, 
        height: 160 },
    textFields:{ flex: 1, color: 'black', height: 60, fontSize: 12, textAlign: 'center' }
})

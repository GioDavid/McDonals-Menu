import React from "react";
import { Image, Text, StyleSheet, View } from "react-native";

const index = ({item}) => {

  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.img}
            source={{
              uri: item.url,
            }}
          />
        </View>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.priceContainer}>
            <Text style={styles.price}>{`$${item.price}`}</Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>
      </View>
  )
}

export default index

const styles = StyleSheet.create({
    img: {
      height: 200,
    },
    imageContainer: {
      height: 200,
    },
    container: {
      alignContent: 'center',
      justifyContent: "center",
      flexDirection: "column",
      padding: 8,
      paddingTop: 48,
      margin: 12,
      height: '100%',
    },
    title: { flex: 1, color: "black", height: 58, fontSize: 24, textAlign: "center", marginVertical: 48},
    description: { flex: 1, color: "black", fontSize: 16 },
    price: { color: "black", fontSize: 16, textAlign: "center" },
    priceContainer: { alignContent: 'center', borderColor: '#000000', borderRadius: 50, borderWidth: 1, marginLeft: 'auto', marginRight: 'auto', paddingHorizontal: 24, marginBottom: 24 }
  });
import React, { Component } from "react";
import { SafeAreaView, SectionList, StyleSheet, Text, FlatList, View } from "react-native";
import Item from "./item";
import Context from "../../context/context";
import { StatusBar } from "expo-status-bar";

export default class index extends Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem({ item }) {
    return <Item Item={item} />;
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.context && this.context.items &&<SectionList
          sections={this.context.items}
          keyExtractor={(item, index) => item.name + index}
          // renderItem={({item, index}) => <Text key={index}>{item.name}</Text>}
          // renderSectionHeader={({ section}) => (
          //   <Text style={styles.header}>{section.title}</Text>
          // )}
          renderSectionHeader={({ section }) => (
            <View styles={{ display: 'flex', flexDirection: 'column'}}>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <Text key={index}>{item.name}</Text>}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </View>
          )}
          renderItem={({ item, section }) => {
            return null
          }}
        />}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    color: "black",
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: 'black',
    marginTop: 20,
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
  },
});

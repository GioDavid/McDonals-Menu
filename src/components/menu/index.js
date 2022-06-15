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
    return <Item item={item} setSelectedItem={this.context.setSelectedItem} />;
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.context && this.context.items &&<SectionList
          sections={this.context.items}
          keyExtractor={(item, index) => item.name + index}
          renderSectionHeader={({ section }) => (
            <View styles={{ display: 'flex', flexDirection: 'column'}}>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={this.renderItem}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </View>
          )}
          renderItem={() => {
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
    margin: 16,
    marginBottom: 64,
    paddingBottom: 64,
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
    fontSize: 36,
    color: 'black',
    marginTop: 20,
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
  },
});

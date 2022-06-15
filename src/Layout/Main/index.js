import React, { Component } from "react";
import { View, SafeAreaView, Image, StyleSheet } from "react-native";
import { getMenu } from "../../api";
import Menu from "../../components/menu";
import Modal from "../../components/modal";
import Context from "../../context/context";

export default class index extends Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      error: "",
      data: [],
    };
  }

  async componentDidMount() {
    getMenu(
      (data) => {
        const list = data.menus.map((menu) => ({
          title: menu.name,
          data: menu.items,
          horizontal: true,
        }));
        this.context.setItems(list);
      },
      (error) => {
        console.log("err::", error);
        this.setState({ error: "data retrieving error" });
      }
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.main}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/arches.png")}
          />
        </View>
        <Menu />
        <Modal selectedItem={this.context.selectedItem} setSelectedItem={this.context.setSelectedItem} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginTop: 24,
  },
  main: {
    flex: 1
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});

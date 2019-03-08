import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

class UserHome extends Component {
  state = {
    "😃": "😃 Smiley",
    "🚀": "🚀 Rocket",
    "⚛️": "⚛️ Atom Symbol"
  };
  //save favorite places
  render() {
    return (
      <View style={styles.container}>
        <TextInput />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default UserHome;

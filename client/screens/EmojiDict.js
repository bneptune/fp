import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

class EmojiDict extends Component {
  state = {
    "😃": "😃 Smiley",
    "🚀": "🚀 Rocket",
    "⚛️": "⚛️ Atom Symbol",
    locationName: ""
  };

  handleLocationNameChange = event => {
    this.setState({
      locationName: event
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state["😃"]}</Text>
        <Text>{this.state["🚀"]}</Text>
        <TextInput
          style={{ width: 300, borderColor: "black", borderWidth: 1 }}
          placeholder="Type here"
          value={this.state.locationName}
          onChangeText={this.handleLocationNameChange}
        />
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

export default EmojiDict;

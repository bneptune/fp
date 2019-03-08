import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

class EmojiDict extends Component {
  state = {
    "😃": "😃 Smiley",
    "🚀": "🚀 Rocket",
    "⚛️": "⚛️ Atom Symbol",
    locationName: "",
    locations: []
  };

  handleLocationNameChange = event => {
    this.setState({
      locationName: event
    });
  };

  handleSubmit = () => {
    if (this.state.locationName !== "") {
      this.setState(prevState => {
        return {
          locations: prevState.locations.concat(prevState.locationName),
          locationName: ""
        };
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          {/* <Text>{this.state["😃"]}</Text>
          <Text>{this.state["🚀"]}</Text> */}
          <TextInput
            // style={{ width: 300, borderColor: "black", borderWidth: 1 }}
            placeholder="Type here"
            value={this.state.locationName}
            onChangeText={this.handleLocationNameChange}
            style={styles.input}
          />
          <Button
            style={styles.button}
            title="Submit"
            onPress={this.handleSubmit}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  input: {
    width: "50%"
  },
  button: {
    width: "20%"
  }
});

export default EmojiDict;

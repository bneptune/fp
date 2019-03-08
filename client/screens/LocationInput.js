import React, { Component } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

class LocationInput extends Component {
  state = {
    locationName: ""
  };

  handleLocationNameChange = event => {
    this.setState({
      locationName: event
    });
  };

  handleSubmit = () => {
    if (this.state.locationName !== "") {
      this.props.onLocationAdded(this.state.locationName);
    }
  };

  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({
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

export default LocationInput;

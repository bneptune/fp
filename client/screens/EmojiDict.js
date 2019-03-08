import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import LocationInput from "./LocationInput";
import LocationList from "./LocationList";

class EmojiDict extends Component {
  state = {
    locations: []
  };

  locationAdded = locationName => {
    this.setState(prevState => {
      return {
        locations: prevState.locations.concat(locationName)
      };
    });
  };

  render() {
    console.log(this.state);

    return (
      <View style={styles.container}>
        <LocationInput onLocationAdded={this.locationAdded} />
        <LocationList locations={this.state.locations} />
        <View />
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

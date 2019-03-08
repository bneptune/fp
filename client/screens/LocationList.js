import React from "react";
import { View, StyleSheet } from "react-native";
import ListItem from "./ListItem";

const locationList = props => {
  const locationOutput = props.locations.map((location, key) => (
    <ListItem
      key={key}
      locationName={location}
      onItemPressed={() => alert("Hey there")}
    />
  ));
  return <View style={styles.listContainer}>{locationOutput}</View>;
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default locationList;

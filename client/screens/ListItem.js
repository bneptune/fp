import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

const locationItem = props => (
  <TouchableWithoutFeedback onPress={props.onItemPressed}>
    <View style={styles.locationItem}>
      <Text>{props.locationName}</Text>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  locationItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "red"
  }
});

export default locationItem;

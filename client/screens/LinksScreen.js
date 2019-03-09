import React from "react";
import { MapView } from "expo";
import { Callout } from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Links"
  };

  render() {
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        <MapView.Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
        >
          <Callout>
            <View style={styles.calloutView}>
              <Text>You are here</Text>
            </View>
          </Callout>
        </MapView.Marker>
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  map: {
    flex: 1
  },
  calloutView: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 10,
    width: "50%",
    marginLeft: "30%",
    marginRight: "30%",
    marginTop: 20
  }
});

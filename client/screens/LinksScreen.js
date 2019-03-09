import React from "react";
import { MapView } from "expo";
import { Callout } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

const Images = [
  {
    uri:
      "http://lisamariestudio.com/wp/wp-content/uploads/2018/07/LisaMarie_LOVE_reflections_extended_lo_cropped.jpg"
  },
  {
    uri:
      "https://i.pinimg.com/originals/09/41/26/09412692c3564c28a7604211e792a732.png"
  }
];

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Links"
  };

  state = {
    markers: [
      {
        coordinate: {
          latitude: 38.9086624,
          longitude: -76.9990501
        },
        title: "Heart Wall",
        description: "This is the best place in Portland",
        image: Images[0]
      },
      {
        coordinate: {
          latitude: 38.910948,
          longitude: -77.027537
        },
        title: "Watermelon Wall",
        description: "This is the second best place in Portland",
        image: Images[1]
      }
    ],
    region: {
      latitude: 38.910948,
      longitude: -77.027537,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068
    }
  };

  render() {
    return (
      <MapView
        ref={map => (this.map = map)}
        initialRegion={this.state.region}
        style={styles.container}
      >
        {this.state.markers.map((marker, index) => {
          return (
            <MapView.Marker key={index} coordinate={marker.coordinate}>
              <Animated.View style={[styles.markerWrap]}>
                <Animated.View style={[styles.ring]} />
                <View style={styles.marker} />
              </Animated.View>
            </MapView.Marker>
          );
        })}
      </MapView>

      // <MapView
      //   style={styles.map}
      //   initialRegion={{
      //     latitude: 37.78825,
      //     longitude: -122.4324,
      //     latitudeDelta: 0.0922,
      //     longitudeDelta: 0.0421
      //   }}
      // >
      //   <MapView.Marker
      //     coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
      //   >
      //     <Callout>
      //       <View style={styles.calloutView}>
      //         <Text>You are here</Text>
      //       </View>
      //     </Callout>
      //   </MapView.Marker>
      // </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden"
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center"
  },
  textContent: {
    flex: 1
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold"
  },
  cardDescription: {
    fontSize: 12,
    color: "#444"
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center"
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)"
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)"
  }
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 15,
//     backgroundColor: "#fff"
//   },
//   map: {
//     flex: 1
//   },
//   calloutView: {
//     flexDirection: "row",
//     backgroundColor: "rgba(255, 255, 255, 0.9)",
//     borderRadius: 10,
//     width: "50%",
//     marginLeft: "30%",
//     marginRight: "30%",
//     marginTop: 20
//   }
// });

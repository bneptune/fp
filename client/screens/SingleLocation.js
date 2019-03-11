import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleLocation } from "../store/locations";
import { getAllLocations } from "../store/locations";
import { withNavigation } from "react-navigation";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking
} from "react-native";

const Images = [
  {
    uri:
      "http://lisamariestudio.com/wp/wp-content/uploads/2018/07/LisaMarie_LOVE_reflections_extended_lo_cropped.jpg"
  },
  {
    uri:
      "https://i.pinimg.com/originals/09/41/26/09412692c3564c28a7604211e792a732.png"
  },
  {
    uri: "https://s3-media1.fl.yelpcdn.com/bphoto/B2SQTk7xM-W4nmuBbOkLSA/o.jpg"
  },
  {
    uri:
      "https://static.wixstatic.com/media/2fdcea_750bde66d7a74a88b19042cf2757a682~mv2.jpg/v1/fill/w_630,h_420,al_c,q_80,usm_0.66_1.00_0.01/2fdcea_750bde66d7a74a88b19042cf2757a682~mv2.jpg"
  },
  {
    uri:
      "http://mediad.publicbroadcasting.net/p/wlrn/files/styles/x_large/public/201612/File_000_0.jpeg"
  }
];

class SingleLocation extends Component {
  state = {
    markers: [
      {
        coordinate: {
          latitude: 38.9086624,
          longitude: -76.9990501
        },
        title: "Heart Wall",
        description:
          "Icing cheesecake cheesecake bear claw tiramisu apple pie candy macaroon macaroon. Jelly-o dragée bear claw chupa chups sweet roll candy canes sesame snaps cake. Soufflé candy canes liquorice gummi bears. Tootsie roll halvah donut halvah dessert tart.",
        image: Images[0]
      },
      {
        coordinate: {
          latitude: 38.910948,
          longitude: -77.027537
        },
        title: "Watermelon Wall",
        description:
          "Bear claw muffin marshmallow liquorice macaroon. Tootsie roll icing lemon drops. Pastry chocolate cake tiramisu candy marzipan donut sesame snaps. Danish tiramisu biscuit candy dragée toffee lollipop jujubes.",
        image: Images[1]
      },
      {
        coordinate: {
          latitude: 40.7210019,
          longitude: -73.9968509
        },
        title: "Pietro Nolita",
        description:
          "Chupa chups sweet roll soufflé candy canes marzipan liquorice liquorice. Pie sesame snaps cotton candy tiramisu bonbon carrot cake. Gummies cake caramels sesame snaps fruitcake chocolate bar caramels donut chupa chups.",
        image: Images[2]
      },
      {
        coordinate: {
          latitude: 38.9084356,
          longitude: -76.9996593
        },
        title: "Union Market",
        description:
          "Icing candy tart chocolate bar macaroon sesame snaps jujubes soufflé. Liquorice sweet roll fruitcake ice cream. Brownie lollipop sugar plum wafer tart wafer. Toffee tiramisu donut cupcake powder dragée apple pie.",
        image: Images[3]
      },
      {
        coordinate: {
          latitude: 40.7543661,
          longitude: -73.9944267
        },
        title: "305 Fitness",
        description:
          "Macaroon cheesecake jujubes lemon drops jelly lemon drops caramels marzipan pastry. Toffee pie tiramisu. Topping caramels jelly. Cotton candy soufflé cupcake.",
        image: Images[4]
      }
    ]
  };

  componentWillMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      // The screen is focused
      // Call any action
      this.props.getSingleLocation("4");
    });
  }

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }

  render() {
    // console.log("stat", this.props.location);
    // console.log("that", this.props.state);
    let location = this.props.navigation.getParam("name", "4");
    console.log("loc", location);
    let currentLocation = this.state.markers.slice(location, location + 1);
    // console.log("Current", currentLocation);
    return (
      <View styles={styles.container}>
        {currentLocation.map((place, index) => (
          <View key={index}>
            <Text>{place.title}</Text>
            <Text>{place.description}</Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  `maps://app?daddr=${place.coordinate.latitude}+${
                    place.coordinate.longitude
                  }`
                )
              }
            >
              <Text>Navigate</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  headerText: {
    color: "#FFF",
    fontWeight: "800",
    fontSize: 23,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10
  },
  bodyText: {
    padding: 10,
    fontSize: 15,
    color: "#5D5D5D"
  }
});

const mapStateToProps = state => {
  return {
    location: state.singleLocation,
    locations: state.locations.locations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSingleLocation: name => dispatch(getSingleLocation(name)),
    getLocations: () => dispatch(getAllLocations())
  };
};

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SingleLocation)
);

// export default SingleLocation;

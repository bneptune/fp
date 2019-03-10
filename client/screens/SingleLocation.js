import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleLocation } from "../store/locations";
import { getAllLocations } from "../store/locations";
import { withNavigation } from "react-navigation";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

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
      },
      {
        coordinate: {
          latitude: 40.7210019,
          longitude: -73.9968509
        },
        title: "Pietro Nolita",
        description: "This is the best place in Portland",
        image: Images[2]
      },
      {
        coordinate: {
          latitude: 38.9084356,
          longitude: -76.9996593
        },
        title: "Union Market",
        description: "This is the best place in Portland",
        image: Images[3]
      },
      {
        coordinate: {
          latitude: 40.7543661,
          longitude: -73.9944267
        },
        title: "305 Fitness",
        description: "This is the best place in Portland",
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
      <View>
        {currentLocation.map((place, index) => (
          <Text key={index}>{place.title}</Text>
        ))}
      </View>
    );
  }
}

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

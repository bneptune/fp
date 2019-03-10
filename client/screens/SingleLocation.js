import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleLocation } from "../store/locations";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

class SingleLocation extends Component {
  state = {};

  componentDidMount = () => {
    // this.props.getSingleProduct(this.props.match.params.id);
  };

  render() {
    console.log(this.props);
    return <Text>Hi</Text>;
  }
}

const mapStateToProps = state => {
  return {
    location: state.singleLocation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLocation: name => dispatch(getSingleLocation(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleLocation);

// export default SingleLocation;

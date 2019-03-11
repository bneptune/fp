import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, TextInput, View, Button, StyleSheet } from "react-native";
import HeaderButtons from "react-navigation-header-buttons";

export default class NewPostScreen extends React.Component {
  // static navigationOptions = ({ navigation }) => ({
  //   title: "Home",
  //   headerRight: (
  //     <HeaderButtons IconComponent={Ionicons} iconSize={23} color="black">
  //       <HeaderButtons.Item
  //         title="Share"
  //         onPress={() => {
  //           const text = navigation.getParam("text");
  //           const image = navigation.getParam("image");
  //           if (text && image) {
  //             navigation.goBack();
  //             Fire.shared.post({ text: text.trim(), image });
  //           } else {
  //             alert("Need valid description");
  //           }
  //         }}
  //       />
  //     </HeaderButtons>
  //   )
  // });

  state = { text: "" };

  handleSubmit = () => {
    if (this.state.locationName !== "") {
      this.props.onLocationAdded(this.state.locationName);
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    const { image } = this.props.navigation.state.params;
    return (
      <View style={{ padding: 10, flexDirection: "row" }}>
        <Image
          source={{ uri: image }}
          style={{ resizeMode: "contain", aspectRatio: 1, width: 80 }}
        />

        <TextInput
          multiline
          style={{ flex: 1, paddingHorizontal: 20 }}
          placeholder="Add a tip"
          onChangeText={text => {
            this.setState({ text });
          }}
        />

        <Button
          style={styles.button}
          title="Submit"
          onPress={() => navigate("Main", { tip: this.state.text })}
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

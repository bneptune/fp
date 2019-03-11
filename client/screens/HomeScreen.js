import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, TextInput, View, Button, StyleSheet } from "react-native";

export default class NewPostScreen extends React.Component {
  state = { text: "" };

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

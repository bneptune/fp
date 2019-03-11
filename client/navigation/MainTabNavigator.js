import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import CameraScreen from "../screens/CameraScreen";
import SingleLocation from "../screens/SingleLocation";

const navigator = createBottomTabNavigator(
  {
    // The name `Feed` is used later for accessing screens
    Locations: {
      // Define the component we will use for the Feed screen.
      screen: MapScreen,
      navigationOptions: {
        // Add a cool Material Icon for this screen
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-brush" : "md-brush"}
          />
        )
      }
    },
    Camera: {
      screen: CameraScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-camera" : "md-camera"}
          />
        )
      }
    }
  },
  {
    // We want to hide the labels and set a nice 2-tone tint system for our tabs
    tabBarOptions: {
      showLabel: true,
      activeTintColor: "black",
      inactiveTintColor: "gray"
    }
  }
);

// Create the navigator that pushes high-level screens like the `NewPost` screen.
const stackNavigator = createStackNavigator(
  {
    Main: {
      screen: navigator,
      // Set the title for our app when the tab bar screen is present
      navigationOptions: { title: "PheedMe 🌈 " }
    },
    // This screen will not have a tab bar
    Single: SingleLocation,
    Home: HomeScreen
  }
  // {
  //   cardStyle: { backgroundColor: "white"}
  // }
);

// Export it as the root component
export default stackNavigator;

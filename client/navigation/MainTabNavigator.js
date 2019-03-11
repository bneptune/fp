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
    Locations: {
      screen: MapScreen,
      navigationOptions: {
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
    tabBarOptions: {
      showLabel: true,
      activeTintColor: "black",
      inactiveTintColor: "gray"
    }
  }
);

const stackNavigator = createStackNavigator({
  Main: {
    screen: navigator,

    navigationOptions: { title: "PheedMe 🌈 " }
  },

  Single: SingleLocation,
  Home: HomeScreen
});

export default stackNavigator;

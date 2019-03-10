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
import SettingsScreen from "../screens/SettingsScreen";
import EmojiDict from "../screens/EmojiDict";
import SingleLocation from "../screens/SingleLocation";

// const EmojiStack = createStackNavigator({
//   Emoji: EmojiDict
// });

// EmojiStack.navigationOptions = {
//   tabBarLabel: "Emoji",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === "ios"
//           ? `ios-information-circle${focused ? "" : "-outline"}`
//           : "md-information-circle"
//       }
//     />
//   )
// };

// const HomeStack = createStackNavigator({
//   Home: HomeScreen
// });

// HomeStack.navigationOptions = {
//   tabBarLabel: "Home",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === "ios"
//           ? `ios-information-circle${focused ? "" : "-outline"}`
//           : "md-information-circle"
//       }
//     />
//   )
// };

// const MapStack = createStackNavigator({
//   Locations: MapScreen
// });

// MapStack.navigationOptions = {
//   tabBarLabel: "Locations",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === "ios" ? "ios-camera" : "md-camera"}
//     />
//   )
// };

// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen
// });

// SettingsStack.navigationOptions = {
//   tabBarLabel: "Settings",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === "ios" ? "ios-options" : "md-options"}
//     />
//   )
// };

// export const SingleStack = createStackNavigator({
//   Locations: SingleLocation
// });

// SingleStack.navigationOptions = {
//   tabBarLabel: "All",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === "ios" ? "ios-options" : "md-options"}
//     />
//   )
// };

// export default createBottomTabNavigator({
//   HomeStack,
//   MapStack,
//   SettingsStack,
//   EmojiStack,
//   SingleStack
// });

// Create our main tab navigator for moving between the Feed and Photo screens
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
            name={Platform.OS === "ios" ? "ios-camera" : "md-camera"}
          />
        )
      }
    },
    // All the same stuff but for the Photo screen
    Home: {
      screen: HomeScreen,
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
      navigationOptions: { title: "PheedMe 🐷" }
    },
    // This screen will not have a tab bar
    Single: SingleLocation
  },
  {
    cardStyle: { backgroundColor: "white" }
  }
);

// Export it as the root component
export default stackNavigator;

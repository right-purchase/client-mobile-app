import React from "react";
import IonIcon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteName } from "../constants/RouteName";
import { HomeScreen } from "../screens/HomeScreen";
import { FeedbackScreen } from "../screens/FeedbackScreen";
import { Labels } from "../constants/Labels";
import { PaperBottomTabBar } from "./bottom_tab_bar/PaperBottomTabBar";
const Tab = createBottomTabNavigator();

export function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{}}
      tabBar={PaperBottomTabBar}
      initialRouteName={RouteName.HOME}
    >
      <Tab.Screen
        name={RouteName.HOME}
        options={{
          tabBarLabel: Labels.HOME,
          tabBarIcon: ({ color, size }) => (
            <IonIcon name="home" size={size} color={color} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name={RouteName.FEEDBACK}
        component={FeedbackScreen}
        options={{
          tabBarLabel: Labels.FEEDBACK,
          tabBarIcon: ({ color, size }) => (
            <IonIcon name="chatbox-ellipses" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

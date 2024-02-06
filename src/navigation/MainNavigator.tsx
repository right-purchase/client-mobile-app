import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteName } from "../constants/RouteName";
import { HomeScreen } from "../screens/HomeScreen";
import { FeedbackScreen } from "../screens/FeedbackScreen";

const Tab = createBottomTabNavigator();

export function MainNavigator() {
  return (
    <Tab.Navigator initialRouteName={RouteName.HOME}>
      <Tab.Screen name={RouteName.HOME} component={HomeScreen} />
      <Tab.Screen name={RouteName.FEEDBACK} component={FeedbackScreen} />
    </Tab.Navigator>
  );
}

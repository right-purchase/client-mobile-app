import React from "react";
import IonIcon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteName } from "../constants/RouteName";
import { HomeScreen } from "../screens/HomeScreen";
import { FeedbackScreen } from "../screens/FeedbackScreen/FeedbackScreen";
import { Labels } from "../constants/Labels";
import { PaperBottomTabBar } from "./bottom_tab_bar/PaperBottomTabBar";
import { useTheme } from "react-native-paper";
import { NavigationHeader } from "./header/NavigationHeader";

const Tab = createBottomTabNavigator();

export function MainNavigator() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      tabBar={PaperBottomTabBar}
      initialRouteName={RouteName.HOME}
      screenOptions={{
        header: NavigationHeader,
      }}
      sceneContainerStyle={{ backgroundColor: theme.colors.background }}
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

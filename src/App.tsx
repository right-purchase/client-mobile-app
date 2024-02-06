import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./navigation/MainNavigator";

export function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

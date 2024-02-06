import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./navigation/MainNavigator";
import { PaperProvider } from "react-native-paper";

export function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

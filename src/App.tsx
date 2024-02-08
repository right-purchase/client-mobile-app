import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./navigation/MainNavigator";
import { PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function App() {
  return (
    <PaperProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </PaperProvider>
  );
}

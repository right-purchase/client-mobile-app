import React from "react";
import { View } from "react-native";
import { DefaultTheme, withTheme } from "react-native-paper";

const ThemeNavigationHedaer = withTheme(
  ({ theme }: { theme: typeof DefaultTheme }) => (
    <View
      style={{
        height: 50,
        backgroundColor: theme.colors.outlineVariant,
      }}
    ></View>
  )
);

export function NavigationHeader() {
  return <ThemeNavigationHedaer />;
}

import React from "react";
import { DefaultTheme, withTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const ThemeNavigationHedaer = withTheme(
  ({ theme }: { theme: typeof DefaultTheme }) => (
    <SafeAreaView
      style={{
        backgroundColor: theme.colors.outlineVariant,
      }}
    >
      <></>
    </SafeAreaView>
  )
);

export function NavigationHeader() {
  return <ThemeNavigationHedaer />;
}

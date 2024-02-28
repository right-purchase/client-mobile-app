import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";

type TProps = {
  children?: React.ReactNode;
  collapsable?: boolean;
};

const useThemedStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background
    },
  });
};

export function CenterView({ children, collapsable }: TProps) {
  const styles = useThemedStyles();

  return (
    <View style={styles.container} collapsable={collapsable}>
      {children}
    </View>
  );
}

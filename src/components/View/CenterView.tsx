import React from "react";
import { StyleSheet, View } from "react-native";

type TProps = {
  children?: React.ReactNode;
};

export function CenterView({ children }: TProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

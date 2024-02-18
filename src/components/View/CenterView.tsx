import React from "react";
import { StyleSheet, View } from "react-native";

type TProps = {
  children?: React.ReactNode;
  collapsable?: boolean;
};

export function CenterView({ children, collapsable }: TProps) {
  return (
    <View style={styles.container} collapsable={collapsable}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

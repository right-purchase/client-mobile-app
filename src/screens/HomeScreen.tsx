import React from "react";
import { Text } from "react-native-paper";
import { Labels } from "../constants/Labels";
import { View, StyleSheet } from "react-native";

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant="displayMedium">{Labels.RIGHT_PURCHASE}</Text>
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

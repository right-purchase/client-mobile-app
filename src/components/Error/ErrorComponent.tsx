import React from "react";
import { Icon, Text, useTheme } from "react-native-paper";
import { Labels } from "../../constants/Labels";
import { CenterView } from "../View/CenterView";

type TProps = {
  error: string;
};

export function ErrorComponent({ error }: TProps) {
  const theme = useTheme();

  return (
    <CenterView>
      <Icon source="close-circle" size={50} color={theme.colors.error} />
      <Text variant="titleLarge">{Labels.ERROR}</Text>
      <Text variant="bodyLarge">{error}</Text>
    </CenterView>
  );
}

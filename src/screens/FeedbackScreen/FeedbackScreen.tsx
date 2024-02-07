import React from "react";
import { WebView } from "react-native-webview";

export function FeedbackScreen() {
  return (
    <WebView
      source={{
        uri: "https://www.dicionarioinformal.com.br/teste+da+farinha/",
      }}
    />
  );
}

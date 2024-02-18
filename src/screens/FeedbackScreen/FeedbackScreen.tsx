import React from "react";
import { WebView } from "react-native-webview";
import { useFeedbackUrlQuery } from "./hooks/useFeedbackUrlQuery";
import { ActivityIndicator } from "react-native-paper";
import { ErrorComponent } from "../../components/Error/ErrorComponent";
import { ERROR_MESSAGE } from "../../constants/Error";
import { CenterView } from "../../components/View/CenterView";
import { Labels } from "../../constants/Labels";

export function FeedbackScreen() {
  const { data, error, isError, isLoading } = useFeedbackUrlQuery();

  return (
    <WebView source={{ uri: data ?? "" }}>
      <CenterView collapsable={false}>
        {isLoading && <ActivityIndicator size="large" />}
        {isError && (
          <ErrorComponent
            error={`${error?.message ?? ERROR_MESSAGE.SERVICE_OUT}\r\n${
              Labels.PLEASE_CONTACT
            }`}
          />
        )}
      </CenterView>
    </WebView>
  );
}

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

  let result = <></>;

  if (isLoading) {
    result = <ActivityIndicator size="large" />;
  } else if (isError) {
    result = (
      <ErrorComponent
        error={`${error?.message ?? ERROR_MESSAGE.SERVICE_OUT}\r\n${
          Labels.PLEASE_CONTACT
        }`}
      />
    );
  } else if (data) {
    result = <WebView source={{ uri: data }} />;
  }

  return <CenterView>{result}</CenterView>;
}

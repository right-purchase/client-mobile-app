import { useQuery } from "@tanstack/react-query";
import { getFeedbackURLAsync } from "../../../api/feedback/feedbackAPI";

export const useFeedbackUrlQuery = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["feedback-url"],
    queryFn: getFeedbackURLAsync,
  });

  return { data, error, isLoading, isError };
};

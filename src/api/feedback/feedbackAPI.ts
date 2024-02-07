import { API_URL } from "@env";
import axios from "axios";
import { feedbackUrlResponseSchema } from "./feedbackSchema";

export const feedbackApi = axios.create({
  baseURL: API_URL,
});

export async function getFeedbackURLAsync(): Promise<string> {
  const response = await feedbackApi.get("/feedback/url");
  return feedbackUrlResponseSchema.parse(response.data).value;
}

import axios from "axios";
import { feedbackUrlResponseSchema } from "./feedbackSchema";
import { AppError } from "../../error/AppError";

export const feedbackApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

export async function getFeedbackURLAsync(): Promise<string> {
  try {
    const response = await feedbackApi.get("/feedback/form/url");
    return feedbackUrlResponseSchema.parse(response.data).value;
  } catch (error) {
    throw AppError.from(error);
  }
}

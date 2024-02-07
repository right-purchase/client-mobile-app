import { feedbackApi, getFeedbackURLAsync } from "./feedbackAPI";
import { TFeedbackUrlResponse } from "./feedbackSchema";

describe("getFeedbackURLAsync", () => {
  it("should return a valid URL string", async () => {
    // Mock the response from the API
    const mockResponse = {
      data: {
        value: "https://example.com/feedback",
      } satisfies TFeedbackUrlResponse,
    };
    jest.spyOn(feedbackApi, "get").mockResolvedValue(mockResponse);

    // Call the function and assert the result
    const result = await getFeedbackURLAsync();
    expect(result).toBe(mockResponse.data.value);
  });

  it("should throw an error if the response is not a URL string", async () => {
    // Mock the response from the API
    const mockResponse = {
      data: "invalid-url",
    };
    jest.spyOn(feedbackApi, "get").mockResolvedValue(mockResponse);

    // Call the function and expect it to throw an error
    await expect(getFeedbackURLAsync()).rejects.toThrow();
  });

  it("should throw an error if the request times out", async () => {
    // Mock the API call to simulate a timeout
    jest
      .spyOn(feedbackApi, "get")
      .mockRejectedValue(new Error("Request timeout"));

    // Call the function and expect it to throw an error
    await expect(getFeedbackURLAsync()).rejects.toThrow("Request timeout");
  });
});

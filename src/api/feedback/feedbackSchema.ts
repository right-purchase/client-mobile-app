import { z } from "zod";

export const feedbackUrlResponseSchema = z.object({
  value: z.string().url(),
});

export type TFeedbackUrlResponse = z.infer<typeof feedbackUrlResponseSchema>;

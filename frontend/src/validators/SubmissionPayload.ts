import { z } from 'zod';

export const submissionPayloadSchema = z.object({
  textAnswer: z.string(),
  attachmentUrls: z.array(z.string()),
});

export type SubmissionPayload = z.infer<typeof submissionPayloadSchema>;

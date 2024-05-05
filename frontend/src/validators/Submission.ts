import { z } from 'zod';
import { homeworkSnippetSchema } from './HomeworkSnippet';
import { userSnippetSchema } from './UserSnippet';
import { teamSnippetSchema } from './TeamSnippet';
import { submissionPayloadSchema } from './SubmissionPayload';

export const submissionSchema = z.object({
  id: z.string(),
  homework: homeworkSnippetSchema,
  owner: userSnippetSchema,
  publisher: userSnippetSchema,
  team: teamSnippetSchema.optional(),
  publishedAt: z.date(),
  payload: submissionPayloadSchema,
});

export type Submission = z.infer<typeof submissionSchema>;

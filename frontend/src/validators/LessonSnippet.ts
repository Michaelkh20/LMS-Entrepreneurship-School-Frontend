import { z } from 'zod';

export const lessonSnippetSchema = z.object({
  id: z.string(),
  title: z.string(),
  lessonNumber: z.number(),
  publishDate: z.date(),
});

export type LessonSnippet = z.infer<typeof lessonSnippetSchema>;

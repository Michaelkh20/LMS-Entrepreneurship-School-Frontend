import { z } from 'zod';
import { lessonSnippetSchema } from './LessonSnippet';

export const homeworkSnippetSchema = z.object({
  id: z.string(),
  lesson: lessonSnippetSchema,
  title: z.string(),
  deadlineDate: z.date(),
});

export type HomeworkSnippet = z.infer<typeof homeworkSnippetSchema>;

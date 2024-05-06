import { z } from 'zod';

export const userSnippetSchema = z.object({
  id: z.string(),
  name: z.string(),
  surname: z.string(),
  patronymic: z.string().optional(),
});

export type UserSnippet = z.infer<typeof userSnippetSchema>;

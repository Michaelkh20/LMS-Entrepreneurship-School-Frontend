import { z } from 'zod';

export const teamSnippetSchema = z.object({
  id: z.string(),
  number: z.number(),
  projectTheme: z.string(),
  description: z.string(),
});

export type TeamSnippet = z.infer<typeof teamSnippetSchema>;

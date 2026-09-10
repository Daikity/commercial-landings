import { z } from 'zod';

export const briefSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  type: z.enum(['house', 'reuse', 'cultural', 'other'], {
    required_error: 'Choose a project type',
  }),
  note: z.string().max(600).optional(),
});

export type BriefValues = z.infer<typeof briefSchema>;

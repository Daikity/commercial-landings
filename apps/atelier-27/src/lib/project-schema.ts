import { z } from 'zod';

export const projectSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  type: z.enum(['residence', 'apartment', 'hospitality', 'other'], {
    required_error: 'Choose a project type',
  }),
  note: z.string().max(500).optional(),
});

export type ProjectValues = z.infer<typeof projectSchema>;

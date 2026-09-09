import { z } from 'zod';

export const viewingSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  interest: z.enum(['any', 'apartment', 'house', 'loft'], {
    required_error: 'Choose an interest',
  }),
  note: z.string().max(400).optional(),
});

export type ViewingValues = z.infer<typeof viewingSchema>;

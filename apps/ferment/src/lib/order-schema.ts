import { z } from 'zod';

export const reserveSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Valid email required'),
  loaf: z.enum(['country', 'rye', 'seeded'], {
    required_error: 'Choose a loaf',
  }),
  message: z.string().max(400).optional(),
});

export type ReserveValues = z.infer<typeof reserveSchema>;

import { z } from 'zod';

export const joinSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  practice: z.enum(['breath', 'flow', 'stillness', 'restore'], {
    required_error: 'Choose a practice',
  }),
  note: z.string().max(400).optional(),
});

export type JoinValues = z.infer<typeof joinSchema>;

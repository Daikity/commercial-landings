import { z } from 'zod';

export const consultSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  interest: z.enum(['consult', 'facial', 'peel', 'laser'], {
    required_error: 'Choose an interest',
  }),
  note: z.string().max(400).optional(),
});

export type ConsultFormValues = z.infer<typeof consultSchema>;

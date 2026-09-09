import { z } from 'zod';

export const privateOrderSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Valid email required'),
  occasion: z.string().min(2, 'Occasion is required'),
  message: z.string().min(10, 'Tell us a little more').max(800),
});

export type PrivateOrderValues = z.infer<typeof privateOrderSchema>;

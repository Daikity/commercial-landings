import { z } from 'zod';

export const bookingSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  project: z.enum(['site', 'product', 'campaign'], {
    required_error: 'Choose a project type',
  }),
  note: z.string().max(500).optional(),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;

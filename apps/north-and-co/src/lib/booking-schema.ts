import { z } from 'zod';

export const bookingSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  company: z.string().min(2, 'Enter company name'),
  focus: z.enum(['strategy', 'ops', 'growth'], {
    required_error: 'Choose a focus',
  }),
  note: z.string().max(400).optional(),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;

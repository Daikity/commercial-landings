import { z } from 'zod';

export const bookingSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  package: z.enum(['essential', 'ceramic', 'full'], {
    required_error: 'Choose a package',
  }),
  note: z.string().max(400).optional(),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;

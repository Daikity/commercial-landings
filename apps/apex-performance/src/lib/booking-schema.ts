import { z } from 'zod';

export const bookingSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  vehicle: z.string().min(2, 'Tell us the vehicle'),
  goal: z.enum(['map', 'dyno', 'track'], { required_error: 'Choose a goal' }),
  note: z.string().max(400).optional(),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;

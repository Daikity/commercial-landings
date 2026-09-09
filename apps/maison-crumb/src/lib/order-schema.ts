import { z } from 'zod';

export const orderSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  contact: z.string().min(5, 'Email or phone is required'),
  orderType: z.enum(['pickup', 'delivery'], {
    required_error: 'Choose pickup or delivery',
  }),
  message: z.string().min(5, 'Tell us what you would like to order').max(500),
});

export type OrderFormValues = z.infer<typeof orderSchema>;

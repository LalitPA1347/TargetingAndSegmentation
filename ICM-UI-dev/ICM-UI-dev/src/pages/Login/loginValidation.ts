import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(1, 'Email cannot be empty').email('Invalid email address'),
  password: z.string().min(1, 'Password cannot be empty'),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

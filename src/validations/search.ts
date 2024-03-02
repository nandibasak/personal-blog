import { z } from 'zod';

export const searchValidation = z.object({
  input: z.string().min(2),
});

export type Search = z.infer<typeof searchValidation>;

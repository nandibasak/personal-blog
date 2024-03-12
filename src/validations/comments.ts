import { z } from 'zod';

export const commentValidation = z.object({
  postId: z.string().min(1),
  username: z.string().min(2),
  comment: z.string().max(100),
});

export type CreateComment = z.infer<typeof commentValidation>;

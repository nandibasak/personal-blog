import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_HYGRAPH_API_URL: z.string().url().min(1),
    NEXT_PUBLIC_HYGRAPH_API_TOKEN: z.string().min(1),
    NEXT_PUBLIC_SITE_URL: z.string().url().min(1),
    NEXT_PUBLIC_COMMENT_SERECT_KEY: z.string().min(1),
    NEXT_PUBLIC_COMMENT_URL: z.string().url().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_HYGRAPH_API_URL: process.env.NEXT_PUBLIC_HYGRAPH_API_URL,
    NEXT_PUBLIC_HYGRAPH_API_TOKEN: process.env.NEXT_PUBLIC_HYGRAPH_API_TOKEN,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_COMMENT_SERECT_KEY: process.env.NEXT_PUBLIC_COMMENT_SERECT_KEY,
    NEXT_PUBLIC_COMMENT_URL: process.env.NEXT_PUBLIC_COMMENT_URL,
  },
});

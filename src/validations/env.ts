import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    HYGRAPH_API_URL: z.string().url().min(1),
    HYGRAPH_API_TOKEN: z.string().min(1),
  },
  client: {},
  runtimeEnv: {
    HYGRAPH_API_URL: process.env.HYGRAPH_API_URL,
    HYGRAPH_API_TOKEN: process.env.HYGRAPH_API_TOKEN,
  },
});

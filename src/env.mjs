import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    GITHUB_TOKEN: z.string().min(1),
    DISCORD_ID: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    DISCORD_ID: process.env.DISCORD_ID,
  },
});

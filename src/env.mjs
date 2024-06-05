import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    IS_MAINTENANCE: z.enum(["true", "false"]).default("false"),
    GITHUB_TOKEN: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    NEXT_PUBLIC_APP_DISCORD_ID: z.string().min(1),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    IS_MAINTENANCE: process.env.IS_MAINTENANCE,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    NEXT_PUBLIC_APP_DISCORD_ID: process.env.NEXT_PUBLIC_APP_DISCORD_ID,
  },
  emptyStringAsUndefined: true,
});

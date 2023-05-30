import { z } from 'zod';

const schema = z.object({
  apiBaseURL: z.string().url(),
});

export const config = schema.parse({
  apiBaseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

import { router } from '@/lib/trpc/server';
import { userRouter } from './routers/users';
import { config } from 'dotenv'
config()

export const appRouter = router({
  user: userRouter,
});

export type AppRouter = typeof appRouter;
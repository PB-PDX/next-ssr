import { router, publicProcedure } from '@/lib/trpc/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

export const userRouter = router({
  getCurrentUser: publicProcedure.query(async () => {
    return await prisma.user.findFirst();
  }),

  

  // Add a new procedure like this:
  getAllUsers: publicProcedure.query(async () => {
    return await prisma.user.findMany();
  }),

  createUser: publicProcedure
    .input(z.object({
      email: z.string(),
      name: z.string().min(1, "Name is required"),
      username: z.string().min(3, "Username must be at least 3 characters").optional(),
    }))
    .mutation(async ({ input }) => {
      return await prisma.user.create({
        data: input
      });
    }),
});
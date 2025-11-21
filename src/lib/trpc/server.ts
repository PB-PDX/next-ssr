import { initTRPC } from '@trpc/server';
import superjson from 'superjson';

// Create context function
export async function createTRPCContext() {
  return {
    // Add session, db, etc. here later
  };
}

type Context = Awaited<ReturnType<typeof createTRPCContext>>;

const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

// Export the router builder and procedure
export const router = t.router;
export const publicProcedure = t.procedure;
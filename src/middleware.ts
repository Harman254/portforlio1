import { authMiddleware } from "@clerk/nextjs";

// Middleware with no protected routes (making everything public)
export default authMiddleware({
  publicRoutes: ["/(.*)"],  // Makes all routes publicly accessible
});

export const config = {
  matcher: ["/(api|trpc)(.*)"],  // Only apply authentication to API and tRPC routes
};

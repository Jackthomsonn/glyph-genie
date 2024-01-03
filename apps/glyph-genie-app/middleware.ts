import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

import { PrismaClient } from '@prisma/client/edge'
import { NextResponse } from "next/server";

import { withAccelerate } from '@prisma/extension-accelerate'

const client = new PrismaClient().$extends(withAccelerate())

export default authMiddleware({
  async afterAuth(auth, req, evt) {
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    
    if (auth.userId) {
      await client.user.upsert({
        where: { userId: auth.userId as string },
        update: {},
        create: {
          userId: auth.userId as string,
          creditAmount: 1
        },
      })

      return NextResponse.next()
    }
    return NextResponse.next();
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next|checkout\\/api).*)', '/', '/(api|trpc)(.*)'],
};
import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"

const client = new PrismaClient().$extends(withAccelerate())

export const POST = async (req: Request) => {
  const { userId } = await req.json();

  const user = await client.user.findUnique({
    where: {
      userId
    },
    select: {
      userId: true,
      creditAmount: true,
      Images: {
        select: { url: true, createdAt: true }, orderBy: { createdAt: 'desc' }
      }
    }
  })

  return new Response(JSON.stringify(user), { status: 200 })
}
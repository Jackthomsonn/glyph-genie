import { getAuth } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { NextRequest } from "next/server";
import OpenAI from "openai";

export const maxDuration = 300;

const client = new PrismaClient().$extends(withAccelerate())

const openai = new OpenAI({
  apiKey: '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',
});

const dalle3Generate = async (prompt: string, n: number): Promise<OpenAI.Images.Image[]> => {
  const images: OpenAI.Images.Image[] = [];

  for (let i = 0; i < n; i++) {
    const response = await openai.images.generate({
      model: 'dall-e-3',
      quality: 'hd',
      prompt,
      size: '1024x1024'
    });

    images.push(response.data[0]);
  }

  return images;
}

export const POST = async (req: NextRequest) => {
  const { prompt, n } = await req.json();

  const auth = getAuth(req);

  const response = await dalle3Generate(prompt, n);

  await client.user.update({
    where: {
      userId: auth.userId as string
    },
    data: {
      creditAmount: {
        decrement: n
      }
    }
  });

  return new Response(JSON.stringify(response));
}
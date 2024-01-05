import { getAuth } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { NextRequest } from "next/server";
import OpenAI from "openai";
import { put } from "@vercel/blob";

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
      size: '1024x1024',
      response_format: 'b64_json'
    });

    const base64Image = response.data[0].b64_json?.replace(/^data:image\/\w+;base64,/, '');

    const imageBuffer = Buffer.from(base64Image || "", 'base64');

    const imageBlob = new Blob([imageBuffer], { type: 'image/jpeg' })

    console.log('going to store...')

    const { url } = await put(`${response.data[0].revised_prompt}.jpg`, imageBlob, { access: 'public' })

    console.log('stored!')

    images.push({ ...response.data[0], url });
  }

  return images;
}

export const POST = async (req: NextRequest) => {
  const { prompt, n } = await req.json();

  const auth = getAuth(req);

  const user = await client.user.findUnique({ where: { userId: auth.userId as string } });

  if (user?.creditAmount as number < n) {
    return new Response(JSON.stringify({ error: "Insufficient Genie Points" }), { status: 400 });
  }

  const response = await dalle3Generate(prompt, n);

  await client.user.update({
    where: {
      userId: auth.userId as string
    },
    data: {
      Images: {
        createMany: {
          data: response.map(image => ({
            url: image.url || ""
          }))
        }
      },
      creditAmount: {
        decrement: n
      }
    }
  });

  return new Response(JSON.stringify(response));
}
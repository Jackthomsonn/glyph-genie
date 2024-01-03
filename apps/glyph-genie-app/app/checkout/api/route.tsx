import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { NextRequest } from 'next/server';
import { Stripe } from 'stripe';

const stripe = new Stripe('sk_test_51LnrIRLzoIyAumTjjGfpar8jzUzNerrqB54URFQKPaf6vcjWwQKVRvLY6uzP8R6oliEQOATRgS9WK1nWYGTi83j900sJbfeUdd')
const secret = "whsec_bv48agwtW6Xw0SVUEabPfTa5bIEG3IhT";

const client = new PrismaClient().$extends(withAccelerate())

export const POST = (async (req: NextRequest) => {
  const body = await req.text();

  const signature = req.headers.get("stripe-signature") as string;

  const event = stripe.webhooks.constructEvent(body, signature, secret);

  switch (event.type) {
    case 'checkout.session.completed':
      const checkoutSession = event.data.object;

      await client.user.update({
        where: {
          userId: checkoutSession?.metadata?.userId,
        },
        data: {
          creditAmount: {
            increment: 10
          }
        }
      });

      return new Response('Success', { status: 200 });
    default:
      console.log('Broken')
      return new Response(`Unhandled event type ${event.type}`, { status: 400 });
  }
});
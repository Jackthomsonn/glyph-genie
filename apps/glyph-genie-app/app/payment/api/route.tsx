import { NextRequest } from "next/server";
import { Stripe } from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

const prices = {
  production: {
    10: 'price_1OUxp1LzoIyAumTjwwA52TLm',
    50: 'price_1OUxpELzoIyAumTjxGFFMqRa',
    100: 'price_1OUxpQLzoIyAumTjFjVRvEOd'
  },
  development: {
    10: 'price_1OUTu2LzoIyAumTjHEEzkoRF',
    50: 'price_1OUTu2LzoIyAumTjHEEzkoRF',
    100: 'price_1OUTu2LzoIyAumTjHEEzkoRF'
  }
}

export const POST = (async (req: NextRequest) => {
  const { price, userId } = await req.json();
  const environment = process.env.VERCEL_ENV as string;

  const session = await stripe.checkout.sessions.create({
    success_url: process.env.SUCCESS_URL as string,
    cancel_url: 'https://www.glyphgenie.app/buy-genie-points',
    line_items: [
      {
        price: (prices as any)[environment][price],
        quantity: 1,
      },
    ],
    metadata: {
      userId: userId
    },
    mode: 'payment',
  });

  return new Response(JSON.stringify({ id: session.id }));
});

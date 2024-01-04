import { NextRequest } from "next/server";
import { Stripe } from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export const POST = (async (req: NextRequest) => {
  const session = await stripe.checkout.sessions.create({
    success_url: 'http://localhost:3000/home',
    line_items: [
      {
        price: 'price_1OUTu2LzoIyAumTjHEEzkoRF',
        quantity: 1,
      },
    ],
    metadata: {
      userId: (await req.json()).userId
    },
    mode: 'payment',
  });

  return new Response(JSON.stringify({ id: session.id }));
});

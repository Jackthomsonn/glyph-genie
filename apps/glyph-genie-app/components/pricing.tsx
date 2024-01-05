import { cn } from "@/lib/utils";
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { BoxIcon, InfoIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { useUser } from "@/context/user";

const createCheckOutSession = async (userId?: string | null, price?: number) => {
  const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');
  const { data } = await axios.post('/payment/api', JSON.stringify({
    userId,
    price
  }));

  const result = await stripe?.redirectToCheckout({
    sessionId: data.id
  });

  if (result?.error) {
    alert(result.error.message);
  }
};

export const Pricing = () => {
  const { user } = useUser();

  return <div className="flex gap-6 flex-wrap flex-col md:flex-row">
    <Card className={cn("flex-1 h-auto")}>
      <CardHeader>
        <CardTitle>10 Genie Points</CardTitle>
        <CardDescription>A mystical offering that grants you 10 wishes to be fulfilled by our elusive and all-powerful genies!</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full bg-violet-800 text-white hover:bg-violet-900 h-full" onClick={() => createCheckOutSession(user?.id, 10)}>
          <BoxIcon className="mr-2 h-4 w-4" /> Get started £10
        </Button>
      </CardFooter>
    </Card>

    <Card className={cn("flex-1 h-auto")}>
      <CardHeader>
        <CardTitle>50 Genie Points</CardTitle>
        <CardDescription>A wondrous trove of 50 wishes bestowed upon you, entrusted to our enigmatic and omnipotent genies!</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full bg-violet-800 text-white hover:bg-violet-900 h-full" onClick={() => createCheckOutSession(user?.id, 50)}>
          <BoxIcon className="mr-2 h-4 w-4" /> Get started £40
        </Button>
      </CardFooter>
    </Card>

    <Card className={cn("flex-1 h-auto")}>
      <CardHeader>
        <CardTitle>100 Genie Points</CardTitle>
        <CardDescription>A transcendental offering of 100 wishes bestowed upon you by our esteemed and omnipotent genies!</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full bg-violet-800 text-white hover:bg-violet-900 h-full" onClick={() => createCheckOutSession(user?.id, 100)}>
          <BoxIcon className="mr-2 h-4 w-4" /> Get started £80
        </Button>
      </CardFooter>
    </Card>
  </div>
}
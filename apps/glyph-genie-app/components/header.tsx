import { useUser } from "@/context/user";
import { useClerk } from "@clerk/nextjs";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import clsx from "clsx";
import { ArrowDownCircleIcon, CogIcon, GridIcon, Link2Icon, LogOutIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

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

export const Header = () => {
  const { openUserProfile, signOut, user } = useClerk()
  const { user: genieUser } = useUser();
  const { push } = useRouter();
  const pathName = usePathname();

  return <>
    <header className="flex w-full items-center gap-4 p-4 bg-slate-900">
      <div className="flex justify-between w-full space-x-4 items-center">
        <div>
          <img src="/beanie-potato.png" alt="Glyph Genie Logo" width={64} className="rounded-lg" />
        </div>
        <div className="flex space-x-8">
          {
            user && pathName === '/home' ? <Button className="bg-violet-800 text-white hover:bg-violet-900" onClick={() => push('/dashboard')}>
              <GridIcon className="mr-2" size={18} /> View Dashboard
            </Button> : user && pathName !== '/home' ? <>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button className="bg-violet-800 text-white hover:bg-violet-900">
                    Buy credits
                    <ArrowDownCircleIcon size={18} className="ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Available Packages</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => createCheckOutSession(user?.id, 10)}>10 credits</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => createCheckOutSession(user?.id, 50)}>50 credits</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => createCheckOutSession(user?.id, 100)}>100 credits</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu></> : <Button className="bg-violet-800 text-white hover:bg-violet-900" onClick={() => push('/dashboard')}>
              <Link2Icon className="mr-2" size={18} /> Get Started
            </Button>

          }

          <div className={`${clsx(!user && 'hidden')}`}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage src={user?.imageUrl} alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My account ({genieUser?.creditAmount} credits)</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => openUserProfile()} className="cursor-pointer">
                    <CogIcon className="mr-2 h-4 w-4" />
                    <span>Manage my account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer">
                    <LogOutIcon className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header></>
}
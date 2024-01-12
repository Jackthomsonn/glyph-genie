import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useClerk } from "@clerk/nextjs";
import { track } from "@vercel/analytics";
import clsx from "clsx";
import { CogIcon, GridIcon, Link2Icon, LogOutIcon } from "lucide-react";
import Image from 'next/image';
import { usePathname, useRouter } from "next/navigation";

export const Header = () => {
  const { openUserProfile, signOut, user } = useClerk()
  const { push } = useRouter();
  const pathName = usePathname();

  return <>
    <header className="flex w-full items-center gap-4 p-4 bg-gray-900">
      <div className="flex justify-between w-full items-center space-x-4">
        <div>
          <Image src="/beanie-potato.png" alt="Glyph Genie Logo" width={64} height={64} quality={100} className={`rounded-lg ${pathName === '/home' && 'hidden'}`} />
        </div>
        <div className="flex space-x-4">
          {
            user && pathName === '/home' ? <Button className="bg-violet-800 text-white hover:bg-violet-900" onClick={() => push('/dashboard')}>
              <GridIcon className="mr-2" size={18} /> View Dashboard
            </Button> : user && pathName !== '/home' ?
              null : <Button className="bg-violet-800 text-white hover:bg-violet-900" onClick={() => {
                push('/dashboard');
                track('get-started-header');
              }}>
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
                <DropdownMenuLabel>My account</DropdownMenuLabel>
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
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ArrowLeftIcon, CogIcon, LogOutIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

import { ImageProvider, useImage } from "@/context/image";
import { useStep } from "@/context/step";
import { useUser } from "@/context/user";
import { useClerk } from "@clerk/nextjs";
import clsx from "clsx";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { ErrorBox } from "./error";

export function HomeV2() {
  const { steps, currentStep, setCurrentStep } = useStep();
  const { setImages } = useImage()
  const { signOut, openUserProfile } = useClerk();

  const { user: genieUser } = useUser();

  const goBack = () => {
    setCurrentStep(currentStep - 2);
    setImages([]);
  }

  return (
    <div className="flex min-h-screen md:max-h-screen bg-slate-900">
      <div className="flex flex-col md:flex-row gap-2 m-2 flex-1">
        <section className="flex flex-1 flex-col transition-all rounded-xl bg-indigo-50 overflow-scroll">
          <header className="flex w-full items-center gap-4 pt-8 pr-8">
            <div className={clsx(['flex w-full', [1, 2].includes(currentStep) && 'hidden'])}>
              <Button onClick={goBack} variant={"link"} className="text-indigo-900">
                <ArrowLeftIcon className="cursor-pointer" />
              </Button>
            </div>
            <div className="flex justify-end w-full space-x-4 items-center">
              <Button className="bg-indigo-900 hover:bg-indigo-900">Buy credits</Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My account ({genieUser?.creditAmount} credits)</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer">
                      <LogOutIcon className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => openUserProfile()} className="cursor-pointer">
                      <CogIcon className="mr-2 h-4 w-4" />
                      <span>Manage my account</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <div className="flex p-6 h-full">
            <ErrorBoundary errorComponent={() => <ErrorBox />}>
              <ImageProvider>
                {steps.find(step => step.id === currentStep)?.component}
              </ImageProvider>
            </ErrorBoundary>
          </div>
        </section>
      </div>
    </div>
  );
}
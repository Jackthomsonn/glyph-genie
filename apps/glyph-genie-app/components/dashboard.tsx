import { ImageProvider } from "@/context/image";
import { useStep } from "@/context/step";
import { useUser } from "@/context/user";
import { Loader2Icon } from "lucide-react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Image from 'next/image';
import { ErrorBox } from "./error";
import { Header } from "./header";
import Link from "next/link";

export function Dashboard() {
  const { steps, currentStep } = useStep();
  const { user, isLoading } = useUser();

  return (
    <div className="flex min-h-screen lg:max-h-screen">
      <div className="flex flex-col lg:flex-row gap-2 flex-1">
        <section className="flex flex-1 flex-col transition-all bg-white">
          <Header />
          <div className="flex flex-col lg:flex-row h-full">
            <ErrorBoundary errorComponent={f => <ErrorBox {...f} />}>
              <ImageProvider>
                {steps.find(step => step.id === currentStep)?.component}

                <div className="flex flex-1 flex-col space-y-4 w-full container pt-12 pb-12 bg-slate-100 z-50">
                  <div className="space-y-4">
                    <div className="inline-block rounded-lg px-3 py-1 text-sm bg-green-200 font-bold text-green-900 subpixel-antialiased">Recent icons</div>
                    <h2 className="text-3xl font-bold tracking-tighter subpixel-antialiased border-b-2 border-slate-100 pb-4">
                      Your most recent icons
                    </h2>

                    {
                      isLoading ? <div className="flex justify-center items-center"><Loader2Icon className="animate-spin" /></div> :
                        user?.Images.length === 0 ?
                          <>
                            <span className="font-medium text-md mt-8 text-left">You have no generated icons! Go and <Link href="dashboard" className="text-violet-500 font-bold">create some!</Link></span>
                          </>
                          : <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 md:pb-12">
                            {user?.Images.map((im, index) => {
                              return <Image width={500} height={500} quality={100} alt="Generated Icon Image" key={index} src={im.url} className="rounded-xl shadow-md w-full" />
                            }).slice(0, 6)}
                          </div>
                    }
                  </div>
                </div>
              </ImageProvider>
            </ErrorBoundary>
          </div>
        </section>
      </div>
    </div>
  );
}
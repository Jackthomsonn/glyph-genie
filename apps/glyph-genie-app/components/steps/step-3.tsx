import { useImage } from "@/context/image";
import Image from "next/image";
import { useEffect } from "react";
import useSWR from "swr";
import { Sidebar } from "../sidebar";

export const StepThree = () => {
  const { images } = useImage();
  const { mutate } = useSWR('/home/api');
  const { mutate: userMutate } = useSWR('/user/api');

  useEffect(() => {
    mutate(undefined, { revalidate: false });
    userMutate(undefined, { revalidate: true });
  }, [])

  return <>
    <Sidebar />
    <div className="flex flex-1">
      <div className="animate-slide-left flex flex-col w-full container pt-12 pb-12">
        <div className="space-y-4">
          <div className="inline-block rounded-lg px-3 py-1 text-sm bg-green-200 font-bold text-green-900 subpixel-antialiased">Step Two</div>
          <h2 className="text-3xl font-bold tracking-tighter text-violet-900 subpixel-antialiased border-b-2 border-violet-20 pb-4">Your Creations</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {images.map((im, index) => {
            return <img alt="Generated Icon Image" key={index} src={im.url} className="rounded-xl shadow-md w-full" />
          })}
        </div>
      </div>
    </div>
  </>
}

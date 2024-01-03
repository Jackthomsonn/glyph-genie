import { useImage } from "@/context/image";
import Image from "next/image";
import { useEffect } from "react";
import useSWR from "swr";

export const StepThree = () => {
  const { images } = useImage();
  const { mutate } = useSWR('/home/api');
  const { mutate: userMutate } = useSWR('/user/api');

  useEffect(() => {
    mutate(undefined, { revalidate: false });
    userMutate(undefined, { revalidate: true });
  }, [])

  return <>
    <div className="animate-slide-left flex flex-col w-full">
      <div className="space-y-4">
        <div className="inline-block rounded-lg px-3 py-1 text-sm bg-green-200 font-bold text-green-900 subpixel-antialiased">Step Two</div>
        <h2 className="text-3xl font-bold tracking-tighter text-indigo-900 subpixel-antialiased border-b-2 border-indigo-20 pb-4">Your Creations</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {images.map((im, index) => {
          return <Image alt="Generate Icon Image" key={index} src={im.url} width={180} height={180} className="rounded-xl shadow-md w-full" />
        })}
      </div>
    </div>
  </>
}

import { useImage } from "@/context/image";
import { useEffect } from "react";
import useSWR from "swr";
import { Sidebar } from "../sidebar";
import { useStep } from "@/context/step";
import { ArrowLeftIcon } from "lucide-react";

export const StepThree = () => {
  const { images } = useImage();
  const { mutate } = useSWR('/home/api');
  const { mutate: userMutate } = useSWR('/user/api');
  const { currentStep, setCurrentStep } = useStep();

  useEffect(() => {
    mutate(undefined, { revalidate: false });
    userMutate(undefined, { revalidate: true });
  }, [])

  return <>
    <Sidebar />
    <div className="flex flex-1">
      <div className="animate-slide-left flex flex-col w-full container pt-12 pb-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <ArrowLeftIcon className="text-gray-900 cursor-pointer" size={24} onClick={() => setCurrentStep(currentStep - 2)}></ArrowLeftIcon>
            <div className="inline-block rounded-lg px-3 py-1 text-sm bg-green-200 font-bold text-green-900 subpixel-antialiased">Step Two</div>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter subpixel-antialiased border-b-2 border-gray-50 pb-4">Your Creations</h2>
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

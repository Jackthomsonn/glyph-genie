import { useImage } from "@/context/image";
import { useStep } from "@/context/step";
import { Loader2Icon } from "lucide-react";
import { useEffect } from "react";
import useSWR from "swr";
import { z } from "zod";
import { Sidebar } from "../sidebar";
import { formSchema } from "./step-1";

const generateImages = async (key: string, data: z.infer<typeof formSchema>) => {
  const response = await fetch(key, {
    method: "POST",
    body: JSON.stringify({
      prompt: data.prompt,
      n: data.iterations,
    })
  });

  return await response.json();
}

export const StepTwo = () => {
  const { setImages } = useImage();
  const { setCurrentStep, stepData } = useStep()
  const { data, error } = useSWR('/home/api', (key: string) => generateImages(key, stepData));

  if (error) throw error;

  useEffect(() => {
    if (data?.length > 0) {
      setImages(data);
      setCurrentStep(3);
    }
  }, [data])

  return (
    <>
      <Sidebar />
      <div className="flex flex-1">
        <div className="animate-slide-left w-full justify-center items-center flex flex-col">
          <Loader2Icon className="animate-spin" />
          <h1 className="text-center font-bold text-lg text-gray-900 mt-4">Generating icons...</h1>
          <p className="text-gray-900 text-sm">This may take a few minutes</p>
        </div>
      </div>
    </>
  )
}
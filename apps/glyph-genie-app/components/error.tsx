import { useStep } from "@/context/step"
import { useRouter } from "next/navigation"
import useSWR from "swr"
import { Button } from "./ui/button"

export const ErrorBox = ({
  reset = () => { }
}: {
  reset: () => void
}) => {
  const { refresh } = useRouter()
  const { mutate } = useSWR('/home/api')
  const { setCurrentStep } = useStep();
  const r = () => {
    refresh();
    reset();
    mutate(null)
    setCurrentStep(1);
  }
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl font-bold tracking-tighter text-slate-900 subpixel-antialiased">
        Something went wrong
      </h1>
      <p className="mx-auto max-w-[700px] text-slate-900 text-lg subpixel-antialiased">
        Please try again later
      </p>
      <Button className="bg-violet-500 hover:bg-violet-600 text-white font-bold rounded-lg text-md" onClick={() => r()}>Go back</Button>
    </div>
  )
}
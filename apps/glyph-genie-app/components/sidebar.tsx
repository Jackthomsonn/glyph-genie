import { useUser } from "@/context/user";
import { BotIcon, CreditCardIcon, GemIcon, ImageIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Sidebar = () => {
  const { user: genieUser } = useUser();
  const pathName = usePathname();

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  const frameworks = [
    {
      label: "React",
      value: "1"
    }
  ]

  return (
    <>
      <div className="flex flex-col space-y-4 p-8 lg:hidden border-2 border-gray-100">
        <div className="flex justify-start flex-wrap flex-col bg-gray-100 rounded-lg gap-4 p-2">
          <p className="ml-2 mt-2 font-bold text-sm text-gray-500">Navigation menu</p>
          <Link
            className="group flex items-center px-2 py-2 text-sm font-medium text-gray-500 rounded-md"
            href="dashboard"
          >
            <BotIcon className={`h-5 w-5 text-gray-400 ${pathName === '/dashboard' && "text-violet-500 font-bold"}`} />
            <span className={`ml-2 ${pathName === '/dashboard' && "text-violet-500 font-bold"}`}>Icon Generator</span>
          </Link>
          <Link
            className="group flex items-center px-2 py-2 text-sm font-medium text-gray-500 rounded-md"
            href="my-icons"
          >
            <ImageIcon className={`h-5 w-5 text-gray-400 ${pathName === '/my-icons' && "text-violet-500 font-bold"}`} />
            <span className={`ml-2 ${pathName === '/my-icons' && "text-violet-500 font-bold"}`}>View my icons</span>
          </Link>
          <Link
            className="group flex items-center px-2 py-2 text-sm font-medium text-gray-500 rounded-md"
            href="buy-genie-points"
          >
            <GemIcon className={`h-5 w-5 text-gray-400 ${pathName === '/buy-genie-points' && "text-violet-500 font-bold"}`} />
            <span className={`ml-2 ${pathName === '/buy-genie-points' && "text-violet-500 font-bold"}`}>Buy Genie Points</span>
          </Link>
        </div>
        <div className="flex justify-start">
          <div className="bg-violet-50 w-full p-2 rounded-lg text-sm/relaxed text-violet-900 font-bold text-center">
            You have {genieUser?.creditAmount} Genie Points
          </div>
        </div>
      </div>
      <div className="flex-col w-64 bg-white border-2 border-gray-50 hidden lg:flex">
        <nav className="flex flex-col flex-1 px-2 py-4 bg-white justify-between">
          <div className="flex flex-col">
            <Link
              className="group flex items-center px-2 py-2 text-sm font-medium text-gray-500 rounded-md"
              href="dashboard"
            >
              <BotIcon className={`h-5 w-5 text-gray-400 ${pathName === '/dashboard' && "text-violet-500 font-bold"}`} />
              <span className={`ml-2 ${pathName === '/dashboard' && "text-violet-500 font-bold"}`}>Icon Generator</span>
            </Link>
            <Link
              className="group flex items-center px-2 py-2 text-sm font-medium text-gray-500 rounded-md"
              href="my-icons"
            >
              <ImageIcon className={`h-5 w-5 text-gray-400 ${pathName === '/my-icons' && "text-violet-500 font-bold"}`} />
              <span className={`ml-2 ${pathName === '/my-icons' && "text-violet-500 font-bold"}`}>View my icons</span>
            </Link>
            <Link
              className="group flex items-center px-2 py-2 text-sm font-medium text-gray-500 rounded-md"
              href="buy-genie-points"
            >
              <GemIcon className={`h-5 w-5 text-gray-400 ${pathName === '/buy-genie-points' && "text-violet-500 font-bold"}`} />
              <span className={`ml-2 ${pathName === '/buy-genie-points' && "text-violet-500 font-bold"}`}>Buy Genie Points</span>
            </Link>
          </div>
          <div className="flex flex-col justify-end">
            <div
              className="group flex items-center px-2 py-2 text-sm font-bold rounded-lg bg-violet-50 text-violet-900 subpixel-antialiased"
            >
              <CreditCardIcon className="h-5 w-5 text-violet-900" />
              <span className="ml-2">You have {genieUser?.creditAmount} Genie Points</span>
            </div>
          </div>
        </nav>

      </div>
    </>
  )
}
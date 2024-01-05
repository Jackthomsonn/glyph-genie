import { useUser } from "@/context/user";
import { BotIcon, CreditCardIcon, ImageIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const { user: genieUser } = useUser();

  const pathName = usePathname();

  return (
    <>
      <div className="flex flex-col space-y-4 p-8 md:hidden border-2 border-slate-100">
        <div className="flex justify-center items-center">
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
        </div>
        <div className="flex justify-start">
          <div className="bg-violet-50 w-full p-2 rounded-lg text-sm/relaxed text-violet-900 font-bold text-center">
            You have {genieUser?.creditAmount} credits
          </div>
        </div>
      </div>
      <div className="flex-col w-64 bg-white border-2 border-slate-50 hidden md:flex">
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
          </div>
          <div className="flex flex-col justify-end">
            <div
              className="group flex items-center px-2 py-2 text-sm font-bold rounded-lg bg-violet-50 text-violet-900 subpixel-antialiased"
            >
              <CreditCardIcon className="h-5 w-5 text-violet-900" />
              <span className="ml-2">You have {genieUser?.creditAmount} credits</span>
            </div>
          </div>
        </nav>

      </div>
    </>
  )
}
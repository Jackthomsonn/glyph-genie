import { useUser } from "@/context/user";
import { BotIcon, CreditCardIcon, ImageIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const { user: genieUser } = useUser();

  const pathName = usePathname();

  return (
    <>
      <div className="flex space-x-4 p-8 md:hidden border-2 border-slate-100">
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
      <div className="flex-col w-64 bg-white border-2 border-slate-50 hidden md:flex">
        <nav className="flex-1 px-2 py-4 bg-white overflow-y-auto">
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
        </nav>
        <div className="text-sm font-medium text-gray-500 flex justify-center items-center pt-2 pb-2">
          <CreditCardIcon className="mr-2" />{genieUser?.creditAmount} credits available
        </div>
      </div>
    </>
  )
}
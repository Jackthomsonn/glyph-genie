"use client";

import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { useUser } from "@/context/user";
import Link from "next/link";

export default function IndexPage() {
  const { user } = useUser();

  return <>
    <div className="flex min-h-screen md:max-h-screen">
      <div className="flex flex-col md:flex-row gap-2 flex-1">
        <section className="flex flex-1 flex-col transition-all bg-white overflow-y-scroll">
          <Header />
          <div className="flex flex-col md:flex-row h-full md:overflow-y-scroll">
            <Sidebar />
            <div className="flex flex-1 md:overflow-y-scroll">
              <div className="flex flex-col w-full container pt-12 pb-12">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg px-3 py-1 text-sm bg-green-200 font-bold text-green-900 subpixel-antialiased">Your icons</div>
                  <h2 className="text-3xl font-bold tracking-tighter subpixel-antialiased border-b-2 border-gray-50 pb-4">List of your generated icons</h2>
                </div>

                {
                  user?.Images.length === 0 ?
                    <>
                      <span className="font-medium text-md mt-8 text-left">You have no generated icons! Go and <Link href="dashboard" className="text-violet-500 font-bold">create some!</Link></span>
                    </>
                    : <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 md:pb-12">
                      {user?.Images.map((im, index) => {
                        return <img alt="Generated Icon Image" key={index} src={im.url} className="rounded-xl shadow-md w-full" />
                      })}
                    </div>
                }
              </div>
            </div>
          </div>
        </section>
      </div >
    </div >
  </>
}
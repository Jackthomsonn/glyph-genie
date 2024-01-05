"use client";

import { Header } from "@/components/header";
import { Pricing } from "@/components/pricing";
import { Sidebar } from "@/components/sidebar";

export default function IndexPage() {
  return <>
    <div className="flex min-h-screen md:max-h-screen">
      <div className="flex flex-col md:flex-row gap-2 flex-1">
        <section className="flex flex-1 flex-col transition-all bg-white overflow-y-scroll">
          <Header />
          <div className="flex flex-col md:flex-row h-full md:overflow-y-scroll">
            <Sidebar />
            <div className="flex flex-1 md:overflow-y-scroll">
              <div className="flex flex-col w-full container pt-12 pb-12 w-full">
                <div className="space-y-4 mb-8">
                  <div className="inline-block rounded-lg px-3 py-1 text-sm bg-green-200 font-bold text-green-900 subpixel-antialiased">Genie Point packages</div>
                  <h2 className="text-3xl font-bold tracking-tighter subpixel-antialiased border-b-2 border-gray-50 pb-4">Available Packages</h2>
                </div>
                <Pricing />
              </div>
            </div>
          </div>
        </section>
      </div >
    </div >
  </>
}
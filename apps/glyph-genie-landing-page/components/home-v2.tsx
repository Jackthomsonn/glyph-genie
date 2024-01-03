import Image from 'next/image';
import Link from "next/link";
import { Button } from './ui/button';
import { LinkIcon, TableIcon } from 'lucide-react';

export function HomeV2() {
  return (
    <div className="flex min-h-screen bg-tras">
      <div className="flex flex-col flex-1">
        <section className="flex flex-1 justify-center items-center bg-gradient-to-r from-indigo-500 to-indigo-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-8">
                <div className="flex justify-evenly items-center gap-6 flex-nowrap animate-images-sliding-right">
                  <Image src={"/m1.jpg"} alt="Mushroom 1" width={96} height={96} className="rounded-xl opacity-20" />
                  <Image src={"/m2.jpg"} alt="Mushroom 1" width={96} height={96} className="rounded-xl opacity-20" />
                  <Image src={"/m3.jpg"} alt="Mushroom 1" width={96} height={96} className="rounded-xl opacity-20" />
                  <Image src={"/m4.jpg"} alt="Mushroom 1" width={96} height={96} className="rounded-xl opacity-20" />
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white subpixel-antialiased">
                  GlyphGenie
                </h1>
                <p className="mx-auto text-white md:text-lg subpixel-antialiased">
                  Unlock Creativity with GlyphGenie: Where Symbols Speak Volumes - Create logos and icons for your business, brand, or projecty quickly and easily.
                </p>
                <Button className="bg-white text-indigo-900 hover:bg-slate-100"><LinkIcon className="mr-2" size={18} /> Get started</Button>
                <div className="flex justify-evenly items-center gap-6 flex-nowrap animate-images-sliding-left">
                  <Image src={"/m1.jpg"} alt="Mushroom 1" width={96} height={96} className="rounded-xl opacity-20" />
                  <Image src={"/m2.jpg"} alt="Mushroom 1" width={96} height={96} className="rounded-xl opacity-20" />
                  <Image src={"/m3.jpg"} alt="Mushroom 1" width={96} height={96} className="rounded-xl opacity-20" />
                  <Image src={"/m4.jpg"} alt="Mushroom 1" width={96} height={96} className="rounded-xl opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div >
  )
}
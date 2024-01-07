"use client";

import { Header } from "@/components/header";
import { Pricing } from "@/components/pricing";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Component() {
  const { push } = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col flex-1">
        <section className="pt-16 pb-16 md:pt-32 md:pb-32 flex justify-center items-center bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-8 flex justify-center flex-col items-center">
                <img alt="Image" src={'/beanie-potato.png'} className="rounded-lg" width={200} />
                <h1 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold subpixel-antialiased">
                  GlyphGenie
                </h1>
                <p className="mx-auto md:w-1/2 text-white font-bold md:text-lg subpixel-antialiased">
                  Unlock Creativity with GlyphGenie: Where Symbols Speak Volumes - Create logos and icons for your business, brand, or projecty quickly and easily.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-center items-center bg-white border-2 border-b-gray-50">
          <div className="container">
            <div className="pt-12 pb-12 md:pt-24 md:pb-24 flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
              <div className="flex flex-1 flex-col">
                <div className="space-y-8 flex-1 text-left">
                  <div className="inline-block grow-0 rounded-lg bg-green-200 text-green-900 font-bold px-3 py-1 text-sm/relaxed">Introduction</div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 subpixel-antialiased">
                    What is GlyphGenie?
                  </h1>
                  <p className="mx-auto text-gray-900 md:text-lg subpixel-antialiased">
                    Your doorway to a world of effortlessly crafted icons and logos! Powered by cutting-edge AI, Glyph Genie is your go-to tool for seamlessly generating stunning visual representations tailored for your business or personal ventures. Whether igniting your brand identity or sparking creativity for personal projects, this innovative platform delivers an array of icons and logos designed to captivate and inspire. Join the enchantment as Glyph Genie weaves magic into the visual essence of your endeavors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex bg-slate-900">
          <div className="container">
            <div className="pt-12 pb-12 md:pt-24 md:pb-24 flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
              <div className="flex flex-1 flex-col">
                <div className="space-y-8 flex-1">
                  <div className="inline-block grow-0 rounded-lg bg-green-200 text-green-900 font-bold px-3 py-1 text-sm/relaxed">Examples</div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white subpixel-antialiased">
                    Examples of what GlyphGenie can do
                  </h1>
                  <p className="mx-auto text-white md:text-lg subpixel-antialiased">
                    GlyphGenie can create a wide variety of icons and logos. Below are some examples of what GlyphGenie can do.
                  </p>

                  <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
                    <Image className="rounded-xl" alt="Image" width={500} height={500} src="/beanie-potato.png" />
                    <Image className="rounded-xl" alt="Image" width={500} height={500} src="/h1.jpg" />
                    <Image className="rounded-xl" alt="Image" width={500} height={500} src="/h2.jpg" />
                    <Image className="rounded-xl" alt="Image" width={500} height={500} src="/h4.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex bg-gray-50">
          <div className="container">
            <div className="pt-12 pb-12 md:pt-24 md:pb-24 flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
              <div className="flex flex-1 flex-col">
                <div className="space-y-8 flex-1">
                  <div className="inline-block grow-0 rounded-lg bg-green-200 text-green-900 font-bold px-3 py-1 text-sm/relaxed">Available packages</div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 subpixel-antialiased">
                    Our packages
                  </h1>
                  <p className="mx-auto text-gray-900 md:text-lg subpixel-antialiased">
                    GlyphGenie offers a variety of packages to suit your needs. Whether you're a first time user or a power user, we have the right package for you. Look below to see our packages.
                  </p>

                  <Pricing />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex bg-white">
          <div className="container">
            <div className="pt-12 pb-12 md:pt-24 md:pb-24 flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
              <div className="flex flex-1 flex-col">
                <div className="space-y-8 flex-1">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 subpixel-antialiased">
                    Ready to get started?
                  </h1>
                  <Button className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-lg text-3xl p-8" onClick={() => push('dashboard')}>Lets go</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="w-full py-6 border-y-2 border-slate-50 flex items-center justify-center">
          <p className="text-xs text-zinc-500 dark:text-zinc-400 subpixel-antialiased text-center">
            © {new Date().getFullYear()} GlyphGenie. All rights reserved. Made with ❤️ by <a href="https://passionfruitsoftware.com" target="__blank" className="text-violet-500 font-bold">PassionFruit Software</a>
          </p>
        </footer>
      </div>
    </div >
  )
}

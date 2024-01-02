import Image from 'next/image';
import Link from "next/link";

export function HomeV2() {
  return (
    <div className="flex min-h-screen md:max-h-screen bg-slate-900">
      <div className="flex flex-col md:flex-row gap-2 m-2 flex-1">
        <section className="flex justify-center items-center py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-indigo-500 to-indigo-900 rounded-xl">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white subpixel-antialiased">
                  GlyphGenie
                </h1>
                <p className="mx-auto max-w-[500px] text-white md:text-xl subpixel-antialiased">
                  Unlock Creativity with GlyphGenie: Where Symbols Speak Volumes
                </p>
                <div className="flex justify-evenly items-center">
                  <Image src={"/m1.jpg"} alt="Mushroom 1" width={48} height={48} className="rounded-xl" />
                  <Image src={"/m2.jpg"} alt="Mushroom 1" width={48} height={48} className="rounded-xl" />
                  <Image src={"/m3.jpg"} alt="Mushroom 1" width={48} height={48} className="rounded-xl" />
                  <Image src={"/m4.jpg"} alt="Mushroom 1" width={48} height={48} className="rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex overflow-scroll flex-1 w-full py-12 transition-all rounded-xl bg-indigo-50 justify-center">
          <div className="px-4 md:px-6">
            <div className="flex flex-row space-y-6">
              <div className="space-y-6 flex flex-col w-full">
                <div className='space-y-6'>
                  <div className={`inline-block rounded-lg px-3 py-1 text-sm bg-green-200 font-bold text-green-900 subpixel-antialiased`}>Introduction</div>
                  <h2 className={`text-3xl font-bold tracking-tighter sm:text-5xl text-indigo-900 subpixel-antialiased`}>What is Glyph Genie</h2>
                  <p className={`max-w-[600px] text-indigo-900 subpixel-antialiased md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed`}>
                    Glyph Genie: An app for crafting personalized icons effortlessly. Whether for personal use or branding, its user-friendly interface allows easy customization. Perfect for unleashing creativity in creating icons for diverse purposes.
                  </p>
                </div>
                <div className="flex">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-indigo-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-indigo-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-950 disabled:pointer-events-none disabled:opacity-50"
                    href="https://www.npmjs.com/package/shell-ai"
                    target="_blank"
                  >
                    Sign up and get started
                  </Link>
                </div>
                <div className='pb-2'>
                  <Image src={"/carrot-with-hat.jpg"} alt="Carrot with a hat" width={500} height={200} className="rounded-xl w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div >
  )
}
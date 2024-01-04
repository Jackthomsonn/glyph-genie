"use client";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BoxIcon, InfoIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Component() {
  const { push } = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col flex-1">
        <section className="pt-24 pb-24 md:pt-48 md:pb-48 flex justify-center items-center bg-slate-900">
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

        <section className="flex justify-center items-center bg-violet-50">
          <div className="container">
            <div className="pt-12 pb-12 md:pt-24 md:pb-24 flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
              <div className="flex flex-1 flex-col">
                <div className="space-y-8 flex-1 text-center">
                  <div className="inline-block grow-0 rounded-lg bg-green-200 text-green-900 font-bold px-3 py-1 text-sm/relaxed">Introduction</div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 subpixel-antialiased">
                    What is GlyphGenie?
                  </h1>
                  <p className="mx-auto text-slate-900 md:text-lg subpixel-antialiased">
                    Your doorway to a world of effortlessly crafted icons and logos! Powered by cutting-edge AI, Glyph Genie is your go-to tool for seamlessly generating stunning visual representations tailored for your business or personal ventures. Whether igniting your brand identity or sparking creativity for personal projects, this innovative platform delivers an array of icons and logos designed to captivate and inspire. Join the enchantment as Glyph Genie weaves magic into the visual essence of your endeavors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex  bg-slate-900">
          <div className="container">
            <div className="pt-12 pb-12 md:pt-24 md:pb-24 flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
              <div className="flex flex-1 flex-col">
                <div className="space-y-8 flex-1">
                  <div className="inline-block grow-0 rounded-lg bg-green-200 text-green-900 font-bold px-3 py-1 text-sm/relaxed">Available packages</div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white subpixel-antialiased">
                    Our packages
                  </h1>
                  <p className="mx-auto text-white md:text-lg subpixel-antialiased">
                    GlyphGenie offers a variety of packages to suit your needs. Whether you're a first time user or a power user, we have the right package for you. Look below to see our packages and choose the one that's right for you.
                  </p>

                  <div className="flex md:space-x-4 space-y-4 md:space-y-0 flex-wrap justify-center items-center">
                    <Card className={cn("w-[380px]", "flex-1 h-full")}>
                      <CardHeader>
                        <CardTitle>10 Credits</CardTitle>
                        <CardDescription>With this package, you get 10 credits for £10</CardDescription>
                      </CardHeader>
                      <CardContent className="grid gap-4">
                        <div className=" flex items-center space-x-4 rounded-md border p-4">
                          <InfoIcon />
                          <div className="flex-1 space-y-1">
                            <p className="text-sm/relaxed font-medium leading-relaxed">
                              A great way to get started with GlyphGenie
                            </p>
                            <p className="text-sm/relaxed text-muted-foreground">
                              Recommended for first time users
                            </p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-violet-800 text-white hover:bg-violet-900" onClick={() => push('/dashboard')}>
                          <BoxIcon className="mr-2 h-4 w-4" /> Get started
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className={cn("w-[380px]", "flex-1 h-full")}>
                      <CardHeader>
                        <CardTitle>50 Credits</CardTitle>
                        <CardDescription>With this package, you get 50 credits for £40</CardDescription>
                      </CardHeader>
                      <CardContent className="grid gap-4">
                        <div className=" flex items-center space-x-4 rounded-md border p-4">
                          <InfoIcon />
                          <div className="flex-1 space-y-1">
                            <p className="text-sm/relaxed font-medium leading-relaxed">
                              For regular users of GlyphGenie
                            </p>
                            <p className="text-sm/relaxed text-muted-foreground">
                              Recommended for regular users
                            </p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-violet-800 text-white hover:bg-violet-900" onClick={() => push('/dashboard')}>
                          <BoxIcon className="mr-2 h-4 w-4" /> Get started
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className={cn("w-[380px]", "flex-1 h-full")}>
                      <CardHeader>
                        <CardTitle>100 Credits</CardTitle>
                        <CardDescription>With this package, you get 100 credits for £80</CardDescription>
                      </CardHeader>
                      <CardContent className="grid gap-4">
                        <div className=" flex items-center space-x-4 rounded-md border p-4">
                          <InfoIcon />
                          <div className="flex-1 space-y-1">
                            <p className="text-sm/relaxed font-medium leading-relaxed">
                              For power users of GlyphGenie
                            </p>
                            <p className="text-sm/relaxed text-muted-foreground">
                              Recommended for power users of GlyphGenie
                            </p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-violet-800 text-white hover:bg-violet-900" onClick={() => push('/dashboard')}>
                          <BoxIcon className="mr-2 h-4 w-4" /> Get started
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500">
            © 2024 GlyphGenie. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6"></nav>
        </footer>
      </div>
    </div >
  )
}

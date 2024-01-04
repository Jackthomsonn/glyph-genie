
export const ErrorBox = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="text-3xl font-bold tracking-tighter text-violet-900 subpixel-antialiased">
        Something went wrong
      </h1>
      <p className="mx-auto max-w-[700px] text-violet-900 text-lg subpixel-antialiased">
        Please try again later
      </p>
    </div>
  )
}
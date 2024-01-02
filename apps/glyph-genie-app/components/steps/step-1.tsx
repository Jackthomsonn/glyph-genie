import { useStep } from "@/context/step"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "../ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { useUser } from "@/context/user"

export const formSchema = z.object({
  prompt: z.string().min(2).max(500),
  iterations: z.number().min(1).max(100),
})

export const StepOne = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      iterations: 1,
    },
  })

  const { setCurrentStep, setStepData } = useStep();
  const { user: genieUser } = useUser();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setCurrentStep(2);
    setStepData(values);
  }

  console.log(genieUser)

  return <>
    <div className="animate-slide-left flex flex-col space-y-4 w-full">
      <div className="space-y-4">
        <div className="inline-block rounded-lg px-3 py-1 text-sm bg-green-200 font-bold text-green-900 subpixel-antialiased">Step One</div>
        <h2 className="text-3xl font-bold tracking-tighter text-indigo-900 subpixel-antialiased border-b-2 border-indigo-20 pb-4">Design Your Custom Icons Here</h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Describe what you would like your icons to look like</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="A happy mushroom" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="iterations"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How many icons would you like to generate? (1 credit per icon)</FormLabel>
                <FormControl>
                  <Input min={1} max={genieUser?.creditAmount} type="number" {...field} onChange={event => field.onChange(+event.target.value)} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-indigo-900 hover:bg-indigo-900 w-full">Generate icons for {form.watch('iterations')} credits</Button>
        </form>
      </Form>
    </div>
  </>
}
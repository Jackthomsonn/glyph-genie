
import { ImageProvider, useImage } from "@/context/image";
import { useStep } from "@/context/step";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { ErrorBox } from "./error";
import { Header } from "./header";

export function Dashboard() {
  const { steps, currentStep, setCurrentStep } = useStep();
  const { setImages } = useImage()

  return (
    <div className="flex min-h-screen md:max-h-screen">
      <div className="flex flex-col md:flex-row gap-2 flex-1">
        <section className="flex flex-1 flex-col transition-all bg-white">
          <Header />
          <div className="flex flex-col md:flex-row h-full">
            <ErrorBoundary errorComponent={() => <ErrorBox />}>
              <ImageProvider>
                {steps.find(step => step.id === currentStep)?.component}
              </ImageProvider>
            </ErrorBoundary>
          </div>
        </section>
      </div>
    </div>
  );
}
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

export type Step = {
  id: number,
  component: React.ReactNode
}

export type StepContextType = {
  steps: Step[],
  currentStep: number,
  setCurrentStep: Dispatch<SetStateAction<number>>
  stepData: any,
  setStepData: Dispatch<SetStateAction<any>>
}

export const StepContext = createContext<StepContextType>({
  steps: [],
  currentStep: 1,
  setCurrentStep: () => { },
  stepData: null,
  setStepData: () => { }
});

type StepProviderProps = {
  children: React.ReactNode,
  steps: Step[]
}

export const StepProvider = ({ children, steps = [] }: StepProviderProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepData, setStepData] = useState({});

  return (
    <StepContext.Provider value={{ currentStep, steps, setCurrentStep, setStepData, stepData }}>
      {children}
    </StepContext.Provider>
  );
}

export const useStep = () => useContext(StepContext);
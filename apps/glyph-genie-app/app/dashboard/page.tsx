"use client";

import { Dashboard } from "@/components/dashboard";
import { StepOne } from "@/components/steps/step-1";
import { StepTwo } from "@/components/steps/step-2";
import { StepThree } from "@/components/steps/step-3";
import { StepProvider } from "@/context/step";

export default function IndexPage() {
  const steps = [{
    id: 1,
    component: <StepOne />
  }, {
    id: 2,
    component: <StepTwo />
  }, {
    id: 3,
    component: <StepThree />
  }];

  return <>
    <StepProvider steps={steps}>
      <Dashboard />
    </StepProvider>
  </>
}
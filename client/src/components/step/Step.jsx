/** @format */

"use client";
import React, { useState } from "react";
import Curency from "./Curency";
import Balance from "./Balance";
import Good from "./Good";
import { useRouter } from "next/navigation";

const steps = [Curency, Balance, Good];

export const Step = () => {
  const { push } = useRouter();
  const [step, setStep] = useState(0);
  const StepComp = steps[step];

  const contineHandler1 = () => {
    if (step === 2) {
      push("/auth/dashboard");
      return;
    }
    setStep((prev) => prev + 1);
  };

  return (
    <div>
      <StepComp jump={contineHandler1} />
    </div>
  );
};

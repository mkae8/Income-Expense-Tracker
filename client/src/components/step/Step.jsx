"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Curency from "./Curency";
import Balance from "./Balance";
import Good from "./Good";
import { useRouter } from "next/navigation";

const steps = [Curency, Balance, Good];

export const Step = () => {
  const { push } = useRouter();
  const [step, setStep] = useState(0);
  const StepComp = steps[step];

  // Валютыг хадгалах функц
  // const saveCurrency = async (currency) => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const response = await axios.post(
  //       "http://localhost:8000/api/user/currency",
  //       { currency },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log("Валют амжилттай хадгалагдлаа:", response.data);
  //   } catch (error) {
  //     console.error("Валют хадгалахад алдаа гарлаа:", error);
  //   }
  // };

  // Төсвийг хадгалах функц
  // const saveBalance = async (balance) => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const response = await axios.post(
  //       "http://localhost:8000/api/user/balance",
  //       { balance },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log("Төсөв амжилттай хадгалагдлаа:", response.data);
  //   } catch (error) {
  //     console.error("Төсөв хадгалахад алдаа гарлаа:", error);
  //   }
  // };

  const continueHandler1 = async (currency, balance) => {
    try {
      if (step === 0) {
        // await saveCurrency(currency); // Валютыг хадгална
        setStep((prev) => prev + 1);
        return;
      }

      if (step === 1) {
        // await saveBalance(balance); // Төсвийг хадгална
        setStep((prev) => prev + 1);
        return;
      }

      if (step === 2) {
        push("/auth/dashboard");
        return;
      }
    } catch (err) {
      console.log("Алдаа:", err.message);
    }
  };

  useEffect(() => {
    const asd = async () => {
      const result = await axios.get("./${url}, /userGETCUP");
    };
  });

  return (
    <div>
      <StepComp jump={continueHandler1} />
    </div>
  );
};

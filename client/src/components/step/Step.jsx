/** @format */

// "use client";

// import axios from "axios";
// import React, { useState } from "react";
// import Curency from "./Curency";
// import Balance from "./Balance";
// import Good from "./Good";
// import { useRouter } from "next/navigation";

// const steps = [Curency, Balance, Good];

// export const Step = () => {
//   const { push } = useRouter();
//   const [step, setStep] = useState(0);
//   const StepComp = steps[step];

//   const saveCurrency = async (currency) => {
//     try {
//       const token = localStorage.get("token");
//       const response = await axios.post(
//         "http://localhost:8000/api/users/",
//         {
//           currency: currency,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log("Currency saved successfully:", response.data);
//     } catch (error) {
//       console.error("Error saving currency:", error);
//     }
//   };

//   const continueHandler1 = (currency) => {
//     if (step === 0) {
//       saveCurrency(currency);
//     }

//     if (step === 2) {
//       push("/");
//       return;
//     }
//     setStep((prev) => prev + 1);
//   };

//   return (
//     <div>
//       <StepComp jump={continueHandler1} />
//     </div>
//   );
// };
"use client";

import axios from "axios";
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

  const saveCurrency = async (currency) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8000/api/user/currency",
        { currency },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Currency saved successfully:", response.data);
    } catch (error) {
      console.error("Error saving currency:", error);
    }
  };

  const continueHandler1 = (currency) => {
    if (step === 0) {
      saveCurrency(currency);
    }

    if (step === 2) {
      push("/");
      return;
    }

    setStep((prev) => prev + 1);
  };

  return (
    <div>
      <StepComp jump={continueHandler1} />
    </div>
  );
};

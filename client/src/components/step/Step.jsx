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
      console.log("Валют амжилттай хадгалагдлаа:", response.data);
    } catch (error) {
      console.error("Валют хадгалахад алдаа гарлаа:", error);
    }
  };

  // Төсвийг хадгалах функц
  const saveBalance = async (balance) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8000/api/user/balance",
        { balance },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Төсөв амжилттай хадгалагдлаа:", response.data);
    } catch (error) {
      console.error("Төсөв хадгалахад алдаа гарлаа:", error);
    }
  };

  // 1. Backend deeree get balance token ym irvel yaahuu baina gsn ug push
  // 2. zereg shalgah 1 udaa tgd chamd ireh ve gevel {curL: "123", bal: "setste(1)"  }

  // Үргэлжлүүлэх функц
  const continueHandler1 = async (currency, balance) => {
    try {
      if (step === 0) {
        await saveCurrency(currency); // Валютыг хадгална
        setStep((prev) => prev + 1);
        return;
      }

      if (step === 1) {
        await saveBalance(balance); // Төсвийг хадгална
        setStep((prev) => prev + 1);
        return;
      }

      if (step === 2) {
        push("/auth/dashboard"); // Дашбоард руу шилжүүлнэ
        return;
      }
      // Дараагийн алхам руу шилжүүлнэ
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
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Function to save currency
//   const saveCurrency = async (currency) => {
//     setLoading(true);
//     setError("");
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post(
//         "http://localhost:8000/api/user/check",
//         { currency },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log("Currency saved successfully:", response.data);
//     } catch (error) {
//       console.error("Error saving currency:", error);
//       setError("Failed to save currency. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Function to save balance
//   const saveBalance = async (balance) => {
//     setLoading(true);
//     setError("");
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post(
//         "http://localhost:8000/api/user/balance",
//         { balance },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log("Balance saved successfully:", response.data);
//     } catch (error) {
//       console.error("Error saving balance:", error);
//       setError("Failed to save balance. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

// Continue handler
//   const continueHandler = async (currency, balance) => {
//     try {
//       if (step === 0) {
//         await saveCurrency(currency); // Save currency
//         setStep((prev) => prev + 1);
//       } else if (step === 1) {
//         await saveBalance(balance); // Save balance
//         setStep((prev) => prev + 1);
//       } else if (step === 2) {
//         push("/auth/dashboard"); // Navigate to dashboard
//       }
//     } catch (err) {
//       console.error("Error:", err.message);
//       setError("An unexpected error occurred. Please try again.");
//     }
//   };

//   return (
//     <div>
//       {error && <p className="error-message">{error}</p>}{" "}
//       {/* Display error message */}
//       <StepComp jump={continueHandler} loading={loading} />{" "}
//       {/* Pass loading state */}
//     </div>
//   );
// };

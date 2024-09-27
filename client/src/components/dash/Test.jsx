"use client";
import axios from "axios";
import { useEffect, useState } from "react";

// Test компонент
export const Test = ({ chartData }) => {
  const [currency, setCurrency] = useState();
  const [balance, setBalance] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios("http://localhost:8000/api/user/income", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setBalance(response.data.balance);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex gap-3 px-32 mx-auto justify-between">
      <div className="relative mt-16">
        <img
          className="flex absolute top-5 left-5 h-[29.86px] w-[80.35px]"
          src="/image copy 8.png"
          alt=""
        />

        <img
          className="w-[384.12px] h-[219.66px] rounded-2xl"
          src="/income .png"
          alt=""
        />
        <div className="flex absolute bottom-14 left-5 text-gray-100">Cash</div>
        <div className="text-white flex absolute left-5 bottom-6 font-semibold text-2xl ">
          {balance}
        </div>
      </div>
      <div className="relative mt-16">
        <img
          className="flex absolute top-5 left-5 h-[29.86px] w-[80.35px]"
          src="/image copy 8.png"
          alt=""
        />

        <img
          className="w-[384.12px] h-[219.66px] rounded-2xl"
          src="/income .png"
          alt=""
        />
        <div className="flex absolute bottom-14 left-5 text-gray-100">Cash</div>
        <div className="text-white flex absolute left-5 bottom-6 font-semibold text-2xl ">
          {balance}
        </div>
      </div>
      <div className="relative mt-16">
        <img
          className="flex absolute top-5 left-5 h-[29.86px] w-[80.35px]"
          src="/image copy 8.png"
          alt=""
        />

        <img
          className="w-[384.12px] h-[219.66px] rounded-2xl"
          src="/income .png"
          alt=""
        />
        <div className="flex absolute bottom-14 left-5 text-gray-100">Cash</div>
        <div className="text-white flex absolute left-5 bottom-6 font-semibold text-2xl ">
          {balance}
        </div>
      </div>
    </div>
  );
};

"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { HeadLogoText } from "../HeadLogoText";

export const Test = () => {
  const [curency, setCurency] = useState();
  const [balance, setBalance] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios("http://localhost:8000/api/user/income", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setCurency(response.data.curency);
        setBalance(response.data.balance);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex w-[1440px] justify-between items-center mx-auto">
      <div className="flex gap-3">
        <div className="relative mt-16">
          <div className="flex absolute top-5 left-5 h-[29.86px] w-[80.35px]">
            <img src="/image copy 8.png" alt="" />
          </div>
          <img
            className="w-[384.12px] h-[219.66px] rounded-2xl"
            src="/income .png"
            alt=""
          />
          <div className=" flex absolute bottom-14 left-5 text-gray-100">
            Cash
          </div>
          <div className="text-white flex absolute left-5 bottom-6 font-semibold text-2xl ">
            {balance}
          </div>
        </div>
        <img
          className="w-[384.12px] h-[219.66px]"
          src="/image copy 6.png"
          alt=""
        />
        <img
          className="w-[384.12px] h-[219.66px]"
          src="/image copy 7.png"
          alt=""
        />
      </div>
      <div>{curency}</div>
    </div>
  );
};

import React, { useState } from "react";
import { HeadLogoText } from "../HeadLogoText";
import { Desc } from "./Desc";
import { Button } from "../Button";
import { Inputt } from "../Inputt";
import axios from "axios";
import { useUser } from "@/provider/UserProvider";

const Balance = ({ jump }) => {
  const { token } = useUser();
  const [select, setSelect] = useState("");
  console.log(select);

  const [error, setError] = useState(null);

  const continueHandler = async () => {
    try {
      await axios.post(
        "http://localhost:8000/api/user/balance",
        {
          balance: select,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      jump(select);
    } catch (error) {
      console.error(error.response?.data || error.message);
      setError("Failed to update balance. Please check your input.");
    }
  };
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex mt-10">
        <HeadLogoText />
      </div>
      <div className="flex mt-16">
        <ul className="steps w-[350px]">
          <li className="step step-primary">Currency</li>
          <li className="step step-primary">Balance</li>
          <li className="step">Finish</li>
        </ul>
      </div>
      <div className="flex flex-col mt-[57px] justify-center w-[384px] h-[308px]">
        <Desc img={"/image copy 2.png"} text={"Set up your cash Balance"} />
        <div className="flex py-4">
          <Inputt
            type={"text"}
            placeholder={"Balance"}
            name="balance"
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          />
        </div>
        {error && <div className="text-red-500 text-xs">{error}</div>}{" "}
        <div className="text-[#475569] font-normal text-xs flex pt-4">
          How much cash do you have in your wallet?
        </div>
        <div className="flex pt-6">
          <Button clickHandler={continueHandler} text={"Confirm"} />
        </div>
      </div>
    </div>
  );
};

export default Balance;

import React from "react";
import { HeadLogoText } from "../HeadLogoText";
import { Desc } from "./Desc";

import { Button } from "../Button";
import { Inputt } from "../Inputt";

const Balance = ({ jump }) => {
  const contineHandler = () => {
    jump();
  };
  return (
    <div className="flex flex-col  items-center h-screen">
      <div className="flex mt-10">
        <HeadLogoText />
      </div>
      <div className="flex mt-16">
        <ul className="steps w-[350px]">
          <li className="step step-primary">Curency</li>
          <li className="step step-primary">Balance</li>
          <li className="step">Finish</li>
        </ul>
      </div>
      <div className="flex flex-col mt-[57px] justify-center w-[384px] h-[308px] ">
        <Desc img={"/image copy 2.png"} text={"Set up your cash Balance"} />
        <div className="flex py-4">
          <Inputt type={"text"} placeholder={"Email"} name="balance" />
        </div>
        <div className="text-[#475569] font-normal text-xs flex pt-4">
          How much cash do you have in your wallet?
        </div>
        <div className="flex pt-6">
          <Button clickHandler={contineHandler} text={"Confirm"} />
        </div>
      </div>
    </div>
  );
};

export default Balance;

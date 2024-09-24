import React from "react";
import { HeadLogoText } from "../HeadLogoText";
import { Desc } from "./Desc";
import { Button } from "../Button";

const Good = ({ jump }) => {
  return (
    <div className="flex flex-col  items-center h-screen">
      <div className="flex mt-10">
        <HeadLogoText />
      </div>
      <div className="flex mt-16">
        <ul className="steps w-[350px]">
          <li className="step step-primary">Curency</li>
          <li className="step step-primary">Balance</li>
          <li className="step step-primary">Finish</li>
        </ul>
      </div>
      <div className="flex flex-col mt-[57px] justify-center w-[384px] h-[308px] ">
        <Desc img={"/image copy 3.png"} text={"Good Job!"} />

        <div className="text-[#475569] font-normal text-xs flex pt-4">
          Your very first account has been created. Now continue to dashboard
          and start tracking
        </div>
        <div className="flex pt-6">
          <Button clickHandler={jump} text={"Go to Dashboard"} />
        </div>
      </div>
    </div>
  );
};

export default Good;

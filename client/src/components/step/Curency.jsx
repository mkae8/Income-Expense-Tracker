import React from "react";
import { HeadLogoText } from "../HeadLogoText";
import { Desc } from "./Desc";
import { Select } from "./Select";
import { Button } from "../Button";

const Curency = ({ jump }) => {
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
          <li className="step">Balance</li>
          <li className="step">Finish</li>
        </ul>
      </div>
      <div className="flex flex-col mt-[57px] justify-center w-[384px] h-[308px] ">
        <Desc img={"/image copy.png"} text={"Select base currency"} />
        <Select
          text={
            "Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one "
          }
        />
        <div className="flex pt-6">
          <Button clickHandler={contineHandler} text={"Confirm"} />
        </div>
      </div>
    </div>
  );
};

export default Curency;

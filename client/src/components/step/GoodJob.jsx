import React from "react";
import { HeadLogoText } from "../HeadLogoText";
import { Step } from "./Step";
import { GoodJobCurency } from "./GoodJobCurency";
import { Select } from "./Select";
import { Button } from "../Button";

export const GoodJob = () => {
  const steps = ["Curency", "Balance", "Finish"];

  return (
    <div className="w-screen h-screen flex flex-col  mt-8">
      <HeadLogoText />
      <div className=" flex flex-col justify-center items-center mt-11 ">
        <div className="flex flex-col justify-center items-center">
          <Step />
          <GoodJobCurency />
          <Select />
          <Button text={"Confirm"} />
        </div>
      </div>
    </div>
  );
};

"use client";
import React from "react";
import { Button } from "../Button";
import { Inputt } from "../Inputt";
import Checkbox from "./Checkbox";
import Recordmodal from "../Recordmodal";

const AddItem = () => {
  return (
    <div>
      <div>Recordc</div>
      <div>
        <Recordmodal
          text={"+ Record"}
          bg={"bg-blue-500"}
          tcolor={"text-white"}
          rounded={"rounded-2xl"}
          width={"w-[100px]"}
          height={"h-[20px]"}
          hover={"hover:bg-blue-600"}
        />
      </div>
      <Inputt
        placeholder="Search"
        className="flex items-center border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Checkbox />
    </div>
  );
};

export default AddItem;

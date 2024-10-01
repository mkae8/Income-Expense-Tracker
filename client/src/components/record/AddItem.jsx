import React from "react";
import { Button } from "../Button";
import { Inputt } from "../Inputt";
import Checkbox from "./Checkbox";

const AddItem = () => {
  return (
    <div>
      <div>Recordc</div>
      <Button text={"+ Add"} type="submit" />
      <Inputt
        placeholder="Search"
        className="flex items-center border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Checkbox />
    </div>
  );
};

export default AddItem;

import React from "react";

const Checkbox = () => {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 items-center">
          <input type="checkbox" className=" flex rounded-full w-4 h-4" /> All
        </div>
        <div className="flex gap-5 items-center">
          <input type="checkbox" className=" flex rounded-full w-4 h-4" />{" "}
          Income
        </div>
        <div className="flex gap-5 items-center">
          <input type="checkbox" className=" flex rounded-full w-4 h-4" />{" "}
          Expence
        </div>
      </div>
    </div>
  );
};

export default Checkbox;

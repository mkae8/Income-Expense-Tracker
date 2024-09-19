import React from "react";

export const Select = () => {
  return (
    <div>
      <select className="bg-gray-100 w-[350px] h-[50px] text-sm pl-6 mt-[30px] rounded-md border-gray-200 border-[1px] font-bold">
        <option>MNT - Mongolian Tugrug</option>
        <option>MNT</option>
      </select>
      <div className="text-[#475569] font-normal text-xs">
        Your base currency should be the one you use most often. All <br />
        transaction in other currencies will be calculated based on this one
      </div>
    </div>
  );
};

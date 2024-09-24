// "use client";
import React, { useState } from "react";

export const Select = ({ text, setSelect }) => {
  return (
    <div className="flex flex-col gap-5">
      <select
        onChange={(event) => setSelect(event.target.value)}
        className="bg-gray-100 w-[384px] h-[50px] text-sm pl-6 mt-[30px] rounded-md border-gray-200 border-[1px] font-bold"
      >
        <option>MNT - Mongolian Tugrik</option>
        <option>USD - US DOLLAR</option>
      </select>
      <div className="text-[#475569] font-normal text-xs">{text}</div>
    </div>
  );
};

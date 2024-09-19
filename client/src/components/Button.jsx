/** @format */

import React from "react";

export const Button = ({ text, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className="w-[384px] h-12 bg-[#0166FF] rounded-lg "
    >
      <div className="text-white flex justify-center">{text}</div>
    </button>
  );
};

import React from "react";

export const Desc = ({ img, text }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-14 gap-2">
      <img className="w-12 h-12" src={img} alt="" />
      <div className="font-semibold text-2xl">{text}</div>
    </div>
  );
};

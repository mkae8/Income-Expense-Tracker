/** @format */

import React from "react";

export const HeadText = ({ headtext, desc }) => {
  return (
    <div className="felx flex-col items-center justify-center ">
      <div className="text-2xl font-semibold flex items-center">{headtext}</div>
      <div className="">{desc}</div>
    </div>
  );
};

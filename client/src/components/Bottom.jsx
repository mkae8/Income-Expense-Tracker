/** @format */
import React from "react";

export const Bottom = ({ text, login }) => {
  return (
    <div className="flex gap-2">
      {text}
      <div className="text-blue-500">{login}</div>
    </div>
  );
};

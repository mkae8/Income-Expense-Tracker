/** @format */

import React from "react";

export const Inputt = ({ type, placeholder, name, value, onChange }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-[384px] h-12 bg-gray-100 rounded-lg p-4 border-[1px] border-gray-300"
      />
    </div>
  );
};

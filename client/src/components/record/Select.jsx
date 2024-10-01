import React from "react";

const Select = () => {
  return (
    <div>
      <div className="flex items-center">
        <img src="/image copy 9.png" alt="" className="h-4 w-5 " />
        <select className="select w-full max-w-xs">
          <option disabled selected>
            Food & Drinks
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </div>
      <div className="flex items-center">
        <img src="/image copy 9.png" alt="" className="h-4 w-5 " />
        <select className="select w-full max-w-xs">
          <option disabled selected>
            Shopping
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </div>
      <div className="flex items-center">
        <img src="/image copy 9.png" alt="" className="h-4 w-5 " />
        <select className="select w-full max-w-xs">
          <option disabled selected>
            Housing
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </div>
    </div>
  );
};

export default Select;

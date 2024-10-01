import React from "react";

const Range = () => {
  return (
    <div>
      <button>0</button>
      <button>1000</button>
      <div className="flex w-50 h-10">
        <input
          type="range"
          min={0}
          max="100"
          value="40"
          className="range range-xs"
        />
      </div>
    </div>
  );
};

export default Range;

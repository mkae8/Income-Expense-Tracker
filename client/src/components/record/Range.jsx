import React from "react";

const Range = () => {
  return (
    <div className="w-[237px] h-10">
      <input type="range" min={0} max="100" value="40" className="range" />
    </div>
  );
};

export default Range;

import React from "react";

export const Pagination = () => {
  return (
    <div>
      <div className="join">
        <input
          className="join-item btn btn-square w-[172px] h-10 "
          type="radio"
          name="options"
          aria-label="Expense"
          defaultChecked
        />
        <input
          className="join-item btn btn-square w-[172px] h-10"
          type="radio"
          name="options"
          aria-label="income"
        />
      </div>
    </div>
  );
};

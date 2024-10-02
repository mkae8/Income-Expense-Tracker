import React, { useState } from "react";
import ExpenseForm from "./Expenseform";
import IncomeForm from "./Incomeform";

const Recordmodal = ({ bg, tcolor, text, rounded, width, heigt, hover }) => {
  const [currentComponent, setCurrentComponent] = useState("Expense");

  const handleNavigation = (component) => {
    setCurrentComponent(component);
  };
  return (
    <div>
      <button
        className={`btn ${bg} ${tcolor} ${text} ${rounded} ${width} ${hover} ${heigt} `}
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Record
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="flex flex-col h-[552px] rounded-md bg-white w-[792px]">
          <div className="flex border-b-2 border-b-gray-300 justify-between">
            <div className="m-4 font-bold text-xl">Add Record</div>
            <form method="dialog">
              <button className="m-4">X</button>
            </form>
          </div>
          <div className="flex gap-12">
            <div>
              <div className="m-4 bg-gray-200 w-fit rounded-2xl flex">
                <button
                  onClick={() => handleNavigation("Expense")}
                  className={`${
                    currentComponent === "Expense"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-black"
                  } px-[50px] py-2 rounded-2xl`}
                >
                  Expense
                </button>
                <button
                  onClick={() => handleNavigation("Income")}
                  className={`${
                    currentComponent === "Income"
                      ? "bg-green-600 hover:bg-green-600 text-white"
                      : "bg-gray-200 text-black"
                  } px-[52px] py-2 rounded-2xl`}
                >
                  Income
                </button>
              </div>
              {currentComponent === "Expense" ? (
                <ExpenseForm />
              ) : (
                <IncomeForm />
              )}
            </div>
            <div>
              <div className="m-4 flex flex-col gap-2">
                <div>Payer</div>
                <input
                  placeholder="Write here"
                  className="bg-gray-100 p-2 border-[1px] w-[320px] border-gray-300 rounded-md"
                />
              </div>
              <div className="m-4 flex flex-col gap-2">
                <div>Note</div>
                <textarea
                  name=""
                  placeholder="Write here"
                  className="bg-gray-100 p-2 border-[1px]
                w-[320px] h-[330px] border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Recordmodal;

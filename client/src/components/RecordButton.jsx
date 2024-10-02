import React from "react";
import { Pagination } from "./Pagination";
import { Record } from "./record/Record";

export const RecordButton = () => {
  return (
    <div>
      <button
        onClick={() => document.getElementById("my_modal_3").showModal()}
        className="rounded-2xl text-white bg-[#0166FF] w-[99px] h-[32px]"
      >
        + Record
      </button>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-[792px] h-[512px]">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add Record</h3>
          <Pagination />
          <input
            type="Amount"
            placeholder="₮ 000.00"
            className="input input-bordered w-full max-w-xs"
          />
          <select className="select w-full max-w-xs">
            <option disabled selected>
              Choose
            </option>
            <option>Homer</option>
            <option>Marge</option>
          </select>
        </div>
      </dialog>
    </div>
  );
};

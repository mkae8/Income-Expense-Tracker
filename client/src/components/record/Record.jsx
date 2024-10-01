import React from "react";
import Header from "../dash/Header";
import AddItem from "./AddItem";
import Category from "./Category";
import Select from "./Select";
import Range from "./Range";

export const Record = () => {
  return (
    <div>
      <Header />
      <AddItem />
      <Category />
      <Select />
      <div>+ Add Category</div>
      <Range />
    </div>
  );
};
